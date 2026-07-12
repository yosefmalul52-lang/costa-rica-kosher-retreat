const MAX_IMAGE_WIDTH = 3840;

export const CAROUSEL_CARD_IMAGE_SIZES =
  "(min-width: 1024px) 943px, (min-width: 768px) 768px, 82.935vw" as const;

export const HERO_IMAGE = {
  src: "/images/hero-retreat-valley.webp",
  srcSet: "/images/hero-retreat-valley.webp 1280w, /images/hero-retreat-valley-1600.webp 1600w",
  sizes: "100vw",
} as const;

export const LOCATION_IMAGE = {
  src: "/images/cartago-highland-sanctuary.webp",
  srcSet:
    "/images/cartago-highland-sanctuary.webp 1280w, /images/cartago-highland-sanctuary-1600.webp 1600w",
  sizes: "(min-width: 768px) 50vw, 100vw",
} as const;

export const DINING_IMAGE = {
  src: "/images/kosher-fine-dining-plate.webp",
  srcSet:
    "/images/kosher-fine-dining-plate.webp 1280w, /images/kosher-fine-dining-plate-1600.webp 1600w",
  sizes: "(min-width: 1024px) 50vw, 100vw",
} as const;

export const STARLIGHT_LOUNGE_IMAGE = {
  src: "/images/starlight-lounge.webp",
  srcSet: "/images/starlight-lounge.webp 1280w, /images/starlight-lounge-1600.webp 1600w",
  sizes: CAROUSEL_CARD_IMAGE_SIZES,
} as const;

export const SUNRISE_YOGA_DECK_IMAGE = {
  src: "/images/sunrise-yoga-deck.webp",
  srcSet: "/images/sunrise-yoga-deck.webp 1280w, /images/sunrise-yoga-deck-1600.webp 1600w",
  sizes: CAROUSEL_CARD_IMAGE_SIZES,
} as const;

export const PALM_LINED_DRIVEWAY_IMAGE = {
  src: "/images/palm-lined-driveway.webp",
  srcSet: "/images/palm-lined-driveway.webp 1280w, /images/palm-lined-driveway-1600.webp 1600w",
  sizes: CAROUSEL_CARD_IMAGE_SIZES,
} as const;

export const MISTY_MOUNTAIN_BALCONY_IMAGE = {
  src: "/images/misty-mountain-balcony.webp",
  srcSet: "/images/misty-mountain-balcony.webp 1280w, /images/misty-mountain-balcony-1600.webp 1600w",
  sizes: CAROUSEL_CARD_IMAGE_SIZES,
} as const;

export function maxQualityImageUrl(url: string, width = MAX_IMAGE_WIDTH): string {
  if (!url || url.startsWith("/") || url.startsWith("data:")) {
    return url;
  }

  if (url.includes("googleusercontent.com")) {
    const base = url.split("=")[0];
    return `${base}=w${width}-rw`;
  }

  return url;
}
