import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  MapPin,
} from "lucide-react";
import OptimizedImage from "../OptimizedImage";
import SectionCta from "../sections/SectionCta";
import HolidayPathwayCard from "../sections/HolidayPathwayCard";
import ScrollStoryStages from "./ScrollStoryStages";
import {
  LOCATION_IMAGE,
  DINING_IMAGE,
  STARLIGHT_LOUNGE_IMAGE,
  SUNRISE_YOGA_DECK_IMAGE,
  PALM_LINED_DRIVEWAY_IMAGE,
  MISTY_MOUNTAIN_BALCONY_IMAGE,
  CAROUSEL_CARD_IMAGE_SIZES,
} from "../../lib/imageQuality";
import { hotelGallery, galleryAlt } from "../../lib/hotelGallery";
import { useLanguage } from "../../context/LanguageContext";
import { LUXURY_EASE, SCROLL_VIEWPORT, usePremiumMotion } from "../../lib/motionPresets";
import {
  FadeUp,
  ImageReveal,
  SoftScale,
  SplitImage,
  SplitText,
  StaggerGroup,
  StaggerItem,
} from "../motion/PremiumReveal";

const CAROUSEL_IMAGE_SOURCES = [
  hotelGallery.tropicalPoolRetreat,
  hotelGallery.rainforestDiningPavilion,
  STARLIGHT_LOUNGE_IMAGE,
  SUNRISE_YOGA_DECK_IMAGE,
  PALM_LINED_DRIVEWAY_IMAGE,
  MISTY_MOUNTAIN_BALCONY_IMAGE,
] as const;

/** Option B balanced delivers — masters kept as hero.mp4 / hero-mobile.mp4 */
const HERO_VIDEO = "/videos/hero-desktop-balanced.mp4";
const HERO_VIDEO_MOBILE = "/videos/hero-mobile-balanced.mp4";
const HERO_POSTER = "/videos/hero-poster.webp";
const HERO_VIDEO_MQ = "(max-width: 640px)";

function resolveHeroVideoSrc(): string {
  if (typeof window === "undefined") return HERO_VIDEO;
  return window.matchMedia(HERO_VIDEO_MQ).matches ? HERO_VIDEO_MOBILE : HERO_VIDEO;
}

/** Local WebP of the pre-optimization remote images (same visuals, no hotlinks). */
const EXPERIENCE_IMAGE_URLS = [
  "/images/home-originals/experience-1.webp",
  "/images/home-originals/experience-2.webp",
  "/images/home-originals/experience-3.webp",
  "/images/home-originals/experience-4.webp",
] as const;

const FAMILY_HERO_IMAGE_URL = "/images/home-originals/family-hero.webp";
const SCROLL_STORY_IMAGE_URL = "/images/home-originals/scroll-story.webp";
const TRUST_ICONS = [
  "/images/icons/trust-kosher.png",
  "/images/icons/trust-concierge.png",
  "/images/icons/trust-transfers.png",
  "/images/icons/trust-estate.png",
] as const;

const INTRO_VALUE_ICONS = [
  "/images/icons/value-kosher-jewish-life.png",
  "/images/icons/value-mountain-hospitality.png",
  "/images/icons/value-family-retreat.png",
] as const;

const PROMISE_ICONS = [
  "/images/icons/promise-kosher.png",
  "/images/icons/promise-jewish-life.png",
  "/images/icons/promise-family.png",
] as const;

const CAROUSEL_CARD_CLASS =
  "relative flex-none shrink-0 grow-0 overflow-hidden rounded shadow-xl group basis-[85vw] w-[85vw] min-w-[85vw] max-w-[85vw] sm:basis-[82.935vw] sm:w-[82.935vw] sm:min-w-[82.935vw] sm:max-w-[82.935vw] md:basis-[768px] md:w-[768px] md:min-w-[768px] md:max-w-[768px] lg:basis-[943px] lg:w-[943px] lg:min-w-[943px] lg:max-w-[943px] h-[320px] sm:h-[420px] md:h-[540px]";

const CAROUSEL_IMAGE_CLASS =
  "absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105";

type HomeViewProps = {
  onStartPlanning: () => void;
};

