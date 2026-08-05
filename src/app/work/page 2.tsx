import type { Metadata } from "next";
import ComingSoonPage from "@/components/ComingSoonPage";

export const metadata: Metadata = {
  title: "Work — Coming Soon | Anson Chan"
};

export default function WorkPage() {
  return <ComingSoonPage section="work" />;
}
