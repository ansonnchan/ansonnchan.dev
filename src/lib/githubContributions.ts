const GITHUB_USERNAME = "ansonnchan";
const GITHUB_CONTRIBUTIONS_URL = `https://github.com/users/${GITHUB_USERNAME}/contributions`;

export type ContributionDay = {
  count: number;
  date: string;
  level: number;
};

export type ContributionData = {
  days: ContributionDay[];
  total: number;
};

function parseContributionData(html: string): ContributionData {
  const days: ContributionDay[] = [];
  const cellPattern = /<td\b([^>]*\bdata-date="(\d{4}-\d{2}-\d{2})"[^>]*)><\/td>\s*<tool-tip\b[^>]*>([\s\S]*?)<\/tool-tip>/gi;

  for (const match of html.matchAll(cellPattern)) {
    const [, attributes, date, tooltip] = match;
    const level = Number(attributes.match(/\bdata-level="([0-4])"/)?.[1] ?? 0);
    const count = Number(tooltip.match(/([\d,]+) contributions?/)?.[1].replaceAll(",", "") ?? 0);

    days.push({ count, date, level });
  }

  if (days.length < 350) {
    throw new Error("GitHub returned an incomplete contribution calendar.");
  }

  days.sort((a, b) => a.date.localeCompare(b.date));

  const reportedTotal = html
    .match(/id="js-contribution-activity-description"[^>]*>\s*([\d,]+)\s+contributions/i)?.[1]
    .replaceAll(",", "");

  return {
    days,
    total: reportedTotal ? Number(reportedTotal) : days.reduce((sum, day) => sum + day.count, 0)
  };
}

export async function getContributionData(): Promise<ContributionData | null> {
  try {
    const response = await fetch(GITHUB_CONTRIBUTIONS_URL, {
      headers: {
        Accept: "text/html",
        "User-Agent": "ansonnchan.dev"
      },
      next: { revalidate: 21_600 }
    });

    if (!response.ok) {
      throw new Error(`GitHub contribution request failed with ${response.status}.`);
    }

    return parseContributionData(await response.text());
  } catch (error) {
    console.error("Unable to load GitHub contributions", error);
    return null;
  }
}
