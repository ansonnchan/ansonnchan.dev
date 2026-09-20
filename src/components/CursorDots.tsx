"use client";

import { useEffect, useRef } from "react";

const dots = [
  [5, 12, 0.35, 3], [14, 30, 0.72, 4], [25, 17, 0.5, 2], [35, 7, 0.45, 3],
  [48, 21, 0.85, 3], [61, 10, 0.58, 4], [72, 29, 0.42, 2], [84, 18, 0.65, 3],
  [94, 7, 0.78, 4], [8, 48, 0.62, 3], [20, 42, 0.4, 2], [29, 63, 0.92, 4],
  [42, 45, 0.38, 3], [52, 57, 0.68, 2], [62, 70, 0.72, 3], [74, 50, 0.52, 4],
  [86, 61, 0.84, 3], [96, 43, 0.7, 2], [6, 74, 0.48, 2], [16, 88, 0.44, 4],
  [31, 81, 0.76, 3], [44, 92, 0.55, 2], [58, 83, 0.64, 4], [69, 91, 0.9, 3],
  [83, 80, 0.5, 2], [95, 91, 0.74, 4]
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
      targetX = (event.clientX / window.innerWidth - 0.5) * 28;
      targetY = (event.clientY / window.innerHeight - 0.5) * 28;
    };

    const animate = () => {
      currentX += (targetX - currentX) * 0.055;
      currentY += (targetY - currentY) * 0.055;

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
