import { Fragment } from "react";
import { useLanguage } from "../context/LanguageContext";
import PageShell from "../components/layout/PageShell";
import ContentBlock from "../components/sections/ContentBlock";
import PageCta from "../components/sections/PageCta";
import PageHeroImage from "../components/sections/PageHeroImage";
import VisualCard from "../components/sections/VisualCard";
import { galleryAlt, hotelGallery } from "../lib/hotelGallery";
import { StaggerGroup, StaggerItem } from "../components/motion/PremiumReveal";

export default function CostaRicaGuidePage() {
  const { t, language } = useLanguage();
  const copy = t.pages.costaRicaGuide;
  const heroImage = hotelGallery.tropicalJungleWaterfall;

  const visualHighlights = [
    { section: copy.sections[3], image: hotelGallery.jungleVerandaMountainView },
    { section: copy.sections[6], image: hotelGallery.tropicalPoolRetreat },
    { section: copy.sections[2], image: hotelGallery.tropicalResortArrival },
  ];

  const remainingSections = [
    copy.sections[0],
    copy.sections[1],
    copy.sections[4],
    copy.sections[5],
    copy.sections[7],
    copy.sections[8],
  ];

  return (
    <>
      <PageShell eyebrow={copy.hero.eyebrow} title={copy.hero.title} body={copy.hero.body}>
        <PageHeroImage
          src={heroImage.src}
          alt={galleryAlt(heroImage, language)}
          objectPosition={heroImage.objectPosition}
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {visualHighlights.map((item) => (
            <Fragment key={item.section.title}>
              <VisualCard
                image={item.image.src}
                imageAlt={galleryAlt(item.image, language)}
                objectPosition={item.image.objectPosition}
                title={item.section.title}
                body={item.section.body}
              />
            </Fragment>
          ))}
        </div>
        <StaggerGroup stagger={0.1} className="space-y-10 max-w-3xl mx-auto">
          {remainingSections.map((section) => (
            <StaggerItem key={section.title}>
              <ContentBlock title={section.title} body={section.body} />
            </StaggerItem>
          ))}
        </StaggerGroup>
      </PageShell>
      <PageCta title={copy.cta.title} body={copy.cta.body} buttonLabel={copy.cta.button} buttonTo="/contact" />
    </>
  );
}
