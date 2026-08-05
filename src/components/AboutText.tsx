import type { AboutSegment } from "@/data/about";

export default function AboutText({ segments }: { segments: AboutSegment[] }) {
  return (
    <>
      {segments.map((segment, index) => (
        <span
          className={segment.style ? `about-emphasis ${segment.style}` : undefined}
          key={`${segment.text}-${index}`}
        >
          {segment.text}
        </span>
      ))}
    </>
  );
}
