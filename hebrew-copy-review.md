# Hebrew Copy Review

Audit of all Hebrew text currently used on the website.  
Source file: `src/content/siteContent.ts` (`siteContent.he` keys matched to `siteContent.en`).

**Purpose:** Manual rewrite reference only. No copy changes applied in this file.

**Legend — Where it appears:**
- **Navbar** = fixed header (`Navbar.tsx`)
- **Discover** = home landing page (`DiscoverView.tsx`)
- **Planner** = retreat builder form (`RetreatBuilder.tsx`)
- **Chat** = concierge AI view (`ConciergeChat.tsx`)
- **Inquiries** = my inquiries dashboard (`App.tsx`)
- **Footer** = site footer (`App.tsx`)

---

## Header

| Key | Hebrew (current) | English (source) | Where it appears |
|---|---|---|---|
| `nav.logo` | The Sanctuary | The Sanctuary | Navbar — logo text (unchanged brand name) |
| `nav.discover` | גלו | Discover | Navbar — Discover tab |
| `nav.planner` | התאמה אישית | Personalize Retreat | Navbar — planner tab |
| `nav.inquiries` | הפניות שלי | My Inquiries | Navbar — inquiries tab |
| `nav.chat` | קונסיירז' AI | Luxury Concierge AI | Navbar — chat tab |
| `nav.cta` | בדקו זמינות | Request Availability | Navbar — primary CTA button (desktop + mobile menu) |

---

## Hero

| Key | Hebrew (current) | English (source) | Where it appears |
|---|---|---|---|
| `hero.eyebrow` | קרטגו, קוסטה ריקה | Cartago, Costa Rica | Discover — hero eyebrow above H1 |
| `hero.titleBefore` | ריטריט כשר יוקרתי ב | A Luxury Kosher Retreat in the  | Discover — hero H1 (part 1) |
| `hero.titleEmphasis` | הרי | Mountains | Discover — hero H1 (italic emphasis) |
| `hero.titleAfter` |  קוסטה ריקה |  of Costa Rica | Discover — hero H1 (part 3) |
| `hero.ctaPrimary` | גלו והתאימו אישית | Explore & Customize | Discover — hero primary button |
| `hero.ctaSecondary` | גלו את המיקום | Discover location | Discover — hero secondary link → `#location` |
| `hero.scroll` | גלילה | Scroll | Discover — scroll indicator label |
| `heroImageAlt` | וילת Altura Kosher Retreat עם נוף לעמק טרופי ירוק בשקיעה | Altura Kosher Retreat villa overlooking a lush tropical valley at sunset | Discover — hero background image alt text |

**Composed H1 (full string):**  
- HE: `ריטריט כשר יוקרתי ב` + `*הרי*` + ` קוסטה ריקה`  
- EN: `A Luxury Kosher Retreat in the ` + `*Mountains*` + ` of Costa Rica`

---

## Promise Section

| Key | Hebrew (current) | English (source) | Where it appears |
|---|---|---|---|
| `promise.eyebrow` | אירוח ללא פשרות | Unrivaled Hospitality | Discover — `#retreat` section eyebrow |
| `promise.title` | מגיעים. הכול כבר מוכן. | Arrive. Everything is already handled. | Discover — promise H2 |
| `promise.body` | מכשרות גלאט 24/7 ועד הרפתקאות משפחתיות מרגשות — אנחנו דואגים לכל פרט, כדי שלא תצטרכו להרים אצבע. | From strict 24/7 Glatt Kosher certification to thrilling family adventures, we curate every precise detail so you don't have to lift a finger. | Discover — promise intro paragraph |
| `promise.cards[0].title` | אוכל כשר | Kosher Dining | Discover — promise card 1 title |
| `promise.cards[0].body` | גלאט כשר, חלב ישראל ופת ישראל. שילוב של טעמים טרופיים אורגניים מקומיים עם מסורת שבת מעולה. | Glatt Kosher, Chalav Yisrael, and Pas Yisrael. A culinary fusion of local organic tropical flavors and traditional Shabbat excellence. | Discover — promise card 1 body |
| `promise.cards[1].title` | מניינים יומיים | Daily Minyanim | Discover — promise card 2 title |
| `promise.cards[1].body` | בית כנסת במקום עם ספרי תורה ייעודיים, תפילות יומיות (שחרית, מנחה וערבית) וקהילה חמה של מטיילים בעלי ערכים משותפים. | An onsite Shul housing custom Sefer Torahs, daily services (Shacharit, Mincha, Maariv), and a warm community of like-minded travelers. | Discover — promise card 2 body |
| `promise.cards[2].title` | תכניות למשפחות | Family Programs | Discover — promise card 3 title |
| `promise.cards[2].body` | מחנות גשם מוקדשות וטרקלין לבני נוער, המעוררים את ילדיכם ללמידה, לערכים ולכיף — בזמן שאתם מוצאים את השקט שלכם. | Dedicated rainforest camps and teen active lounges designed to engage your children with learning, values, and fun while you find your own peace. | Discover — promise card 3 body |

---

## Location

| Key | Hebrew (current) | English (source) | Where it appears |
|---|---|---|---|
| `location.eyebrow` | מקדש ההרים בקרטגו | Cartago Highland Sanctuary | Discover — `#location` dark split section eyebrow |
| `location.title` | צד שקט יותר של קוסטה ריקה. | A quieter side of Costa Rica. | Discover — location H2 |
| `location.body` | רחוק מקווי החוף הלחים, הרי קרטגו הגבוהים מציעים אקלים אלפיני נעים וקריר. כאן, הר הגעש איראסו המרהיב שורר מעל יערות עננים ירוקים ועמקים אזמרגד — נוף של שלווה עמוקה, מושלם להתבוננות רוחנית ולחיבור משפחתי. | Away from the humid coastlines, the high mountains of Cartago offer a crisp, spring-like alpine climate. Here, the majestic Irazú Volcano looms over lush, misty cloud forests and emerald valleys—a landscape of profound serenity perfect for spiritual reflection and deep family connection. | Discover — location body paragraph |
| `location.pin` | קרטגו, קוסטה ריקה (גובה אלפיני) | Cartago, Costa Rica (alpine elevation) | Discover — location pin row |
| `location.imageAlt` | יער עננים ירוק בקרטגו בשעות הזריחה עם ציפורים טרופיות | Lush Cartago cloud forest mountains at sunrise with tropical birds in flight | Discover — location image alt |

---

## Scroll Story

