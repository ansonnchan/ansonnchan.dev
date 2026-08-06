import type { RichSegment } from "@/data/types";

export default function WorkText({ segments }: { segments: RichSegment[] }) {
  return (
    <>
      {segments.map((segment, index) => (
        <span className={segment.highlight ? "work-emphasis" : undefined} key={`${segment.text}-${index}`}>
          {segment.text}
        </span>
      ))}
    </>
  );
}
