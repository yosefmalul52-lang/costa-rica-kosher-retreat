import { BRAND_NAME } from "./brand";
import type { Language } from "./siteContent";

export type SeoPageKey =
  | "home"
  | "rooms"
  | "holidays"
  | "pesach"
  | "sukkot"
  | "yearRound"
  | "kosherJewishLife"
  | "costaRicaGuide"
  | "faq"
  | "contact"
  | "notFound";

export type SeoEntry = {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
};

const DEFAULT_OG = "/videos/hero-poster-web.jpg";

export const pageSeo: Record<Language, Record<SeoPageKey, SeoEntry>> = {
  en: {
    home: {
      title: `${BRAND_NAME} | Glatt Kosher Luxury Retreat`,
      description:
        "A luxury Glatt kosher mountain retreat in Cartago, Costa Rica. Shabbat-friendly hospitality, family programs, and curated highland experiences.",
      path: "/",
      ogImage: DEFAULT_OG,
    },
    rooms: {
      title: `Rooms & Cabins | ${BRAND_NAME}`,
      description:
        "Explore luxury suites, family suites, mountain villas, and private cabins designed for kosher living in Costa Rica.",
      path: "/rooms",
      ogImage: DEFAULT_OG,
    },
    holidays: {
      title: `Holidays & Stays | ${BRAND_NAME}`,
      description:
        "Pesach Retreat, Sukkot Retreat, and year-round kosher stays at a luxury mountain retreat in Costa Rica. Details confirmed during inquiry.",
      path: "/holidays",
      ogImage: "/images/holidays/pesach-retreat.webp",
    },
    pesach: {
      title: `Luxury Pesach Retreat in Costa Rica | ${BRAND_NAME}`,
      description:
        "A luxury Glatt kosher Pesach retreat in Costa Rica’s mountains—holiday dining, prayer support, family programs, excursions, and adult entertainment. Details confirmed during inquiry.",
      path: "/pesach",
      ogImage: "/images/pesach/pesach-hero-resort.webp",
    },
    sukkot: {
      title: `Sukkot Retreat in Costa Rica | ${BRAND_NAME}`,
      description:
        "A thoughtfully planned Sukkot retreat with kosher holiday hospitality, family activities, prayer arrangements, and Costa Rica experiences. Details confirmed during inquiry.",
      path: "/sukkot",
      ogImage: "/images/holidays/sukkot-retreat.webp",
    },
    yearRound: {
      title: `Year-Round Kosher Stays | ${BRAND_NAME}`,
      description:
        "Luxury Glatt kosher mountain stays throughout the year in Costa Rica—rooms, dining, Shabbat-friendly hospitality, and curated highland experiences.",
      path: "/year-round",
      ogImage: "/images/holidays/year-round-stay.webp",
    },
    kosherJewishLife: {
      title: `Kosher & Jewish Life | ${BRAND_NAME}`,
      description:
        "Kosher details confirmed during inquiry. Shabbat-friendly hospitality and Jewish life support available upon request at our Costa Rica retreat.",
      path: "/kosher-jewish-life",
      ogImage: DEFAULT_OG,
    },
    costaRicaGuide: {
      title: `Costa Rica Guide | ${BRAND_NAME}`,
      description:
        "A practical guide to Costa Rica's highlands—nature, routes, attractions, weather, and family experiences planned through our mountain retreat.",
      path: "/costa-rica-guide",
      ogImage: DEFAULT_OG,
    },
    faq: {
      title: `FAQ | ${BRAND_NAME}`,
      description:
        "Answers about kashrut, Shabbat, families, travel to Costa Rica, rooms, dining, booking, and privacy.",
      path: "/faq",
      ogImage: DEFAULT_OG,
    },
    contact: {
      title: `Contact | ${BRAND_NAME}`,
      description:
        "Reach our concierge team about availability, group arrangements, and bespoke kosher retreat planning.",
      path: "/contact",
      ogImage: DEFAULT_OG,
    },
    notFound: {
      title: `Page not found | ${BRAND_NAME}`,
      description: "The requested page could not be found. Return to Pura Shalom to continue planning your stay.",
      path: "/",
      ogImage: DEFAULT_OG,
    },
  },
  he: {
    home: {
      title: `${BRAND_NAME} | ריטריט כשר יוקרתי`,
      description:
        "ריטריט כשר יוקרתי ברמת גלאט בהרי קרטגו, קוסטה ריקה. אירוח מותאם שבת, תכניות משפחה וחוויות הרריות מותאמות.",
      path: "/",
      ogImage: DEFAULT_OG,
    },
    rooms: {
      title: `חדרים ובקתות | ${BRAND_NAME}`,
      description:
        "סוויטות יוקרה, סוויטות משפחה, וילות הרים ובקתות פרטיות לחיים כשרים בקוסטה ריקה.",
      path: "/rooms",
      ogImage: DEFAULT_OG,
    },
    holidays: {
      title: `חגים ושהיות | ${BRAND_NAME}`,
      description:
        "ריטריט פסח, ריטריט סוכות ושהיות כשרות לאורך השנה בריטריט יוקרתי בהרי קוסטה ריקה. הפרטים מאושרים בשיחת התאמה.",
      path: "/holidays",
      ogImage: "/images/holidays/pesach-retreat.webp",
    },
    pesach: {
      title: `ריטריט פסח יוקרתי בקוסטה ריקה | ${BRAND_NAME}`,
      description:
        "ריטריט פסח כשר גלאט יוקרתי בהרי קוסטה ריקה — ארוחות חג, תמיכה בתפילה, תכניות משפחה, טיולים ובידור למבוגרים. הפרטים מאושרים בשיחת התאמה.",
      path: "/pesach",
      ogImage: "/images/pesach/pesach-hero-resort.webp",
    },
    sukkot: {
      title: `ריטריט סוכות בקוסטה ריקה | ${BRAND_NAME}`,
      description:
        "ריטריט סוכות מתוכנן בקפידה עם אירוח חג כשר, פעילויות משפחה, סידורי תפילה וחוויות בקוסטה ריקה. הפרטים מאושרים בשיחת התאמה.",
      path: "/sukkot",
      ogImage: "/images/holidays/sukkot-retreat.webp",
    },
    yearRound: {
      title: `שהיות כשרות לאורך השנה | ${BRAND_NAME}`,
      description:
        "שהיות כשרות גלאט יוקרתיות בהרי קוסטה ריקה לאורך השנה — חדרים, ארוחות, אירוח מותאם שבת וחוויות הרריות מותאמות.",
      path: "/year-round",
      ogImage: "/images/holidays/year-round-stay.webp",
    },
    kosherJewishLife: {
      title: `כשרות וחיי יהדות | ${BRAND_NAME}`,
      description:
        "פרטי הכשרות יאושרו בשיחת התאמה. אירוח מותאם שבת ואפשרות לתיאום צרכים יהודיים מראש בריטריט שלנו בקוסטה ריקה.",
      path: "/kosher-jewish-life",
      ogImage: DEFAULT_OG,
    },
    costaRicaGuide: {
      title: `מדריך קוסטה ריקה | ${BRAND_NAME}`,
      description:
        "מדריך מעשי להרים בקוסטה ריקה — טבע, מסלולים, אטרקציות, מזג אוויר וחוויות משפחתיות בתיאום דרך הריטריט.",
      path: "/costa-rica-guide",
      ogImage: DEFAULT_OG,
    },
    faq: {
      title: `שאלות נפוצות | ${BRAND_NAME}`,
      description:
        "תשובות על כשרות, שבת, משפחות, הגעה לקוסטה ריקה, חדרים, ארוחות, הזמנה ופרטיות.",
      path: "/faq",
      ogImage: DEFAULT_OG,
    },
    contact: {
      title: `יצירת קשר | ${BRAND_NAME}`,
      description:
        "פנו לצוות הקונסיירז' לגבי זמינות, קבוצות ותכנון ריטריט כשר מותאם אישית.",
      path: "/contact",
      ogImage: DEFAULT_OG,
    },
    notFound: {
      title: `העמוד לא נמצא | ${BRAND_NAME}`,
      description: "העמוד המבוקש לא נמצא. חזרו ל־Pura Shalom כדי להמשיך לתכנן את השהות.",
      path: "/",
      ogImage: DEFAULT_OG,
    },
  },
};

export function pathnameToSeoKey(pathname: string): SeoPageKey {
  const routes: Record<string, SeoPageKey> = {
    "/": "home",
    "/rooms": "rooms",
    "/holidays": "holidays",
    "/pesach": "pesach",
    "/sukkot": "sukkot",
    "/year-round": "yearRound",
    "/kosher-jewish-life": "kosherJewishLife",
    "/costa-rica-guide": "costaRicaGuide",
    "/faq": "faq",
    "/contact": "contact",
  };
  return routes[pathname] ?? "notFound";
}