| Key | Hebrew (current) | English (source) | Where it appears |
|---|---|---|---|
| `scrollStory.imageAlt` | רגעים כשרים יוקרתיים בקוסטה ריקה | Montage of luxury kosher moments in Costa Rica | Discover — sticky scroll-story image alt |
| `scrollStory.imageEyebrow` | חופשה מותאמת אישית | BESPOKE ESCAPE | Discover — caption on scroll-story image |
| `scrollStory.imageTitle` | האירוח המוקפד שלנו | Our Curated Hospitality | Discover — caption title on scroll-story image |
| `scrollStory.stages[0].label` | שלב 01 | STAGE 01 | Discover — scroll story stage 1 label |
| `scrollStory.stages[0].title` | הגעה חלקה | Seamless Arrival | Discover — scroll story stage 1 title |
| `scrollStory.stages[0].body` |  הסעה פרטית פרימיום משדה התעופה הבינלאומי של סן חוסה ישירות אל הריטריט בהרים. נהג מקומי פרטי דובר אנגלית ממתין לכם עם מגבות רעננות וכיבוד כשר. | A premium private transfer from San José International Airport directly up to our mountain retreat. Your private, English-speaking local driver awaits you with fresh towels and kosher refreshments. | Discover — scroll story stage 1 body *(note: leading space in Hebrew string)* |
| `scrollStory.stages[1].label` | שלב 02 | STAGE 02 | Discover — scroll story stage 2 label |
| `scrollStory.stages[1].title` | מקדש ללא פשרות | Uncompromised Sanctuary | Discover — scroll story stage 2 title |
| `scrollStory.stages[1].body` | היכנסו לווילות פרטיות או לסוויטות בעננים, שתוכננו מהיסוד עם החיים הרוחניים שלכם בראש — פריסות מותאמות, כיורים כפולים, מטבחונים כשרים ומערכות שבת אלקטרוניות. | Step into private villas or cloud suites designed from inception with your spiritual life in mind, featuring custom layouts, dual sinks, kosher kitchenettes, and modern electronic Sabbath key override configurations. | Discover — scroll story stage 2 body |
| `scrollStory.stages[2].label` | שלב 03 | STAGE 03 | Discover — scroll story stage 3 label |
| `scrollStory.stages[2].title` | ארוחות כשרות ברמה עולמית | Master Chef Fine-Dining | Discover — scroll story stage 3 title |
| `scrollStory.stages[2].body` | טעמו שלוש ארוחות gourmet ביום. צוותי המטבח המובילים משלבים תוצרת אדמת געשית מקומית, לבבות דקל ובשר כשר פרימיום — תחת השגחת משגיח תמידי. | Savor three gourmet meals each day. Master culinary teams merge Costa Rican volcanic soil produce, exotic palm hearts, and premium kosher meats, under strict Mashgiach Temidi supervision. | Discover — scroll story stage 3 body |
| `scrollStory.stages[3].label` | שלב 04 | STAGE 04 | Discover — scroll story stage 4 label |
| `scrollStory.stages[3].title` | שבת של הרמוניה | Immersive Shabbat Harmony | Discover — scroll story stage 4 title |
| `scrollStory.stages[3].body` | התחברו לעומק בשבת. היכנסו למקום קדוש וללא טלפונים, מוקף בערפל מתגלגל — עם סעודות חגיגיות, הרצאות מעוררות השראה, תפילה יפה וזמירות מסורתיות. | Connect deeply on Shabbat. Enter a sacred, phone-free haven cradled by rolling mist, communal festive dining, Inspiring guest lectures, beautiful Tefillah, and traditional melodies. | Discover — scroll story stage 4 body |
| `scrollStory.stages[4].label` | שלב 05 | STAGE 05 | Discover — scroll story stage 5 label |
| `scrollStory.stages[4].title` | טיולים מוקפדים | Curated Excursions | Discover — scroll story stage 5 title |
| `scrollStory.stages[4].body` | גלו טיפוסים פרטיים לפסגות געשיות, מסלולי zipline מותאמים או שייט קטמרן לשקיעה. כל מסלול מכבד את זמני התפילה ואת מגבלות הכשרות. | Discover private volcanic climbs, custom zipline runs, or coastal catamaran sails. Your private tour itineraries respect both prayer schedules and kashrut limits with customized timing. | Discover — scroll story stage 5 body |

---

## Kosher Dining

| Key | Hebrew (current) | English (source) | Where it appears |
|---|---|---|---|
| `dining.eyebrow` | מצוינות קולינרית | Culinary Excellence | Discover — `#dining` section eyebrow |
| `dining.title` | אוכל כשר, ללא פשרות. | Kosher dining, without compromise. | Discover — dining H2 |
| `dining.body` | צוות הקולינריה המוביל שלנו, בהובלת שפים בעלי שם עולמי תחת השגחת משגיח תמידי, מכין תפריטים יומיים החוגגים את שפע קוסטה ריקה. תוצרת אורגנית טרייה מהשדה אל השולחן, לצד חלבונים כשרים מיובאים — חוויה שמתחרה במסעדות עלית בעולם. | Our world-class culinary team, led by internationally acclaimed chefs under strict on-site Mashgiach Temidi supervision, crafts daily menus that celebrate the rich bounty of Costa Rica. Fresh, organic farm-to-table produce meets premium imported proteins, creating a fine-dining experience that rivals elite restaurants globally. | Discover — dining intro |
| `dining.checklist[0].title` | תעודת גלאט כשר מחמירה | Strict Glatt Kosher Certification | Discover — dining checklist item 1 title |
| `dining.checklist[0].body` | משגיח במקום המבטיח כשרות 24/7, עם אפשרות לחלב ישראל ופת ישראל. | On-site Mashgiach ensuring kashrut 24/7, with option for Chalav Yisrael and Pas Yisrael. | Discover — dining checklist item 1 body |
| `dining.checklist[1].title` | מהשדה אל השולחן — אדמת געש | Volcanic Farm-to-Table | Discover — dining checklist item 2 title |
| `dining.checklist[1].body` | ירקות, פירות יער, עשבי תיבול וקפה מהרים — מגידולים אורגניים מחוות שכנות. | Locally picked organic greens, berries, herbs, and highland coffee sourced from neighboring estates. | Discover — dining checklist item 2 body |
| `dining.imageAlt` | סטייק כשר gourmet עם ירקות קלו ונוף עמק הרים | Gourmet kosher steak with roasted vegetables and mountain valley views | Discover — dining image alt |

---

## Jewish Life

| Key | Hebrew (current) | English (source) | Where it appears |
|---|---|---|---|
| `jewishLife.eyebrow` | כוונה רוחנית | Spiritual Intention | Discover — Jewish life section eyebrow |
| `jewishLife.title` | בנוי סביב קצב החיים היהודי. | Built around the rhythm of Jewish life. | Discover — Jewish life H2 |
| `jewishLife.subtitle` | מרוממים כל רגע ביופי קדוש. | Elevating every single moment with sacred beauty. | Discover — Jewish life subtitle |
| `jewishLife.cards[0].title` | בית הכנסת The Sanctuary | The Sanctuary Synagogue | Discover — Jewish life card 1 title |
| `jewishLife.cards[0].body` | מרכז התפילה שלנו, עם נוף פנורמי לעמק הירוק, גימורים מעץ ארז יוקרתיים ואווירה של שלווה. | Our core gathering sanctuary for prayer, featuring panoramic glass vistas of the green valley, custom high-end cedar wood finishes, and a peaceful atmosphere. | Discover — Jewish life card 1 body |
| `jewishLife.cards[1].title` | שבת ב-Altura | Shabbat at Altura | Discover — Jewish life card 2 title |
| `jewishLife.cards[1].body` | חוויית שבת מלאה ומעמיקה — מסעודות קהילתיות מרהיבות ועד השקט המוחלט של מקלט אלפיני ללא טלפונים. | A truly immersive Shabbat experience. From majestic communal banquets to the total, peaceful quietude of a phone-free alpine hideaway. | Discover — Jewish life card 2 body |
| `jewishLife.cards[2].title` | שיעורים ואורחים מלומדים | Shiurim & visiting Scholars | Discover — Jewish life card 3 title |
| `jewishLife.cards[2].body` | העמיקו עם מלומדים מבקרים וקבוצות לימוד תורה מותאמות אישית לרמת העניין והשמירה שלכם. | Engage your mind with visiting scholars, and bespoke Torah study groups customized to your level of interest or observance. | Discover — Jewish life card 3 body |
| `jewishLife.imageAlt` | גביע קידוש מכסף וחלה מקולפת לשבת | Silver Kiddush Cup and Braided Challah for Shabbat | Discover — circular Shabbat image alt |

---

## Family Programming

