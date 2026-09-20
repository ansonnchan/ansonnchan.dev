"use client";

import Image from "next/image";
import { useRef } from "react";

export default function SpinningPortrait() {
  const imageRef = useRef<HTMLImageElement>(null);

  function spinPortrait() {
    const image = imageRef.current;
    if (!image || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    image.classList.remove("is-spinning");
    void image.offsetWidth;
    image.classList.add("is-spinning");
  }

  return (
    <button
      aria-label="Spin Anson's profile photo"
      className="v2-hero-portrait"
      onClick={spinPortrait}
      type="button"
    >
      <Image
        alt="Anson Chan"
        className="v2-hero-portrait-photo"
        height={1254}
        onAnimationEnd={(event) => event.currentTarget.classList.remove("is-spinning")}
        priority
        ref={imageRef}
        src="/assets/images/profile.png"
        width={1254}
      />
      <Image
        alt=""
        aria-hidden="true"
        className="v2-portrait-hint"
        height={971}
        src="/assets/miscellaneous/click-me.png"
        width={1619}
      />
    </button>
  );
}
