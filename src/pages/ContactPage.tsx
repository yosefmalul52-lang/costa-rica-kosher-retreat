import { Mail, MapPin, Phone } from "lucide-react";
import { motion } from "motion/react";
import OptimizedImage from "../components/OptimizedImage";
import { FadeUp, ImageReveal, SoftScale } from "../components/motion/PremiumReveal";
import InquiryForm from "../components/sections/InquiryForm";
import { HAS_REAL_EMAIL, HAS_REAL_PHONE, HAS_REAL_WHATSAPP, WHATSAPP_URL } from "../content/brand";
import { useLanguage } from "../context/LanguageContext";
import { galleryAlt, hotelGallery } from "../lib/hotelGallery";
import { LUXURY_EASE, usePremiumMotion } from "../lib/motionPresets";

const HERO_IMAGE = hotelGallery.tropicalResortArrival;
const FORM_IMAGE = hotelGallery.jungleVerandaMountainView;

export default function ContactPage() {
  const { t, language } = useLanguage();
  const copy = t.pages.contact;
  const { heroInitial, reduceMotion } = usePremiumMotion();

  return (
    <div className="bg-surface select-text">
      {/* 1. Full-bleed hero */}
      <section className="relative min-h-[58vh] md:min-h-[64vh] w-full flex items-end md:items-center overflow-hidden">
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

        <div className="relative z-10 w-full max-w-container-max mx-auto px-6 md:px-margin-desktop pb-14 pt-32 md:py-20 text-center">
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

      {/* 2. Atmosphere image + form */}
      <section className="py-16 md:py-24 px-6 md:px-margin-desktop max-w-container-max mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-5 space-y-8">
            <SoftScale eager className="hidden lg:block">
              <ImageReveal eager className="aspect-[4/5] rounded-sm shadow-sm border border-surface-container-high overflow-hidden">
                <OptimizedImage
                  src={FORM_IMAGE.src}
                  alt={galleryAlt(FORM_IMAGE, language)}
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: FORM_IMAGE.objectPosition }}
                />
              </ImageReveal>
            </SoftScale>

            <FadeUp eager>
              <div className="border border-surface-container-high bg-surface p-6 md:p-8 rounded-sm space-y-6">
                <div className="flex items-start gap-4">
                  <Phone className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <div>
                    <span className="font-label-caps text-[10px] uppercase tracking-wider text-secondary block mb-1">
                      {copy.details.phoneLabel}
                    </span>
                    {HAS_REAL_PHONE ? (
                      <a
                        href={`tel:${copy.details.phone.replace(/\s/g, "")}`}
                        className="text-primary hover:text-secondary transition-colors input-ltr"
                      >
                        {copy.details.phone}
                      </a>
                    ) : (
                      <p className="text-on-surface-variant">{copy.details.phone}</p>
                    )}
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <div>
                    <span className="font-label-caps text-[10px] uppercase tracking-wider text-secondary block mb-1">
                      {copy.details.emailLabel}
                    </span>
                    {HAS_REAL_EMAIL ? (
                      <a
                        href={`mailto:${copy.details.email}`}
                        className="text-primary hover:text-secondary transition-colors input-ltr"
                      >
                        {copy.details.email}
                      </a>
                    ) : (
                      <p className="text-on-surface-variant">{copy.details.email}</p>
                    )}
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <div>
                    <span className="font-label-caps text-[10px] uppercase tracking-wider text-secondary block mb-1">
                      {copy.details.locationLabel}
                    </span>
                    <p className="text-on-surface-variant">{copy.details.location}</p>
                    <p className="text-sm text-on-surface-variant/80 mt-2">{copy.details.hours}</p>
                  </div>
                </div>
                {HAS_REAL_WHATSAPP ? (
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-premium-hover block text-center border border-secondary text-secondary hover:bg-secondary hover:text-on-secondary py-3.5 font-label-caps text-xs uppercase tracking-widest rounded-sm transition-colors"
                  >
                    {copy.form.whatsapp}
                  </a>
                ) : (
                  <p className="text-sm text-on-surface-variant border border-surface-container-high rounded-sm py-3.5 px-4 text-center">
                    {copy.details.whatsappPlaceholder}
                  </p>
                )}
              </div>
            </FadeUp>

            <SoftScale className="lg:hidden">
              <ImageReveal className="aspect-[16/10] rounded-sm shadow-sm border border-surface-container-high overflow-hidden">
                <OptimizedImage
                  src={FORM_IMAGE.src}
                  alt={galleryAlt(FORM_IMAGE, language)}
                  sizes="100vw"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: FORM_IMAGE.objectPosition }}
                />
              </ImageReveal>
            </SoftScale>
          </div>

          <div className="lg:col-span-7">
            <InquiryForm
              variant="contact"
              labels={{
                ...copy.form,
                whatsappPlaceholder: copy.details.whatsappPlaceholder,
              }}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