| Key | Hebrew (current) | English (source) | Where it appears |
|---|---|---|---|
| `family.eyebrow` | לכל הדורות | For All Generations | Discover — family section eyebrow |
| `family.title` | חופשה אמיתית ושקטה גם להורים. | A real, peaceful vacation for parents, too. | Discover — family H2 |
| `family.heroBadge` | פעילויות כלולות | ACTIVITIES INCLUDED | Discover — family hero image badge |
| `family.heroTitle` | מחנה ילדים ביער הגשם | Kids' Rainforest Camp | Discover — family hero image title |
| `family.heroBody` | טיולי טבע מלווים, ביקור בבית הפרפרים, שיעורי בוטניקה ופעילויות במגרש — המלמדים ילדים על אקולוגיה טרופית ברמת בטיחות גבוהה. | Supervised nature walks, butterfly house exploration, botanical lessons, and outdoor playground activities that teach children tropical ecology through high safety standards. | Discover — family hero image body |
| `family.heroImageAlt` | ילדים חוקרים פרפרים במסלול טבע טרופי | Children exploring butterflies on tropical nature walk | Discover — family hero image alt |
| `family.miniCards[0].label` | 01 / גן | 01 / NURSERY | Discover — family mini card 1 label |
| `family.miniCards[0].title` | מטפלות אישיות | Bespoke Nannies | Discover — family mini card 1 title |
| `family.miniCards[1].label` | 02 / פנאי | 02 / LEISURE | Discover — family mini card 2 label |
| `family.miniCards[1].title` | טרקלין לבני נוער | Active Teen Lounge | Discover — family mini card 2 title |
| `family.miniCards[2].label` | 03 / מופעים | 03 / SHOWS | Discover — family mini card 3 label |
| `family.miniCards[2].title` | מופעים משפחתיים | Nightly Family Shows | Discover — family mini card 3 title |
| `family.miniCards[3].label` | 04 / גילוי | 04 / DISCOVER | Discover — family mini card 4 label |
| `family.miniCards[3].title` | טיולי געש משפחתיים | Family Volcanic Treks | Discover — family mini card 4 title |

---

## In-Hotel Experiences (Carousel)

| Key | Hebrew (current) | English (source) | Where it appears |
|---|---|---|---|
| `carousel.eyebrow` | קנבס The Sanctuary | The Sanctuary Canvas | Discover — carousel section eyebrow |
| `carousel.title` | יוקרה בהישג יד. | Luxury at your fingertips. | Discover — carousel H2 |
| `carousel.items[0].label` | מים | AQUATICS | Discover — carousel card 1 label |
| `carousel.items[0].title` | בריכת עננים אינסוף | Infinity Cloud Pool | Discover — carousel card 1 title |
| `carousel.items[0].alt` | בריכת עננים אינסוף בשקיעה | Infinity cloud pool at sunset | Discover — carousel card 1 image alt |
| `carousel.items[1].label` | מנוחה | RELAXATION | Discover — carousel card 2 label |
| `carousel.items[1].title` | סpa אבן געש | Lava Stone Spa | Discover — carousel card 2 title |
| `carousel.items[1].alt` | חדר טיפולי סpa מאבן געש | Lava stone spa treatment room | Discover — carousel card 2 image alt |
| `carousel.items[2].label` | ערבים מכוכבים | STARRY EVENINGS | Discover — carousel card 3 label |
| `carousel.items[2].title` | טרקלין Starlight | Starlight Lounge | Discover — carousel card 3 title |
| `carousel.items[2].alt` | בריכת נופש טרופית מוקפת דקלים וגבעות ג'ונגל | Tropical resort pool surrounded by lush palm trees and jungle hillside | Discover — carousel card 3 image alt |
| `carousel.items[3].label` | בריאות | WELLNESS | Discover — carousel card 4 label |
| `carousel.items[3].title` | מרפסת יוגה לזריחה | Sunrise Yoga Deck | Discover — carousel card 4 title |
| `carousel.items[3].alt` | לodge הרים עם נוף לעמקים ירוקים וגבעות טרופיות | Mountain lodge overlooking lush green valleys and tropical hills | Discover — carousel card 4 image alt |
| `carousel.items[4].label` | הגעה | ARRIVAL | Discover — carousel card 5 label |
| `carousel.items[4].title` | שדרת דקלים | Palm-Lined Drive | Discover — carousel card 5 title |
| `carousel.items[4].alt` | שדרה ירוקה מוקפת דקלים המובילה לווילה עם גג קש | A lush, palm-lined driveway leading through tropical grounds toward a thatched-roof villa | Discover — carousel card 5 image alt |
| `carousel.items[5].label` | נופים | VISTAS | Discover — carousel card 6 label |
| `carousel.items[5].title` | מרפסת הרים בערפל | Misty Mountain Balcony | Discover — carousel card 6 title |
| `carousel.items[5].alt` | נוף הרים טרופיים מערפל ממרפסת עם מעקה לבן | A scenic view of misty tropical mountains from a white-railed balcony | Discover — carousel card 6 image alt |

---

## Costa Rica Experiences (Bento Grid)

| Key | Hebrew (current) | English (source) | Where it appears |
|---|---|---|---|
| `experiences.eyebrow` | הרפתקאות אלפיניות | Alpine Adventures | Discover — `#experiences` section eyebrow |
| `experiences.title` | הרפתקה, מותאמת לשומרי מצוות. | Adventure, curated for the observant. | Discover — experiences H2 |
| `experiences.subtitle` | טיולים פרטיים שמכבדים את הכשרות ואת לוח הזמנים שלכם. | Private tours where your kashrut and scheduling are always respected. | Discover — experiences subtitle |
| `experiences.cards[0].badge` | טיול פסגה פרטי | Private Peak Tour | Discover — bento card 1 badge |
| `experiences.cards[0].title` | משלחת ל הר איראסו | Irazú Volcano Expedition | Discover — bento card 1 title |
| `experiences.cards[0].alt` | מכתש הר הגעש איראסו | Irazu Volcano Crater | Discover — bento card 1 image alt |
| `experiences.cards[1].badge` | טיול מבודד | Secluded Hike | Discover — bento card 2 badge |
| `experiences.cards[1].title` | מפלי מים סודיים | Secret Waterfalls | Discover — bento card 2 title |
| `experiences.cards[1].alt` | מפל מים סודי | Secret Waterfall | Discover — bento card 2 image alt |
| `experiences.cards[2].badge` | ריגוש | Thrills | Discover — bento card 3 badge |
| `experiences.cards[2].title` | מסלול Zipline ביער | Jungle Canopy Tour | Discover — bento card 3 title |
| `experiences.cards[2].alt` | מסלול zip line ביער הג'ונגל | Jungle Canopy Zip line | Discover — bento card 3 image alt |
| `experiences.cards[3].badge` | בריחה לים | Ocean Escape | Discover — bento card 4 badge |
| `experiences.cards[3].title` | שייט שקיעה פרטי | Private Sunset Sail | Discover — bento card 4 title |
| `experiences.cards[3].alt` | שייט קטמרן בשקיעה | Sunset catamaran cruise | Discover — bento card 4 image alt |

---

## Rooms and Villas

