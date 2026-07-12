import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Map,
  UsersRound,
  UtensilsCrossed,
} from "lucide-react";
import { motion } from "motion/react";
import OptimizedImage from "../components/OptimizedImage";
import {
  FadeUp,
  ImageReveal,
  SoftScale,
  SplitImage,
  SplitText,
  StaggerGroup,
  StaggerItem,
} from "../components/motion/PremiumReveal";
import HolidayInquiryForm from "../components/sections/HolidayInquiryForm";
import { useLanguage } from "../context/LanguageContext";
import { LUXURY_EASE, usePremiumMotion } from "../lib/motionPresets";

const PESACH_BASE = "/images/pesach";

const HERO_IMAGE = {
  src: `${PESACH_BASE}/pesach-hero-resort.webp`,
  altEn: "Luxury Passover resort in Costa Rica",
  altHe: "ריזורט יוקרתי לפסח בקוסטה ריקה",
  objectPosition: "center center",
};

const RIBO_IMAGE = `${PESACH_BASE}/ishay-ribo-live.webp`;

const HIGHLIGHT_ICONS = [UtensilsCrossed, BookOpen, UsersRound, Map] as const;
const HIGHLIGHT_ICON_STROKE = 1.35;

const ACTIVITY_MEDIA: Record<
  string,
  { src: string; altEn: string; altHe: string; objectPosition?: string }
> = {
  waterfall: {
    src: `${PESACH_BASE}/waterfall-hikes.webp`,
    altEn: "Tropical waterfall excursion in Costa Rica",
    altHe: "טיול למפל טרופי בקוסטה ריקה",
    objectPosition: "center center",
  },
  zipline: {
    src: `${PESACH_BASE}/zipline-adventures.webp`,
    altEn: "Zip-lining adventure over a tropical jungle in Costa Rica",
    altHe: "חוויית אומגה מעל ג'ונגל טרופי בקוסטה ריקה",
    objectPosition: "center top",
  },
  volcano: {
    src: `${PESACH_BASE}/volcano-excursions.webp`,
    altEn: "Majestic green volcano rising above a tropical lake in Costa Rica",
    altHe: "הר געש ירוק ומרשים מעל אגם טרופי בקוסטה ריקה",
    objectPosition: "center 20%",
  },
  spa: {
    src: `${PESACH_BASE}/spa-wellness.webp`,
    altEn: "Tropical spa wellness treatment in an open-air setting",
    altHe: "טיפול ספא ורוגע בסביבה טרופית פתוחה",
    objectPosition: "center center",
  },
  beach: {
    src: `${PESACH_BASE}/beach-trips.webp`,
    altEn: "Cinematic tropical sunset on a secluded beach with palm trees in Costa Rica",
    altHe: "שקיעה טרופית קולנועית בחוף מבודד עם עצי דקל בקוסטה ריקה",
    objectPosition: "center center",
  },
  kids: {
    src: `${PESACH_BASE}/kids-programs.webp`,
    altEn: "Children’s holiday activity program",
    altHe: "תוכנית פעילות לילדים במהלך החג",
    objectPosition: "center center",
  },
  sports: {
    src: `${PESACH_BASE}/sports-recreation.webp`,
    altEn: "Tropical tennis court for sports and recreation",
    altHe: "מגרש טניס טרופי לספורט ופעילויות",
    objectPosition: "center center",
  },
  evening: {
    src: `${PESACH_BASE}/evening-entertainment.webp`,
    altEn: "Live evening entertainment performance in a tropical resort setting",
    altHe: "מופע ערב חי באווירת ריזורט טרופי",
    objectPosition: "center center",
  },
};

const DINING_MEDIA: Record<
  string,
  { src: string; altEn: string; altHe: string; objectPosition?: string }
> = {
  elegant: {
    src: `${PESACH_BASE}/elegant-dining-experience.webp`,
    altEn: "Elegant kosher dining experience",
    altHe: "חוויית סעודה כשרה ואלגנטית",
    objectPosition: "center center",
  },
  chef: {
    src: `${PESACH_BASE}/gourmet-chef-prepared-meals.webp`,
    altEn: "Gourmet kosher chef-prepared meal",
    altHe: "ארוחת שף כשרה בסגנון גורמה",
    objectPosition: "center center",
  },
  desserts: {
    src: `${PESACH_BASE}/passover-desserts.webp`,
    altEn: "Luxury Passover dessert selection",
    altHe: "קינוחים יוקרתיים כשרים לפסח",
    objectPosition: "center center",
  },
};

