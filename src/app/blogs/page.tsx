import type { Metadata } from "next";
import ComingSoon from "@/components/ComingSoon";

export const metadata: Metadata = { title: "Blogs · Anson Chan" };

export default function BlogsPage() {
  return <ComingSoon title="Blogs" />;
}