| Key | Hebrew (current) | English (source) | Where it appears |
|---|---|---|---|
| `rooms.eyebrow` | חדרי יוקרה | Luxury Chambers | Discover — `#rooms` section eyebrow |
| `rooms.title` | נוחות לזוגות ולקבוצות. | Comfort for couples and groups. | Discover — rooms H2 |
| `rooms.body` | כל סוויטה ווילה תוכננו בקפידה עם אפשרות להפרדת מיטות, מתקני מטבח כשר ומערכות תואמות שבת. | Every sanctuary suite and villa is thoroughly designed with separate bedding capabilities, kosher kitchen amenities, and Sabbath-compliant systems. | Discover — rooms intro |
| `rooms.cta` | הגדירו והזמינו לינה | Configure & Book Accommodations | Discover — rooms header text link |
| `rooms.fromPrice` | החל מ- | From | Discover — room card price prefix |
| `rooms.perNight` |  / לילה | / Night | Discover — room card price suffix |
| `rooms.selectPlanner` | בחרו במתכנן | Select in Planner | Discover — room card button |
| `rooms.items.panorama-villa.name` | וילת Panorama | The Panorama Villa | Discover + Planner — Panorama Villa name |
| `rooms.items.panorama-villa.category` | אוסף הווילות | Villa Collection | Discover + Planner — Panorama Villa category |
| `rooms.items.panorama-villa.description` | יצירת מופת אדריכלית בת 4 חדרי שינה, עם תקרות ארז גבוהות, נוף מרהיב ל הר הגעש, בריכת שחייה פרטית מחוממת ומטבחון כשר מצויד עם כיורים כפולים. | 4-Bedroom architectural masterpiece with high-vaulted cedar ceilings, breathtaking volcano views, a private heated plunge pool, and a fully equipped kosher kitchenette with double sinks. | Discover + Planner — Panorama Villa description |
| `rooms.items.panorama-villa.features[0]` | בריכה פרטית מחוממת | Private Heated Pool | Discover — Panorama feature pill 1 |
| `rooms.items.panorama-villa.features[1]` | מטבח כשר מצויד | Fully Equipped Kosher Kitchen | Discover — Panorama feature pill 2 |
| `rooms.items.panorama-villa.features[2]` | מרפסה פנורמית | Panoramic Balcony | Discover — Panorama feature pill 3 |
| `rooms.items.panorama-villa.features[3]` | משרת אישי | On-site Butler | *(stored, not shown on Discover card — max 3 pills)* |
| `rooms.items.panorama-villa.features[4]` | הגדרות מנורות שבת | Shabbat Lamp Configurations | *(stored, not shown on Discover card — max 3 pills)* |
| `rooms.items.cloud-forest-suite.name` | סוויטת Cloud Forest | Cloud Forest Suite | Discover + Planner — Cloud Forest Suite name |
| `rooms.items.cloud-forest-suite.category` | סוויטות | Suites | Discover + Planner — Cloud Forest category |
| `rooms.items.cloud-forest-suite.description` | מקלט אינטימי ושקט לזוגות, עם טקסטורות אלון ופשתן איכותיות, מקלחת גשם חיצונית פרטית וטרסת גינה רחבה עם נוף לעמק. | An intimate, quiet retreat for couples featuring high-quality oak and linen textures, a private outdoor rain shower, and an expansive garden terrace directly overlooking the valley. | Discover + Planner — Cloud Forest description |
| `rooms.items.cloud-forest-suite.features[0]` | טרסת גינה פרטית | Private Garden Terrace | Discover — Cloud Forest feature pill 1 |
| `rooms.items.cloud-forest-suite.features[1]` | מקלחת גשם חיצונית | Outdoor Rain Shower | Discover — Cloud Forest feature pill 2 |
| `rooms.items.cloud-forest-suite.features[2]` | מיטות נפרדות/זוגיות | Separable Twin/King Bedding | Discover — Cloud Forest feature pill 3 |
| `rooms.items.cloud-forest-suite.features[3]` | בר אסpresso כשר | Premium Kosher Espresso Bar | *(stored, not shown on Discover card)* |
| `rooms.items.cloud-forest-suite.features[4]` | מצעים יוקרתיים | Luxury Linen Linings | *(stored, not shown on Discover card)* |

---

## Program Options

| Key | Hebrew (current) | English (source) | Where it appears |
|---|---|---|---|
| `programs.eyebrow` | עונות מותאמות | Bespoke Seasons | Discover — `#programs` section eyebrow |
| `programs.title` | לוח שנה של Sanctuary. | A Calendar of Sanctuary. | Discover — programs H2 |
| `programs.subtitle` | חבילות עונתיות מיוחדות לאורך השנה היהודית. | Special seasonal packages throughout the Jewish year. | Discover — programs subtitle |
| `programs.cards[0].title` | פסח | Passover | Discover — program card 1 title |
| `programs.cards[0].body` | סeder אולטימטיבי תחת כוכבי הקוואטר. תוכניות קולינריות גלאט כשר לפesach, מחנות ילדים ומלומדים — הכול כלול. | The ultimate Seder under the equatorial stars. Fully inclusive premium Glatt Kosher for Pesach culinary programs, kids camps, and scholars. | Discover — program card 1 body |
| `programs.cards[0].cta` | בקשו מחירי פסח | Request Passover Rates | Discover — program card 1 link |
| `programs.cards[1].title` | סוכות | Sukkot | Discover — program card 2 title |
| `programs.cards[1].body` | סעדו בסוכה ההררית המרהיבה שלנו עם נוף לעמקים אזמרגד. תפילות יפות, קונסיירז' לulav ואתrog, ופעילויות חול המoed. | Dine in our majestic custom mountain Sukkah overlooking the emerald valleys. Beautiful Tefillot, lulav & etrog concierge, and intermediate activities. | Discover — program card 2 body |
| `programs.cards[1].cta` | הזמינו חבילת סוכות | Book Sukkot package | Discover — program card 2 link |
| `programs.cards[2].title` | ריטריטים חורפיים | Winter Retreats | Discover — program card 3 title |
| `programs.cards[2].body` | תהנו משמש הרים צלולה בחורף הצפוני. שבועות פעילים מותאמים למחנות משפחתיים ולמשלחות zip מרגשות. | Enjoy crisp highland sun during the cold Northern winter. Specialized active weeks tailored for family camps and exciting zip expeditions. | Discover — program card 3 body |
| `programs.cards[2].cta` | למידע נוסף | Learn More | Discover — program card 3 link |

---

## Trust Section

| Key | Hebrew (current) | English (source) | Where it appears |
|---|---|---|---|
| `trust.title` | הפרטים חשובים. אנחנו מתכננים אותם. | The details matter. We plan for them. | Discover — trust section H2 |
| `trust.stats[0].value` | 100% | 100% | Discover — trust stat 1 value *(unchanged)* |
| `trust.stats[0].label` | תעודת גלאט כשר | Glatt Kosher Certification | Discover — trust stat 1 label |
| `trust.stats[1].value` | 24/7 | 24/7 | Discover — trust stat 2 value *(unchanged)* |
| `trust.stats[1].label` | קונסיירז' ייעודי | Dedicated Concierge | Discover — trust stat 2 label |
| `trust.stats[2].value` | פרטי | Private | Discover — trust stat 3 value |
| `trust.stats[2].label` | הסעות שדה תעופה | Bespoke Airport Transfers | Discover — trust stat 3 label |
| `trust.stats[3].value` | מאובטח | Secure | Discover — trust stat 4 value |
| `trust.stats[3].label` | אחוזה וולקנית פרטית | Private Volcanic Estate | Discover — trust stat 4 label |

---

## Final CTA

| Key | Hebrew (current) | English (source) | Where it appears |
|---|---|---|---|
| `finalCta.eyebrow` | התחילו את המסע | Begin your journey | Discover — final CTA eyebrow |
| `finalCta.title` | חוו יוקרה מוחלטת. | Experience absolute luxury. | Discover — final CTA H2 |
| `finalCta.body` | מתכנני הנסיעות היוקרתיים שלנו והמשגיחים המוסמכים במקום מוכנים לתאם את מקדש ההרים המותאם אישית שלכם. | Our luxury travel planners and certified on-site mashgichim are ready to coordinate your customized mountain sanctuary. | Discover — final CTA body |
| `finalCta.cta` | פתחו את מתכנן הריטריט והמחשבון | Open Retreat Planner & Calculator | Discover — final CTA button |

---

## Footer

