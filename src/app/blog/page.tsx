import type { Metadata } from "next";
import ComingSoonPage from "@/components/ComingSoonPage";

export const metadata: Metadata = {
  title: "Anson Chan",
  description: "Notes on software engineering, projects, and things I learn along the way."
};

export default function BlogPage() {
  return (
    <ComingSoonPage
      eyebrow="blog · still brewing ᝰ"
      message="I’m putting together a small corner for notes, lessons, and things worth sharing. Check back soon."
    />
  );
}
