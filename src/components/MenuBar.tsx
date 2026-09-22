"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const menuItems = [
  { href: "/", label: "Home" }
];

export default function MenuBar() {
  const pathname = usePathname();
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => setIsOpen(false), [pathname]);

  useEffect(() => {
    function closeMenu(event: PointerEvent) {
      if (!wrapperRef.current?.contains(event.target as Node)) setIsOpen(false);
    }

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setIsOpen(false);
    }

    window.addEventListener("pointerdown", closeMenu);
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      window.removeEventListener("pointerdown", closeMenu);
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  return (
    <div className="v2-menu-bar" ref={wrapperRef}>
      <button
        aria-controls="portfolio-menu"
        aria-expanded={isOpen}
        aria-label={`${isOpen ? "Close" : "Open"} menu`}
        className="v2-menu-toggle"
        onClick={() => setIsOpen((open) => !open)}
        type="button"
      >
        <Image
          alt=""
          aria-hidden="true"
          height={24}
          src="/assets/icons/menu.png"
          width={24}
        />
      </button>

      {isOpen ? (
        <nav aria-label="Primary" className="v2-menu-panel" id="portfolio-menu">
          <div className="v2-menu-links">
            {menuItems.map((item) => (
              <Link
                aria-current={pathname === item.href ? "page" : undefined}
                href={item.href}
                key={item.href}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <Link
            className="v2-menu-resume"
            href="/resume"
            onClick={() => setIsOpen(false)}
            rel="noreferrer"
            target="_blank"
          >
            <Image
              alt=""
              aria-hidden="true"
              height={18}
              src="/assets/icons/download.svg"
              width={18}
            />
            <span>View Resume</span>
          </Link>
        </nav>
      ) : null}
    </div>
  );
}
