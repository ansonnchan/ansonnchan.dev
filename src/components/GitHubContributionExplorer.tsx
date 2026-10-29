"use client";

import { useEffect, useMemo, useState, type CSSProperties } from "react";
import type { ContributionData } from "@/lib/githubContributions";

const rows = 7;
const transitionStep = 120;
const transitionFrames = 42;
const heartPattern = [
  ".334...433.",
  "34443.34443",
  "34444444443",
  ".344444443.",
  "..3444443..",
  "...34443...",
  "....343...."
];

type DisplayMode = "activity" | "converging" | "heart";

function getHeartLevels(dayCount: number) {
  const columns = Math.ceil(dayCount / rows);
  const startColumn = Math.floor(columns / 2) - Math.floor(heartPattern[0].length / 2);
  const startRow = Math.floor((rows - heartPattern.length) / 2);
  const drawing = new Map<string, number>();

  heartPattern.forEach((patternRow, row) => {
    [...patternRow].forEach((level, offset) => {
      if (level !== ".") drawing.set(`${startColumn + offset},${startRow + row}`, Number(level));
    });
  });

  return Array.from({ length: dayCount }, (_, index) => {
    const row = index % rows;
    const column = Math.floor(index / rows);
    return drawing.get(`${column},${row}`) ?? 0;
  });
}

function seededNoise(index: number, frame: number, salt: number) {
  let value = Math.imul(index + 1, 0x45d9f3b)
    ^ Math.imul(frame + 1, 0x27d4eb2d)
    ^ salt;
  value = Math.imul(value ^ (value >>> 16), 0x45d9f3b);
  value ^= value >>> 16;
  return (value >>> 0) / 4_294_967_295;
}

function clamp(value: number, minimum: number, maximum: number) {
  return Math.min(maximum, Math.max(minimum, value));
}

function getConvergingLevels(
  activityLevels: number[],
  heartLevels: number[],
  columns: number,
  frame: number
) {
  const progress = frame / transitionFrames;
  if (progress >= 1) return heartLevels;

  const center = Math.floor(columns / 2);
  const halfHeartWidth = Math.floor(heartPattern[0].length / 2);
  const firstHeartColumn = center - halfHeartWidth;
  const lastHeartColumn = center + halfHeartWidth;
  const leftFront = progress * center;
  const rightFront = columns - 1 - progress * (columns - 1 - center);
  const cleanup = progress < 0.82 ? 1 : clamp((1 - progress) / 0.18, 0, 1);

  return activityLevels.map((activityLevel, index) => {
    const column = Math.floor(index / rows);
    const row = index % rows;
    const heartLevel = heartLevels[index];
    const belongsToLeft = column <= center;
    const heartDistance = belongsToLeft
      ? column - firstHeartColumn
      : lastHeartColumn - column;
    const heartArrival = heartLevel > 0
      ? 0.72 + clamp(heartDistance / halfHeartWidth, 0, 1) * 0.23
        + (seededNoise(index, 0, 0x51f15e) - 0.5) * 0.035
      : 1;

    if (heartLevel > 0 && progress >= heartArrival) return heartLevel;

    const originalVisibility = clamp(1 - progress * 7.5, 0, 1);
    if (activityLevel > 0 && seededNoise(index, frame, 0xa11ce) < originalVisibility) {
      return activityLevel;
    }

    const front = belongsToLeft ? leftFront : rightFront;
    const trailDistance = belongsToLeft ? front - column : column - front;
    const isOnCorrectHalf = belongsToLeft ? column <= center : column >= center;
    const distanceFromEdge = belongsToLeft ? column : columns - 1 - column;
    const distanceToCenter = belongsToLeft ? center : columns - 1 - center;
    const inwardProgress = clamp(distanceFromEdge / distanceToCenter, 0, 1);
    const waveDirection = belongsToLeft ? 1 : -1;
    const wavePhase = distanceFromEdge * 0.72 - frame * 0.28;
    const waveAmplitude = 1.15 - inwardProgress * 0.65;
    const pathJitter = (seededNoise(column, Math.floor(frame / 2), belongsToLeft ? 0xd1a : 0xd2a) - 0.5) * 0.6;
    const pathCenter = (rows - 1) / 2 + Math.sin(wavePhase) * waveAmplitude * waveDirection + pathJitter;
    const pathRadius = 1.3 - inwardProgress * 0.55;
    const verticalDistance = Math.abs(row - pathCenter);
    let activationChance = 0;

    if (isOnCorrectHalf && trailDistance >= -1.75 && trailDistance <= 2.25) {
      activationChance = 0.58;
    } else if (isOnCorrectHalf && trailDistance > 2.25 && trailDistance < 8.5) {
      activationChance = 0.24 * (1 - (trailDistance - 2.25) / 6.25);
    }

    if (activationChance > 0) {
      const branchNoise = seededNoise(index, Math.floor(frame / 2), belongsToLeft ? 0x1eaf : 0x71a7);
      const branchReach = branchNoise > 0.82 ? 0.9 : 0.3;
      if (verticalDistance > pathRadius + branchReach) {
        activationChance = 0;
      } else {
        const verticalStrength = clamp(1 - verticalDistance / (pathRadius + 0.65), 0.12, 1);
        activationChance *= (0.42 + verticalStrength * 0.78) * cleanup;
        if (verticalDistance > pathRadius) activationChance *= 0.42;
      }
    }

    if (heartLevel > 0 && progress >= heartArrival - 0.14) {
      const settling = clamp((progress - (heartArrival - 0.14)) / 0.14, 0, 1);
      activationChance = Math.max(activationChance, 0.16 + settling * 0.52);
    }

    activationChance = clamp(activationChance * 1.3, 0, 0.94);

    if (seededNoise(index, frame, 0xc0ffee) < activationChance) {
      return 1 + Math.floor(seededNoise(index, frame, 0xb10e) * 4);
    }

    return 0;
  });
}

