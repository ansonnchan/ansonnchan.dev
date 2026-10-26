import GitHubContributionExplorer from "@/components/GitHubContributionExplorer";
import { getContributionData } from "@/lib/githubContributions";

export default async function GitHubContributions() {
  const contributionData = await getContributionData();

  return (
    <section className="v2-section v2-contributions-section" aria-labelledby="contributions-heading">
      <div className="v2-section-heading">
        <h2 id="contributions-heading">GitHub Activity</h2>
        <img alt="" aria-hidden="true" src="/assets/icons/github-mark.svg" />
      </div>

      {contributionData ? (
        <GitHubContributionExplorer data={contributionData} />
      ) : (
        <div className="v2-contribution-card v2-card">
          <h3>Contributions</h3>
          <p className="v2-contribution-fallback">Contribution activity is temporarily unavailable.</p>
        </div>
      )}
    </section>
  );
}
