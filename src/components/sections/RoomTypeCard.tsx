import { Link } from "react-router-dom";
import OptimizedImage from "../OptimizedImage";
import { FadeUp, ImageReveal, SplitImage, SplitText } from "../motion/PremiumReveal";

type RoomLayoutVariant = "tall" | "wide" | "balanced" | "portrait";

type RoomTypeCardProps = {
  badge: string;
  name: string;
  description: string;
  includes: readonly string[];
  idealFor: string;
  image: string;
  imageSrcSet?: string;
  imageAlt: string;
  imageObjectPosition?: string;
  includesLabel: string;
  idealForLabel: string;
  availabilityLabel: string;
  ctaLabel: string;
  reversed?: boolean;
  variant?: RoomLayoutVariant;
  eager?: boolean;
};

const imageAspect: Record<RoomLayoutVariant, string> = {
  tall: "aspect-[4/5] md:aspect-[5/6]",
  wide: "aspect-[16/11] md:aspect-[5/4]",
  balanced: "aspect-[5/4] md:aspect-[4/3]",
  portrait: "aspect-[3/4] md:aspect-[4/5]",
};

export default function RoomTypeCard({
  badge,
  name,
  description,
  includes,
  idealFor,
  image,
  imageSrcSet,
  imageAlt,
  imageObjectPosition = "center center",
  includesLabel,
  idealForLabel,
  availabilityLabel,
  ctaLabel,
  reversed = false,
  variant = "balanced",
  eager = false,
}: RoomTypeCardProps) {
  const imageSide = reversed ? "end" : "start";
  const textSide = reversed ? "start" : "end";

  return (
    <article className="flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-14 xl:gap-16">
      <SplitImage
        side={imageSide}
        eager={eager}
        className={`w-full lg:w-[48%] ${reversed ? "lg:order-2" : "lg:order-1"}`}
      >
        <ImageReveal
          eager={eager}
          className={`${imageAspect[variant]} rounded-sm shadow-sm border border-surface-container-high overflow-hidden group`}
        >
          <OptimizedImage
            src={image}
            srcSet={imageSrcSet}
            sizes="(min-width: 1024px) 48vw, 100vw"
            alt={imageAlt}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            style={{ objectPosition: imageObjectPosition }}
          />
        </ImageReveal>
      </SplitImage>

      <SplitText
        side={textSide}
        eager={eager}
        className={`w-full lg:w-[52%] ${reversed ? "lg:order-1" : "lg:order-2"}`}
      >
        <FadeUp eager={eager}>
          <span className="inline-block font-label-caps text-[10px] uppercase tracking-[0.22em] text-secondary border border-secondary/40 px-3 py-1.5 mb-5 rounded-sm">
            {badge}
          </span>
          <h2 className="font-headline-lg text-3xl md:text-4xl text-primary mb-3 leading-tight">{name}</h2>
          <p className="font-label-caps text-[10px] uppercase tracking-wider text-secondary mb-5">
            {availabilityLabel}
          </p>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 leading-relaxed">{description}</p>

          <div className="mb-6">
            <span className="font-label-caps text-[10px] uppercase tracking-wider text-secondary block mb-3">
              {includesLabel}
            </span>
            <ul className="space-y-2">
              {includes.map((item) => (
                <li key={item} className="text-sm text-on-surface-variant leading-relaxed flex gap-2">
                  <span className="text-secondary shrink-0" aria-hidden>
                    —
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-8">
            <span className="font-label-caps text-[10px] uppercase tracking-wider text-secondary block mb-2">
              {idealForLabel}
            </span>
            <p className="text-sm text-on-surface-variant leading-relaxed">{idealFor}</p>
          </div>

          <Link
            to="/contact"
            className="btn-premium-hover inline-flex justify-center bg-primary text-on-primary hover:bg-secondary py-3.5 px-8 font-label-caps text-xs uppercase tracking-widest rounded-sm transition-colors"
          >
            {ctaLabel}
          </Link>
        </FadeUp>
      </SplitText>
    </article>
  );
}
