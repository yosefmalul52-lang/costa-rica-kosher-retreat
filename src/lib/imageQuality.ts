const MAX_IMAGE_WIDTH = 3840;

export const CAROUSEL_CARD_IMAGE_SIZES =
  "(min-width: 1024px) 943px, (min-width: 768px) 768px, 82.935vw" as const;

export const HERO_IMAGE = {
  src: "/images/hero-retreat-valley.jpg",
  srcSet: "/images/hero-retreat-valley.jpg 1024w, /images/hero-retreat-valley@2x.jpg 2560w",
  sizes: "100vw",
} as const;

export const LOCATION_IMAGE = {
  src: "/images/cartago-highland-sanctuary.jpg",
  srcSet: "/images/cartago-highland-sanctuary.jpg 1024w, /images/cartago-highland-sanctuary@2x.jpg 2560w",
  sizes: "(min-width: 768px) 50vw, 100vw",
} as const;

export const DINING_IMAGE = {
  src: "/images/kosher-fine-dining-plate.jpg",
  srcSet: "/images/kosher-fine-dining-plate.jpg 819w, /images/kosher-fine-dining-plate@2x.jpg 1638w",
  sizes: "(min-width: 1024px) 50vw, 100vw",
} as const;

export const STARLIGHT_LOUNGE_IMAGE = {
  src: "/images/starlight-lounge.jpg",
  srcSet: "/images/starlight-lounge.jpg 1024w, /images/starlight-lounge@2x.jpg 2560w",
  sizes: CAROUSEL_CARD_IMAGE_SIZES,
} as const;

export const SUNRISE_YOGA_DECK_IMAGE = {
  src: "/images/sunrise-yoga-deck.jpg",
  srcSet: "/images/sunrise-yoga-deck.jpg 1024w, /images/sunrise-yoga-deck@2x.jpg 2560w",
  sizes: CAROUSEL_CARD_IMAGE_SIZES,
} as const;

export const PALM_LINED_DRIVEWAY_IMAGE = {
  src: "/images/palm-lined-driveway.jpg",
  srcSet: "/images/palm-lined-driveway.jpg 1024w, /images/palm-lined-driveway@2x.jpg 2560w",
  sizes: CAROUSEL_CARD_IMAGE_SIZES,
} as const;

export const MISTY_MOUNTAIN_BALCONY_IMAGE = {
  src: "/images/misty-mountain-balcony.jpg",
  srcSet: "/images/misty-mountain-balcony.jpg 1024w, /images/misty-mountain-balcony@2x.jpg 2560w",
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
