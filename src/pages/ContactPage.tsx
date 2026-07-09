import { Mail, MapPin, Phone } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import PageShell from "../components/layout/PageShell";
import InquiryForm from "../components/sections/InquiryForm";
import PageCta from "../components/sections/PageCta";
import PageHeroImage from "../components/sections/PageHeroImage";
import { HAS_REAL_EMAIL, HAS_REAL_PHONE, HAS_REAL_WHATSAPP, WHATSAPP_URL } from "../content/brand";
import { galleryAlt, hotelGallery } from "../lib/hotelGallery";
import { FadeUp } from "../components/motion/PremiumReveal";

export default function ContactPage() {
  const { t, language } = useLanguage();
  const copy = t.pages.contact;
  const heroImage = hotelGallery.tropicalResortArrival;

  return (
    <>
      <PageShell eyebrow={copy.hero.eyebrow} title={copy.hero.title} body={copy.hero.body}>
        <PageHeroImage
          src={heroImage.src}
          alt={galleryAlt(heroImage, language)}
          objectPosition={heroImage.objectPosition}
          className="max-h-[360px]"
        />
        <FadeUp>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-surface border border-surface-container-high p-8 rounded-sm space-y-6">
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
            <div>
              <InquiryForm labels={copy.form} compact />
            </div>
          </div>
        </FadeUp>
      </PageShell>
      <PageCta title={copy.cta.title} body={copy.cta.body} buttonLabel={copy.cta.button} />
    </>
  );
}
