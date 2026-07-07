import React from "react";

interface NavbarProps {
  activeTab: "discover" | "planner" | "inquiries" | "chat";
  setActiveTab: (tab: "discover" | "planner" | "inquiries" | "chat") => void;
  inquiriesCount: number;
}

export default function Navbar({ activeTab, setActiveTab, inquiriesCount }: NavbarProps) {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      id="top-nav"
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled || activeTab !== "discover"
          ? "bg-surface shadow-md py-4 border-b border-surface-container-high"
          : "bg-transparent py-6"
      }`}
    >
      <div className="flex justify-between items-center px-4 md:px-margin-desktop py-unit max-w-container-max mx-auto h-16">
        {/* Logo */}
        <button
          onClick={() => setActiveTab("discover")}
          className="text-left focus:outline-none group"
        >
          <span
            id="nav-logo"
            className={`font-headline-sm text-headline-sm tracking-[0.2em] uppercase transition-colors duration-500 block ${
              isScrolled || activeTab !== "discover" ? "text-teal-dark-primary" : "text-white"
            }`}
          >
            The Sanctuary
          </span>
          <span className={`block h-[1px] w-0 group-hover:w-full transition-all duration-300 ${
              isScrolled || activeTab !== "discover" ? "bg-gold-main" : "bg-gold-soft"
            }`} 
          />
        </button>

        {/* Middle Navigation Tabs */}
        <nav className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => setActiveTab("discover")}
            className={`font-label-caps text-label-caps flex items-center gap-1.5 pb-1 transition-all border-b-2 hover:opacity-100 ${
              activeTab === "discover"
                ? "border-gold-main opacity-100 font-semibold"
                : "border-transparent opacity-70 hover:border-teal-ocean/40 hover:text-teal-ocean"
            } ${isScrolled || activeTab !== "discover" ? "text-teal-dark-primary" : "text-white"}`}
          >
            Discover
          </button>
          
          <button
            onClick={() => setActiveTab("planner")}
            className={`font-label-caps text-label-caps flex items-center gap-1.5 pb-1 transition-all border-b-2 hover:opacity-100 ${
              activeTab === "planner"
                ? "border-gold-main opacity-100 font-semibold"
                : "border-transparent opacity-70 hover:border-teal-ocean/40 hover:text-teal-ocean"
            } ${isScrolled || activeTab !== "discover" ? "text-teal-dark-primary" : "text-white"}`}
          >
            Personalize Retreat
          </button>

          <button
            onClick={() => setActiveTab("inquiries")}
            className={`font-label-caps text-label-caps flex items-center gap-1.5 pb-1 transition-all border-b-2 hover:opacity-100 relative ${
              activeTab === "inquiries"
                ? "border-gold-main opacity-100 font-semibold"
                : "border-transparent opacity-70 hover:border-teal-ocean/40 hover:text-teal-ocean"
            } ${isScrolled || activeTab !== "discover" ? "text-teal-dark-primary" : "text-white"}`}
          >
            My Inquiries
            {inquiriesCount > 0 && (
              <span className="absolute -top-1.5 -right-3.5 bg-gold-main text-white text-[9px] w-4 h-4 flex items-center justify-center rounded-full font-bold">
                {inquiriesCount}
              </span>
            )}
          </button>

          <button
            onClick={() => setActiveTab("chat")}
            className={`font-label-caps text-label-caps flex items-center gap-1.5 pb-1 transition-all border-b-2 hover:opacity-100 ${
              activeTab === "chat"
                ? "border-gold-main opacity-100 font-semibold"
                : "border-transparent opacity-70 hover:border-teal-ocean/40 hover:text-teal-ocean"
            } ${isScrolled || activeTab !== "discover" ? "text-teal-dark-primary" : "text-white"}`}
          >
            Luxury Concierge AI
          </button>
        </nav>

        {/* CTA Button */}
        <div>
          <button
            onClick={() => setActiveTab("planner")}
            className="bg-teal-ocean text-white hover:bg-teal-dark-hover px-6 py-2.5 font-label-caps text-label-caps transition-all rounded shadow-md hover:shadow-lg hover:-translate-y-0.5 transform duration-300 cursor-pointer"
          >
            Request Availability
          </button>
        </div>
      </div>
    </header>
  );
}