export default function HomeView({ onStartPlanning }: HomeViewProps) {
  const { t, language } = useLanguage();
  const home = t.pages.home;
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);
  const heroSectionRef = React.useRef<HTMLElement>(null);
  const heroVideoRef = React.useRef<HTMLVideoElement>(null);
  const { heroInitial, reduceMotion, carouselCard, staggerContainer } = usePremiumMotion();
  const [heroVideoSrc, setHeroVideoSrc] = React.useState(resolveHeroVideoSrc);

  React.useEffect(() => {
    const mq = window.matchMedia(HERO_VIDEO_MQ);
    const update = () => setHeroVideoSrc(mq.matches ? HERO_VIDEO_MOBILE : HERO_VIDEO);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  React.useEffect(() => {
    if (reduceMotion) return;
    const section = heroSectionRef.current;
    const video = heroVideoRef.current;
    if (!section || !video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio > 0.2) {
          void video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: [0, 0.2, 0.5] },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, [reduceMotion, heroVideoSrc]);
  const accentBorderClass =
    language === "he"
      ? "border-r-4 border-secondary ps-0 pe-6 rounded-l"
      : "border-l-4 border-secondary ps-6 rounded-r";

  const scroll = (direction: "left" | "right") => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const firstCard = container.querySelector<HTMLElement>("[data-carousel-card]");
    const track = container.querySelector<HTMLElement>("[data-carousel-track]");
    if (!firstCard || !track) return;

    const styles = window.getComputedStyle(track);
    const gap = parseFloat(styles.columnGap || styles.gap || "0") || 0;
    const step = firstCard.offsetWidth + gap;

    const maxScroll = container.scrollWidth - container.clientWidth;
    const nextScroll =
      direction === "left"
        ? Math.max(0, container.scrollLeft - step)
        : Math.min(maxScroll, container.scrollLeft + step);

    container.scrollTo({
      left: nextScroll,
      behavior: "smooth",
    });
  };

  return (
    <div className="bg-surface select-text">
      {/* 1. Hero Section */}
      <section
        ref={heroSectionRef}
        className="relative min-h-[100dvh] h-auto w-full flex items-center justify-center overflow-hidden py-28 sm:py-0 sm:h-screen"
      >
        <motion.div
          className="absolute inset-0"
          initial={heroInitial({ scale: 1.04 })}
          animate={{ scale: 1 }}
          transition={{ duration: 1.1, ease: LUXURY_EASE }}
        >
          {reduceMotion ? (
            <img
              src={HERO_POSTER}
              alt={t.heroImageAlt}
              width={1440}
              height={1440}
              className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none [filter:brightness(0.78)_contrast(1.05)]"
              decoding="sync"
              fetchPriority="high"
            />
          ) : (
            <video
              key={heroVideoSrc}
              ref={heroVideoRef}
              className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none [transform:translateZ(0)] [filter:brightness(0.78)_contrast(1.05)]"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster={HERO_POSTER}
              aria-label={t.heroImageAlt}
            >
              <source src={heroVideoSrc} type="video/mp4" />
            </video>
          )}
        </motion.div>

        {/* Soft full-bleed dim — under text, over video */}
        <div
          className="absolute inset-0 z-[1] pointer-events-none"
          style={{ background: "rgba(0, 0, 0, 0.28)" }}
          aria-hidden
        />
        {/* Focused center vignette for headline + CTAs */}
        <div
          className="absolute inset-0 z-[1] pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 55% at 50% 48%, rgba(0, 0, 0, 0.42) 0%, rgba(0, 0, 0, 0.18) 45%, rgba(0, 0, 0, 0) 72%)",
          }}
          aria-hidden
        />

        <div className="relative z-10 text-center px-5 sm:px-6 md:px-0 max-w-4xl w-full">
          <motion.span
            initial={heroInitial({ opacity: 0, y: 40 })}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: LUXURY_EASE, delay: reduceMotion ? 0 : 0.2 }}
            className="font-label-caps text-[11px] sm:text-label-caps text-secondary-fixed mb-3 sm:mb-4 block tracking-[0.22em] sm:tracking-[0.3em] text-amber-100 uppercase [text-shadow:0_4px_24px_rgba(0,0,0,0.45)]"
          >
            {t.hero.eyebrow}
          </motion.span>

          <motion.h1
            initial={heroInitial({ opacity: 0, y: 40, filter: "blur(6px)" })}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, ease: LUXURY_EASE, delay: reduceMotion ? 0 : 0.4 }}
            className="font-headline-xl text-[1.85rem] leading-tight sm:text-3xl md:text-headline-xl text-on-primary mb-6 sm:mb-8 [text-shadow:0_4px_24px_rgba(0,0,0,0.45)]"
          >
            {t.hero.titleBefore}
            <span className="italic font-serif font-light text-secondary-fixed-dim">{t.hero.titleEmphasis}</span>
            {t.hero.titleAfter}
          </motion.h1>

          <motion.div
            initial={heroInitial({ opacity: 0, y: 40 })}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: LUXURY_EASE, delay: reduceMotion ? 0 : 0.65 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-6 max-w-sm sm:max-w-none mx-auto"
          >
            <button
              onClick={onStartPlanning}
              className="btn-premium-hover w-full sm:w-auto bg-teal-ocean text-white hover:bg-teal-dark-hover px-8 sm:px-10 py-3.5 sm:py-4 font-label-caps text-label-caps transition-all shadow-lg hover:shadow-xl rounded-sm cursor-pointer"
            >
              {t.hero.ctaPrimary}
            </button>
            <Link
              to="/rooms"
              className="btn-premium-hover w-full sm:w-auto text-center border border-teal-ocean text-teal-dark-primary px-8 sm:px-10 py-3.5 sm:py-4 font-label-caps text-label-caps bg-white/90 hover:bg-light-aqua hover:text-teal-dark-hover transition-all rounded-sm"
            >
              {t.hero.ctaSecondary}
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={reduceMotion ? undefined : { y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 text-on-primary/60 cursor-pointer"
          onClick={() => {
            document.getElementById("retreat")?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <span className="text-sm font-label-caps tracking-widest block text-center opacity-80 mb-1">
            {t.hero.scroll}
          </span>
          <div className="w-6 h-10 border-2 border-on-primary/30 rounded-full mx-auto flex justify-center items-start p-1">
            <div className="w-1.5 h-1.5 bg-on-primary rounded-full animate-bounce" />
          </div>
        </motion.div>
      </section>

      {/* Intro — offer overview before Holidays */}
      <section
        className="bg-primary-container py-14 md:py-20"
        id="retreat-intro"
        aria-labelledby="retreat-intro-title"
      >
        <div className="max-w-container-max mx-auto px-5 sm:px-6 md:px-margin-desktop">
          <div className="max-w-2xl mx-auto text-center mb-10 md:mb-14">
            <FadeUp eager>
              <h2
                id="retreat-intro-title"
                className="font-headline-lg text-[1.55rem] sm:text-3xl md:text-headline-lg text-on-primary-container mb-5 leading-tight"
              >
                {home.intro.title}
              </h2>
            </FadeUp>
            <FadeUp delay={0.08} eager>
              <p className="font-body-lg text-[1.05rem] sm:text-body-lg text-on-primary/70 leading-relaxed max-w-xl mx-auto">
                {home.intro.body}
              </p>
            </FadeUp>
          </div>

          <StaggerGroup
            stagger={0.1}
            eager
            className="grid grid-cols-1 md:grid-cols-3 max-w-5xl mx-auto"
          >
            {home.intro.values.map((value, index) => {
              return (
                <StaggerItem
                  key={value.title}
                  className={[
                    "group flex flex-col items-center text-center px-4 py-8 sm:px-6 sm:py-9 md:px-8 md:py-2",
                    index > 0
                      ? "border-t border-secondary/35 md:border-t-0 md:border-s md:border-secondary/35"
                      : "",
                  ].join(" ")}
                >
                  <img
                    src={INTRO_VALUE_ICONS[index]}
                    alt=""
                    aria-hidden
                    width={48}
                    height={48}
                    decoding="async"
                    className="mb-5 h-11 w-11 sm:h-12 sm:w-12 object-contain select-none pointer-events-none transition-transform duration-300 ease-out group-hover:-translate-y-1"
                  />
                  <h3 className="font-headline-sm text-[1.15rem] sm:text-xl text-on-primary-container mb-3 leading-snug">
                    {value.title}
                  </h3>
                  <div
                    className="mb-4 h-px w-7 bg-secondary/40 transition-[width,background-color] duration-300 ease-out group-hover:w-10 group-hover:bg-secondary-fixed"
                    aria-hidden
                  />
                  <p className="font-body-md text-[0.9375rem] sm:text-body-md text-on-primary/65 leading-[1.7] max-w-[17.5rem] sm:max-w-[19rem]">
                    {value.body}
                  </p>
                </StaggerItem>
              );
            })}
          </StaggerGroup>

          <FadeUp delay={0.12} eager className="text-center mt-10 md:mt-14">
            <a
              href="#holidays-pathways"
              className="inline-flex items-center gap-2 font-label-caps text-[11px] sm:text-xs uppercase tracking-[0.18em] text-secondary-fixed/90 hover:text-secondary-fixed transition-colors duration-300"
            >
              {home.intro.bridge}
              {language === "he" ? (
                <ArrowLeft className="h-3.5 w-3.5 shrink-0" aria-hidden />
              ) : (
                <ArrowRight className="h-3.5 w-3.5 shrink-0" aria-hidden />
              )}
            </a>
          </FadeUp>
        </div>
      </section>

      {/* Holidays & Stays pathways */}
      <section className="bg-surface-container py-16 md:py-24" id="holidays-pathways">
        <div className="max-w-container-max mx-auto px-5 sm:px-6 md:px-margin-desktop">
          <div className="max-w-3xl mx-auto text-center mb-10 md:mb-14">
            <FadeUp>
              <span className="font-label-caps text-[11px] uppercase tracking-[0.22em] text-secondary mb-3 block">
                {t.pages.holidays.hero.eyebrow}
              </span>
            </FadeUp>
            <FadeUp delay={0.06}>
              <h2 className="font-headline-lg text-headline-lg text-primary mb-4 leading-tight">
                {t.pages.holidays.intro.title}
              </h2>
            </FadeUp>
            <FadeUp delay={0.1}>
              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                {t.pages.holidays.intro.body}
              </p>
            </FadeUp>
          </div>

          <StaggerGroup stagger={0.12} className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 items-stretch">
            <HolidayPathwayCard
              index={0}
              card={{
                to: "/pesach",
                eyebrow: t.pages.holidays.pathways.pesach.eyebrow,
                title: t.pages.holidays.pathways.pesach.title,
                body: t.pages.holidays.pathways.pesach.body,
                cta: t.pages.holidays.pathways.pesach.cta,
                image: {
                  src: "/images/holidays/pesach-retreat.webp",
                  alt: t.pages.holidays.pathways.pesach.imageAlt,
                  objectPosition: "center center",
                },
              }}
            />
            <HolidayPathwayCard
              index={1}
              card={{
                to: "/sukkot",
                eyebrow: t.pages.holidays.pathways.sukkot.eyebrow,
                title: t.pages.holidays.pathways.sukkot.title,
                body: t.pages.holidays.pathways.sukkot.body,
                cta: t.pages.holidays.pathways.sukkot.cta,
                image: {
                  src: "/images/holidays/sukkot-retreat.webp",
                  alt: t.pages.holidays.pathways.sukkot.imageAlt,
                  objectPosition: "center 38%",
                },
              }}
            />
            <HolidayPathwayCard
              index={2}
              card={{
                to: "/year-round",
                eyebrow: t.pages.holidays.pathways.yearRound.eyebrow,
                title: t.pages.holidays.pathways.yearRound.title,
                body: t.pages.holidays.pathways.yearRound.body,
                cta: t.pages.holidays.pathways.yearRound.cta,
                image: {
                  src: "/images/holidays/year-round-stay.webp",
                  alt: t.pages.holidays.pathways.yearRound.imageAlt,
                  objectPosition: "center center",
                },
              }}
            />
          </StaggerGroup>

          {/* Promise pillars — one panel with tapered dividers */}
          <FadeUp className="mt-10 md:mt-14">
            <div className="bg-bg-card border border-border-custom rounded overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-3">
                {t.promise.cards.map((card, index) => (
                  <div
                    key={card.title}
                    className="relative flex flex-col items-center text-center p-6 sm:p-8 md:p-10"
                  >
                    {index > 0 ? (
                      <>
                        {/* Mobile: horizontal tapered rule */}
                        <span
                          aria-hidden
                          className="pointer-events-none md:hidden absolute inset-x-[16%] top-0 h-[2px] -translate-y-1/2 bg-secondary/45"
                          style={{
                            clipPath:
                              "polygon(0% 50%, 12% 15%, 50% 0%, 88% 15%, 100% 50%, 88% 85%, 50% 100%, 12% 85%)",
                            maskImage:
                              "linear-gradient(90deg, transparent 0%, #000 18%, #000 82%, transparent 100%)",
                            WebkitMaskImage:
                              "linear-gradient(90deg, transparent 0%, #000 18%, #000 82%, transparent 100%)",
                          }}
                        />
                        {/* Desktop: vertical tapered rule */}
                        <span
                          aria-hidden
                          className="pointer-events-none hidden md:block absolute inset-y-[14%] start-0 w-[3px] -translate-x-1/2 bg-secondary/45"
                          style={{
                            clipPath:
                              "polygon(50% 0%, 85% 12%, 100% 50%, 85% 88%, 50% 100%, 15% 88%, 0% 50%, 15% 12%)",
                            maskImage:
                              "linear-gradient(180deg, transparent 0%, #000 16%, #000 84%, transparent 100%)",
                            WebkitMaskImage:
                              "linear-gradient(180deg, transparent 0%, #000 16%, #000 84%, transparent 100%)",
                          }}
                        />
                      </>
                    ) : null}
                    <div className="mb-5 md:mb-6 flex justify-center">
                      <img
                        src={PROMISE_ICONS[index]}
                        alt=""
                        aria-hidden
                        className="h-16 w-16 sm:h-20 sm:w-20 object-contain"
                        width={80}
                        height={80}
                        decoding="async"
                      />
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-text-main mb-4">{card.title}</h3>
                    <p className="font-body-md text-body-md text-text-muted leading-relaxed">{card.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeUp>

          <FadeUp className="text-center mt-10 md:mt-12">
            <Link
              to="/holidays"
              className="font-label-caps text-xs uppercase tracking-[0.14em] text-secondary hover:text-primary transition-colors border-b border-secondary/40 hover:border-primary pb-1"
            >
              {t.nav.holidays}
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* Anchor for existing #retreat links */}
      <div id="retreat" className="scroll-mt-24" aria-hidden />

      {/* 3. Location Section */}
      <section className="bg-primary-container text-on-primary overflow-hidden" id="location">
        <div className="flex flex-col md:flex-row items-stretch md:min-h-[500px]">
          <SplitText side="start" className="w-full md:w-1/2 p-8 sm:p-12 md:p-20 flex flex-col justify-center">
            <h2 className="font-display-script text-display-script text-on-primary mb-5 md:mb-8">{t.location.title}</h2>
            <p className="font-body-lg text-body-lg text-on-primary-container mb-6 md:mb-10 leading-relaxed opacity-90">
              {t.location.body}
            </p>
            <div className="flex items-center gap-4 mb-6 md:mb-10">
              <div className="w-10 h-10 bg-primary-container border border-secondary-fixed-dim/30 flex items-center justify-center rounded-full shrink-0">
                <MapPin className="text-secondary-fixed-dim w-5 h-5" />
              </div>
              <span className="font-label-caps text-label-caps text-on-primary uppercase tracking-widest">
                {t.location.pin}
              </span>
            </div>
            <SectionCta to="/costa-rica-guide" label={home.links.learnMore} />
          </SplitText>
          <SplitImage side="end" className="w-full md:w-1/2 relative min-h-[240px] sm:min-h-[300px] md:min-h-full">
            <ImageReveal className="absolute inset-0 h-full w-full" innerClassName="h-full w-full">
              <OptimizedImage
                src={LOCATION_IMAGE.src}
                srcSet={LOCATION_IMAGE.srcSet}
                sizes={LOCATION_IMAGE.sizes}
                alt={t.location.imageAlt}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </ImageReveal>
          </SplitImage>
        </div>
      </section>

      {/* 4. Cinematic Story — sticky stacking cards (desktop) */}
      <section className="pt-16 md:pt-24 pb-12 md:pb-20 relative bg-surface-container-low">
        <div className="max-w-container-max mx-auto px-5 sm:px-6 md:px-margin-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start">
            <div className="w-full lg:sticky lg:top-[7.5rem] self-start">
              <ImageReveal className="aspect-[4/3] md:aspect-[16/10] rounded shadow-2xl relative">
                <OptimizedImage
                  className="w-full h-full object-cover"
                  alt={t.scrollStory.imageAlt}
                  src={SCROLL_STORY_IMAGE_URL}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 text-on-primary scroll-story-caption">
                  <p className="font-headline-sm text-headline-sm">{t.scrollStory.imageTitle}</p>
                </div>
              </ImageReveal>
            </div>

            <div className="w-full min-w-0">
              <ScrollStoryStages stages={t.scrollStory.stages} accentBorderClass={accentBorderClass} />
              <div className="mt-8 md:mt-10 relative z-[20]">
                <SectionCta to="/contact" label={home.links.planYourStay} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Kosher Dining Section */}
      <section className="py-16 md:py-24 px-5 sm:px-6 md:px-margin-desktop" id="dining">
        <div className="max-w-container-max mx-auto">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-8 md:gap-12 lg:gap-16">
            <SplitImage side="start" className="w-full lg:w-1/2">
              <ImageReveal className="aspect-[4/5] max-h-[520px] lg:max-h-none rounded shadow-2xl">
                <OptimizedImage
                  src={DINING_IMAGE.src}
                  srcSet={DINING_IMAGE.srcSet}
                  sizes={DINING_IMAGE.sizes}
                  alt={t.dining.imageAlt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  style={{ objectPosition: "center 62%" }}
                />
              </ImageReveal>
            </SplitImage>
            <SplitText side="end" className="w-full lg:w-1/2">
              <h2 className="font-headline-lg text-headline-lg text-primary mb-5 md:mb-8 leading-tight">{t.dining.title}</h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-6 md:mb-10 leading-relaxed">{t.dining.body}</p>

              <StaggerGroup stagger={0.12} className="space-y-6 mb-10">
                {t.dining.checklist.map((item) => (
                  <StaggerItem key={item.title} className="flex items-start gap-4">
                    <div className="mt-1 bg-surface-container p-2 rounded-full text-secondary">
                      <CheckCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-label-caps text-label-caps text-primary uppercase mb-1">{item.title}</h4>
                      <p className="text-on-surface-variant text-sm leading-relaxed">{item.body}</p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerGroup>

              <SectionCta to="/kosher-jewish-life" label={home.links.viewKosherDining} />
            </SplitText>
          </div>
        </div>
      </section>

      <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop py-10" aria-hidden="true">
        <div className="flex items-center gap-6 max-w-2xl mx-auto">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border-custom/70 to-border-custom/25" />
          <div className="h-1.5 w-1.5 rotate-45 bg-secondary/25 shrink-0" />
          <div className="h-px flex-1 bg-gradient-to-l from-transparent via-border-custom/70 to-border-custom/25" />
        </div>
      </div>

      {/* 6. Family Programming Section */}
      <section className="py-16 md:py-24 px-5 sm:px-6 md:px-margin-desktop max-w-container-max mx-auto">
        <div className="text-center mb-10 md:mb-16 max-w-2xl mx-auto">
          <FadeUp>
            <h2 className="font-headline-lg text-headline-lg text-primary mb-4 md:mb-6">{t.family.title}</h2>
          </FadeUp>
        </div>

        <ImageReveal className="relative h-[280px] sm:h-[380px] md:h-[480px] w-full rounded overflow-hidden mb-8 md:mb-12 shadow-xl">
          <OptimizedImage
            className="w-full h-full object-cover"
            alt={t.family.heroImageAlt}
            src={FAMILY_HERO_IMAGE_URL}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent flex flex-col justify-end p-5 sm:p-8 md:p-12 text-start pointer-events-none" />
          <div className="absolute bottom-5 left-5 right-5 sm:bottom-8 sm:left-8 sm:right-auto md:left-12 max-w-2xl text-on-primary family-hero-caption pointer-events-none">
            <span className="bg-secondary px-3 py-1 font-label-caps text-[10px] uppercase tracking-widest mb-2 sm:mb-3 inline-block text-on-secondary">
              {t.family.heroBadge}
            </span>
            <h3 className="font-headline-md text-headline-md text-on-primary mb-1 sm:mb-2">{t.family.heroTitle}</h3>
            <p className="text-on-primary/95 text-sm sm:text-body-md leading-relaxed line-clamp-3 sm:line-clamp-none">{t.family.heroBody}</p>
          </div>
        </ImageReveal>

        <StaggerGroup stagger={0.12} className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 mb-8 md:mb-12">
          {t.family.miniCards.map((card) => (
            <StaggerItem
              key={card.label}
              className="p-4 sm:p-6 bg-surface-container-low border border-surface-container rounded text-center"
            >
              <span className="font-label-caps text-[10px] sm:text-xs text-secondary mb-2 block tracking-wider font-semibold">
                {card.label}
              </span>
              <h5 className="font-headline-sm text-base sm:text-lg text-primary leading-snug">{card.title}</h5>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <FadeUp className="text-center">
          <SectionCta to="/costa-rica-guide" label={home.links.learnMore} />
        </FadeUp>
      </section>

      {/* 8. In-Hotel Experiences (Horizontal Scroll Gallery) */}
      <section className="bg-primary-container py-16 md:py-24">
        <div className="px-5 sm:px-6 md:px-margin-desktop mb-8 md:mb-12 flex justify-between items-end gap-4 max-w-container-max mx-auto">
          <div className="text-on-primary min-w-0">
            <FadeUp>
              <h2 className="font-display-script text-display-script text-on-primary">{t.carousel.title}</h2>
            </FadeUp>
          </div>
          <FadeUp delay={0.18} className="flex gap-3 sm:gap-4 shrink-0">
            <button
              type="button"
              onClick={() => scroll("left")}
              aria-label={language === "he" ? "גלול ימינה" : "Scroll left"}
              className="btn-premium-hover min-h-11 min-w-11 inline-flex items-center justify-center border border-on-primary/30 text-on-primary rounded-full hover:bg-on-primary hover:text-primary transition-all cursor-pointer"
            >
              <ArrowLeft className="w-5 h-5" aria-hidden />
            </button>
            <button
              type="button"
              onClick={() => scroll("right")}
              aria-label={language === "he" ? "גלול שמאלה" : "Scroll right"}
              className="btn-premium-hover min-h-11 min-w-11 inline-flex items-center justify-center border border-on-primary/30 text-on-primary rounded-full hover:bg-on-primary hover:text-primary transition-all cursor-pointer"
            >
              <ArrowRight className="w-5 h-5" aria-hidden />
            </button>
          </FadeUp>
        </div>

        <div className="relative w-full overflow-x-clip">
          <div
            ref={scrollContainerRef}
            className="w-full overflow-x-auto scroll-smooth horizontal-scroll-container"
          >
            <motion.div
              data-carousel-track
              className="flex w-max flex-nowrap gap-4 sm:gap-8 px-5 sm:px-6 md:px-margin-desktop pb-6"
              variants={staggerContainer(0.1)}
              initial="hidden"
              whileInView="show"
              viewport={SCROLL_VIEWPORT}
            >
              {t.carousel.items.map((item, index) => {
                const image = CAROUSEL_IMAGE_SOURCES[index];
                const isGalleryImage = "alt" in image && typeof image.alt === "object";
                return (
                  <motion.div
                    key={item.title}
                    data-carousel-card
                    className={CAROUSEL_CARD_CLASS}
                    variants={carouselCard()}
                  >
                    <OptimizedImage
                      className={CAROUSEL_IMAGE_CLASS}
                      src={image.src}
                      srcSet={"srcSet" in image ? image.srcSet : undefined}
                      sizes={CAROUSEL_CARD_IMAGE_SIZES}
                      alt={isGalleryImage ? galleryAlt(image, language) : item.alt}
                      style={
                        isGalleryImage && "objectPosition" in image
                          ? { objectPosition: image.objectPosition }
                          : undefined
                      }
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8 text-on-primary drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)] carousel-card-caption">
                      <span className="font-label-caps text-[10px] tracking-widest text-amber-200 block mb-1">
                        {item.label}
                      </span>
                      <h4 className="font-display-script text-display-script-sm">{item.title}</h4>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>

        <FadeUp delay={0.2} className="text-center mt-8 md:mt-10 px-5 sm:px-6 md:px-margin-desktop">
          <SectionCta to="/costa-rica-guide" label={home.links.viewExperiences} className="text-on-primary border-on-primary/60 hover:text-secondary-fixed hover:border-secondary-fixed" />
        </FadeUp>
      </section>

      {/* 9. Bento Grid Excursions */}
      <section className="py-16 md:py-24 px-5 sm:px-6 md:px-margin-desktop max-w-container-max mx-auto" id="experiences">
        <div className="text-center mb-10 md:mb-16 max-w-2xl mx-auto">
          <FadeUp>
            <h2 className="font-headline-lg text-headline-lg text-primary mb-4">{t.experiences.title}</h2>
          </FadeUp>
          <FadeUp delay={0.08}>
            <p className="font-body-lg text-body-lg text-on-surface-variant">{t.experiences.subtitle}</p>
          </FadeUp>
        </div>

        <StaggerGroup stagger={0.12} className="grid grid-cols-1 lg:grid-cols-3 gap-5 md:gap-8 mb-8 md:mb-12">
          {t.experiences.cards.map((card, index) => {
            const isWide = index === 0 || index === 3;
            const titleClass =
              index === 0 || index === 3 ? "font-headline-md text-headline-md" : "font-headline-sm text-headline-sm";
            const badgeClass = index === 0 || index === 3 ? "bg-secondary" : "bg-secondary/80";
            return (
              <StaggerItem
                key={card.title}
                className={`${isWide ? "lg:col-span-2" : ""} relative group overflow-hidden rounded shadow-lg h-[260px] sm:h-[320px] md:h-[400px]`}
              >
                <ImageReveal className="absolute inset-0 h-full w-full" innerClassName="h-full w-full">
                  <OptimizedImage
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
                    src={EXPERIENCE_IMAGE_URLS[index]}
                    alt={card.alt}
                  />
                </ImageReveal>
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/15 transition-all duration-500 pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8 text-on-primary bento-caption pointer-events-none">
                  <span
                    className={`font-label-caps text-xs uppercase ${badgeClass} px-3 py-1 mb-2 sm:mb-3 inline-block rounded-sm text-on-secondary`}
                  >
                    {card.badge}
                  </span>
                  <h3 className={`${titleClass} text-on-primary`}>{card.title}</h3>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerGroup>

        <FadeUp className="text-center">
          <SectionCta to="/costa-rica-guide" label={home.links.viewExperiences} />
        </FadeUp>
      </section>

      {/* 12. Trust Section */}
      <section className="bg-primary-container text-on-primary py-16 md:py-24">
        <div className="max-w-container-max mx-auto px-5 sm:px-6 md:px-margin-desktop text-center">
          <FadeUp>
            <h2 className="font-headline-lg text-headline-lg text-on-primary mb-8 md:mb-12">{t.trust.title}</h2>
          </FadeUp>

          <StaggerGroup stagger={0.12} className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {t.trust.stats.map((stat, index) => (
              <StaggerItem
                key={stat.label}
                className="border-on-primary/10 max-md:odd:border-e max-md:odd:pe-3 md:border-e md:pe-4 md:last:border-e-0 trust-stat-divider"
              >
                <SoftScale>
                  <div className="flex justify-center mb-3">
                    <img
                      src={TRUST_ICONS[index]}
                      alt=""
                      aria-hidden
                      className="h-14 w-14 sm:h-16 sm:w-16 md:h-[4.5rem] md:w-[4.5rem] object-contain"
                      width={72}
                      height={72}
                      decoding="async"
                    />
                  </div>
                </SoftScale>
                <h4 className="font-headline-sm text-xl sm:text-2xl md:text-headline-sm text-secondary-fixed mb-2">{stat.value}</h4>
                <p className="font-label-caps text-[10px] sm:text-xs uppercase tracking-wider text-on-primary-container leading-snug">{stat.label}</p>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* 13. Final CTA */}
      <section className="py-16 md:py-24 px-5 sm:px-6 md:px-margin-desktop bg-surface-container-low text-center">
        <div className="max-w-3xl mx-auto">
          <FadeUp>
            <h2 className="font-headline-lg text-headline-lg text-primary mb-4 md:mb-6">{t.finalCta.title}</h2>
          </FadeUp>
          <FadeUp delay={0.08}>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 md:mb-10 leading-relaxed">{t.finalCta.body}</p>
          </FadeUp>
          <SoftScale delay={0.2}>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 sm:gap-6 max-w-sm sm:max-w-none mx-auto">
              <Link
                to="/contact"
                className="btn-premium-hover w-full sm:w-auto bg-primary text-on-primary hover:bg-secondary px-8 sm:px-10 py-4 sm:py-5 font-label-caps text-label-caps uppercase tracking-widest shadow-xl hover:shadow-2xl transition-all rounded-sm"
              >
                {t.finalCta.cta}
              </Link>
              <Link
                to="/contact"
                className="btn-premium-hover font-label-caps text-label-caps text-secondary border-b-2 border-secondary pb-1 hover:text-primary hover:border-primary transition-all font-semibold uppercase self-center"
              >
                {home.links.contactUs}
              </Link>
            </div>
          </SoftScale>
        </div>
      </section>
    </div>
  );
}