| Key | Hebrew (current) | English (source) | Where it appears |
|---|---|---|---|
| `footer.brand` | The Sanctuary | The Sanctuary | Footer — brand heading *(unchanged)* |
| `footer.description` | חוויית ריטריט כשר יוקרתית ומותאמת אישית, בין הרי קרטגו הבתוליים בקוסטה ריקה. | A bespoke, ultra-luxury Kosher Retreat Experience nestled in the pristine mountains of Cartago, Costa Rica. | Footer — brand description |
| `footer.badges[0]` | גלאט כשר 24/7 | Glatt Kosher 24/7 | Footer — trust badge 1 |
| `footer.badges[1]` | שומר שבת | Shabbat Observant | Footer — trust badge 2 |
| `footer.newsletterLabel` | ניוזלטר VIP | Bespoke Newsletter | Footer — newsletter label |
| `footer.emailPlaceholder` | הזינו את האימייל שלכם | Enter your email | Footer — newsletter email placeholder |
| `footer.subscribe` | הרשמה | Subscribe | Footer — newsletter subscribe button |
| `footer.exploreTitle` | גלו | Explore | Footer — explore column heading |
| `footer.exploreLinks[0]` | ההבטחה | The Promise | Footer — explore link 1 |
| `footer.exploreLinks[1]` | המיקום | Location | Footer — explore link 2 |
| `footer.exploreLinks[2]` | אוכל כשר | Kosher Dining | Footer — explore link 3 |
| `footer.exploreLinks[3]` | לינה | Accommodations | Footer — explore link 4 |
| `footer.inquireTitle` | פנו אלינו | Inquire | Footer — inquire column heading |
| `footer.inquireLinks[0]` | חבילה מותאמת | Personalize Package | Footer — inquire link 1 |
| `footer.inquireLinks[1]` | קונסיירז' AI | Bespoke Concierge AI | Footer — inquire link 2 |
| `footer.location` | Cartago Estate, Costa Rica | Cartago Estate, Costa Rica | Footer — address line *(unchanged)* |
| `footer.copyright` | © 2026 The Sanctuary. כל הזכויות שמורות. חוויית ריטריט כשר פרימיום תחת תעודת גלאט כשר מחמירה. | © 2026 The Sanctuary. All rights reserved. A Premium Kosher Retreat Experience under strict Glatt Kosher certification. | Footer — copyright line |

---

## Forms (Retreat Planner)

### Page header

| Key | Hebrew (current) | English (source) | Where it appears |
|---|---|---|---|
| `planner.eyebrow` | מתכנן Sanctuary | Sanctuary Planner | Planner — page eyebrow |
| `planner.title` | התאימו אישית את הריטריט היוקרתי. | Personalize your luxury retreat. | Planner — page H1 |
| `planner.subtitle` | הגדירו תאריכים, פרמטרי כשרות, טיולים ותכניות משפחתיות — וקבלו הצעת מחיר בזמן אמת להגשת פנייה לצוות הייעוץ שלנו. | Configure dates, kosher parameters, excursions, and family programs to generate a real-time price quotation and submit your inquiry to our boutique advisory desk. | Planner — page intro |

### Step titles

| Key | Hebrew (current) | English (source) | Where it appears |
|---|---|---|---|
| `planner.steps.guestDetails` | פרטי אורח | Guest Details | Planner — step 01 heading |
| `planner.steps.accommodation` | בחירת לינה | Select Accommodation | Planner — step 02 heading |
| `planner.steps.kashrut` | כשרות וחיים יהודיים | Kashrut & Jewish Life | Planner — step 03 heading |
| `planner.steps.excursions` | טיולים והרפתקאות | Excursions & Adventures | Planner — step 04 heading |
| `planner.steps.family` | תכניות משפחתיות | Family Programs | Planner — step 05 heading |
| `planner.steps.special` | בקשות מיוחדות והעדפות תזונה | Special Requests & Dietary Preferences | Planner — step 06 heading |

### Field labels

| Key | Hebrew (current) | English (source) | Where it appears |
|---|---|---|---|
| `planner.labels.fullName` | שם מלא | FULL NAME | Planner — guest details field label |
| `planner.labels.email` | כתובת אימייל | EMAIL ADDRESS | Planner — guest details field label |
| `planner.labels.phone` | מספר טלפון | PHONE NUMBER | Planner — guest details field label |
| `planner.labels.season` | עונה / חודש מועדף | PREFERRED SEASON / MONTH | Planner — guest details field label |
| `planner.labels.nights` | מספר לילות | NUMBER OF NIGHTS | Planner — guest details field label |
| `planner.labels.adults` | מבוגרים (13+) | ADULT GUESTS (13+) | Planner — guest details field label |
| `planner.labels.children` | ילדים (0-12) | CHILDREN (0-12) | Planner — guest details field label |
| `planner.labels.supervision` | סטандарטי השגחה | SUPERVISION STANDARDS | Planner — kashrut section label |
| `planner.labels.dailyServices` | שירותים יומיים | DAILY SERVICES | Planner — minyan checkbox group label |
| `planner.labels.shabbatDining` | סעודות שבת קהילתיות | COMMUNAL SHABBAT DINING | Planner — Shabbat dining group label |
| `planner.labels.communalSeats` | הקצאת מקומות: | Communal seat allocations: | Planner — Shabbat seat select prefix |
| `planner.labels.rate` | תעריף | RATE | Planner — accommodation card footer |
| `planner.labels.perNight` |  / לילה | / Night | Planner — price suffix (rooms + estimate) |
| `planner.labels.perPerson` |  / לאדם | / Person | Planner — excursion price suffix |
| `planner.labels.perDay` |  / יום | / Day | Planner — family service price suffix |
| `planner.labels.perNightChild` | ללילה / ילד | PER NIGHT / CHILD | Planner — family service sub-label |
| `planner.labels.estimatedTotal` | סה״כ משוער | ESTIMATED TOTAL | Planner — estimate sidebar total label |
| `planner.labels.subjectReview` | בכפוף לבדיקת יועץ | Subject to advisor review | Planner — estimate sidebar disclaimer |
| `planner.labels.privateTour` | טיול פרטי | PRIVATE TOUR | Planner — excursion card type badge |
| `planner.labels.communal` | קבוצתי | COMMUNAL | Planner — excursion card type badge |

### Placeholders

| Key | Hebrew (current) | English (source) | Where it appears |
|---|---|---|---|
| `planner.placeholders.fullName` | לדוגמה: יonathan כהן | E.g., Johnathan Goldstein | Planner — full name input placeholder |
| `planner.placeholders.email` | example@email.com | goldstein@example.com | Planner — email input placeholder |
| `planner.placeholders.phone` | +972 50-000-0000 | +1 (555) 300-4000 | Planner — phone input placeholder |
| `planner.placeholders.season` | דצמבר 2026 / חנוכה | December 2026 / Chanukah | Planner — season input placeholder |
| `planner.placeholders.specialRequests` | לדוגמה: אנחנו חוגגים יום נישואין כסף. נדרש חלב ישראל בלבד, ונשמח לסיוע בלימוד תורה פרטי לבננו ביום שני בבוקר... | E.g., We are celebrating our silver anniversary. We require Cholav Yisrael strictly and would love assistance arranging a private torah study for our son on Monday morning... | Planner — special requests textarea placeholder |

### Section hints & options

