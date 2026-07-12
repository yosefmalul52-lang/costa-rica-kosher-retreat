import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
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

const HOLIDAY_LINKS = [
  { to: "/pesach", labelKey: "pesach" as const },
  { to: "/sukkot", labelKey: "sukkot" as const },
  { to: "/year-round", labelKey: "yearRound" as const },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [holidaysOpen, setHolidaysOpen] = React.useState(false);
  const [mobileHolidaysOpen, setMobileHolidaysOpen] = React.useState(false);
  const holidaysRef = React.useRef<HTMLDivElement>(null);
  const { t } = useLanguage();
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  const holidaysActive =
    pathname === "/holidays" ||
    pathname === "/pesach" ||
    pathname === "/sukkot" ||
    pathname === "/year-round";

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  React.useEffect(() => {
    setMobileOpen(false);
    setHolidaysOpen(false);
    setMobileHolidaysOpen(false);
  }, [pathname]);

  React.useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  React.useEffect(() => {
    if (!holidaysOpen) return;
    const onPointerDown = (event: MouseEvent) => {
      if (!holidaysRef.current?.contains(event.target as Node)) {
        setHolidaysOpen(false);
      }
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setHolidaysOpen(false);
    };
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [holidaysOpen]);

  const isSolid = isScrolled || !isHome;
  const textClass = isSolid ? "text-teal-dark-primary" : "text-white";
  const underlineClass = isSolid ? "bg-gold-main" : "bg-gold-soft";
  const navDividerClass = isSolid ? "bg-border-custom/60" : "bg-white/35";

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    [
      "font-label-caps text-[13px] xl:text-[14px] leading-none inline-flex items-center transition-all hover:opacity-100 tracking-[0.08em] uppercase whitespace-nowrap",
      isActive
        ? "opacity-100 font-semibold underline decoration-gold-main decoration-2 underline-offset-[6px]"
        : "opacity-70 no-underline hover:text-teal-ocean hover:underline hover:decoration-teal-ocean/35 hover:underline-offset-[6px]",
      textClass,
    ].join(" ");

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

  const holidaysTriggerClass = [
    "font-label-caps text-[13px] xl:text-[14px] leading-none inline-flex items-center gap-1 transition-all tracking-[0.08em] uppercase whitespace-nowrap cursor-pointer",
    holidaysActive
      ? "opacity-100 font-semibold text-gold-main underline decoration-gold-main decoration-2 underline-offset-[6px]"
      : `opacity-80 font-semibold text-gold-main/90 hover:text-gold-main ${isSolid ? "" : ""}`,
  ].join(" ");

  return (
    <header
      id="top-nav"
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isSolid
          ? "bg-surface shadow-md py-2.5 sm:py-4 border-b border-surface-container-high"
          : "bg-transparent py-3 sm:py-6"
      }`}
    >
      <div className="relative flex justify-between items-center px-4 md:px-margin-desktop max-w-container-max mx-auto h-14 sm:h-16 md:h-20 gap-3">
        <NavLink
          to="/"
          className="relative shrink-0 flex h-full max-h-14 sm:max-h-16 md:max-h-20 items-center focus:outline-none group min-w-0 max-w-[min(52vw,220px)] sm:max-w-[min(48vw,320px)] lg:max-w-[min(26vw,340px)]"
          aria-label={BRAND_NAME}
        >
          <img
            id="nav-logo"
            src={isSolid ? BRAND_LOGO : BRAND_LOGO_LIGHT}
            alt={BRAND_NAME}
            width={880}
            height={272}
            className="h-full w-auto max-h-full object-contain object-left transition-opacity duration-300"
            decoding="async"
          />
          <span
            className={`absolute inset-x-0 bottom-0 h-px w-0 group-hover:w-full transition-all duration-300 ${underlineClass}`}
          />
        </NavLink>

        <nav className="hidden lg:flex items-center min-w-0">
          {NAV_ROUTES.slice(0, 1).map((item) => (
            <NavLink key={item.to} to={item.to} end={item.end} className={navLinkClass}>
              {t.nav[item.labelKey]}
            </NavLink>
          ))}

          <span aria-hidden className={["mx-2 xl:mx-3 h-[14px] w-px shrink-0", navDividerClass].join(" ")} />

          <div className="relative" ref={holidaysRef}>
            <button
              type="button"
              className={holidaysTriggerClass}
              aria-expanded={holidaysOpen}
              aria-haspopup="true"
              onClick={() => setHolidaysOpen((open) => !open)}
            >
              {t.nav.holidays}
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${holidaysOpen ? "rotate-180" : ""}`} />
            </button>
            {holidaysOpen ? (
              <div className="absolute top-full start-0 mt-3 min-w-[220px] bg-surface border border-surface-container-high shadow-lg rounded-sm py-2 z-50">
                <Link
                  to="/holidays"
                  className="block px-4 py-2.5 text-sm text-primary hover:bg-surface-container transition-colors font-label-caps text-[11px] uppercase tracking-[0.12em]"
                >
                  {t.nav.holidays}
                </Link>
                <div className="my-1 border-t border-surface-container-high" />
                {HOLIDAY_LINKS.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className={[
                      "block px-4 py-2.5 text-sm transition-colors",
                      pathname === item.to
                        ? "text-gold-main font-semibold bg-secondary/10"
                        : "text-on-surface-variant hover:text-primary hover:bg-surface-container",
                    ].join(" ")}
                  >
                    {t.nav[item.labelKey]}
                  </Link>
                ))}
              </div>
            ) : null}
          </div>

          {NAV_ROUTES.slice(1).map((item) => (
            <div key={item.to} className="flex items-center">
              <span aria-hidden className={["mx-2 xl:mx-3 h-[14px] w-px shrink-0", navDividerClass].join(" ")} />
              <NavLink to={item.to} end={item.end} className={navLinkClass}>
                {t.nav[item.labelKey]}
              </NavLink>
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-2 md:gap-3 shrink-0">
          <Link
            to="/contact"
            className={[
              "hidden md:inline-flex items-center px-3.5 py-2 border font-label-caps text-[11px] uppercase tracking-[0.12em] rounded-sm transition-colors",
              actionBorderClass,
              actionTextClass,
              actionHoverClass,
            ].join(" ")}
          >
            {t.nav.planYourStay}
          </Link>

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
            className={`lg:hidden min-h-11 min-w-11 inline-flex items-center justify-center rounded transition-colors cursor-pointer ${textClass}`}
            aria-label={mobileOpen ? t.nav.menuCloseAria : t.nav.menuOpenAria}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-surface-container-high bg-surface shadow-lg max-h-[calc(100dvh-4.5rem)] overflow-y-auto">
          <nav className="flex flex-col px-4 py-3 gap-0.5 max-w-container-max mx-auto">
            <NavLink to="/" end className={mobileNavLinkClass}>
              {t.nav.home}
            </NavLink>

            <button
              type="button"
              onClick={() => setMobileHolidaysOpen((open) => !open)}
              className="w-full flex items-center justify-between font-label-caps text-[15px] py-3 text-start text-gold-main font-semibold"
              aria-expanded={mobileHolidaysOpen}
            >
              {t.nav.holidays}
              <ChevronDown className={`w-4 h-4 transition-transform ${mobileHolidaysOpen ? "rotate-180" : ""}`} />
            </button>
            {mobileHolidaysOpen ? (
              <div className="ps-3 pb-2 space-y-1 border-s-2 border-secondary/40 ms-1 mb-1">
                <Link to="/holidays" className="block py-2 text-sm text-teal-dark-primary">
                  {t.nav.holidays}
                </Link>
                {HOLIDAY_LINKS.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className={[
                      "block py-2 text-sm",
                      pathname === item.to ? "text-gold-main font-semibold" : "text-on-surface-variant",
                    ].join(" ")}
                  >
                    {t.nav[item.labelKey]}
                  </Link>
                ))}
              </div>
            ) : null}

            {NAV_ROUTES.slice(1).map((item) => (
              <NavLink key={item.to} to={item.to} end={item.end} className={mobileNavLinkClass}>
                {t.nav[item.labelKey]}
              </NavLink>
            ))}

            <Link
              to="/contact"
              className="mt-3 mb-1 inline-flex justify-center bg-primary text-on-primary hover:bg-secondary py-3.5 font-label-caps text-xs uppercase tracking-widest rounded-sm transition-colors"
            >
              {t.nav.planYourStay}
            </Link>
            <div className="pt-2 pb-1 border-t border-surface-container-high flex items-center justify-end gap-3">
              {phoneHref ? (
                <a
                  href={phoneHref}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#03777A] bg-transparent text-[#03777A] transition-colors hover:bg-bg-aqua hover:text-teal-ocean hover:border-teal-ocean"
                  aria-label={t.nav.phoneAria}
                >
                  <Phone className="h-4 w-4" strokeWidth={1.75} />
                </a>
              ) : (
                <Link
                  to="/contact"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#03777A] bg-transparent text-[#03777A] transition-colors hover:bg-bg-aqua hover:text-teal-ocean hover:border-teal-ocean"
                  aria-label={t.nav.contactLinkAria}
                >
                  <Phone className="h-4 w-4" strokeWidth={1.75} />
                </Link>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