export default function GitHubContributionExplorer({ data }: { data: ContributionData }) {
  const activityLevels = useMemo(() => data.days.map((day) => day.level), [data.days]);
  const heartLevels = useMemo(() => getHeartLevels(data.days.length), [data.days.length]);
  const columns = Math.ceil(data.days.length / rows);
  const [mode, setMode] = useState<DisplayMode>("activity");
  const [displayLevels, setDisplayLevels] = useState(activityLevels);

  useEffect(() => {
    if (mode !== "converging") return;

    let frame = 0;
    const interval = window.setInterval(() => {
      frame += 1;
      if (frame >= transitionFrames) {
        window.clearInterval(interval);
        setDisplayLevels(heartLevels);
        setMode("heart");
        return;
      }

      setDisplayLevels(getConvergingLevels(activityLevels, heartLevels, columns, frame));
    }, transitionStep);

    return () => window.clearInterval(interval);
  }, [activityLevels, columns, heartLevels, mode]);

  function toggleContributions() {
    if (mode === "heart") {
      setDisplayLevels(activityLevels);
      setMode("activity");
      return;
    }
    if (mode === "converging") return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplayLevels(heartLevels);
      setMode("heart");
      return;
    }

    setDisplayLevels(activityLevels);
    setMode("converging");
  }

  return (
    <div className={`v2-mini-contribution is-${mode}`}>
      <button
        aria-busy={mode === "converging"}
        aria-label={mode === "heart" ? "Restore GitHub contribution activity" : "Transform GitHub contributions"}
        aria-pressed={mode === "heart"}
        className="v2-mini-contribution-button"
        disabled={mode === "converging"}
        onClick={toggleContributions}
        type="button"
      >
        <span className="v2-mini-contribution-grid" aria-hidden="true">
          {data.days.map((day, index) => (
            <i
              className="v2-mini-contribution-day"
              data-level={displayLevels[index] ?? 0}
              key={day.date}
              style={{ "--morph-delay": `${(index % 19) * 8}ms` } as CSSProperties}
            />
          ))}
        </span>
      </button>
    </div>
  );
}
