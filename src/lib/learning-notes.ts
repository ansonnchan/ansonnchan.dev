import "server-only";

import matter from "gray-matter";
import { get } from "node:https";

export type LearningSource = {
  id: "ai-engineering";
  title: string;
  description: string;
  owner: string;
  repository: string;
  branch: string;
  repositoryUrl: string;
  categories: readonly string[];
};

export type LearningNote = {
  title: string;
  description: string;
  category: string;
  tags: string[];
  updated: string;
  slug: string;
  content: string;
  sourcePath: string;
  githubUrl: string;
  rawUrl: string;
  source: LearningSource;
};

type GitHubTreeItem = {
  path: string;
  type: "blob" | "tree";
};

type GitHubTreeResponse = {
  tree?: GitHubTreeItem[];
  truncated?: boolean;
  message?: string;
};

export const aiEngineeringSource: LearningSource = {
  id: "ai-engineering",
  title: "AI Engineering",
  description:
    "LLM foundations, prompting, retrieval, agents, and production AI application engineering.",
  owner: "ansonnchan",
  repository: "ai-engineering",
  branch: "main",
  repositoryUrl: "https://github.com/ansonnchan/ai-engineering",
  categories: [
    "llm-foundations",
    "prompt-engineering",
    "models-and-ai-apis",
    "context-and-retrieval",
    "agents",
    "ai-application-engineering",
    "github-ai-engineering",
    "advanced-topics"
  ]
};

const categoryLabels: Record<string, string> = {
  "advanced-topics": "Advanced Topics",
  agents: "Agents",
  "ai-application-engineering": "AI Application Engineering",
  "context-and-retrieval": "Context & Retrieval",
  "github-ai-engineering": "GitHub AI Engineering",
  "llm-foundations": "LLM Foundations",
  "models-and-ai-apis": "Models & AI APIs",
  "prompt-engineering": "Prompt Engineering"
};

const slugPattern = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const datePattern = /^\d{4}-\d{2}-\d{2}$/;

let notesPromise: Promise<LearningNote[]> | undefined;

export function getCategoryLabel(category: string) {
  return (
    categoryLabels[category] ??
    category
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")
  );
}

export function formatNoteDate(date: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC"
  }).format(new Date(`${date}T00:00:00Z`));
}

export function getAiEngineeringNotes() {
  notesPromise ??= loadNotes(aiEngineeringSource);
  return notesPromise;
}

export async function getAiEngineeringNote(slug: string) {
  const notes = await getAiEngineeringNotes();
  return notes.find((note) => note.slug === slug);
}

async function loadNotes(source: LearningSource) {
  const treeUrl = `https://api.github.com/repos/${source.owner}/${source.repository}/git/trees/${source.branch}?recursive=1`;
  const treeResponse = await requestText(treeUrl, true);
  const tree = JSON.parse(treeResponse) as GitHubTreeResponse;

  if (!Array.isArray(tree.tree)) {
    throw new Error(
      `Could not read ${source.owner}/${source.repository}: ${tree.message ?? "invalid GitHub tree response"}`
    );
  }

  if (tree.truncated) {
    throw new Error(
      `${source.owner}/${source.repository} contains too many files for recursive note discovery.`
    );
  }

  const markdownPaths = tree.tree
    .filter(
      (item) =>
        item.type === "blob" && item.path.startsWith("notes/") && item.path.endsWith(".md")
    )
    .map((item) => item.path)
    .sort();

  const parsedNotes = await Promise.all(
    markdownPaths.map(async (sourcePath) => {
      const rawUrl = createRawUrl(source, sourcePath);
      const markdown = await requestText(rawUrl, false);
      return parseNote(source, sourcePath, rawUrl, markdown);
    })
  );

  const publishedNotes = parsedNotes.filter(
    (note): note is LearningNote => note !== null
  );
  const slugs = new Set<string>();

  for (const note of publishedNotes) {
    if (slugs.has(note.slug)) {
      throw new Error(
        `Duplicate published note slug "${note.slug}" in ${source.owner}/${source.repository}. Filenames must be unique across the repository.`
      );
    }
    slugs.add(note.slug);
  }

  return publishedNotes.sort(
    (left, right) =>
      right.updated.localeCompare(left.updated) || left.title.localeCompare(right.title)
  );
}

