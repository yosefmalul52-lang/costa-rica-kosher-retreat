import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";
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
import { HAS_REAL_WHATSAPP, WHATSAPP_URL } from "../content/brand";
import { useLanguage } from "../context/LanguageContext";
import { galleryAlt, hotelGallery } from "../lib/hotelGallery";
import { LUXURY_EASE, usePremiumMotion } from "../lib/motionPresets";

const HERO_IMAGE = hotelGallery.rainforestDiningPavilion;
const DINING_IMAGE = hotelGallery.kosherOutdoorDiningTerrace;
const JEWISH_IMAGE = hotelGallery.rainforestCoveredWalkway;
const ATMOSPHERE_IMAGE = hotelGallery.jungleVerandaMountainView;

export default function KosherJewishLifePage() {
  const { t, language } = useLanguage();
  const copy = t.pages.kosherJewishLife;
  const { heroInitial, reduceMotion } = usePremiumMotion();
  const accentBorderClass =
    language === "he"
      ? "border-r-2 border-secondary pe-5"
      : "border-l-2 border-secondary ps-5";

  return (
    <div className="bg-surface select-text">
      {/* 1. Full-bleed hero */}
      <section className="relative min-h-[72vh] md:min-h-[78vh] w-full flex items-end md:items-center overflow-hidden">
        <motion.div
          className="absolute inset-0"
          initial={heroInitial({ scale: 1.04 })}
          animate={{ scale: 1 }}
          transition={{ duration: 1.1, ease: LUXURY_EASE }}
        >
          <OptimizedImage
            src={HERO_IMAGE.src}
            alt={galleryAlt(HERO_IMAGE, language)}
            priority
            sizes="100vw"
            className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none [filter:brightness(0.9)_contrast(1.03)]"
            style={{ objectPosition: HERO_IMAGE.objectPosition }}
          />
        </motion.div>

        <div
          className="absolute inset-0 z-[1] pointer-events-none"
          style={{ background: "rgba(0, 0, 0, 0.16)" }}
          aria-hidden
        />
        <div
          className="absolute inset-0 z-[1] pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 75% 60% at 50% 55%, rgba(0, 0, 0, 0.28) 0%, rgba(0, 0, 0, 0.1) 48%, rgba(0, 0, 0, 0) 75%)",
          }}
          aria-hidden
        />

        <div className="relative z-10 w-full max-w-container-max mx-auto px-6 md:px-margin-desktop pb-16 pt-36 md:py-24 text-center">
          <motion.span
            initial={heroInitial({ opacity: 0, y: 28 })}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: LUXURY_EASE, delay: reduceMotion ? 0 : 0.15 }}
            className="font-label-caps text-label-caps text-secondary-fixed mb-4 block tracking-[0.28em] uppercase [text-shadow:0_4px_24px_rgba(0,0,0,0.45)]"
          >
            {copy.hero.eyebrow}
          </motion.span>
          <motion.h1
            initial={heroInitial({ opacity: 0, y: 32, filter: "blur(6px)" })}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.95, ease: LUXURY_EASE, delay: reduceMotion ? 0 : 0.3 }}
            className="font-headline-lg text-4xl md:text-headline-lg text-on-primary mb-5 max-w-3xl mx-auto leading-tight [text-shadow:0_4px_24px_rgba(0,0,0,0.45)]"
          >
            {copy.hero.title}
          </motion.h1>
          <motion.p
            initial={heroInitial({ opacity: 0, y: 28 })}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: LUXURY_EASE, delay: reduceMotion ? 0 : 0.5 }}
            className="font-body-lg text-body-lg text-on-primary/90 max-w-2xl mx-auto leading-relaxed [text-shadow:0_4px_24px_rgba(0,0,0,0.45)]"
          >
            {copy.hero.body}
          </motion.p>
        </div>
      </section>

      {/* 2. Dining & Kashrut */}
      <section className="py-20 md:py-28 px-6 md:px-margin-desktop max-w-container-max mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 mb-16 md:mb-20">
          <SplitImage side="start" eager className="w-full lg:w-[48%]">
            <ImageReveal eager className="aspect-[4/5] md:aspect-[5/6] rounded shadow-sm border border-surface-container-high">
              <OptimizedImage
                src={DINING_IMAGE.src}
                alt={galleryAlt(DINING_IMAGE, language)}
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="w-full h-full object-cover"
                style={{ objectPosition: DINING_IMAGE.objectPosition }}
              />
            </ImageReveal>
          </SplitImage>

          <SplitText side="end" eager className="w-full lg:w-[52%]">
            <span className="font-label-caps text-label-caps text-secondary mb-3 block uppercase tracking-widest">
              {copy.dining.eyebrow}
            </span>
            <h2 className="font-headline-lg text-3xl md:text-headline-lg text-primary mb-5 leading-tight">
              {copy.dining.title}
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed mb-10">
              {copy.dining.body}
            </p>

            <StaggerGroup eager stagger={0.1} className="space-y-5">
              {copy.dining.checklist.map((item) => (
                <StaggerItem key={item.title} className={`flex items-start gap-4 ${accentBorderClass}`}>
                  <div className="mt-0.5 bg-surface-container p-2 rounded-full text-secondary shrink-0">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-label-caps text-label-caps text-primary uppercase mb-1 tracking-wider">
                      {item.title}
                    </h3>
                    <p className="text-on-surface-variant text-sm leading-relaxed">{item.body}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </SplitText>
        </div>
      </section>

      {/* 3. Shabbat & Jewish Life */}
      <section className="bg-surface-container py-20 md:py-28">
        <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop">
          <div className="text-center max-w-2xl mx-auto mb-14 md:mb-16">
            <FadeUp eager>
              <span className="font-label-caps text-label-caps text-secondary mb-3 block uppercase tracking-widest">
                {copy.jewishLife.eyebrow}
              </span>
            </FadeUp>
            <FadeUp eager delay={0.08}>
              <h2 className="font-headline-lg text-3xl md:text-headline-lg text-primary mb-5 leading-tight">
                {copy.jewishLife.title}
              </h2>
            </FadeUp>
            <FadeUp eager delay={0.14}>
              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                {copy.jewishLife.body}
              </p>
            </FadeUp>
          </div>

          <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-16 mb-14 md:mb-16">
            <SplitImage side="end" className="w-full lg:w-1/2">
              <ImageReveal className="aspect-[16/11] rounded shadow-sm border border-surface-container-high">
                <OptimizedImage
                  src={JEWISH_IMAGE.src}
                  alt={galleryAlt(JEWISH_IMAGE, language)}
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: JEWISH_IMAGE.objectPosition }}
                />
              </ImageReveal>
            </SplitImage>

            <SplitText side="start" className="w-full lg:w-1/2">
              <StaggerGroup stagger={0.1} className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {copy.jewishLife.cards.slice(0, 4).map((card) => (
                  <StaggerItem
                    key={card.title}
                    className="bg-surface border border-surface-container-high p-6 rounded-sm shadow-sm"
                  >
                    <h3 className="font-headline-sm text-lg text-primary mb-2">{card.title}</h3>
                    <p className="text-sm text-on-surface-variant leading-relaxed">{card.body}</p>
                  </StaggerItem>
                ))}
              </StaggerGroup>
            </SplitText>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12">
            {copy.jewishLife.cards.slice(4).map((card, index) => (
              <FadeUp key={card.title} delay={index * 0.08}>
                <div className="bg-surface border border-surface-container-high p-8 rounded-sm shadow-sm h-full">
                  <h3 className="font-headline-sm text-headline-sm text-primary mb-3">{card.title}</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">{card.body}</p>
                </div>
              </FadeUp>
            ))}
          </div>

          <SoftScale className="relative overflow-hidden rounded shadow-sm border border-surface-container-high aspect-[21/9] max-h-[360px]">
            <OptimizedImage
              src={ATMOSPHERE_IMAGE.src}
              alt={galleryAlt(ATMOSPHERE_IMAGE, language)}
              sizes="100vw"
              className="w-full h-full object-cover"
              style={{ objectPosition: ATMOSPHERE_IMAGE.objectPosition }}
            />
          </SoftScale>
        </div>
      </section>

      {/* FAQ link only */}
      <section className="py-12 px-6 md:px-margin-desktop text-center">
        <FadeUp>
          <Link
            to="/faq"
            className="font-label-caps text-xs uppercase tracking-[0.14em] text-secondary hover:text-primary transition-colors border-b border-secondary/40 hover:border-primary pb-1"
          >
            {copy.faqLink}
          </Link>
        </FadeUp>
      </section>

      {/* Final CTA */}
      <section className="bg-primary-container text-on-primary py-20 md:py-24 px-6 md:px-margin-desktop">
        <div className="max-w-3xl mx-auto text-center">
          <SoftScale>
            <h2 className="font-headline-md text-headline-md text-on-primary mb-4">{copy.cta.title}</h2>
            <p className="font-body-md text-body-md text-on-primary/85 mb-10 leading-relaxed">{copy.cta.body}</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="btn-premium-hover inline-flex w-full sm:w-auto justify-center bg-secondary text-on-secondary hover:bg-gold-soft px-10 py-4 font-label-caps text-label-caps uppercase tracking-widest shadow-lg transition-all rounded-sm"
              >
                {copy.cta.button}
              </Link>
              {HAS_REAL_WHATSAPP ? (
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-premium-hover inline-flex w-full sm:w-auto justify-center border border-on-primary/35 text-on-primary hover:bg-on-primary/10 px-10 py-4 font-label-caps text-label-caps uppercase tracking-widest transition-all rounded-sm"
                >
                  {copy.cta.whatsapp}
                </a>
              ) : (
                <span className="inline-flex w-full sm:w-auto justify-center border border-on-primary/20 text-on-primary/55 px-10 py-4 font-label-caps text-[10px] uppercase tracking-widest rounded-sm cursor-default">
                  {copy.cta.whatsappPlaceholder}
                </span>
              )}
            </div>
          </SoftScale>
        </div>
      </section>
    </div>
  );
}
