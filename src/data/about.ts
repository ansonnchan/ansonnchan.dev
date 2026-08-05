export type AboutSegment = {
  text: string;
  style?: "handwritten" | "highlight" | "italic";
  breakBefore?: boolean;
};

export type AboutContent = {
  illustration: string;
  introduction: AboutSegment[];
  factsHeading: string;
  facts: AboutSegment[][];
  buildLine: string;
  closing: string;
  connectionLead: string;
  connectionNote: string;
};

export const about: AboutContent = {
  illustration: "/assets/penguin/penguin_pic-4-removebg-preview.png",
  introduction: [
    { text: "Hey, I’m Anson, a third-year " },
    { text: "Computer Engineering", style: "highlight" },
    { text: " student @ " },
    { text: "UBC", style: "handwritten" },
    { text: ". I’m currently a software engineer intern at " },
    { text: "ScalePad 🌱", style: "handwritten" },
    { text: ". I was born in " },
    { text: "Hong Kong", style: "handwritten" },
    { text: " and spent 15 years growing up in " },
    { text: "Australia", style: "handwritten" },
    { text: "." },
    {
      text: "My Aussie accent may have faded a little, but the years of surviving brutal heat, giant spiders, angry koalas, and super swole kangaroos have caused generational trauma. 🦘",
      breakBefore: true
    }
  ],
  factsHeading: "A few things about me:",
  facts: [
    [
      { text: "I love racquet sports, especially tennis, badminton, and table tennis" }
    ],
    [
      { text: "I’m practicing my Cantonese and Mandarin so I can stop being a target at family dinners" }
    ],
    [
      { text: "I’ve played the violin and trumpet for 10+ years" }
    ],
    [
      { text: "I’m currently reading " },
      { text: "“The Tunnel to Summer, the Exit of Goodbyes”", style: "italic" },
      { text: " by Mei Hachimoku" }
    ]
  ],
  buildLine: " I enjoy building software that people actually use and hope to create products that make everyday life easier, better, or simply a little more fun. ✨",
  closing: "Thanks for stopping by and exploring my little corner of the internet.",
  connectionLead: "If you see something interesting,",
  connectionNote: "I would love to connect :)"
};
