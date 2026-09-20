"use client";

import { useEffect, useRef } from "react";

const dots = [
  [7, 13, 0.35, 2], [19, 28, 0.7, 3], [34, 9, 0.45, 2], [48, 21, 0.85, 2],
  [63, 12, 0.55, 3], [82, 25, 0.4, 2], [93, 8, 0.75, 3], [11, 48, 0.6, 2],
  [27, 61, 0.9, 3], [42, 43, 0.38, 2], [58, 69, 0.7, 2], [73, 51, 0.5, 3],
  [89, 63, 0.82, 2], [16, 86, 0.42, 3], [39, 78, 0.65, 2], [67, 89, 0.88, 3],
  [85, 82, 0.48, 2], [96, 45, 0.72, 2]
] as const;

export default function CursorDots() {
  const dotRefs = useRef<Array<HTMLSpanElement | null>>([]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    let currentX = 0;
    let currentY = 0;
    let targetX = 0;
    let targetY = 0;

    const move = (event: PointerEvent) => {
      targetX = (event.clientX / window.innerWidth - 0.5) * 18;
      targetY = (event.clientY / window.innerHeight - 0.5) * 18;
    };

    const animate = () => {
      currentX += (targetX - currentX) * 0.065;
      currentY += (targetY - currentY) * 0.065;

      dotRefs.current.forEach((dot, index) => {
        if (!dot) return;
        const depth = dots[index][2];
        dot.style.transform = `translate3d(${currentX * depth}px, ${currentY * depth}px, 0)`;
      });

      frame = window.requestAnimationFrame(animate);
    };

    window.addEventListener("pointermove", move, { passive: true });
    frame = window.requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("pointermove", move);
      window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div aria-hidden="true" className="v2-cursor-dots">
      {dots.map(([left, top, depth, size], index) => (
        <span
          key={`${left}-${top}`}
          ref={(element) => { dotRefs.current[index] = element; }}
          style={{
            height: `${size}px`,
            left: `${left}%`,
            opacity: 0.28 + depth * 0.42,
            top: `${top}%`,
            width: `${size}px`
          }}
        />
      ))}
    </div>
  );
}
