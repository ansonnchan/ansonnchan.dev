import type { ReactNode } from "react";
import SiteFooter from "@/components/SiteFooter";
import SiteNav from "@/components/SiteNav";

export default function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="site-shell">
      <SiteNav />
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}