| Key | Hebrew (current) | English (source) | Where it appears |
|---|---|---|---|
| `planner.accommodationHint` | בחרו את החלל האדריכלי המתאים לקבוצה שלכם. כיורים כפולים, חדרי שינה נפרדים ופרמטרים תואמי שבת — משולבים במלואם. | Choose the architectural space that best fits your group. Dual sinks, separate bedroom layouts, and Sabbath-compliant parameters are fully integrated. | Planner — step 02 intro |
| `planner.kashrutHint` | תוכנית הקולינריה שלנו 100% גלאט כשר, פת ישראל וחלב ישראל. ניתן לבחור פרמטרי כשרות מתקדמים למטה. | Our culinary program is 100% strict Glatt Kosher, Pas Yisrael, and Chalav Yisrael. You may choose specialized kashrut parameters below. | Planner — step 03 intro |
| `planner.minyanLabel` | שריון מקומות בבית הכנסת | Reserve seats in Synagogue | Planner — minyan checkbox title |
| `planner.minyanHint` | שריון מרווח מקומות בבית הכנסת לשחרית, מנחה וערבית. כולל סידורים וחומשים. | Secure seat spacing in the Shul for Shacharit, Mincha, and Maariv services. Includes Siddurim & Chumashim availability. | Planner — minyan checkbox description |
| `planner.shabbatHint` | שריון שולחן פרטי בסעודת השבת הקהילתית המרהיבה שלנו, עם גביעי קידוש מכסף וחלות מקולפות. | Reserve a private table at our spectacular Shabbat communal feast with silver kiddush cups and warm braided challah. | Planner — Shabbat dining hint |
| `planner.excursionsHint` | התאימו את החופשה עם מסלולי טבע פרטיים או ריצות zipline. כל טיול מתוזמן סביב מניינים ומגבלות כשרות. | Customize your escape with private nature treks or adrenaline zipline runs. Every excursion is timed around minyan constraints and kashrut limits. | Planner — step 04 intro |
| `planner.familyHint` | מחנות גשם מלווים, טרקלין לבני נוער ושירותי childcare — כדי שתוכלו להירגע בשקט מוחלט. | Supervised luxury rainforest camps, teen lounges, and childcare services so you can unwind with total peace of mind. | Planner — step 05 intro |
| `planner.specialHint` | ספרו לצוות הייעוץ שלנו על צרכי נגישות, השגחות כשרות מיוחדות, אלרגיות או חגיגות (יום נישואין, בר מצווה, reunion משפחתי). | Please let our boutique travel advisory desk know of any physical accessibility needs, custom kashrut supervisions, allergy requests, or specific milestone celebrations (anniversaries, bar mitzvahs, family reunions). | Planner — step 06 intro |
| `planner.adultsOption` | מבוגרים | Adults | Planner — adults select option suffix |
| `planner.childrenOption` | ילדים | Children | Planner — children select option suffix |
| `planner.guestsOption` | אורחים | Guests | Planner — Shabbat seats select option suffix |
| `planner.validationAlert` | אנא מלאו שם, אימייל ומספר טלפון כדי לבקש זמינות. | Please fill in your name, email, and phone number to request availability. | Planner — browser alert on invalid submit |

### Kashrut tiers

| Key | Hebrew (current) | English (source) | Where it appears |
|---|---|---|---|
| `planner.kashrutTiers.glatt-standard.name` | גלאט כשר (CRC / OU) | Glatt Kosher (CRC / OU) | Planner — kashrut tier card 1 title |
| `planner.kashrutTiers.glatt-standard.description` | משגיח תמידי מלא, פת ישראל וחלב ישראל. | Full Mashgiach Temidi, Pas Yisrael, Chalav Yisrael standard. | Planner — kashrut tier card 1 body |
| `planner.kashrutTiers.beit-yosef.name` | סטандарт בית יוסף | Beit Yosef Standard | Planner — kashrut tier card 2 title |
| `planner.kashrutTiers.beit-yosef.description` | בשר בית יוסף ספרדי מחמיר תחת השגחה גבוהה. | Strict Sephardic Beit Yosef meat standards under high supervision. | Planner — kashrut tier card 2 body |
| `planner.kashrutTiers.chassidish.name` | שחיטה חסidית / מחמיר במיוחד | Chassidishe Shechita / Super-Strict | Planner — kashrut tier card 3 title |
| `planner.kashrutTiers.chassidish.description` | סטандартי כשרות חסidיים הגבohים ביותר, אימות hashgacha מותאם. | Highest Hassidishe kashrut standards, custom hashgacha verification. | Planner — kashrut tier card 3 body |

### Excursion activities (planner cards)

| Key | Hebrew (current) | English (source) | Where it appears |
|---|---|---|---|
| `planner.activities.volcano.name` | משלחת ל הר איראסו | Irazú Volcano Expedition | Planner — volcano activity title |
| `planner.activities.volcano.description` | סיור פרטי מguided ב מכתש הפעיל, שדות אפר געשי ופסגות מעורפלות — עם ארוחת צהריים כשרה ארוזה. | Guided private tour exploring the breathtaking active crater, volcanic ash fields, and misty peak heights of Cartago, with custom packed Glatt Kosher lunch boxes. | Planner — volcano activity body |
| `planner.activities.volcano.category` | הרפתקה | Adventure | Planner — volcano activity category badge |
| `planner.activities.waterfalls.name` | טיול למפלי הגשם הסודיים | Secret Rainforest Waterfalls Hike | Planner — waterfalls activity title |
| `planner.activities.waterfalls.description` | גלו מפלים נסתרים בבריכות טורקיז, עם naturalists מקצועיים. מסלולים מותאמים לכושר האורחים. | Explore hidden lush cascades plunging into vibrant turquoise pools, accompanied by professional naturalists. Includes customized paths based on guest stamina. | Planner — waterfalls activity body |
| `planner.activities.waterfalls.category` | טבע | Nature | Planner — waterfalls activity category badge |
| `planner.activities.canopy.name` | מסלול Zipline בח canopy | Jungle Canopy Zipline Tour | Planner — canopy activity title |
| `planner.activities.canopy.description` | עופו בבטחה מעל ח canopy יער העננים. אמצעי בטיחות יוצאי דופן ונוף עמק אזמרגד מלמעלה. | Fly securely above the cloud forest canopies. Exceptional safety measures and breathtaking birds-eye views of the emerald-colored valley below. | Planner — canopy activity body |
| `planner.activities.canopy.category` | אדרנalin | Adrenaline | Planner — canopy activity category badge |
| `planner.activities.sunset-sail.name` | שייט קטמרן פרטי לשקיעה | Private Sunset Catamaran Cruise | Planner — sunset sail activity title |
| `planner.activities.sunset-sail.description` | עלו לסיפon teak נקי של יacht יוקרתי בשקיעה. כולל מנות כשרות גלאט ואפשרות לז pairing יין. | Settle onto clean teak decks of a private luxury yacht at sunset. Includes complete on-board Glatt Kosher hors d'oeuvres and wine pairing options. | Planner — sunset sail activity body |
| `planner.activities.sunset-sail.category` | פנאי | Leisure | Planner — sunset sail activity category badge |

### Family services (planner cards)

| Key | Hebrew (current) | English (source) | Where it appears |
|---|---|---|---|
| `planner.familyServices.kids-camp.name` | מחנה ילדים ביער הגשם | Rainforest Kid's Camp | Planner — kids camp service title |
| `planner.familyServices.kids-camp.description` | טיולי פרפרים מguided, אמנות בוטנית וחקירת טבע טרופית. | Guided butterfly hikes, botanical art, and tropical nature exploration. | Planner — kids camp service body |
| `planner.familyServices.nanny.name` | שירות מטפלת פרטית | Private Nanny Service | Planner — nanny service title |
| `planner.familyServices.nanny.description` | טיפול ילדים יוקרתי מקצועי לפי דרישה. | On-demand, professionally trained luxury childcare. | Planner — nanny service body |
| `planner.familyServices.teen-lounge.name` | גישה לטרקלין בני נוער | Teen Lounge Access | Planner — teen lounge service title |
| `planner.familyServices.teen-lounge.description` | biljard, ארcade, קונסolות משחק וטיולי hiking מguided לבני נוער. | Billiards, arcade, gaming consoles, and guided teen hiking treks. | Planner — teen lounge service body |

### Estimate sidebar

