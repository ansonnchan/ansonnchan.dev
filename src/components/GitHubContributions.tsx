import GitHubContributionExplorer from "@/components/GitHubContributionExplorer";
import { getContributionData } from "@/lib/githubContributions";

export default async function GitHubContributions() {
  const contributionData = await getContributionData();

  if (!contributionData) return null;

  return <GitHubContributionExplorer data={contributionData} />;
}
