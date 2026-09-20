"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    setTheme(document.documentElement.dataset.theme === "dark" ? "dark" : "light");
  }, []);

  function toggleTheme() {
    const nextTheme: Theme = theme === "light" ? "dark" : "light";
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem("portfolio-theme", nextTheme);
    setTheme(nextTheme);
  }

  return (
    <button
      aria-label={`Switch to ${theme === "light" ? "night" : "day"} theme`}
      className="v2-theme-toggle"
      onClick={toggleTheme}
      type="button"
    >
      <span aria-hidden="true">{theme === "light" ? "☾" : "☀"}</span>
      <span>{theme === "light" ? "night" : "day"}</span>
    </button>
  );
}
