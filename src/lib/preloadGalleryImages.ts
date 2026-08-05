import type { ImageGallery } from "@/data/types";

const preloadedImages = new Set<string>();

function preloadImage(src: string) {
  if (typeof window === "undefined" || preloadedImages.has(src)) {
    return;
  }

  const image = new Image();
  image.decoding = "async";
  image.src = src;
  preloadedImages.add(src);
}

export function preloadGalleryImages(gallery?: ImageGallery) {
  if (!gallery) {
    return;
  }

  for (const galleryImage of gallery.images) {
    if (galleryImage.mediaType !== "video") {
      preloadImage(galleryImage.src);
    }

    if (galleryImage.fallbackSrc) {
      preloadImage(galleryImage.fallbackSrc);
    }
  }
}
