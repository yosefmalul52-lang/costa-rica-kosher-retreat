import { BRAND_NAME } from "./brand";
import type { Language } from "./siteContent";

export type SeoPageKey =
  | "home"
  | "rooms"
  | "kosherJewishLife"
  | "costaRicaGuide"
  | "faq"
  | "contact";

export const pageSeo: Record<Language, Record<SeoPageKey, { title: string; description: string }>> = {
  en: {
    home: {
      title: `${BRAND_NAME} | Glatt Kosher Luxury Retreat`,
      description:
        "A luxury Glatt kosher mountain retreat in Cartago, Costa Rica. Shabbat-friendly hospitality, family programs, and curated highland experiences.",
    },
    rooms: {
      title: `Rooms & Cabins | ${BRAND_NAME}`,
      description:
        "Explore luxury suites, family suites, mountain villas, and private cabins designed for kosher living in Costa Rica.",
    },
    kosherJewishLife: {
      title: `Kosher & Jewish Life | ${BRAND_NAME}`,
      description:
        "Kosher details confirmed during inquiry. Shabbat-friendly hospitality and Jewish life support available upon request at our Costa Rica retreat.",
    },
    costaRicaGuide: {
      title: `Costa Rica Guide | ${BRAND_NAME}`,
      description:
        "A practical guide to Costa Rica's highlands—nature, routes, attractions, weather, and family experiences planned through our mountain retreat.",
    },
    faq: {
      title: `FAQ | ${BRAND_NAME}`,
      description:
        "Answers about kashrut, Shabbat, families, travel to Costa Rica, rooms, dining, booking, and privacy.",
    },
    contact: {
      title: `Contact | ${BRAND_NAME}`,
      description:
        "Reach our concierge team about availability, group arrangements, and bespoke kosher retreat planning.",
    },
  },
  he: {
    home: {
      title: `${BRAND_NAME} | ריטריט כשר יוקרתי`,
      description:
        "ריטריט כשר יוקרתי ברמת גלאט בהרי קרטגו, קוסטה ריקה. אירוח מותאם שבת, תכניות משפחה וחוויות הרריות מותאמות.",
    },
    rooms: {
      title: `חדרים ובקתות | ${BRAND_NAME}`,
      description:
        "סוויטות יוקרה, סוויטות משפחה, וילות הרים ובקתות פרטיות לחיים כשרים בקוסטה ריקה.",
    },
    kosherJewishLife: {
      title: `כשרות וחיי יהדות | ${BRAND_NAME}`,
      description:
        "פרטי הכשרות יאושרו בשיחת התאמה. אירוח מותאם שבת ואפשרות לתיאום צרכים יהודיים מראש בריטריט שלנו בקוסטה ריקה.",
    },
    costaRicaGuide: {
      title: `מדריך קוסטה ריקה | ${BRAND_NAME}`,
      description:
        "מדריך מעשי להרים בקוסטה ריקה — טבע, מסלולים, אטרקציות, מזג אוויר וחוויות משפחתיות בתיאום דרך הריטריט.",
    },
    faq: {
      title: `שאלות נפוצות | ${BRAND_NAME}`,
      description:
        "תשובות על כשרות, שבת, משפחות, הגעה לקוסטה ריקה, חדרים, ארוחות, הזמנה ופרטיות.",
    },
    contact: {
      title: `יצירת קשר | ${BRAND_NAME}`,
      description:
        "פנו לצוות הקונסיירז' לגבי זמינות, קבוצות ותכנון ריטריט כשר מותאם אישית.",
    },
  },
};

export function pathnameToSeoKey(pathname: string): SeoPageKey {
  const routes: Record<string, SeoPageKey> = {
    "/": "home",
    "/rooms": "rooms",
    "/kosher-jewish-life": "kosherJewishLife",
    "/costa-rica-guide": "costaRicaGuide",
    "/faq": "faq",
    "/contact": "contact",
  };
  return routes[pathname] ?? "home";
}