| Key | Hebrew (current) | English (source) | Where it appears |
|---|---|---|---|
| `planner.estimateTitle` | הערכת מחיר מותאמת | Bespoke Estimate | Planner — sticky sidebar heading |
| `planner.nightsAdults` | לילות × | nights × | Planner — estimate line (nights × adults) |
| `planner.adultsWord` | מבוגרים | adults | Planner — estimate adults word |
| `planner.kidsWord` | ילדים | kids | Planner — estimate kids word |
| `planner.supervisionSurcharge` | תוספת השגחה | Supervision Surcharge | Planner — estimate kashrut premium line |
| `planner.curatedExcursions` | טיולים מוקפדים | CURATED EXCURSIONS | Planner — estimate excursions group label |
| `planner.familyProgramming` | תכניות משפחתיות | FAMILY PROGRAMMING | Planner — estimate family group label |
| `planner.inclusionsTitle` | כלול בסטандарт: | Standard Inclusions: | Planner — estimate inclusions bold prefix |
| `planner.inclusionsBody` | 3 ארוחות gourmet גלאט כשר ביום, הסעה משדה התעופה, גישה מלאה לבית הכנסת, מתקני פנאי (בריכת אינסוף, מרפסת יוגה — ללא שייט קatamaran אלא אם נבחר). | 3 Gourmet Glatt Kosher meals daily, airport transfer, full Shul/Synagogue access, on-site leisure amenities (Infinity Pool, Yoga Deck, Catamaran exclusions if selected). | Planner — estimate inclusions body |
| `planner.pledgeTitle` | התחייבות ההזמנה שלנו | Our Booking Pledge | Planner — sidebar pledge box title |
| `planner.pledgeBody` | הגשת הפנייה שומרת על מקומכם בעדיפות. קונסיירז' יוקרתי יצור קשר תוך 24 שעות לסקירת לוח הזמנים, לכיוון בקשות מיוחדות ולסגירת ההזמנה. | Submitting this inquiry holds your priority spot in our retreat. A luxury concierge will contact you via email or phone within 24 hours to review your schedule, fine-tune special requests, and finalize the reservation. | Planner — sidebar pledge box body |

---

## Buttons

Primary action buttons and links pulled from content keys (also listed in their sections above).

| Key | Hebrew (current) | English (source) | Where it appears |
|---|---|---|---|
| `nav.cta` | בדקו זמינות | Request Availability | Navbar CTA |
| `hero.ctaPrimary` | גלו והתאימו אישית | Explore & Customize | Hero primary button |
| `hero.ctaSecondary` | גלו את המיקום | Discover location | Hero secondary link |
| `rooms.cta` | הגדירו והזמינו לינה | Configure & Book Accommodations | Rooms section header link |
| `rooms.selectPlanner` | בחרו במתכנן | Select in Planner | Room card button |
| `programs.cards[0].cta` | בקשו מחירי פסח | Request Passover Rates | Program card button |
| `programs.cards[1].cta` | הזמינו חבילת סוכות | Book Sukkot package | Program card button |
| `programs.cards[2].cta` | למידע נוסף | Learn More | Program card button |
| `finalCta.cta` | פתחו את מתכנן הריטריט והמחשבון | Open Retreat Planner & Calculator | Final CTA button |
| `planner.submit` | שלחו פנייה ושריינו מקום | Submit Inquiry & Reserve Spot | Planner form submit button |
| `footer.subscribe` | הרשמה | Subscribe | Footer newsletter button |
| `inquiries.emptyCta` | פתחו את מתכנן הריטריט | Open Retreat Planner | Inquiries empty state button |
| `inquiries.createNew` | + צרו תוכנית חדשה | + Create New Plan | Inquiries sidebar button |

---

## Microcopy

Status labels, badges, alerts, tooltips, chat strings, and inquiry dashboard copy.

### Concierge Chat

| Key | Hebrew (current) | English (source) | Where it appears |
|---|---|---|---|
| `chat.eyebrow` | סיוע בזמן אמת | Real-time Assistance | Chat — page eyebrow |
| `chat.title` | דesk קונסיירז' AI | Concierge AI Desk | Chat — page H1 |
| `chat.subtitle` | שאלו על כשרות, מניינים, בייבי-sitter, מפלים פרטיים או מזג אוויר הררי. | Inquire about strict kashrut details, on-site minyan schedules, customizable baby-sitting, private waterfall excursions, or volcanic weather. | Chat — page intro |
| `chat.conciergeName` | קונסיירז' The Sanctuary | The Sanctuary Concierge | Chat — header concierge name |
| `chat.conciergeRole` | יועץ אירוח יוקרתי | Elite Hospitality Consultant | Chat — header role subtitle |
| `chat.poweredBy` | מופעל על ידי Gemini | Powered by Gemini | Chat — header badge |
| `chat.loading` | קונסיירז' The Sanctuary מכין הצעות מותאמות... | The Sanctuary Concierge is preparing bespoke suggestions... | Chat — typing/loading indicator |
| `chat.placeholder` | שאלו על כשרות, שבת, חדרים, טיולים ומזג אוויר... | Ask anything about Kashrut, Shabbat, Rooms, Excursions, and Weather... | Chat — message input placeholder |
| `chat.welcome` | שלום וברוכים הבאים. אני "קונסיירז' The Sanctuary", יועץ האירוח היוקרתי האישי שלכם.<br><br>אני לשירותכם המלא לתיאום פרמטרי גלאט כשר, טיולי געש מותאמים ובקשות רוחניות — כאן בהרי קרטגו היפים והצלולים של קוסטה ריקה.<br><br>איך אוכל להתאים אישית את חופשת היוקרה שלכם? שאלו על החדרים, תעודת הכשרות, לוח השבת או טיולי יום. | Shalom and welcome. I am "The Sanctuary Concierge," your personal luxury hospitality advisor.<br><br>I am at your absolute service to coordinate your Glatt Kosher parameters, custom volcano excursions, and spiritual sanctuary requests here in the crisp, beautiful mountains of Cartago, Costa Rica.<br><br>How may I custom-tailor your luxury escape today? Feel free to ask about our rooms, dining certification, Shabbat schedules, or local day trips. | Chat — initial welcome message |
| `chat.errorFallback` | מתנצלים, חלה תקלה קלה בחיבור לדesk. הריטריט הכשר שלנו פתוח במלואו — נשמח לסייע דרך טופס הפנייה! | I apologize, I encountered a brief connection error with the sanctuary desk. Our Glatt Kosher retreat is fully open, and we would be delighted to assist you directly via our retreat inquiry form! Please submit your request there. | Chat — API error fallback message |
| `chat.emptyResponse` | אני כאן לסייע. ספרו לי במה אוכל לעזור. | I am here to assist you. Please let me know how I can help. | Chat — empty API response fallback |
| `chat.suggestions[0]` | מהם סטандарטי הכשרות המחמירים שלכם? | What are your strict Kashrut standards? | Chat — quick suggestion chip 1 |
| `chat.suggestions[1]` | ספרו על מתקני וילת Panorama. | Tell me about the Panorama Villa amenities. | Chat — quick suggestion chip 2 |
| `chat.suggestions[2]` | איך נראית אווירת השבת ב-Altura? | Describe the Shabbat atmosphere at Altura. | Chat — quick suggestion chip 3 |
| `chat.suggestions[3]` | מה מזג האוויר בהרים בקרטagו? | What is the mountain weather like in Cartago? | Chat — quick suggestion chip 4 |
| `chat.suggestions[4]` | האם יש טיולים מותאמים ל הר איראסו? | Are there custom tours to the Irazú Volcano? | Chat — quick suggestion chip 5 |

### My Inquiries Dashboard

