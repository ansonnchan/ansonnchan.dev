"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { label: "about", href: "/about" },
  { label: "experience", href: "/work" },
  { label: "projects", href: "/projects" },
  { label: "blog", href: "/blog" },
  { label: "connect", href: "/contacts" }
];

export default function SiteNav() {
  const pathname = usePathname();

  return (
    <header className="site-header">
      <nav aria-label="Primary navigation" className="site-nav">
        <div className="nav-left-group">
          <Link aria-label="Anson Chan — home" className="home-mark" href="/">
            <img alt="" aria-hidden="true" src="/assets/icons/home.svg" />
          </Link>
          <div className="nav-links">
            {links.map((link) => {
              const active =
                pathname === link.href || pathname.startsWith(`${link.href}/`);

              return (
                <Link
                  aria-current={active ? "page" : undefined}
                  className={active ? "active" : undefined}
                  href={link.href}
                  key={link.href}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      </nav>
    </header>
  );
}
