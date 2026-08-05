import type { RichSegment } from "@/data/types";

export type AboutContent = {
  profileImage: string;
  greeting: string;
  paragraphs: RichSegment[][];
  closing: string;
};

export const about: AboutContent = {
  profileImage: "/assets/pfp-square.jpeg",
  greeting: "Hey there!",
  paragraphs: [
    [
      { text: "I’m " },
      { text: "Anson", highlight: true },
      { text: ", and welcome to my personal website." }
    ],
    [
      { text: "I’m a third-year " },
      { text: "Computer Engineering", highlight: true },
      { text: " student @ " },
      { text: "UBC", highlight: true },
      { text: ", expecting to graduate in " },
      { text: "2029", highlight: true },
      { text: ". I’m currently a software engineer intern @ " },
      { text: "ScalePad", highlight: true },
      { text: "." }
    ],
    [
      { text: "I was born in " },
      { text: "Hong Kong", highlight: true },
      { text: " but spent 15 years growing up in " },
      { text: "Australia", highlight: true },
      { text: ". While my Aussie accent has faded slightly, I’ll forever be an Aussie at heart after surviving the heat, spiders, snakes, and suspiciously muscular kangaroos. 🦘" }
    ],
    [
      { text: "Outside of coding, you’ll probably find me playing " },
      { text: "tennis, badminton, or table tennis", highlight: true },
      { text: ", or working on my " },
      { text: "Cantonese and Mandarin pronunciation", highlight: true },
      { text: "." }
    ],
    [
      { text: "I love building " },
      { text: "software people actually use", highlight: true },
      { text: " and hope to create products that make everyday life a little easier, better, and more fun. ✨" }
    ]
  ],
  closing: "If you like what you see and want to chat, I would love to connect :)"
};