function parseNote(
  source: LearningSource,
  sourcePath: string,
  rawUrl: string,
  markdown: string
): LearningNote | null {
  const parsed = matter(markdown);
  const expectedCategory = sourcePath.split("/")[1];
  const filename = sourcePath.split("/").at(-1) ?? "";
  const slug = filename.replace(/\.md$/, "");
  const title = requiredString(parsed.data.title, "title", sourcePath);
  const description = requiredString(parsed.data.description, "description", sourcePath);
  const category = requiredString(parsed.data.category, "category", sourcePath);
  const status = requiredString(parsed.data.status, "status", sourcePath);
  const updated = requiredString(parsed.data.updated, "updated", sourcePath);
  const tags = requiredTags(parsed.data.tags, sourcePath);

  if (!slugPattern.test(slug)) {
    throw new Error(`${sourcePath}: filename must use lowercase kebab-case.`);
  }

  if (category !== expectedCategory) {
    throw new Error(
      `${sourcePath}: category must be "${expectedCategory}" to match its containing folder.`
    );
  }

  if (!source.categories.includes(category)) {
    throw new Error(`${sourcePath}: unknown category "${category}".`);
  }

  if (status !== "draft" && status !== "published") {
    throw new Error(`${sourcePath}: status must be either "draft" or "published".`);
  }

  if (!datePattern.test(updated) || Number.isNaN(Date.parse(`${updated}T00:00:00Z`))) {
    throw new Error(`${sourcePath}: updated must be a valid date in YYYY-MM-DD format.`);
  }

  if (status === "draft") {
    return null;
  }

  return {
    title,
    description,
    category,
    tags,
    updated,
    slug,
    content: stripLeadingTitle(parsed.content),
    sourcePath,
    githubUrl: createGitHubFileUrl(source, sourcePath),
    rawUrl,
    source
  };
}

function requiredString(value: unknown, field: string, sourcePath: string) {
  if (typeof value !== "string" || value.trim().length === 0) {
    throw new Error(`${sourcePath}: missing required frontmatter field "${field}".`);
  }
  return value.trim();
}

function requiredTags(value: unknown, sourcePath: string) {
  if (!Array.isArray(value) || !value.every((tag) => typeof tag === "string")) {
    throw new Error(`${sourcePath}: tags must be a YAML list of lowercase kebab-case values.`);
  }

  const tags = value.map((tag) => tag.trim());
  const invalidTag = tags.find((tag) => !slugPattern.test(tag));

  if (invalidTag) {
    throw new Error(`${sourcePath}: invalid tag "${invalidTag}"; use lowercase kebab-case.`);
  }

  return tags;
}

function stripLeadingTitle(content: string) {
  return content.replace(/^\s*#\s+[^\n]+(?:\r?\n|$)+/, "").trim();
}

function encodeRepositoryPath(path: string) {
  return path
    .split("/")
    .map((segment) => encodeURIComponent(segment))
    .join("/");
}

function createRawUrl(source: LearningSource, path: string) {
  return `https://raw.githubusercontent.com/${source.owner}/${source.repository}/${source.branch}/${encodeRepositoryPath(path)}`;
}

function createGitHubFileUrl(source: LearningSource, path: string) {
  return `${source.repositoryUrl}/blob/${source.branch}/${encodeRepositoryPath(path)}`;
}

function requestText(url: string, githubApiRequest: boolean, redirects = 0): Promise<string> {
  return new Promise((resolve, reject) => {
    const headers: Record<string, string> = {
      Accept: githubApiRequest
        ? "application/vnd.github+json"
        : "text/plain, text/markdown;q=0.9, */*;q=0.1",
      "User-Agent": "ansonnchan-portfolio-notes"
    };
    const token = process.env.GITHUB_TOKEN?.trim();

    if (githubApiRequest) {
      headers["X-GitHub-Api-Version"] = "2022-11-28";
      if (token) {
        headers.Authorization = `Bearer ${token}`;
      }
    }

    const request = get(url, { headers }, (response) => {
      const status = response.statusCode ?? 0;
      const location = response.headers.location;

      if (status >= 300 && status < 400 && location) {
        response.resume();
        if (redirects >= 3) {
          reject(new Error(`Too many redirects while loading ${url}.`));
          return;
        }
        resolve(requestText(new URL(location, url).toString(), githubApiRequest, redirects + 1));
        return;
      }

      let body = "";
      response.setEncoding("utf8");
      response.on("data", (chunk: string) => {
        body += chunk;
      });
      response.on("end", () => {
        if (status < 200 || status >= 300) {
          reject(new Error(`GitHub returned ${status} while loading ${url}.`));
          return;
        }
        resolve(body);
      });
    });

    request.setTimeout(20_000, () => {
      request.destroy(new Error(`Timed out while loading ${url}.`));
    });
    request.on("error", reject);
  });
}