| Key | Hebrew (current) | English (source) | Where it appears |
|---|---|---|---|
| `inquiries.eyebrow` | לוח יועץ הנסיעות | Travel advisor Board | Inquiries — page eyebrow |
| `inquiries.title` | הפניות החופשה היוקרתיות שלי. | My luxury escape inquiries. | Inquiries — page H1 |
| `inquiries.subtitle` | עקבו אחר בקשותיכם, הורידו הצעות מחיר, ועקבו אחר הספירה לאחור לחופשה. | Track the progress of your luxury requests, download pre-booking invoices, and monitor active volcanic getaway countdowns. | Inquiries — page intro |
| `inquiries.emptyTitle` | לא נמצאו פניות פעילות | No Active Inquiries Found | Inquiries — empty state title |
| `inquiries.emptyBody` | עדיין לא הגשתם פנייה. בקרו במתכנן הריטריט כדי להתאים את החבילה הראשונה שלכם. | You have not configured or submitted any escape inquiries yet. Visit the retreat planner to customize your first bespoke package. | Inquiries — empty state body |
| `inquiries.submittedLabel` | פניות שהוגשו | SUBMITTED INQUIRIES | Inquiries — sidebar section label |
| `inquiries.statusReview` | בבדיקת יועץ | ADVISOR REVIEW IN PROGRESS | Inquiries — detail status badge |
| `inquiries.submittedOn` | הוגש ב- | Submitted on | Inquiries — detail submission date prefix |
| `inquiries.countdownLabel` | ספירה לאחור ל-Altura | ALTURA ESCAPE COUTNDOWN | Inquiries — countdown stamp label |
| `inquiries.countdownTitle` | מקדש ההרים בקוסטה ריקה ממתין לכם! | Your Costa Rican mountain sanctuary awaits! | Inquiries — countdown stamp title |
| `inquiries.countdownBody` | יועץ נסיעות כשר יוקרתי יצור קשר עם | A luxury kosher travel advisor will reach out to | Inquiries — countdown body (before email) |
| `inquiries.countdownBodyOr` | או | or | Inquiries — countdown body connector |
| `inquiries.countdownBodyEnd` | בקרוב לקביעת מחיר ותאריכים. | shortly to lock in pricing and select exact dates. | Inquiries — countdown body ending |
| `inquiries.daysLabel` | ימים להרפיה | DAYS TO DECOMPRESS | Inquiries — countdown days label |
| `inquiries.specsTitle` | פרטי ההזמנה | RESERVATION SPECIFICATIONS | Inquiries — specs column heading |
| `inquiries.programmingTitle` | תכניות מוקפדות | CURATED PROGRAMMING | Inquiries — programming column heading |
| `inquiries.noActivities` | לא נבחרו טיולים. ניתן לתאם עם היועץ. | No custom excursions selected yet. You can coordinate them with your advisor. | Inquiries — empty activities message |
| `inquiries.specialTitle` | בקשות מיוחדות והעדפות | Special Accommodations & requests | Inquiries — special requests heading |
| `inquiries.costTitle` | הערכת עלות זמנית | PROVISIONAL COST ESTIMATION | Inquiries — cost block label |
| `inquiries.costSubtitle` | חבילת VIP כוללת | All-inclusive VIP Retreat Package | Inquiries — cost package name |
| `inquiries.costNote` | בכפוף למכפילי עונה מקומיים | Subject to local seasonal multipliers | Inquiries — cost footnote |
| `inquiries.glattIncluded` | תעודת גלאט כלולה | Glatt certification included | Inquiries — cost badge |
| `inquiries.primaryContact` | איש קשר: | Primary Contact: | Inquiries — spec row label |
| `inquiries.bespokeDates` | תאריכים: | Bespoke Dates: | Inquiries — spec row label |
| `inquiries.adultGuests` | מבוגרים: | Adult Guests: | Inquiries — spec row label |
| `inquiries.kashrutSelection` | רמת כשרות: | Kashrut Selection: | Inquiries — spec row label |
| `inquiries.adultsSuffix` | מבוגרים | Adults | Inquiries — party size suffix (list + detail) |
| `inquiries.deleteConfirm` | האם אתם בטוחים שברצונכם לבטל פנייה זו? | Are you sure you want to cancel this retreat inquiry? | Inquiries — browser confirm dialog |
| `inquiries.printTitle` | הדפסת הצעת מחיר | Print Estimate Receipt | Inquiries — print button tooltip |
| `inquiries.deleteTitle` | ביטול/מחיקת פנייה | Cancel/Delete Inquiry | Inquiries — delete button tooltip |
| `inquiries.statusPending` | ממתין | Pending | Inquiries — inquiry list status badge *(used when status is Pending)* |

---

## Known Quality Flags (for rewrite pass)

These Hebrew strings contain mixed English, typos, or awkward phrasing worth prioritizing:

| Key | Issue |
|---|---|
| `scrollStory.stages[0].body` | Leading whitespace at start of string |
| `scrollStory.stages[2].body`, `dining.body`, `dining.imageAlt`, `planner.inclusionsBody` | English word `gourmet` embedded |
| `scrollStory.stages[4].body`, `planner.excursionsHint`, `programs.cards[2].body` | English `zipline` / `zip` |
| `programs.cards[0].body` | Broken transliteration: `סeder`, `לפesach` |
| `programs.cards[1].body` | Broken transliteration: `לulav`, `אתrog`, `המoed` |
| `carousel.items[1].title`, `carousel.items[1].alt` | Mixed `סpa` (Latin + Hebrew) |
| `carousel.items[3].alt` | English `lodge` |
| `experiences.cards[0].title`, `planner.activities.volcano.name` | Extra space: `ל הר` |
| `experiences.cards[2].title`, `planner.activities.canopy.name` | English `Zipline` |
| `rooms.items.panorama-villa.description` | Extra space: `ל הר` |
| `rooms.items.cloud-forest-suite.features[3]` | `אסpresso` (Latin s) |
| `planner.labels.supervision` | Typo: `סטандарטי` (mixed script) |
| `planner.familyHint` | English `childcare` |
| `planner.inclusionsBody` | Broken: `קatamaran` |
| `planner.kashrutTiers.chassidish.name`, `.description` | Broken: `חסidית`, `חסidיים`, `הגבohים`, `hashgacha` |
| `planner.activities.*.description` | English fragments: `מguided`, `naturalists`, `ח canopy`, `סיפon`, `יacht`, `pairing` |
| `planner.familyServices.teen-lounge.description` | English: `biljard`, `ארcade`, `קונסolות`, `hiking`, `מguided` |
| `planner.activities.canopy.category` | Typo: `אדרנalin` |
| `chat.title`, `chat.errorFallback` | English: `דesk` |
| `chat.subtitle` | English: `בייבי-sitter` |
| `chat.suggestions[3]` | Typo: `קרטagו` (mixed script) |
| `chat.suggestions[4]` | Extra space: `ל הר` |
| Multiple brand strings | Intentional English retention: `The Sanctuary`, `Altura`, `Panorama`, `Cloud Forest`, `Starlight`, `Sanctuary`, `Gemini`, `CRC / OU` |

---

## Summary

| Section | Hebrew string count (approx.) |
|---|---|
| Header | 6 |
| Hero | 8 |
| Promise | 9 |
| Location | 5 |
| Scroll story | 18 |
| Kosher dining | 8 |
| Jewish life | 9 |
| Family programming | 14 |
| In-hotel experiences (carousel) | 20 |
| Costa Rica experiences | 15 |
| Rooms and villas | 22 |
| Program options | 12 |
| Trust | 9 |
| Final CTA | 4 |
| Footer | 16 |
| Forms (planner) | 78 |
| Buttons | 13 |
| Microcopy (chat + inquiries) | 44 |
| **Total** | **~310 strings** |

---

*Generated from `src/content/siteContent.ts`. Update this file after Hebrew rewrites are applied to the content object.*
