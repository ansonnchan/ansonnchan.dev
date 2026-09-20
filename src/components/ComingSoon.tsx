import Link from "next/link";
import CursorDots from "@/components/CursorDots";

export default function ComingSoon({ title }: { title: string }) {
  return (
    <div className="v2-page v2-placeholder-page">
      <CursorDots />
      <main>
        <p>coming soon</p>
        <h1>{title}</h1>
        <p>This section is still being built. Check back soon.</p>
        <Link href="/">← back home</Link>
      </main>
    </div>
  );
}
