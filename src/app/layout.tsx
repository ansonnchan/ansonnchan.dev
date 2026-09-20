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
      </head>
      <body className={patrickHand.variable}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
