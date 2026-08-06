import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Patrick_Hand } from "next/font/google";
import RouteTransition from "@/components/RouteTransition";
import "./globals.css";

const patrickHand = Patrick_Hand({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-hand",
  weight: "400"
});

export const metadata: Metadata = {
  title: "Anson Chan's Portfolio",
  description: "Anson Chan is a UBC Computer Engineering student and software engineer building thoughtful products and dependable systems.",
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
      </head>
      <body className={patrickHand.variable}>
        <RouteTransition />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
