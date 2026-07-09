import { useLanguage } from "../context/LanguageContext";
import PageShell from "../components/layout/PageShell";
import FaqAccordion from "../components/sections/FaqAccordion";
import PageCta from "../components/sections/PageCta";
import PageHeroImage from "../components/sections/PageHeroImage";
import { galleryAlt, hotelGallery } from "../lib/hotelGallery";

export default function FaqPage() {
  const { t, language } = useLanguage();
  const copy = t.pages.faq;
  const heroImage = hotelGallery.luxuryVillaGardenPathway;

  return (
    <>
      <PageShell eyebrow={copy.hero.eyebrow} title={copy.hero.title} body={copy.hero.body}>
        <PageHeroImage
          src={heroImage.src}
          alt={galleryAlt(heroImage, language)}
          objectPosition={heroImage.objectPosition}
          className="max-h-[320px]"
        />
        <FaqAccordion items={copy.items} showCategory />
      </PageShell>
      <PageCta title={copy.cta.title} body={copy.cta.body} buttonLabel={copy.cta.button} buttonTo="/contact" />
    </>
  );
}
