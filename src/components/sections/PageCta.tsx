import { Link } from "react-router-dom";
import { SoftScale } from "../motion/PremiumReveal";

type PageCtaProps = {
  title: string;
  body: string;
  buttonLabel: string;
  buttonTo?: string;
  onButtonClick?: () => void;
};

export default function PageCta({ title, body, buttonLabel, buttonTo = "/contact", onButtonClick }: PageCtaProps) {
  const buttonClass =
    "btn-premium-hover inline-flex w-full sm:w-auto justify-center bg-primary text-on-primary hover:bg-secondary px-10 py-4 font-label-caps text-label-caps uppercase tracking-widest shadow-lg transition-all rounded-sm cursor-pointer";

  return (
    <section className="py-14 md:py-20 px-5 sm:px-6 md:px-margin-desktop bg-surface-container-low">
      <div className="max-w-3xl mx-auto text-center">
        <SoftScale>
          <h2 className="font-headline-md text-headline-md text-primary mb-4">{title}</h2>
          <p className="font-body-md text-body-md text-on-surface-variant mb-8 leading-relaxed">{body}</p>
          {onButtonClick ? (
            <button type="button" onClick={onButtonClick} className={buttonClass}>
              {buttonLabel}
            </button>
          ) : (
            <Link to={buttonTo} className={buttonClass}>
              {buttonLabel}
            </Link>
          )}
        </SoftScale>
      </div>
    </section>
  );
}
