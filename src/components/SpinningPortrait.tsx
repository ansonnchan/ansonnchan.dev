"use client";

import Image from "next/image";
import { type MouseEvent, useRef, useState } from "react";

export default function SpinningPortrait() {
  const reactionRef = useRef<HTMLSpanElement>(null);
  const nextDamageId = useRef(0);
  const [damageHits, setDamageHits] = useState<number[]>([]);

  function reactToPoke(event: MouseEvent<HTMLButtonElement>) {
    const reaction = reactionRef.current;
    if (!reaction || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const rect = event.currentTarget.getBoundingClientRect();
    const fromCenterX = event.clientX - (rect.left + rect.width / 2);
    const fromCenterY = event.clientY - (rect.top + rect.height / 2);
    const distance = Math.hypot(fromCenterX, fromCenterY) || 1;
    const isKeyboardClick = event.detail === 0;
    const pokeX = isKeyboardClick ? 0 : (-fromCenterX / distance) * 6;
    const pokeY = isKeyboardClick ? -6 : (-fromCenterY / distance) * 6;
    const bonkAngles = [-160, -135, -110, -90, -70, -45, -20];
    const bonkAngle = bonkAngles[Math.floor(Math.random() * bonkAngles.length)] * (Math.PI / 180);

    reaction.style.setProperty("--poke-x", `${pokeX}px`);
    reaction.style.setProperty("--poke-y", `${pokeY}px`);
    reaction.style.setProperty("--poke-bounce-x", `${pokeX * -0.22}px`);
    reaction.style.setProperty("--poke-bounce-y", `${pokeY * -0.22}px`);
    reaction.style.setProperty("--bonk-left", `${50 + Math.cos(bonkAngle) * 52}%`);
    reaction.style.setProperty("--bonk-top", `${50 + Math.sin(bonkAngle) * 52}%`);
    reaction.style.setProperty("--bonk-rotation", `${Math.round(Math.random() * 32 - 16)}deg`);
    setDamageHits((hits) => [...hits, nextDamageId.current++]);
    reaction.classList.remove("is-reacting");
    void reaction.offsetWidth;
    reaction.classList.add("is-reacting");
  }

  return (
    <button
      aria-label="Poke Anson's profile photo"
      className="v2-hero-portrait"
      onClick={reactToPoke}
      type="button"
    >
      <span
        className="v2-portrait-reaction"
        onAnimationEnd={(event) => {
          if (event.animationName === "v2-portrait-wobble") {
            event.currentTarget.classList.remove("is-reacting");
          }
        }}
        ref={reactionRef}
      >
        <Image
          alt="Anson Chan"
          className="v2-hero-portrait-photo"
          height={1254}
          priority
          src="/assets/images/profile.png"
          width={1254}
        />
        <span className="v2-portrait-bonk" aria-hidden="true">
          <i className="v2-bonk-line v2-bonk-line-left" />
          <b>BONK!</b>
          <i className="v2-bonk-line v2-bonk-line-right" />
        </span>
        {damageHits.map((hit) => (
          <i
            aria-hidden="true"
            className="v2-portrait-damage"
            key={hit}
            onAnimationEnd={() => setDamageHits((hits) => hits.filter((id) => id !== hit))}
          >
            −1 HP
          </i>
        ))}
      </span>
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