export default function PesachPage() {
  const { t, language } = useLanguage();
  const copy = t.pages.pesach;
  const rooms = t.pages.rooms.rooms;
  const { heroInitial, reduceMotion } = usePremiumMotion();
  const textStart = language === "he" ? "end" : "start";
  const textEnd = language === "he" ? "start" : "end";

  return (
    <div className="bg-surface select-text">
      {/* 1. Hero */}
      <section className="relative min-h-[78vh] md:min-h-[88vh] w-full flex items-end overflow-hidden">
        <motion.div
          className="absolute inset-0"
          initial={heroInitial({ scale: 1.06, opacity: 0.92 })}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.25, ease: LUXURY_EASE }}
        >
          <OptimizedImage
            src={HERO_IMAGE.src}
            alt={language === "he" ? HERO_IMAGE.altHe : HERO_IMAGE.altEn}
            priority
            sizes="100vw"
            className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
            style={{ objectPosition: HERO_IMAGE.objectPosition }}
          />
        </motion.div>
        <div className="absolute inset-0 z-[1] bg-black/15" aria-hidden />
        <div
          className="absolute inset-0 z-[1] pointer-events-none"
          style={{
            background:
              language === "he"
                ? "linear-gradient(270deg, rgba(1,78,80,0.48) 0%, rgba(1,78,80,0.22) 40%, rgba(0,0,0,0.06) 70%, rgba(0,0,0,0.02) 100%)"
                : "linear-gradient(90deg, rgba(1,78,80,0.48) 0%, rgba(1,78,80,0.22) 40%, rgba(0,0,0,0.06) 70%, rgba(0,0,0,0.02) 100%)",
          }}
          aria-hidden
        />
        <div className="relative z-10 w-full max-w-container-max mx-auto px-5 sm:px-6 md:px-margin-desktop pb-14 sm:pb-20 pt-32 md:py-28">
          <div className={`max-w-xl ${language === "he" ? "ms-auto text-end" : "me-auto text-start"}`}>
            <motion.span
              initial={heroInitial({ opacity: 0, y: 24 })}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: LUXURY_EASE, delay: reduceMotion ? 0 : 0.12 }}
              className="font-label-caps text-[11px] uppercase tracking-[0.28em] text-secondary-fixed mb-4 block [text-shadow:0_2px_18px_rgba(0,0,0,0.45)]"
            >
              {copy.hero.eyebrow}
            </motion.span>
            <motion.h1
              initial={heroInitial({ opacity: 0, y: 28, filter: "blur(5px)" })}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.95, ease: LUXURY_EASE, delay: reduceMotion ? 0 : 0.28 }}
              className="font-headline-lg text-[2rem] sm:text-4xl md:text-headline-lg text-on-primary-container mb-5 leading-tight [text-shadow:0_4px_28px_rgba(0,0,0,0.45)]"
            >
              {copy.hero.title}
            </motion.h1>
            <motion.p
              initial={heroInitial({ opacity: 0, y: 22 })}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: LUXURY_EASE, delay: reduceMotion ? 0 : 0.45 }}
              className="font-body-lg text-[1.05rem] sm:text-body-lg text-on-primary/80 leading-relaxed mb-8 max-w-md [text-shadow:0_2px_18px_rgba(0,0,0,0.4)]"
            >
              {copy.hero.body}
            </motion.p>
            <motion.div
              initial={heroInitial({ opacity: 0, y: 18 })}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: LUXURY_EASE, delay: reduceMotion ? 0 : 0.58 }}
            >
              <a
                href="#pesach-inquiry"
                className="btn-premium-hover inline-flex bg-secondary text-on-secondary hover:bg-secondary-fixed px-8 py-3.5 font-label-caps text-xs uppercase tracking-[0.16em] rounded-sm shadow-lg"
              >
                {copy.hero.cta}
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Light editorial highlights */}
      <section
        className="relative overflow-hidden bg-surface text-on-surface py-16 md:py-24"
        id="pesach-program"
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='72' height='72' viewBox='0 0 72 72' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%230D3F39' stroke-width='0.6'%3E%3Cpath d='M8 58c10-18 18-28 28-36 8-6 16-10 24-12'/%3E%3Cpath d='M4 64c12-16 22-26 34-34'/%3E%3C/g%3E%3C/svg%3E\")",
            backgroundSize: "72px 72px",
          }}
          aria-hidden
        />
        <div className="relative z-[1] max-w-container-max mx-auto px-5 sm:px-6 md:px-margin-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0 items-start">
            <FadeUp eager className="lg:col-span-5 lg:pe-10 xl:pe-14">
              <span className="font-label-caps text-[11px] uppercase tracking-[0.24em] text-secondary mb-4 block">
                {copy.highlights.eyebrow}
              </span>
              <h2 className="font-headline-lg text-[1.85rem] sm:text-4xl md:text-headline-lg text-primary mb-5 leading-tight">
                {copy.highlights.title}
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed mb-8 max-w-md">
                {copy.highlights.body}
              </p>
              <a
                href="#pesach-activities"
                className="group/cta inline-flex items-center gap-2 font-label-caps text-xs uppercase tracking-[0.16em] text-primary border-b border-secondary pb-1.5 hover:text-teal-dark-hover hover:border-secondary-fixed transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary/50 focus-visible:ring-offset-2"
              >
                {copy.highlights.cta}
                {language === "he" ? (
                  <ArrowLeft
                    className="h-3.5 w-3.5 transition-transform duration-300 group-hover/cta:-translate-x-0.5"
                    strokeWidth={HIGHLIGHT_ICON_STROKE}
                    aria-hidden
                  />
                ) : (
                  <ArrowRight
                    className="h-3.5 w-3.5 transition-transform duration-300 group-hover/cta:translate-x-0.5"
                    strokeWidth={HIGHLIGHT_ICON_STROKE}
                    aria-hidden
                  />
                )}
              </a>
            </FadeUp>

            <StaggerGroup
              eager
              stagger={0.09}
              className={[
                "lg:col-span-7 grid grid-cols-1 sm:grid-cols-2",
                "lg:border-s lg:border-secondary/30 lg:ps-10 xl:ps-14",
              ].join(" ")}
            >
              {copy.highlights.values.map((value, index) => {
                const Icon = HIGHLIGHT_ICONS[index];
                const isEndCol = index % 2 === 1;
                const isBottomRow = index >= 2;
                return (
                  <StaggerItem
                    key={value.title}
                    className={[
                      "group relative flex flex-col text-start px-0 py-7 sm:p-6 md:p-7",
                      index > 0 ? "border-t border-secondary/25 sm:border-t-0" : "",
                      isEndCol ? "sm:border-s sm:border-secondary/25" : "",
                      isBottomRow ? "sm:border-t sm:border-secondary/25" : "",
                    ].join(" ")}
                  >
                    <Icon
                      className="h-[1.35rem] w-[1.35rem] text-secondary mb-3.5 transition-all duration-300 ease-out group-hover:-translate-y-0.5 group-hover:text-secondary-fixed"
                      strokeWidth={HIGHLIGHT_ICON_STROKE}
                      aria-hidden
                    />
                    <div
                      className="mb-3.5 h-px w-7 bg-secondary/45 transition-[width,background-color] duration-300 ease-out group-hover:w-9 group-hover:bg-secondary"
                      aria-hidden
                    />
                    <h3 className="font-headline-sm text-[1.05rem] sm:text-lg text-primary leading-snug mb-2 transition-transform duration-300 ease-out group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5">
                      {value.title}
                    </h3>
                    <p className="font-body-md text-[0.9375rem] text-on-surface-variant leading-relaxed max-w-[17rem]">
                      {value.body}
                    </p>
                  </StaggerItem>
                );
              })}
            </StaggerGroup>
          </div>
        </div>
      </section>

      {/* 3. Activities */}
      <section className="bg-surface py-14 md:py-24" id="pesach-activities">
        <div className="max-w-container-max mx-auto px-5 sm:px-6 md:px-margin-desktop">
          <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
            <FadeUp>
              <span className="font-label-caps text-[11px] uppercase tracking-[0.22em] text-secondary mb-3 block">
                {copy.activities.eyebrow}
              </span>
            </FadeUp>
            <FadeUp delay={0.06}>
              <h2 className="font-headline-lg text-[1.75rem] sm:text-3xl md:text-headline-lg text-primary leading-tight">
                {copy.activities.title}
              </h2>
            </FadeUp>
          </div>

          <StaggerGroup stagger={0.08} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {copy.activities.items.map((item) => {
              const media = ACTIVITY_MEDIA[item.id];
              const alt = language === "he" ? media.altHe : media.altEn;
              return (
                <StaggerItem key={item.id} className="group relative aspect-[4/5] overflow-hidden rounded-sm">
                  <ImageReveal className="absolute inset-0 h-full w-full">
                    <OptimizedImage
                      src={media.src}
                      alt={alt}
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                      style={{ objectPosition: media.objectPosition ?? "center center" }}
                    />
                  </ImageReveal>
                  <div
                    className="absolute inset-0 z-[1] bg-gradient-to-t from-black/75 via-black/20 to-transparent pointer-events-none"
                    aria-hidden
                  />
                  <div className="absolute inset-x-0 bottom-0 z-[2] p-4 sm:p-5 text-start">
                    <h3 className="font-headline-sm text-lg text-on-primary leading-snug [text-shadow:0_2px_12px_rgba(0,0,0,0.45)]">
                      {item.title}
                    </h3>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerGroup>
        </div>
      </section>

      {/* 4. Gourmet dining */}
      <section className="bg-primary-container text-on-primary py-14 md:py-24" id="pesach-dining">
        <div className="max-w-container-max mx-auto px-5 sm:px-6 md:px-margin-desktop">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-14">
            <SplitText side={textStart} eager className="w-full lg:w-[40%]">
              <span className="font-label-caps text-[11px] uppercase tracking-[0.22em] text-secondary-fixed mb-4 block">
                {copy.dining.eyebrow}
              </span>
              <h2 className="font-headline-lg text-[1.85rem] sm:text-4xl text-on-primary-container mb-2 leading-tight">
                {copy.dining.titleLine1}
              </h2>
              <p className="font-headline-lg text-[1.85rem] sm:text-4xl text-on-primary-container mb-6 leading-tight">
                {copy.dining.titleLine2}
              </p>
              <p className="font-body-lg text-body-lg text-on-primary/70 leading-relaxed mb-8 max-w-md">
                {copy.dining.body}
              </p>
              <Link
                to="/kosher-jewish-life"
                className="inline-flex font-label-caps text-xs uppercase tracking-[0.16em] text-secondary-fixed border-b border-secondary-fixed/50 hover:border-secondary-fixed pb-1 transition-colors"
              >
                {copy.dining.cta}
              </Link>
            </SplitText>

            <SplitImage side={textEnd} eager className="w-full lg:w-[60%]">
              <StaggerGroup stagger={0.1} className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 items-stretch">
                {copy.dining.cards.map((card) => {
                  const media = DINING_MEDIA[card.id];
                  const alt = language === "he" ? media.altHe : media.altEn;
                  return (
                    <StaggerItem key={card.id} className="group relative aspect-[3/4] overflow-hidden rounded-sm">
                      <OptimizedImage
                        src={media.src}
                        alt={alt}
                        sizes="(min-width: 1024px) 20vw, (min-width: 640px) 33vw, 100vw"
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                        style={{ objectPosition: media.objectPosition ?? "center center" }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" aria-hidden />
                      <div className="absolute inset-x-0 bottom-0 p-4 text-start">
                        <h3 className="font-headline-sm text-base text-on-primary leading-snug">{card.title}</h3>
                      </div>
                    </StaggerItem>
                  );
                })}
              </StaggerGroup>
            </SplitImage>
          </div>
        </div>
      </section>

      {/* 5. Ishay Ribo */}
      <section className="bg-teal-footer text-on-primary py-14 md:py-24">
        <div className="max-w-container-max mx-auto px-5 sm:px-6 md:px-margin-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <SoftScale className="lg:col-span-7">
              <ImageReveal className="aspect-[16/10] overflow-hidden rounded-sm border border-secondary/30 shadow-xl">
                <OptimizedImage
                  src={RIBO_IMAGE}
                  alt={copy.ribo.imageAlt}
                  sizes="(min-width: 1024px) 58vw, 100vw"
                  className="h-full w-full object-cover"
                />
              </ImageReveal>
            </SoftScale>
            <FadeUp delay={0.08} className="lg:col-span-5">
              <span className="font-label-caps text-[11px] uppercase tracking-[0.22em] text-secondary-fixed mb-3 block">
                {copy.ribo.eyebrow}
              </span>
              <p className="font-label-caps text-xs uppercase tracking-[0.16em] text-secondary-fixed-dim mb-3">
                {copy.ribo.artist}
              </p>
              <h2 className="font-headline-lg text-[1.75rem] sm:text-3xl text-on-primary-container mb-5 leading-tight">
                {copy.ribo.title}
              </h2>
              <p className="font-body-lg text-body-lg text-on-primary/80 leading-relaxed mb-6">{copy.ribo.body}</p>
              <p className="font-label-caps text-[10px] uppercase tracking-wider text-secondary-fixed/85 mb-6 border-t border-secondary/25 pt-4">
                {copy.ribo.note}
              </p>
              <a
                href="#pesach-inquiry"
                className="inline-flex font-label-caps text-xs uppercase tracking-[0.16em] text-secondary-fixed border-b border-secondary-fixed/50 hover:border-secondary-fixed pb-1 transition-colors"
              >
                {copy.ribo.cta}
              </a>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* 6. Rooms */}
      <section className="bg-surface-container py-14 md:py-24">
        <div className="max-w-container-max mx-auto px-5 sm:px-6 md:px-margin-desktop">
          <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
            <FadeUp>
              <span className="font-label-caps text-[11px] uppercase tracking-[0.22em] text-secondary mb-3 block">
                {copy.rooms.eyebrow}
              </span>
            </FadeUp>
            <FadeUp delay={0.06}>
              <h2 className="font-headline-lg text-[1.75rem] sm:text-3xl md:text-headline-lg text-primary mb-4 leading-tight">
                {copy.rooms.title}
              </h2>
            </FadeUp>
            <FadeUp delay={0.1}>
              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">{copy.rooms.body}</p>
            </FadeUp>
          </div>

          <StaggerGroup stagger={0.1} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {rooms.map((room) => (
              <StaggerItem
                key={room.id}
                className="bg-surface border border-border-custom overflow-hidden rounded-sm flex flex-col h-full"
              >
                <div className="relative aspect-[16/11] overflow-hidden">
                  <OptimizedImage
                    src={room.image}
                    alt={room.imageAlt}
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="h-full w-full object-cover"
                    style={{ objectPosition: room.imageObjectPosition }}
                  />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-headline-sm text-lg text-primary mb-2">{room.name}</h3>
                  <p className="font-body-md text-sm text-on-surface-variant leading-relaxed mb-4 flex-1 line-clamp-3">
                    {room.description}
                  </p>
                  <p className="font-label-caps text-[10px] uppercase tracking-[0.14em] text-secondary mb-4">
                    {copy.rooms.availability}
                  </p>
                  <Link
                    to="/contact"
                    className="btn-premium-hover inline-flex justify-center bg-primary text-on-primary hover:bg-secondary py-3 px-4 font-label-caps text-[11px] uppercase tracking-widest rounded-sm"
                  >
                    {copy.rooms.cta}
                  </Link>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* 7. Choose stay + form */}
      <section id="pesach-inquiry" className="bg-surface py-14 md:py-24 px-5 sm:px-6 md:px-margin-desktop">
        <div className="max-w-3xl mx-auto text-center mb-10 md:mb-14">
          <FadeUp>
            <span className="font-label-caps text-label-caps text-secondary mb-3 block uppercase tracking-widest">
              {copy.chooseStay.eyebrow}
            </span>
          </FadeUp>
          <FadeUp delay={0.06}>
            <h2 className="font-headline-lg text-[1.65rem] sm:text-3xl md:text-headline-lg text-primary mb-4 leading-tight">
              {copy.chooseStay.title}
            </h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">{copy.chooseStay.body}</p>
          </FadeUp>
        </div>
        <div className="max-w-3xl mx-auto">
          <HolidayInquiryForm
            formId="pesach-inquiry"
            labels={copy.form}
            dateLabels={{ checkIn: copy.chooseStay.checkIn, checkOut: copy.chooseStay.checkOut }}
            stayOptions={[
              { value: "full", label: copy.chooseStay.fullLabel, hint: copy.chooseStay.fullHint },
              { value: "custom", label: copy.chooseStay.customLabel, hint: copy.chooseStay.customHint },
            ]}
          />
        </div>
      </section>
    </div>
  );
}
