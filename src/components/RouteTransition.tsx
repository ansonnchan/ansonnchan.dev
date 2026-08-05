"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

const COVER_DELAY_MS = 110;
const MINIMUM_DISPLAY_MS = 650;
const MINIMUM_REVEAL_DELAY_MS = 120;

export default function RouteTransition() {
  const pathname = usePathname();
  const router = useRouter();
  const [visible, setVisible] = useState(false);
  const transitioning = useRef(false);
  const transitionStartedAt = useRef(0);
  const navigationTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const revealTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    if (transitioning.current) {
      const elapsed = performance.now() - transitionStartedAt.current;
      const revealDelay = Math.max(
        MINIMUM_REVEAL_DELAY_MS,
        MINIMUM_DISPLAY_MS - elapsed
      );

      revealTimer.current = setTimeout(() => {
        setVisible(false);
        transitioning.current = false;
      }, revealDelay);
    }

    return () => {
      if (revealTimer.current) clearTimeout(revealTimer.current);
    };
  }, [pathname]);

  useEffect(() => {
    if (!visible) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [visible]);

  useEffect(() => {
    function handleInternalNavigation(event: MouseEvent) {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      const target = event.target;
      if (!(target instanceof Element)) return;

      const anchor = target.closest<HTMLAnchorElement>("a[href]");
      if (!anchor || anchor.target === "_blank" || anchor.hasAttribute("download")) return;

      const destination = new URL(anchor.href, window.location.href);
      if (destination.origin !== window.location.origin) return;

      const currentLocation = `${window.location.pathname}${window.location.search}`;
      const nextLocation = `${destination.pathname}${destination.search}`;
      if (currentLocation === nextLocation) return;

      event.preventDefault();

      if (transitioning.current) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        router.push(`${nextLocation}${destination.hash}`);
        return;
      }

      transitioning.current = true;
      transitionStartedAt.current = performance.now();
      setVisible(true);

      navigationTimer.current = setTimeout(() => {
        router.push(`${nextLocation}${destination.hash}`, { scroll: false });
      }, COVER_DELAY_MS);
    }

    document.addEventListener("click", handleInternalNavigation, true);

    return () => {
      document.removeEventListener("click", handleInternalNavigation, true);
      if (navigationTimer.current) clearTimeout(navigationTimer.current);
    };
  }, [router]);

  return (
    <div
      aria-hidden={!visible}
      className={`route-transition${visible ? " active" : ""}`}
    >
      <img alt="" aria-hidden="true" src="/assets/closing/goodbye.gif" />
      <span className="sr-only">Opening the next page</span>
    </div>
  );
}
