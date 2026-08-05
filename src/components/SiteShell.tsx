import type { ReactNode } from "react";
import SiteFooter from "@/components/SiteFooter";
import SiteNav from "@/components/SiteNav";

export default function SiteShell({ children, showFooter = true }: { children: ReactNode; showFooter?: boolean }) {
  return (
    <div className="site-shell">
      <SiteNav />
      <main>{children}</main>
      {showFooter ? <SiteFooter /> : null}
    </div>
  );
}
