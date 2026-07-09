import { useLanguage } from "../context/LanguageContext";
import PageShell from "../components/layout/PageShell";
import RoomTypeCard from "../components/sections/RoomTypeCard";
import PageCta from "../components/sections/PageCta";

export default function RoomsPage() {
  const { t } = useLanguage();
  const copy = t.pages.rooms;

  return (
    <>
      <PageShell eyebrow={copy.hero.eyebrow} title={copy.hero.title} body={copy.hero.body}>
        <div className="space-y-12 md:space-y-16">
          {copy.rooms.map((room, index) => (
            <div key={room.id}>
              <RoomTypeCard
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
                reversed={index % 2 === 1}
              />
            </div>
          ))}
        </div>
      </PageShell>
      <PageCta title={copy.cta.title} body={copy.cta.body} buttonLabel={copy.cta.button} />
    </>
  );
}
