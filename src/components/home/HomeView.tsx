import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  MapPin,
  ShieldCheck,
  Award,
  Compass,
  Users,
  UtensilsCrossed,
  Milestone,
} from "lucide-react";
import OptimizedImage from "../OptimizedImage";
import SectionCta from "../sections/SectionCta";
import {
  HERO_IMAGE,
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

const EXPERIENCE_IMAGE_URLS = [
  "https://lh3.googleusercontent.com/aida-public/AB6AXuANK9rsm8K6n4iL8wxPtoOT7EYvCCAqOx4VTGvmHMhgu_KtvCByYw-Q-ggAGyAczCWMbtTPMUUAXFB7-7uNy2SmVAboJaL8pr2X4LCM7K9Y9KdISHfx4Xu_pilN_Ex_kte08-ayznqSyjJ-Cd6aRSucbjn6tuP1COj-Lls9X1r1tnTN0is1kDq6dXqH9SQ41cfvQzsxz5SubN4jXQV1ngBpzRdWm2OW7Tq7jJIkrad8kHJU_ak4PNPTySJb6Sr5qQ9bb3ueIih-TljQ",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuD2hNA9HeAmj4BqPhOwLQC1eRoWfAxzou_4T_xg-zqlhGwXDqD5U0UyixRDImGgg5Gn8Wa4QpUwepAG-XVOA9TQTOiKv4sa14heW7Z7jEyTqdO_3D3bdH2g3jzU1Oybii8L2j4K6CHs4GTlaX1zDXD54D0zr3dJ4kNxecfKhWUTGFCyQb9CgQj5OqGzTCfZM88Fr3b5h9KIA8i37ASqmtHw_nXVmC8JXw8LpkZsbKRhs8uS_Yop9NVb1QFzc9Pmfu65i-dONxI4Ns48",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuC_v3ha99zBFSjQZsZlsg0p_pNYNbZhG1k3GBL4n_7XWqjSl8Yq1B8uvvr-UUy2rnJ1PUj7Ohy2UWUBakA0dAtH6jxyTx8ohBzA4Xi7hVoaSuI-ERr1hdV4qn_8KL4toFiXeW3NHDQbp7lE0-yxR2oyxRt0uijKu4-1lcUqlrkObsK8ZZi2b536DBNAJMfNYeSUlinHzSkwTL-wk6DSole-AzuR6Ko2pJ1bRgh0NLXFe_aUTV0ePlwkVhgvH3coeTONwJBTARtyClUf",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBW57tk1v5yYmILjD_TFfPcoSqflF_I1DJ6gz9AdAdu_KSHbd-faNxN5qDhJ3_BvicK3FogMPsUCvIKQxuTRxtQ9IJ3wtyDg0U8qXkJWu-nPrMAunOxWx0Q5xJ3vCB2a_hwXKvQP0YkvrIbQn4gyet4IdC-Ol3o_L4C482SiJ3tD7F2UZAFUYdtH0yIZHPLwMpkn-1Y_D6N8TFVEaSuuCJ6EcAWEGmB9k6ke9PG4JZnhLsmpO8GPjK7dXzN8iZLPe8xNmPA5uFlP7b3",
] as const;

const FAMILY_HERO_IMAGE_URL =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBYCbq3xEJyV_ctfeY9M-25oFmbgyPBpIFL5Z__BVPBWSQ92FdeaMbm-ag-F27AYaVLnNMUGL96ZL2FYdiw5Os-88HhWIo9wAobFhSOa7xsYfTSx1hFRTfaPmA4wR7N7U04xtdpRNvFQvdShyHaXBqjcoyd6hjDtDAMGRqAnjzkVGG_M_40c2EKdvbokeClZen_LRWLvcgcpyDAprKoQDXyK8MgsSOUpztraWHuQLt2VEQQtoEaRlCVIyVahbv_MmM0p8s0cQN8vXH7";

const SCROLL_STORY_IMAGE_URL =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAHhiJI9dFLJE09IXZlRqxUtVw2lzV1Eb7psLz-A1KgwDQJtWlKZH_-_F0ufmr2_fnOjIBSbz9s1l5cAkPBRPPcph_7zwZeW8W2Jj4cNM_DXEsPaLTiOh4BhLS-F30KHtSGknSnVyO3_Br_LbKN9jHP_s5R88VtO42wQ-bpS6zRZOoG5kpnIywpxzYSYo9uNhxX7Z3aXmIsCsvImvGgDpby51qvHRwGEJxObq7_YBUOLkmu8M2K9-0kn0A5WVqgKnzM33d6pTKArXey";

const PROMISE_ICONS = [UtensilsCrossed, Milestone, Users] as const;

const CAROUSEL_CARD_CLASS =
  "relative flex-none shrink-0 grow-0 overflow-hidden rounded shadow-xl group basis-[82.935vw] w-[82.935vw] min-w-[82.935vw] max-w-[82.935vw] md:basis-[768px] md:w-[768px] md:min-w-[768px] md:max-w-[768px] lg:basis-[943px] lg:w-[943px] lg:min-w-[943px] lg:max-w-[943px] h-[540px]";

const CAROUSEL_IMAGE_CLASS =
  "absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105";

type HomeViewProps = {
  onStartPlanning: () => void;
};

export default function HomeView({ onStartPlanning }: HomeViewProps) {
  const { t, language } = useLanguage();
  const home = t.pages.home;
  const roomsCopy = t.pages.rooms;
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);
  const { heroInitial, reduceMotion, carouselCard, staggerContainer } = usePremiumMotion();

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
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <motion.div
          className="absolute inset-0"
          initial={heroInitial({ scale: 1.04 })}
          animate={{ scale: 1 }}
          transition={{ duration: 1.1, ease: LUXURY_EASE }}
        >
          <OptimizedImage
            src={HERO_IMAGE.src}
            srcSet={HERO_IMAGE.srcSet}
            sizes={HERO_IMAGE.sizes}
            priority
            alt={t.heroImageAlt}
            className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
          />
        </motion.div>

        <div className="absolute inset-0 bg-primary-container/10 z-0" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-container/30 via-transparent to-primary-container/15 z-0" />

        <div className="relative z-10 text-center px-6 md:px-0 max-w-4xl">
          <motion.span
            initial={heroInitial({ opacity: 0, y: 40 })}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: LUXURY_EASE, delay: reduceMotion ? 0 : 0.2 }}
            className="font-label-caps text-label-caps text-secondary-fixed mb-4 block tracking-[0.3em] text-amber-100 uppercase"
          >
            {t.hero.eyebrow}
          </motion.span>

          <motion.h1
            initial={heroInitial({ opacity: 0, y: 40, filter: "blur(6px)" })}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, ease: LUXURY_EASE, delay: reduceMotion ? 0 : 0.4 }}
            className="font-headline-xl text-3xl md:text-headline-xl text-on-primary mb-8 leading-tight"
          >
            {t.hero.titleBefore}
            <span className="italic font-serif font-light text-secondary-fixed-dim">{t.hero.titleEmphasis}</span>
            {t.hero.titleAfter}
          </motion.h1>

          <motion.div
            initial={heroInitial({ opacity: 0, y: 40 })}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: LUXURY_EASE, delay: reduceMotion ? 0 : 0.65 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <button
              onClick={onStartPlanning}
              className="btn-premium-hover w-full sm:w-auto bg-teal-ocean text-white hover:bg-teal-dark-hover px-10 py-4 font-label-caps text-label-caps transition-all shadow-lg hover:shadow-xl rounded-sm cursor-pointer"
            >
              {t.hero.ctaPrimary}
            </button>
            <Link
              to="/rooms"
              className="btn-premium-hover w-full sm:w-auto text-center border border-teal-ocean text-teal-dark-primary px-10 py-4 font-label-caps text-label-caps bg-white/80 hover:bg-light-aqua hover:text-teal-dark-hover transition-all rounded-sm"
            >
              {t.hero.ctaSecondary}
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={reduceMotion ? undefined : { y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-on-primary/60 cursor-pointer"
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

      {/* 2. The Promise Section */}
      <section className="py-24 px-6 md:px-margin-desktop max-w-container-max mx-auto" id="retreat">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <FadeUp>
            <h2 className="font-headline-lg text-headline-lg text-primary mb-6">{t.promise.title}</h2>
          </FadeUp>
          <FadeUp delay={0.08}>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">{t.promise.body}</p>
          </FadeUp>
        </div>

        <StaggerGroup key={language} stagger={0.12} className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {t.promise.cards.map((card, index) => {
            const Icon = PROMISE_ICONS[index];
            const iconBg = index === 1 ? "bg-gold-main" : "bg-teal-fresh";
            return (
              <StaggerItem
                key={index}
                className="bg-bg-card border border-border-custom p-10 flex flex-col items-center text-center group hover:border-gold-main hover:shadow-xl transition-all duration-500 rounded"
              >
                <div
                  className={`w-16 h-16 ${iconBg} flex items-center justify-center rounded-full mb-6 transition-colors shadow`}
                >
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-headline-sm text-headline-sm text-text-main mb-4 group-hover:text-teal-dark-primary transition-colors">
                  {card.title}
                </h3>
                <p className="font-body-md text-body-md text-text-muted leading-relaxed">{card.body}</p>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </section>

      {/* 3. Location Section */}
      <section className="bg-primary-container text-on-primary overflow-hidden" id="location">
        <div className="flex flex-col md:flex-row items-stretch min-h-[500px]">
          <SplitText side="start" className="w-full md:w-1/2 p-12 md:p-20 flex flex-col justify-center">
            <h2 className="font-display-script text-display-script text-on-primary mb-8">{t.location.title}</h2>
            <p className="font-body-lg text-body-lg text-on-primary-container mb-10 leading-relaxed opacity-90">
              {t.location.body}
            </p>
            <div className="flex items-center gap-4 mb-10">
              <div className="w-10 h-10 bg-primary-container border border-secondary-fixed-dim/30 flex items-center justify-center rounded-full">
                <MapPin className="text-secondary-fixed-dim w-5 h-5" />
              </div>
              <span className="font-label-caps text-label-caps text-on-primary uppercase tracking-widest">
                {t.location.pin}
              </span>
            </div>
            <SectionCta to="/costa-rica-guide" label={home.links.learnMore} />
          </SplitText>
          <SplitImage side="end" className="w-full md:w-1/2 relative min-h-[350px] md:min-h-full">
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

      {/* 4. Cinematic Story (Tactile Scroll Journey) */}
      <section className="py-24 relative bg-surface-container-low overflow-hidden">
        <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <FadeUp className="w-full lg:w-1/2 lg:sticky lg:top-28">
              <ImageReveal className="aspect-[4/3] md:aspect-[16/10] rounded shadow-2xl relative">
                <OptimizedImage
                  className="w-full h-full object-cover"
                  alt={t.scrollStory.imageAlt}
                  src={SCROLL_STORY_IMAGE_URL}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
                <div className="absolute bottom-6 left-6 text-on-primary scroll-story-caption">
                  <p className="font-headline-sm text-headline-sm">{t.scrollStory.imageTitle}</p>
                </div>
              </ImageReveal>
            </FadeUp>

            <div className="w-full lg:w-1/2">
              <StaggerGroup stagger={0.14} className="space-y-16 py-4">
                {t.scrollStory.stages.map((stage) => (
                  <StaggerItem key={stage.label} className={accentBorderClass}>
                    <span className="font-label-caps text-xs text-secondary tracking-widest block mb-2">{stage.label}</span>
                    <h3 className="font-headline-sm text-headline-sm text-primary mb-3">{stage.title}</h3>
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">{stage.body}</p>
                  </StaggerItem>
                ))}
              </StaggerGroup>
              <FadeUp delay={0.2} className="mt-12">
                <SectionCta to="/contact" label={home.links.planYourStay} />
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Kosher Dining Section */}
      <section className="py-24 px-6 md:px-margin-desktop" id="dining">
        <div className="max-w-container-max mx-auto">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
            <SplitImage side="start" className="w-full lg:w-1/2">
              <ImageReveal className="aspect-[4/5] rounded shadow-2xl">
                <OptimizedImage
                  src={DINING_IMAGE.src}
                  srcSet={DINING_IMAGE.srcSet}
                  sizes={DINING_IMAGE.sizes}
                  alt={t.dining.imageAlt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </ImageReveal>
            </SplitImage>
            <SplitText side="end" className="w-full lg:w-1/2">
              <h2 className="font-headline-lg text-headline-lg text-primary mb-8 leading-tight">{t.dining.title}</h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-10 leading-relaxed">{t.dining.body}</p>

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
      <section className="py-24 px-6 md:px-margin-desktop max-w-container-max mx-auto">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <FadeUp>
            <h2 className="font-headline-lg text-headline-lg text-primary mb-6">{t.family.title}</h2>
          </FadeUp>
        </div>

        <ImageReveal className="relative h-[480px] w-full rounded overflow-hidden mb-12 shadow-xl">
          <OptimizedImage
            className="w-full h-full object-cover"
            alt={t.family.heroImageAlt}
            src={FAMILY_HERO_IMAGE_URL}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent flex flex-col justify-end p-8 md:p-12 text-start pointer-events-none" />
          <div className="absolute bottom-8 left-8 md:left-12 max-w-2xl text-on-primary family-hero-caption pointer-events-none">
            <span className="bg-secondary px-3 py-1 font-label-caps text-[10px] uppercase tracking-widest mb-3 inline-block text-on-secondary">
              {t.family.heroBadge}
            </span>
            <h3 className="font-headline-md text-headline-md text-on-primary mb-2">{t.family.heroTitle}</h3>
            <p className="text-on-primary/95 text-body-md leading-relaxed">{t.family.heroBody}</p>
          </div>
        </ImageReveal>

        <StaggerGroup stagger={0.12} className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {t.family.miniCards.map((card) => (
            <StaggerItem
              key={card.label}
              className="p-6 bg-surface-container-low border border-surface-container rounded text-center"
            >
              <span className="font-label-caps text-xs text-secondary mb-2 block tracking-wider font-semibold">
                {card.label}
              </span>
              <h5 className="font-headline-sm text-lg text-primary">{card.title}</h5>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <FadeUp className="text-center">
          <SectionCta to="/costa-rica-guide" label={home.links.learnMore} />
        </FadeUp>
      </section>

      {/* 8. In-Hotel Experiences (Horizontal Scroll Gallery) */}
      <section className="bg-primary-container py-24">
        <div className="px-6 md:px-margin-desktop mb-12 flex justify-between items-end max-w-container-max mx-auto">
          <div className="text-on-primary">
            <FadeUp>
              <h2 className="font-display-script text-display-script text-on-primary">{t.carousel.title}</h2>
            </FadeUp>
          </div>
          <FadeUp delay={0.18} className="flex gap-4">
            <button
              onClick={() => scroll("left")}
              className="btn-premium-hover p-3 border border-on-primary/30 text-on-primary rounded-full hover:bg-on-primary hover:text-primary transition-all cursor-pointer"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="btn-premium-hover p-3 border border-on-primary/30 text-on-primary rounded-full hover:bg-on-primary hover:text-primary transition-all cursor-pointer"
            >
              <ArrowRight className="w-5 h-5" />
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
              className="flex w-max flex-nowrap gap-8 px-6 md:px-margin-desktop pb-6"
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
                    <div className="absolute bottom-0 left-0 p-8 text-on-primary drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)] carousel-card-caption">
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

        <FadeUp delay={0.2} className="text-center mt-10 px-6 md:px-margin-desktop">
          <SectionCta to="/costa-rica-guide" label={home.links.viewExperiences} className="text-on-primary border-on-primary/60 hover:text-secondary-fixed hover:border-secondary-fixed" />
        </FadeUp>
      </section>

      {/* 9. Bento Grid Excursions */}
      <section className="py-24 px-6 md:px-margin-desktop max-w-container-max mx-auto" id="experiences">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <FadeUp>
            <h2 className="font-headline-lg text-headline-lg text-primary mb-4">{t.experiences.title}</h2>
          </FadeUp>
          <FadeUp delay={0.08}>
            <p className="font-body-lg text-body-lg text-on-surface-variant">{t.experiences.subtitle}</p>
          </FadeUp>
        </div>

        <StaggerGroup stagger={0.12} className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {t.experiences.cards.map((card, index) => {
            const isWide = index === 0 || index === 3;
            const titleClass =
              index === 0 || index === 3 ? "font-headline-md text-headline-md" : "font-headline-sm text-headline-sm";
            const badgeClass = index === 0 || index === 3 ? "bg-secondary" : "bg-secondary/80";
            return (
              <StaggerItem
                key={card.title}
                className={`${isWide ? "lg:col-span-2" : ""} relative group overflow-hidden rounded shadow-lg h-[400px]`}
              >
                <ImageReveal className="absolute inset-0 h-full w-full" innerClassName="h-full w-full">
                  <OptimizedImage
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
                    src={EXPERIENCE_IMAGE_URLS[index]}
                    alt={card.alt}
                  />
                </ImageReveal>
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/15 transition-all duration-500 pointer-events-none" />
                <div className="absolute bottom-0 left-0 p-8 text-on-primary bento-caption pointer-events-none">
                  <span
                    className={`font-label-caps text-xs uppercase ${badgeClass} px-3 py-1 mb-3 inline-block rounded-sm text-on-secondary`}
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

      {/* 10. Rooms & Villas Section */}
      <section className="bg-surface-container py-24 px-6 md:px-margin-desktop" id="rooms">
        <div className="max-w-container-max mx-auto">
          <div className="mb-16 flex flex-col md:flex-row justify-between items-center">
            <div className="max-w-xl text-center md:text-start mb-8 md:mb-0">
              <FadeUp>
                <h2 className="font-headline-lg text-headline-lg text-primary mb-4">{t.rooms.title}</h2>
              </FadeUp>
              <FadeUp delay={0.08}>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">{t.rooms.body}</p>
              </FadeUp>
            </div>
            <FadeUp delay={0.12}>
              <SectionCta to="/rooms" label={home.links.exploreRooms} />
            </FadeUp>
          </div>

          <StaggerGroup stagger={0.14} className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {roomsCopy.rooms.slice(0, 2).map((room, roomIndex) => {
              const imageSide: "start" | "end" = roomIndex % 2 === 0 ? "start" : "end";
              const textSide: "start" | "end" = roomIndex % 2 === 0 ? "end" : "start";
              return (
                <StaggerItem
                  key={room.id}
                  className="bg-surface rounded overflow-hidden shadow-lg border border-surface-container hover:shadow-2xl transition-all duration-300"
                >
                  <SplitImage side={imageSide}>
                    <div className="aspect-[16/10] overflow-hidden relative group">
                      <ImageReveal className="h-full w-full" innerClassName="h-full w-full">
                        <OptimizedImage
                          src={room.image}
                          alt={room.imageAlt}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
                          style={{ objectPosition: room.imageObjectPosition }}
                        />
                      </ImageReveal>
                      <div className="absolute top-4 right-4 bg-primary text-on-primary font-label-caps text-xs px-3 py-1.5 rounded-sm shadow">
                        {roomsCopy.availabilityLabel}
                      </div>
                    </div>
                  </SplitImage>
                  <SplitText side={textSide}>
                    <div className="p-8">
                      <h3 className="font-headline-sm text-headline-sm text-primary mb-4">{room.name}</h3>
                      <p className="font-body-md text-body-md text-on-surface-variant mb-6 leading-relaxed h-20 overflow-hidden text-ellipsis">
                        {room.description}
                      </p>
                      <div className="flex flex-wrap gap-2.5 mb-6">
                        {room.includes.slice(0, 3).map((feature) => (
                          <span
                            key={feature}
                            className="bg-surface-container text-on-surface-variant px-3 py-1 text-[11px] font-label-caps uppercase tracking-wider rounded-sm"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                      <Link
                        to="/contact"
                        className="btn-premium-hover w-full inline-flex justify-center bg-primary-container text-on-primary py-3 font-label-caps text-xs uppercase tracking-widest hover:bg-secondary transition-colors rounded-sm shadow hover:shadow-md"
                      >
                        {t.rooms.selectPlanner}
                      </Link>
                    </div>
                  </SplitText>
                </StaggerItem>
              );
            })}
          </StaggerGroup>
        </div>
      </section>

      {/* 11. Program Calendar */}
      <section className="py-24 px-6 md:px-margin-desktop max-w-container-max mx-auto" id="programs">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <FadeUp>
            <h2 className="font-headline-lg text-headline-lg text-primary mb-4">{t.programs.title}</h2>
          </FadeUp>
          <FadeUp delay={0.08}>
            <p className="font-body-lg text-body-lg text-on-surface-variant">{t.programs.subtitle}</p>
          </FadeUp>
        </div>

        <StaggerGroup stagger={0.12} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.programs.cards.map((card) => (
            <StaggerItem
              key={card.title}
              className="border border-surface-container-high p-10 hover:shadow-2xl hover:border-secondary transition-all rounded-sm flex flex-col justify-between group bg-surface-container-low text-center"
            >
              <div>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-4">{card.title}</h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-8 leading-relaxed">{card.body}</p>
              </div>
              <Link
                to="/contact"
                className="btn-premium-hover font-label-caps text-label-caps text-secondary group-hover:text-primary font-semibold transition-colors uppercase border-b border-transparent group-hover:border-primary pb-1 self-center"
              >
                {card.cta}
              </Link>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      {/* 12. Trust Section */}
      <section className="bg-primary-container text-on-primary py-24">
        <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop text-center">
          <FadeUp>
            <h2 className="font-headline-lg text-headline-lg text-on-primary mb-12">{t.trust.title}</h2>
          </FadeUp>

          <StaggerGroup stagger={0.12} className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Award, ...t.trust.stats[0] },
              { icon: Compass, ...t.trust.stats[1] },
              { icon: Users, ...t.trust.stats[2] },
              { icon: ShieldCheck, ...t.trust.stats[3] },
            ].map((stat) => (
              <StaggerItem key={stat.label} className="border-r border-on-primary/10 last:border-0 pe-4 trust-stat-divider">
                <SoftScale>
                  <div className="flex justify-center mb-3">
                    <stat.icon className="w-8 h-8 text-secondary-fixed" />
                  </div>
                </SoftScale>
                <h4 className="font-headline-sm text-2xl md:text-headline-sm text-secondary-fixed mb-2">{stat.value}</h4>
                <p className="font-label-caps text-xs uppercase tracking-wider text-on-primary-container">{stat.label}</p>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* 13. Final CTA */}
      <section className="py-24 px-6 md:px-margin-desktop bg-surface-container-low text-center">
        <div className="max-w-3xl mx-auto">
          <FadeUp>
            <h2 className="font-headline-lg text-headline-lg text-primary mb-6">{t.finalCta.title}</h2>
          </FadeUp>
          <FadeUp delay={0.08}>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-10 leading-relaxed">{t.finalCta.body}</p>
          </FadeUp>
          <SoftScale delay={0.2}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                to="/contact"
                className="btn-premium-hover bg-primary text-on-primary hover:bg-secondary px-10 py-5 font-label-caps text-label-caps uppercase tracking-widest shadow-xl hover:shadow-2xl transition-all rounded-sm"
              >
                {t.finalCta.cta}
              </Link>
              <Link
                to="/contact"
                className="btn-premium-hover font-label-caps text-label-caps text-secondary border-b-2 border-secondary pb-1 hover:text-primary hover:border-primary transition-all font-semibold uppercase"
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
