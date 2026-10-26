"use client";

import { useRef, useState, type FocusEvent, type PointerEvent } from "react";
import type { ContributionData, ContributionDay } from "@/lib/githubContributions";

type ContributionTooltip = {
  day: ContributionDay;
  left: number;
  top: number;
};

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en-US", {
    day: "numeric",
    month: "short",
    timeZone: "UTC",
    year: "numeric"
  }).format(new Date(`${date}T00:00:00Z`));
}

function formatContributionLabel(day: ContributionDay) {
  if (day.count === 0) return `No contributions on ${formatDate(day.date)}`;
  return `${day.count} contribution${day.count === 1 ? "" : "s"} on ${formatDate(day.date)}`;
}

export default function GitHubContributionExplorer({ data }: { data: ContributionData }) {
  const chartRef = useRef<HTMLDivElement>(null);
  const [tooltip, setTooltip] = useState<ContributionTooltip | null>(null);

  function showTooltip(day: ContributionDay, target: HTMLButtonElement) {
    const chart = chartRef.current;
    if (!chart) return;

    const chartBounds = chart.getBoundingClientRect();
    const dayBounds = target.getBoundingClientRect();
    const centeredLeft = dayBounds.left - chartBounds.left + dayBounds.width / 2;

    setTooltip({
      day,
      left: Math.min(Math.max(centeredLeft, 5.25 * 16), chartBounds.width - 5.25 * 16),
      top: dayBounds.top - chartBounds.top - 0.35 * 16
    });
  }

  function handlePointerEnter(event: PointerEvent<HTMLButtonElement>, day: ContributionDay) {
    showTooltip(day, event.currentTarget);
  }

  function handleFocus(event: FocusEvent<HTMLButtonElement>, day: ContributionDay) {
    showTooltip(day, event.currentTarget);
  }

  return (
    <div className="v2-contribution-card v2-card">
      <div className="v2-contribution-summary">
        <h3>Contributions</h3>
        <p>{data.total.toLocaleString("en-US")} contributions in the last 12 months</p>
      </div>

      <div className="v2-contribution-chart" ref={chartRef}>
        <div
          aria-label="GitHub contribution calendar for the last 12 months"
          className="v2-contribution-scroll"
          role="region"
          tabIndex={0}
        >
          <div className="v2-contribution-grid">
            {data.days.map((day) => (
              <button
                aria-label={formatContributionLabel(day)}
                className="v2-contribution-day"
                data-level={day.level}
                key={day.date}
                onBlur={() => setTooltip(null)}
                onFocus={(event) => handleFocus(event, day)}
                onPointerEnter={(event) => handlePointerEnter(event, day)}
                onPointerLeave={() => setTooltip(null)}
                type="button"
              />
            ))}
          </div>
        </div>

        {tooltip ? (
          <div
            className="v2-contribution-tooltip"
            role="tooltip"
            style={{ left: tooltip.left, top: tooltip.top }}
          >
            {formatContributionLabel(tooltip.day)}
          </div>
        ) : null}

        <div className="v2-contribution-chart-footer">
          <div className="v2-contribution-legend" aria-label="Contribution intensity from less to more">
            <span>Less</span>
            {[0, 1, 2, 3, 4].map((level) => (
              <i className="v2-contribution-day" data-level={level} key={level} />
            ))}
            <span>More</span>
          </div>
        </div>
      </div>
    </div>
  );
}
