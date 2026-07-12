import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, Phone, X } from "lucide-react";
import LanguageToggle from "./LanguageToggle";
import { useLanguage } from "../context/LanguageContext";
import { BRAND_LOGO, BRAND_LOGO_LIGHT, BRAND_NAME, HAS_REAL_PHONE } from "../content/brand";

/** Set to true to restore the language toggle in the navbar. */
const SHOW_LANGUAGE_TOGGLE = false;

const NAV_ROUTES = [
  { to: "/", labelKey: "home" as const, end: true },
  { to: "/rooms", labelKey: "rooms" as const },
  { to: "/kosher-jewish-life", labelKey: "kosherJewishLife" as const },
  { to: "/costa-rica-guide", labelKey: "costaRicaGuide" as const },
  { to: "/faq", labelKey: "faq" as const },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { t } = useLanguage();
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  React.useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  React.useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isSolid = isScrolled || !isHome;
  const textClass = isSolid ? "text-teal-dark-primary" : "text-white";
  const underlineClass = isSolid ? "bg-gold-main" : "bg-gold-soft";

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    [
      "font-label-caps text-[14px] leading-none inline-flex items-center transition-all hover:opacity-100 tracking-[0.08em] uppercase whitespace-nowrap",
      isActive
        ? "opacity-100 font-semibold underline decoration-gold-main decoration-2 underline-offset-[6px]"
        : "opacity-70 no-underline hover:text-teal-ocean hover:underline hover:decoration-teal-ocean/35 hover:underline-offset-[6px]",
      textClass,
    ].join(" ");

  const navDividerClass = isSolid ? "bg-border-custom/60" : "bg-white/35";

  const mobileNavLinkClass = ({ isActive }: { isActive: boolean }) =>
    [
      "font-label-caps text-[15px] pb-1 transition-all border-b-2 hover:opacity-100 text-start py-3",
      isActive
        ? "border-gold-main opacity-100 font-semibold text-teal-dark-primary"
        : "border-transparent opacity-70 text-teal-dark-primary",
    ].join(" ");

  const phoneHref = HAS_REAL_PHONE ? `tel:${t.nav.phone.replace(/[^\d+]/g, "")}` : null;
  const actionBorderClass = isSolid ? "border-[#03777A]" : "border-white/45";
  const actionTextClass = isSolid ? "text-[#03777A]" : "text-white";
  const actionHoverClass = isSolid
    ? "hover:bg-bg-aqua hover:text-teal-ocean hover:border-teal-ocean"
    : "hover:bg-teal-ocean hover:text-white hover:border-teal-ocean";

  return (
    <header
      id="top-nav"
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isSolid
          ? "bg-surface shadow-md py-4 border-b border-surface-container-high"
          : "bg-transparent py-6"
      }`}
    >
      <div className="relative flex justify-between items-center px-4 md:px-margin-desktop max-w-container-max mx-auto h-20">
        <NavLink
          to="/"
          className="relative shrink-0 flex h-20 items-center focus:outline-none group min-w-0 max-w-[calc(100%-3.5rem)] sm:max-w-[min(72vw,420px)] lg:max-w-[min(38vw,480px)]"
          aria-label={BRAND_NAME}
        >
          <img
            id="nav-logo"
            src={isSolid ? BRAND_LOGO : BRAND_LOGO_LIGHT}
            alt={BRAND_NAME}
            width={880}
            height={272}
            className="h-full max-h-20 w-auto object-contain object-left transition-opacity duration-300"
            decoding="async"
          />
          <span
            className={`absolute inset-x-0 bottom-0 h-px w-0 group-hover:w-full transition-all duration-300 ${underlineClass}`}
          />
        </NavLink>

        <nav className="hidden lg:flex items-center">
          {NAV_ROUTES.map((item, index) => (
            <div key={item.to} className="flex items-center">
              {index > 0 ? (
                <span
                  aria-hidden
                  className={[
                    "mx-2.5 xl:mx-3.5 h-[14px] w-px shrink-0",
                    navDividerClass,
                  ].join(" ")}
                />
              ) : null}
              <NavLink to={item.to} end={item.end} className={navLinkClass}>
                {t.nav[item.labelKey]}
              </NavLink>
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-2 md:gap-3">
          {phoneHref ? (
            <a
              href={phoneHref}
              className={[
                "hidden sm:inline-flex h-7 w-7 items-center justify-center rounded-full border bg-transparent transition-all",
                actionBorderClass,
                actionTextClass,
                actionHoverClass,
              ].join(" ")}
              aria-label={t.nav.phoneAria}
            >
              <Phone className="h-3.5 w-3.5" strokeWidth={1.75} />
            </a>
          ) : (
            <Link
              to="/contact"
              className={[
                "hidden sm:inline-flex h-7 w-7 items-center justify-center rounded-full border bg-transparent transition-all",
                actionBorderClass,
                actionTextClass,
                actionHoverClass,
              ].join(" ")}
              aria-label={t.nav.contactLinkAria}
            >
              <Phone className="h-3.5 w-3.5" strokeWidth={1.75} />
            </Link>
          )}

          {SHOW_LANGUAGE_TOGGLE ? (
            <>
              <div className="lg:hidden">
                <LanguageToggle variant={isSolid ? "solid" : "overlay"} />
              </div>
              <div className="hidden lg:block">
                <LanguageToggle variant={isSolid ? "solid" : "overlay"} />
              </div>
            </>
          ) : null}

          <button
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            className={`lg:hidden p-2 rounded transition-colors cursor-pointer ${textClass}`}
            aria-label={mobileOpen ? t.nav.menuCloseAria : t.nav.menuOpenAria}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-surface-container-high bg-surface shadow-lg max-h-[calc(100dvh-7rem)] overflow-y-auto">
          <nav className="flex flex-col px-4 py-4 gap-1 max-w-container-max mx-auto">
            {NAV_ROUTES.map((item) => (
              <NavLink key={item.to} to={item.to} end={item.end} className={mobileNavLinkClass}>
                {t.nav[item.labelKey]}
              </NavLink>
            ))}
            <div className="pt-3 mt-2 border-t border-surface-container-high flex items-center justify-end gap-3">
                {phoneHref ? (
                  <a
                    href={phoneHref}
                    className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-[#03777A] bg-transparent text-[#03777A] transition-colors hover:bg-bg-aqua hover:text-teal-ocean hover:border-teal-ocean"
                    aria-label={t.nav.phoneAria}
                  >
                    <Phone className="h-3.5 w-3.5" strokeWidth={1.75} />
                  </a>
                ) : (
                  <Link
                    to="/contact"
                    className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-[#03777A] bg-transparent text-[#03777A] transition-colors hover:bg-bg-aqua hover:text-teal-ocean hover:border-teal-ocean"
                    aria-label={t.nav.contactLinkAria}
                  >
                    <Phone className="h-3.5 w-3.5" strokeWidth={1.75} />
                  </Link>
                )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
