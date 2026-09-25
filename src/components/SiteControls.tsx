import Link from "next/link";
import NowPlaying from "@/components/NowPlaying";
import ThemeToggle from "@/components/ThemeToggle";

export default function SiteControls() {
  return (
    <div className="v2-top-controls">
      <Link aria-label="Return to home page" className="v2-home-link" href="/">
        <img alt="" aria-hidden="true" src="/assets/icons/home.svg" />
      </Link>
      <ThemeToggle />
      <NowPlaying />
    </div>
  );
}
