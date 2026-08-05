export type AboutSegment = {
  text: string;
  style?: "handwritten" | "highlight";
};

export type AboutContent = {
  illustration: string;
  introduction: AboutSegment[];
  facts: AboutSegment[][];
  buildLine: string;
  closing: string;
};

export const about: AboutContent = {
  illustration: "/assets/penguin/penguin_pic-4-removebg-preview.png",
  introduction: [
    { text: "Hey, I’m Anson—a third-year " },
    { text: "Computer Engineering", style: "highlight" },
    { text: " student at " },
    { text: "UBC", style: "handwritten" },
    { text: " and a software engineer intern at " },
    { text: "ScalePad", style: "handwritten" },
    { text: ". I was born in " },
    { text: "Hong Kong", style: "handwritten" },
    { text: " and spent 15 years growing up in " },
    { text: "Australia", style: "handwritten" },
    { text: ", so both places still feel like home. I’m always curious about " },
    { text: "new technologies", style: "highlight" },
    { text: " and the thoughtful ways they can be used to solve everyday problems." }
  ],
  facts: [
    [
      { text: "You’ll usually find me playing " },
      { text: "tennis, badminton, or table tennis", style: "highlight" },
      { text: "." }
    ],
    [
      { text: "I’m working on my " },
      { text: "Cantonese and Mandarin", style: "handwritten" },
      { text: " pronunciation." }
    ],
    [
      { text: "I’m still an " },
      { text: "Aussie at heart", style: "highlight" },
      { text: " after surviving the heat, spiders, snakes, and suspiciously muscular kangaroos." }
    ]
  ],
  buildLine: "I love building software people actually use.",
  closing: "Nice to meet you—I hope you enjoy looking around."
};
