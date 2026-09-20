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
  title: "Anson Chan",
  description: "Anson Chan is a UBC Computer Engineering student and software engineer building thoughtful products and dependable systems.",
  icons: {
    icon: [{ url: "/assets/favicon.jpg", sizes: "340x340", type: "image/png" }],
    shortcut: [{ url: "/assets/favicon.jpg", sizes: "340x340", type: "image/png" }],
    apple: [{ url: "/assets/favicon.jpg", sizes: "340x340", type: "image/png" }]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("portfolio-theme");if(!t)t=matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";document.documentElement.dataset.theme=t}catch(e){}})()`
          }}
        />
        <link
          as="image"
          href="/assets/transition/penguin-transition.gif"
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
