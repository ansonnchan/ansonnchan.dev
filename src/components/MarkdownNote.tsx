import ReactMarkdown, { defaultUrlTransform } from "react-markdown";
import remarkGfm from "remark-gfm";
import type { LearningNote } from "@/lib/learning-notes";

type MarkdownNoteProps = {
  note: LearningNote;
};

function resolveMarkdownUrl(note: LearningNote, url: string, key: string) {
  if (url.startsWith("#")) {
    return url;
  }

  if (/^[a-z][a-z\d+.-]*:/i.test(url) || url.startsWith("//")) {
    return defaultUrlTransform(url);
  }

  try {
    const baseUrl = key === "src" ? note.rawUrl : note.githubUrl;
    return defaultUrlTransform(new URL(url, baseUrl).toString());
  } catch {
    return "";
  }
}

export default function MarkdownNote({ note }: MarkdownNoteProps) {
  return (
    <div className="markdown-note">
      <ReactMarkdown
        components={{
          a({ node: _node, href, children, ...props }) {
            const isAnchor = href?.startsWith("#");
            return (
              <a
                {...props}
                href={href}
                rel={isAnchor ? undefined : "noreferrer"}
                target={isAnchor ? undefined : "_blank"}
              >
                {children}
              </a>
            );
          },
          img({ node: _node, alt, ...props }) {
            return <img {...props} alt={alt ?? ""} loading="lazy" />;
          },
          table({ node: _node, children, ...props }) {
            return (
              <div className="markdown-table-wrap">
                <table {...props}>{children}</table>
              </div>
            );
          }
        }}
        remarkPlugins={[remarkGfm]}
        skipHtml
        urlTransform={(url, key) => resolveMarkdownUrl(note, url, key)}
      >
        {note.content}
      </ReactMarkdown>
    </div>
  );
}
