export type HomeFact = {
  text: string;
  linkLabel: string;
};

export const home = {
  sticker: "/assets/stickers/corner_sticker.png",
  kicker: "+ building software that makes people’s days a little easier +",
  greeting: "hi there! I’m",
  name: "Anson",
  penguinIcon: "/assets/penguin/penguin-icon.png",
  facts: [
    {
      text: "computer engineering @",
      linkLabel: "UBC"
    },
    {
      text: "software engineer @",
      linkLabel: "ScalePad"
    }
  ] satisfies HomeFact[],
  actions: [
    { label: "more about me", href: "/about", primary: false },
    { label: "let's connect!", href: "/contacts", primary: true }
  ]
};
