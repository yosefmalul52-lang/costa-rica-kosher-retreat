import { Link } from "react-router-dom";
import { FadeUp } from "../motion/PremiumReveal";
import { useLanguage } from "../../context/LanguageContext";
import { BRAND_LOGO_LIGHT, BRAND_NAME } from "../../content/brand";

const FOOTER_LINKS = [
  { to: "/", labelKey: "home" as const, end: true },
  { to: "/holidays", labelKey: "holidays" as const },
  { to: "/pesach", labelKey: "pesach" as const },
  { to: "/sukkot", labelKey: "sukkot" as const },
  { to: "/year-round", labelKey: "yearRound" as const },
  { to: "/rooms", labelKey: "rooms" as const },
  { to: "/kosher-jewish-life", labelKey: "kosherJewishLife" as const },
  { to: "/costa-rica-guide", labelKey: "costaRicaGuide" as const },
  { to: "/faq", labelKey: "faq" as const },
  { to: "/contact", labelKey: "contact" as const },
];

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-teal-footer text-white/90 w-full py-14 md:py-20 px-4 md:px-margin-desktop border-t border-border-custom/25">
      <FadeUp>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-gutter max-w-container-max mx-auto mb-10 md:mb-16">
          <div className="col-span-1 md:col-span-2">
            <img
              src={BRAND_LOGO_LIGHT}
              alt={BRAND_NAME}
              width={880}
              height={272}
              className="h-14 sm:h-20 w-auto max-w-[min(100%,280px)] sm:max-w-[360px] object-contain object-left mb-4 sm:mb-5"
              decoding="async"
            />
            <p className="font-body-md text-sm text-main-bg/80 max-w-sm mb-6 leading-relaxed">
              {t.footer.description}
            </p>
            <div className="flex gap-3 sm:gap-4 flex-wrap">
              {t.footer.badges.map((badge) => (
                <span
                  key={badge}
                  className="bg-teal-dark-primary px-3 py-1 text-[10px] font-label-caps uppercase tracking-wider rounded border border-border-custom/30 text-white/90"
                >
                  {badge}
                </span>
              ))}
            </div>

            <div className="mt-8 max-w-sm">
              <label className="font-label-caps text-[10px] uppercase tracking-wider block mb-2 text-gold-soft">
                {t.footer.newsletterLabel}
              </label>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder={t.footer.emailPlaceholder}
                  className="flex-1 min-w-0 bg-white text-text-main placeholder:text-text-muted/60 px-4 py-3 text-xs rounded-sm focus:outline-none input-ltr"
                />
                <button
                  type="button"
                  className="btn-premium-hover bg-teal-ocean text-white hover:bg-teal-dark-hover px-4 py-3 text-xs font-label-caps uppercase tracking-wider rounded-sm transition-colors cursor-pointer shrink-0"
                >
                  {t.footer.subscribe}
                </button>
              </div>
            </div>
          </div>
          <div className="md:col-span-2">
            <p className="font-label-caps text-xs uppercase mb-4 text-gold-soft font-bold">
              {t.footer.exploreTitle}
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 text-sm text-white/80 font-body-md">
              {FOOTER_LINKS.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="hover:text-gold-main transition-colors">
                    {t.nav[item.labelKey]}
                  </Link>
                </li>
              ))}
              <li>
                <span className="block opacity-60">{t.footer.location}</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-container-max mx-auto text-center pt-8 border-t border-border-custom/20">
          <p className="font-body-md text-xs text-main-bg/60">{t.footer.copyright}</p>
        </div>
      </FadeUp>
    </footer>
  );
}
