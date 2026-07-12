import { motion } from "motion/react";
import OptimizedImage from "../components/OptimizedImage";
import RoomTypeCard from "../components/sections/RoomTypeCard";
import PageCta from "../components/sections/PageCta";
import { useLanguage } from "../context/LanguageContext";
import { galleryAlt, hotelGallery } from "../lib/hotelGallery";
import { LUXURY_EASE, usePremiumMotion } from "../lib/motionPresets";

const HERO_IMAGE = hotelGallery.privateVillaGardenEntrance;

const ROOM_VARIANTS = ["tall", "wide", "balanced", "portrait"] as const;

export default function RoomsPage() {
  const { t, language } = useLanguage();
  const copy = t.pages.rooms;
  const { heroInitial, reduceMotion } = usePremiumMotion();

  return (
    <div className="bg-surface select-text">
      {/* 1. Full-bleed villa hero */}
      <section className="relative min-h-[64vh] md:min-h-[72vh] w-full flex items-end md:items-center overflow-hidden">
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

        <div className="relative z-10 w-full max-w-container-max mx-auto px-5 sm:px-6 md:px-margin-desktop pb-12 sm:pb-14 pt-28 sm:pt-32 md:py-20 text-center">
          <motion.span
            initial={heroInitial({ opacity: 0, y: 28 })}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: LUXURY_EASE, delay: reduceMotion ? 0 : 0.15 }}
            className="font-label-caps text-[11px] sm:text-label-caps text-secondary-fixed mb-3 sm:mb-4 block tracking-[0.22em] sm:tracking-[0.28em] uppercase [text-shadow:0_4px_24px_rgba(0,0,0,0.45)]"
          >
            {copy.hero.eyebrow}
          </motion.span>
          <motion.h1
            initial={heroInitial({ opacity: 0, y: 32, filter: "blur(6px)" })}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.95, ease: LUXURY_EASE, delay: reduceMotion ? 0 : 0.3 }}
            className="font-headline-lg text-[1.75rem] sm:text-4xl md:text-headline-lg text-on-primary mb-4 sm:mb-5 max-w-3xl mx-auto leading-tight [text-shadow:0_4px_24px_rgba(0,0,0,0.45)]"
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

      {/* 2–4. Four lodging types — alternating layouts */}
      {copy.rooms.map((room, index) => {
        const reversed = index % 2 === 1;
        const onCream = index === 1 || index === 3;

        return (
          <section
            key={room.id}
            className={onCream ? "bg-surface-container py-14 md:py-28" : "bg-surface py-14 md:py-28"}
          >
            <div className="max-w-container-max mx-auto px-5 sm:px-6 md:px-margin-desktop">
              <RoomTypeCard
                badge={room.badge}
                name={room.name}
                description={room.description}
                includes={room.includes}
                idealFor={room.idealFor}
                image={room.image}
                imageAlt={room.imageAlt}
                imageObjectPosition={room.imageObjectPosition}
                includesLabel={copy.includesLabel}
                idealForLabel={copy.idealForLabel}
                availabilityLabel={copy.availabilityLabel}
                ctaLabel={copy.planCta}
                reversed={reversed}
                variant={ROOM_VARIANTS[index]}
                eager={index === 0}
              />
            </div>
          </section>
        );
      })}

      <PageCta title={copy.cta.title} body={copy.cta.body} buttonLabel={copy.cta.button} buttonTo="/contact" />
    </div>
  );
}
