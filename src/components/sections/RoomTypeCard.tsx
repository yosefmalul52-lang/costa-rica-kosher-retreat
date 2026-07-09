import { Link } from "react-router-dom";
import OptimizedImage from "../OptimizedImage";
import { FadeUp, ImageReveal } from "../motion/PremiumReveal";

type RoomTypeCardProps = {
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
};

export default function RoomTypeCard({
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
}: RoomTypeCardProps) {
  const imageBlock = (
    <ImageReveal className="aspect-[16/10] md:aspect-auto md:h-full min-h-[260px]">
      <OptimizedImage
        src={image}
        srcSet={imageSrcSet}
        sizes="(min-width: 768px) 50vw, 100vw"
        alt={imageAlt}
        className="w-full h-full object-cover"
        style={{ objectPosition: imageObjectPosition }}
      />
    </ImageReveal>
  );

  const textBlock = (
    <div className="p-8 md:p-10 flex flex-col justify-center">
      <h2 className="font-headline-sm text-headline-sm text-primary mb-2">{name}</h2>
      <p className="font-label-caps text-[10px] uppercase tracking-wider text-secondary mb-4">{availabilityLabel}</p>
      <p className="font-body-md text-body-md text-on-surface-variant mb-6 leading-relaxed">{description}</p>
      <div className="mb-5">
        <span className="font-label-caps text-[10px] uppercase tracking-wider text-secondary block mb-2">
          {includesLabel}
        </span>
        <ul className="space-y-1.5">
          {includes.map((item) => (
            <li key={item} className="text-sm text-on-surface-variant leading-relaxed">
              — {item}
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
    </div>
  );

  return (
    <FadeUp>
      <article className="grid grid-cols-1 md:grid-cols-2 bg-surface border border-surface-container-high rounded shadow-sm overflow-hidden">
        {reversed ? (
          <>
            <div className="order-2 md:order-1">{textBlock}</div>
            <div className="order-1 md:order-2">{imageBlock}</div>
          </>
        ) : (
          <>
            {imageBlock}
            {textBlock}
          </>
        )}
      </article>
    </FadeUp>
  );
}
