import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Patrick_Hand } from "next/font/google";
import "./globals.css";

const patrickHand = Patrick_Hand({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-hand",
  weight: "400"
});

const prefetchedGalleryImages = [
  "/assets/projects/personal-portfolio/portfolio_pic1.webp",
  "/assets/projects/personal-portfolio/portfolio_pic2.webp",
  "/assets/projects/pear-programming/pear-program-pic3.webp",
  "/assets/projects/hear-me-out/vent.ai_pic1.webp",
  "/assets/projects/hear-me-out/vent.ai_pic2.webp",
  "/assets/projects/dead-code-explorer/dead-code-explorer-pic-1.webp",
  "/assets/projects/dead-code-explorer/dead-code-explorer-pic-2.webp"
];

export const metadata: Metadata = {
  title: "Anson Chan's Portfolio",
  description:
    "A playful, recruiter-friendly software engineering internship portfolio for Anson Chan.",
  icons: {
    icon: "/assets/test_favicon.jpg",
    apple: "/assets/test_favicon.jpg"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          as="image"
          href="/assets/closing/goodbye.gif"
          rel="preload"
          type="image/gif"
        />
        <link
          as="image"
          href="/assets/experiences/scalepad_volunteer.webp"
          rel="preload"
          type="image/webp"
        />
        {prefetchedGalleryImages.map((href) => (
          <link as="image" href={href} key={href} rel="prefetch" type="image/webp" />
        ))}
      </head>
      <body className={patrickHand.variable}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
