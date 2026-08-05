export type RichSegment = {
  text: string;
  highlight?: boolean;
};

export type SocialLink = {
  label: string;
  href: string;
  icon: string;
};

export type GalleryImage = {
  src: string;
  alt: string;
  caption?: string;
  fit?: "cover" | "natural" | "fill";
  mediaType?: "image" | "video";
  fallbackSrc?: string;
};

export type ImageGallery = {
  title?: string;
  images: GalleryImage[];
};

export type Experience = {
  title: string;
  organization: string;
  dates: string;
  location: string;
  image: string;
  eyebrow?: string;
  bullets: RichSegment[][];
  gallery?: ImageGallery;
  defaultOpen?: boolean;
};

export type Project = {
  title: string;
  description: string;
  image: string;
  icon: string;
  gallery: ImageGallery;
  techStack: string[];
  github: string;
  live?: string;
  details: string[];
  defaultOpen?: boolean;
};

