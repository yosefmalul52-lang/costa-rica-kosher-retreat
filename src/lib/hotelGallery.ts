import type { Language } from "../content/siteContent";

export type GalleryImage = {
  src: string;
  alt: { en: string; he: string };
  objectPosition?: string;
};

const GALLERY_BASE = "/images/hotel-gallery";

export const hotelGallery = {
  palmCanopyEntrance: {
    src: `${GALLERY_BASE}/palm-canopy-entrance-driveway.webp`,
    alt: {
      en: "Private palm-lined entrance driveway at a luxury mountain retreat",
      he: "שביל כניסה פרטי מוקף דקלים בריטריט יוקרתי בהרים",
    },
    objectPosition: "center 40%",
  },
  tropicalResortArrival: {
    src: `${GALLERY_BASE}/tropical-resort-arrival-driveway.webp`,
    alt: {
      en: "Tropical resort arrival driveway through lush palm gardens",
      he: "שביל הגעה לריזורט טרופי בין גני דקלים ירוקים",
    },
    objectPosition: "center center",
  },
  rainforestDiningPavilion: {
    src: `${GALLERY_BASE}/rainforest-dining-pavilion.webp`,
    alt: {
      en: "Rainforest dining pavilion with warm lighting and tropical surroundings",
      he: "פאביליון אוכל ביער הגשם עם תאורה חמה וסביבה טרופית",
    },
    objectPosition: "center 35%",
  },
  jungleVerandaMountainView: {
    src: `${GALLERY_BASE}/jungle-veranda-mountain-view.webp`,
    alt: {
      en: "Wooden veranda overlooking lush jungle valleys and mountain horizons",
      he: "ורנדה מעץ עם נוף לעמקי ג'ונגל ירוקים ואופק הררי",
    },
    objectPosition: "center center",
  },
  privateVillaGardenEntrance: {
    src: `${GALLERY_BASE}/private-villa-garden-entrance.webp`,
    alt: {
      en: "Private white villa entrance with manicured tropical garden",
      he: "כניסה לווילה לבנה פרטית עם גינה טרופית מטופחת",
    },
    objectPosition: "center 30%",
  },
  luxuryVillaGardenPathway: {
    src: `${GALLERY_BASE}/luxury-villa-garden-pathway.webp`,
    alt: {
      en: "Stone pathway between luxury villas in a tropical mountain garden",
      he: "שביל אבן בין וילות יוקרה בגינה טרופית בהרים",
    },
    objectPosition: "center center",
  },
  tropicalPoolRetreat: {
    src: `${GALLERY_BASE}/tropical-pool-retreat.webp`,
    alt: {
      en: "Secluded tropical pool surrounded by rainforest greenery",
      he: "בריכה טרופית מבודדת מוקפת בצמחייה של יער הגשם",
    },
    objectPosition: "center 40%",
  },
  kosherOutdoorDiningTerrace: {
    src: `${GALLERY_BASE}/kosher-outdoor-dining-terrace.webp`,
    alt: {
      en: "Outdoor kosher dining terrace with lantern light and rainforest views",
      he: "מרפסת אוכל כשר חיצונית עם תאורת פנסים ונוף ליער הגשם",
    },
    objectPosition: "center center",
  },
  rainforestCoveredWalkway: {
    src: `${GALLERY_BASE}/rainforest-covered-walkway.webp`,
    alt: {
      en: "Covered wooden walkway through a tranquil Costa Rica rainforest",
      he: "גשר מקורה מעץ בשביל שקט ביער הגשם של קוסטה ריקה",
    },
    objectPosition: "center center",
  },
  tropicalJungleWaterfall: {
    src: `${GALLERY_BASE}/tropical-jungle-waterfall.webp`,
    alt: {
      en: "Hidden tropical waterfall in a lush Costa Rica jungle",
      he: "מפל טרופי נסתר ביער הגשם הפורה של קוסטה ריקה",
    },
    objectPosition: "center 35%",
  },
} as const satisfies Record<string, GalleryImage>;

export function galleryAlt(image: GalleryImage, language: Language): string {
  return image.alt[language];
}
