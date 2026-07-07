import React from "react";
import { motion } from "motion/react";
import { 
  ArrowRight, 
  ArrowLeft,
  CheckCircle, 
  MapPin, 
  ShieldCheck, 
  Award, 
  Compass, 
  Users, 
  Sparkles,
  UtensilsCrossed,
  Hourglass,
  Flame,
  Milestone
} from "lucide-react";
import { ROOM_OPTIONS, ACTIVITY_OPTIONS } from "../data";
import OptimizedImage from "./OptimizedImage";
import { HERO_IMAGE, LOCATION_IMAGE, DINING_IMAGE, STARLIGHT_LOUNGE_IMAGE, SUNRISE_YOGA_DECK_IMAGE, PALM_LINED_DRIVEWAY_IMAGE, MISTY_MOUNTAIN_BALCONY_IMAGE, CAROUSEL_CARD_IMAGE_SIZES } from "../lib/imageQuality";

const SANCTUARY_CAROUSEL_ITEMS = [
  {
    label: "AQUATICS",
    title: "Infinity Cloud Pool",
    alt: "Infinity cloud pool at sunset",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCa6jXmSVNfIQRKzJbaHQmKElim0DyHIBhGaeUPA2PA0IxG-irlaRxLG95OrID-19mUnF9pV9fiecq5H0KSss_JhskeqjbDbxVe3ZNQvVhiLdMRjzFLcbJyNvZ1JQmjl_WZRKuBwbJ1Gc__ilTEnmm0m5Rfz9BE9dXRp8B7iUuhWW7F_MJQdHK_joweC2wBAPNVMN5kbSS3lBMxW444_hA9XHGRYP8P0W0PwM-ULjQZQ0TqJxAMi83ZRH6CD1rXyLAS2IDqWmSKGX-C",
  },
  {
    label: "RELAXATION",
    title: "Lava Stone Spa",
    alt: "Lava stone spa treatment room",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDjO7QMKGuz4nrbrG9SiEjH3OHVMhBQGq8J9806yK_y8wGkjBWCGushdx3b32DHDp8xUEjA347eFHzgQatMZqzugm0uzAJdHO2vjKdLcZyINEt-btXOiP3ZPMvj4VLzvHXxQ-2kvPciZE-YNYcbh0tBZrWICMAROOSf3KpZ9Rdph751cInDyf86k3tbf2xm2NSFUQFt7gIok5W7S_IhdDRhXonIUk26TH43yMhNOTDZcdfKUJr05qNQTmL5d91EbQWhA68EOU2gwjNI",
  },
  {
    label: "STARRY EVENINGS",
    title: "Starlight Lounge",
    alt: "Tropical resort pool surrounded by lush palm trees and jungle hillside",
    src: STARLIGHT_LOUNGE_IMAGE.src,
    srcSet: STARLIGHT_LOUNGE_IMAGE.srcSet,
    sizes: CAROUSEL_CARD_IMAGE_SIZES,
  },
  {
    label: "WELLNESS",
    title: "Sunrise Yoga Deck",
    alt: "Mountain lodge overlooking lush green valleys and tropical hills",
    src: SUNRISE_YOGA_DECK_IMAGE.src,
    srcSet: SUNRISE_YOGA_DECK_IMAGE.srcSet,
    sizes: CAROUSEL_CARD_IMAGE_SIZES,
  },
  {
    label: "ARRIVAL",
    title: "Palm-Lined Drive",
    alt: "A lush, palm-lined driveway leading through tropical grounds toward a thatched-roof villa",
    src: PALM_LINED_DRIVEWAY_IMAGE.src,
    srcSet: PALM_LINED_DRIVEWAY_IMAGE.srcSet,
    sizes: CAROUSEL_CARD_IMAGE_SIZES,
  },
  {
    label: "VISTAS",
    title: "Misty Mountain Balcony",
    alt: "A scenic view of misty tropical mountains from a white-railed balcony",
    src: MISTY_MOUNTAIN_BALCONY_IMAGE.src,
    srcSet: MISTY_MOUNTAIN_BALCONY_IMAGE.srcSet,
    sizes: CAROUSEL_CARD_IMAGE_SIZES,
  },
] as const;

const CAROUSEL_CARD_CLASS =
  "relative flex-none shrink-0 grow-0 overflow-hidden rounded shadow-xl group basis-[82.935vw] w-[82.935vw] min-w-[82.935vw] max-w-[82.935vw] md:basis-[768px] md:w-[768px] md:min-w-[768px] md:max-w-[768px] lg:basis-[943px] lg:w-[943px] lg:min-w-[943px] lg:max-w-[943px] h-[540px]";

const CAROUSEL_IMAGE_CLASS =
  "absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105";

interface DiscoverViewProps {
  onStartPlanning: () => void;
  onExploreRoom: (roomId: string) => void;
}

export default function DiscoverView({ onStartPlanning, onExploreRoom }: DiscoverViewProps) {
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const firstCard = container.querySelector<HTMLElement>("[data-carousel-card]");
    const track = container.querySelector<HTMLElement>("[data-carousel-track]");
    if (!firstCard || !track) return;

    const styles = window.getComputedStyle(track);
    const gap = parseFloat(styles.columnGap || styles.gap || "0") || 0;
    const step = firstCard.offsetWidth + gap;

    const maxScroll = container.scrollWidth - container.clientWidth;
    const nextScroll =
      direction === "left"
        ? Math.max(0, container.scrollLeft - step)
        : Math.min(maxScroll, container.scrollLeft + step);

    container.scrollTo({
      left: nextScroll,
      behavior: "smooth",
    });
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <div className="bg-surface select-text">
      {/* 1. Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <OptimizedImage
          src={HERO_IMAGE.src}
          srcSet={HERO_IMAGE.srcSet}
          sizes={HERO_IMAGE.sizes}
          priority
          alt="Altura Kosher Retreat villa overlooking a lush tropical valley at sunset"
          className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
        />
        
        <div className="absolute inset-0 bg-primary-container/10 z-0" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-container/30 via-transparent to-primary-container/15 z-0" />

        <div className="relative z-10 text-center px-6 md:px-0 max-w-4xl">
          <motion.span 
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-label-caps text-label-caps text-secondary-fixed mb-4 block tracking-[0.3em] text-amber-100 uppercase"
          >
            Cartago, Costa Rica
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
            className="font-headline-xl text-3xl md:text-headline-xl text-on-primary mb-8 leading-tight"
          >
            A Luxury Kosher Retreat in the <span className="italic font-serif font-light text-secondary-fixed-dim">Mountains</span> of Costa Rica
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <button 
              onClick={onStartPlanning}
              className="w-full sm:w-auto bg-teal-ocean text-white hover:bg-teal-dark-hover px-10 py-4 font-label-caps text-label-caps hover:scale-105 transition-all shadow-lg hover:shadow-xl rounded-sm cursor-pointer"
            >
              Explore & Customize
            </button>
            <a 
              href="#location"
              className="w-full sm:w-auto text-center border border-teal-ocean text-teal-dark-primary px-10 py-4 font-label-caps text-label-caps bg-white/80 hover:bg-light-aqua hover:text-teal-dark-hover transition-all rounded-sm cursor-pointer"
            >
              Discover location
            </a>
          </motion.div>
        </div>
        
        {/* Pulsing expand icon */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-on-primary/60 cursor-pointer"
          onClick={() => {
            document.getElementById("retreat")?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <span className="text-sm font-label-caps tracking-widest block text-center opacity-80 mb-1">Scroll</span>
          <div className="w-6 h-10 border-2 border-on-primary/30 rounded-full mx-auto flex justify-center items-start p-1">
            <div className="w-1.5 h-1.5 bg-on-primary rounded-full animate-bounce" />
          </div>
        </motion.div>
      </section>

      {/* 2. The Promise Section */}
      <section className="py-24 px-6 md:px-margin-desktop max-w-container-max mx-auto" id="retreat">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <span className="font-label-caps text-label-caps text-secondary mb-3 block uppercase tracking-widest">Unrivaled Hospitality</span>
          <h2 className="font-headline-lg text-headline-lg text-primary mb-6">Arrive. Everything is already handled.</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
            From strict 24/7 Glatt Kosher certification to thrilling family adventures, we curate every precise detail so you don't have to lift a finger.
          </p>
        </div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-gutter"
        >
          {/* Feature Card 1 */}
          <motion.div 
            variants={fadeInUp}
            className="bg-bg-card border border-border-custom p-10 flex flex-col items-center text-center group hover:border-gold-main hover:shadow-xl transition-all duration-500 rounded"
          >
            <div className="w-16 h-16 bg-teal-fresh flex items-center justify-center rounded-full mb-6 transition-colors shadow">
              <UtensilsCrossed className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-headline-sm text-headline-sm text-text-main mb-4 group-hover:text-teal-dark-primary transition-colors">Kosher Dining</h3>
            <p className="font-body-md text-body-md text-text-muted leading-relaxed">
              Glatt Kosher, Chalav Yisrael, and Pas Yisrael. A culinary fusion of local organic tropical flavors and traditional Shabbat excellence.
            </p>
          </motion.div>
          
          {/* Feature Card 2 */}
          <motion.div 
            variants={fadeInUp}
            className="bg-bg-card border border-border-custom p-10 flex flex-col items-center text-center group hover:border-gold-main hover:shadow-xl transition-all duration-500 rounded"
          >
            <div className="w-16 h-16 bg-gold-main flex items-center justify-center rounded-full mb-6 transition-colors shadow">
              <Milestone className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-headline-sm text-headline-sm text-text-main mb-4 group-hover:text-teal-dark-primary transition-colors">Daily Minyanim</h3>
            <p className="font-body-md text-body-md text-text-muted leading-relaxed">
              An onsite Shul housing custom Sefer Torahs, daily services (Shacharit, Mincha, Maariv), and a warm community of like-minded travelers.
            </p>
          </motion.div>
          
          {/* Feature Card 3 */}
          <motion.div 
            variants={fadeInUp}
            className="bg-bg-card border border-border-custom p-10 flex flex-col items-center text-center group hover:border-gold-main hover:shadow-xl transition-all duration-500 rounded"
          >
            <div className="w-16 h-16 bg-teal-fresh flex items-center justify-center rounded-full mb-6 transition-colors shadow">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-headline-sm text-headline-sm text-text-main mb-4 group-hover:text-teal-dark-primary transition-colors">Family Programs</h3>
            <p className="font-body-md text-body-md text-text-muted leading-relaxed">
              Dedicated rainforest camps and teen active lounges designed to engage your children with learning, values, and fun while you find your own peace.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* 3. Location Section */}
      <section className="bg-primary-container text-on-primary overflow-hidden" id="location">
        <div className="flex flex-col md:flex-row items-stretch min-h-[500px]">
          <div className="w-full md:w-1/2 p-12 md:p-20 flex flex-col justify-center">
            <span className="font-label-caps text-label-caps text-secondary-fixed mb-6 block uppercase tracking-[0.2em] text-amber-200">
              Cartago Highland Sanctuary
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-primary mb-8">
              A quieter side of Costa Rica.
            </h2>
            <p className="font-body-lg text-body-lg text-on-primary-container mb-10 leading-relaxed opacity-90">
              Away from the humid coastlines, the high mountains of Cartago offer a crisp, spring-like alpine climate. Here, the majestic Irazú Volcano looms over lush, misty cloud forests and emerald valleys—a landscape of profound serenity perfect for spiritual reflection and deep family connection.
            </p>
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-primary-container border border-secondary-fixed-dim/30 flex items-center justify-center rounded-full">
                <MapPin className="text-secondary-fixed-dim w-5 h-5" />
              </div>
              <span className="font-label-caps text-label-caps text-on-primary uppercase tracking-widest">
                Cartago, Costa Rica (alpine elevation)
              </span>
            </div>
          </div>
          <div className="w-full md:w-1/2 relative min-h-[350px] md:min-h-full">
            <OptimizedImage 
              src={LOCATION_IMAGE.src}
              srcSet={LOCATION_IMAGE.srcSet}
              sizes={LOCATION_IMAGE.sizes}
              alt="Lush Cartago cloud forest mountains at sunrise with tropical birds in flight"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* 4. Cinematic Story (Tactile Scroll Journey) */}
      <section className="py-24 relative bg-surface-container-low overflow-hidden">
        <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <div className="w-full lg:w-1/2 lg:sticky lg:top-28">
              <div className="aspect-[4/3] md:aspect-[16/10] overflow-hidden rounded shadow-2xl relative">
                <OptimizedImage 
                  className="w-full h-full object-cover"
                  alt="Montage of luxury kosher moments in Costa Rica"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHhiJI9dFLJE09IXZlRqxUtVw2lzV1Eb7psLz-A1KgwDQJtWlKZH_-_F0ufmr2_fnOjIBSbz9s1l5cAkPBRPPcph_7zwZeW8W2Jj4cNM_DXEsPaLTiOh4BhLS-F30KHtSGknSnVyO3_Br_LbKN9jHP_s5R88VtO42wQ-bpS6zRZOoG5kpnIywpxzYSYo9uNhxX7Z3aXmIsCsvImvGgDpby51qvHRwGEJxObq7_YBUOLkmu8M2K9-0kn0A5WVqgKnzM33d6pTKArXey"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
                <div className="absolute bottom-6 left-6 text-on-primary">
                  <p className="font-label-caps text-xs tracking-widest text-amber-100">BESPOKE ESCAPE</p>
                  <p className="font-headline-sm text-headline-sm">Our Curated Hospitality</p>
                </div>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2 space-y-16 py-4">
              <div className="border-l-2 border-secondary pl-6">
                <span className="font-label-caps text-xs text-secondary tracking-widest block mb-2">STAGE 01</span>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-3">Seamless Arrival</h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  A premium private transfer from San José International Airport directly up to our mountain retreat. Your private, English-speaking local driver awaits you with fresh towels and kosher refreshments.
                </p>
              </div>

              <div className="border-l-2 border-secondary pl-6">
                <span className="font-label-caps text-xs text-secondary tracking-widest block mb-2">STAGE 02</span>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-3">Uncompromised Sanctuary</h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Step into private villas or cloud suites designed from inception with your spiritual life in mind, featuring custom layouts, dual sinks, kosher kitchenettes, and modern electronic Sabbath key override configurations.
                </p>
              </div>

              <div className="border-l-2 border-secondary pl-6">
                <span className="font-label-caps text-xs text-secondary tracking-widest block mb-2">STAGE 03</span>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-3">Master Chef Fine-Dining</h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Savor three gourmet meals each day. Master culinary teams merge Costa Rican volcanic soil produce, exotic palm hearts, and premium kosher meats, under strict Mashgiach Temidi supervision.
                </p>
              </div>

              <div className="border-l-2 border-secondary pl-6">
                <span className="font-label-caps text-xs text-secondary tracking-widest block mb-2">STAGE 04</span>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-3">Immersive Shabbat Harmony</h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Connect deeply on Shabbat. Enter a sacred, phone-free haven cradled by rolling mist, communal festive dining, Inspiring guest lectures, beautiful Tefillah, and traditional melodies.
                </p>
              </div>

              <div className="border-l-2 border-secondary pl-6">
                <span className="font-label-caps text-xs text-secondary tracking-widest block mb-2">STAGE 05</span>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-3">Curated Excursions</h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Discover private volcanic climbs, custom zipline runs, or coastal catamaran sails. Your private tour itineraries respect both prayer schedules and kashrut limits with customized timing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Kosher Dining Section */}
      <section className="py-24 px-6 md:px-margin-desktop" id="dining">
        <div className="max-w-container-max mx-auto">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
            <div className="w-full lg:w-1/2">
              <div className="aspect-[4/5] bg-cover bg-center rounded shadow-2xl overflow-hidden">
                <OptimizedImage 
                  src={DINING_IMAGE.src}
                  srcSet={DINING_IMAGE.srcSet}
                  sizes={DINING_IMAGE.sizes}
                  alt="Gourmet kosher steak with roasted vegetables and mountain valley views"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <span className="font-label-caps text-label-caps text-secondary mb-6 block uppercase tracking-widest">Culinary Excellence</span>
              <h2 className="font-headline-lg text-headline-lg text-primary mb-8 leading-tight">Kosher dining, without compromise.</h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-10 leading-relaxed">
                Our world-class culinary team, led by internationally acclaimed chefs under strict on-site Mashgiach Temidi supervision, crafts daily menus that celebrate the rich bounty of Costa Rica. Fresh, organic farm-to-table produce meets premium imported proteins, creating a fine-dining experience that rivals elite restaurants globally.
              </p>
              
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="mt-1 bg-surface-container p-2 rounded-full text-secondary">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-label-caps text-label-caps text-primary uppercase mb-1">Strict Glatt Kosher Certification</h4>
                    <p className="text-on-surface-variant text-sm leading-relaxed">On-site Mashgiach ensuring kashrut 24/7, with option for Chalav Yisrael and Pas Yisrael.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-1 bg-surface-container p-2 rounded-full text-secondary">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-label-caps text-label-caps text-primary uppercase mb-1">Volcanic Farm-to-Table</h4>
                    <p className="text-on-surface-variant text-sm leading-relaxed">Locally picked organic greens, berries, herbs, and highland coffee sourced from neighboring estates.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Jewish Life Section */}
      <section className="bg-surface-container py-24">
        <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <span className="font-label-caps text-label-caps text-secondary mb-3 block uppercase tracking-widest">Spiritual Intention</span>
            <h2 className="font-headline-lg text-headline-lg text-primary mb-4">Built around the rhythm of Jewish life.</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">Elevating every single moment with sacred beauty.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="bg-surface p-8 border-l-4 border-secondary shadow-sm rounded-r">
                <h4 className="font-headline-sm text-headline-sm text-primary mb-3">The Sanctuary Synagogue</h4>
                <p className="text-on-surface-variant leading-relaxed">
                  Our core gathering sanctuary for prayer, featuring panoramic glass vistas of the green valley, custom high-end cedar wood finishes, and a peaceful atmosphere.
                </p>
              </div>
              <div className="bg-surface p-8 border-l-4 border-secondary shadow-sm rounded-r">
                <h4 className="font-headline-sm text-headline-sm text-primary mb-3">Shabbat at Altura</h4>
                <p className="text-on-surface-variant leading-relaxed">
                  A truly immersive Shabbat experience. From majestic communal banquets to the total, peaceful quietude of a phone-free alpine hideaway.
                </p>
              </div>
              <div className="bg-surface p-8 border-l-4 border-secondary shadow-sm rounded-r">
                <h4 className="font-headline-sm text-headline-sm text-primary mb-3">Shiurim & visiting Scholars</h4>
                <p className="text-on-surface-variant leading-relaxed">
                  Engage your mind with visiting scholars, and bespoke Torah study groups customized to your level of interest or observance.
                </p>
              </div>
            </div>
            
            <div className="flex justify-center">
              <div className="aspect-square max-w-[450px] w-full rounded-full overflow-hidden border-8 border-surface shadow-2xl relative">
                <OptimizedImage 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAiC59wrQUlOBpkM_lXke9b52yRU7KbRXXP559MAvdZavMPmGtihE-VJ422OEx3lH1HderOa7jf3CDNHmR0nHMaz7yrvy4-1KFIuyhz9VFvZ9BpiXKV2bRCGdNoUSHrfMeWUAd4zfvknjbBvzideIuAnJxmRyS2C1PNa677I2cMSh2MjiA9B0ogoju1YOSF0E-g5bIbtKGyEpLShkGYmfw0KhDE-5d49CQxPjl_qU_6OfjDNIL31dv-A-LIj9SskQ923MtcKuk0P-qu" 
                  alt="Silver Kiddush Cup and Braided Challah for Shabbat" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Family Programming Section */}
      <section className="py-24 px-6 md:px-margin-desktop max-w-container-max mx-auto">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="font-label-caps text-label-caps text-secondary mb-3 block uppercase tracking-widest">For All Generations</span>
          <h2 className="font-headline-lg text-headline-lg text-primary mb-6">A real, peaceful vacation for parents, too.</h2>
        </div>
        
        <div className="relative h-[480px] w-full rounded overflow-hidden mb-12 shadow-xl">
          <OptimizedImage 
            className="w-full h-full object-cover"
            alt="Children exploring butterflies on tropical nature walk"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBYCbq3xEJyV_ctfeY9M-25oFmbgyPBpIFL5Z__BVPBWSQ92FdeaMbm-ag-F27AYaVLnNMUGL96ZL2FYdiw5Os-88HhWIo9wAobFhSOa7xsYfTSx1hFRTfaPmA4wR7N7U04xtdpRNvFQvdShyHaXBqjcoyd6hjDtDAMGRqAnjzkVGG_M_40c2EKdvbokeClZen_LRWLvcgcpyDAprKoQDXyK8MgsSOUpztraWHuQLt2VEQQtoEaRlCVIyVahbv_MmM0p8s0cQN8vXH7"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent flex flex-col justify-end p-8 md:p-12 text-left" />
          <div className="absolute bottom-8 left-8 md:left-12 max-w-2xl text-on-primary">
            <span className="bg-secondary px-3 py-1 font-label-caps text-[10px] uppercase tracking-widest mb-3 inline-block text-on-secondary">ACTIVITIES INCLUDED</span>
            <h3 className="font-headline-md text-headline-md text-on-primary mb-2">Kids' Rainforest Camp</h3>
            <p className="text-on-primary/95 text-body-md leading-relaxed">
              Supervised nature walks, butterfly house exploration, botanical lessons, and outdoor playground activities that teach children tropical ecology through high safety standards.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="p-6 bg-surface-container-low border border-surface-container rounded text-center">
            <span className="font-label-caps text-xs text-secondary mb-2 block tracking-wider font-semibold">01 / NURSERY</span>
            <h5 className="font-headline-sm text-lg text-primary">Bespoke Nannies</h5>
          </div>
          <div className="p-6 bg-surface-container-low border border-surface-container rounded text-center">
            <span className="font-label-caps text-xs text-secondary mb-2 block tracking-wider font-semibold">02 / LEISURE</span>
            <h5 className="font-headline-sm text-lg text-primary">Active Teen Lounge</h5>
          </div>
          <div className="p-6 bg-surface-container-low border border-surface-container rounded text-center">
            <span className="font-label-caps text-xs text-secondary mb-2 block tracking-wider font-semibold">03 / SHOWS</span>
            <h5 className="font-headline-sm text-lg text-primary">Nightly Family Shows</h5>
          </div>
          <div className="p-6 bg-surface-container-low border border-surface-container rounded text-center">
            <span className="font-label-caps text-xs text-secondary mb-2 block tracking-wider font-semibold">04 / DISCOVER</span>
            <h5 className="font-headline-sm text-lg text-primary">Family Volcanic Treks</h5>
          </div>
        </div>
      </section>

      {/* 8. In-Hotel Experiences (Horizontal Scroll Gallery) */}
      <section className="bg-primary-container py-24 overflow-hidden">
        <div className="px-6 md:px-margin-desktop mb-12 flex justify-between items-end max-w-container-max mx-auto">
          <div className="text-on-primary">
            <span className="font-label-caps text-label-caps text-secondary-fixed-dim block mb-2 uppercase tracking-widest text-amber-200">
              The Sanctuary Canvas
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-primary">
              Luxury at your fingertips.
            </h2>
          </div>
          <div className="flex gap-4">
            <button 
              onClick={() => scroll("left")}
              className="p-3 border border-on-primary/30 text-on-primary rounded-full hover:bg-on-primary hover:text-primary transition-all cursor-pointer"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={() => scroll("right")}
              className="p-3 border border-on-primary/30 text-on-primary rounded-full hover:bg-on-primary hover:text-primary transition-all cursor-pointer"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="relative w-full overflow-hidden">
          <div
            ref={scrollContainerRef}
            className="w-full overflow-x-auto scroll-smooth horizontal-scroll-container"
          >
            <div
              data-carousel-track
              className="flex w-max flex-nowrap gap-8 px-6 md:px-margin-desktop pb-6"
            >
              {SANCTUARY_CAROUSEL_ITEMS.map((item) => (
                <div key={item.title} data-carousel-card className={CAROUSEL_CARD_CLASS}>
                  <OptimizedImage
                    className={CAROUSEL_IMAGE_CLASS}
                    src={item.src}
                    srcSet={"srcSet" in item ? item.srcSet : undefined}
                    sizes={"sizes" in item ? item.sizes : CAROUSEL_CARD_IMAGE_SIZES}
                    alt={item.alt}
                  />
                  <div className="absolute bottom-0 left-0 p-8 text-on-primary drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
                    <span className="font-label-caps text-[10px] tracking-widest text-amber-200 block mb-1">
                      {item.label}
                    </span>
                    <h4 className="font-headline-sm text-headline-sm">{item.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 9. Bento Grid Excursions */}
      <section className="py-24 px-6 md:px-margin-desktop max-w-container-max mx-auto" id="experiences">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="font-label-caps text-label-caps text-secondary mb-3 block uppercase tracking-widest">Alpine Adventures</span>
          <h2 className="font-headline-lg text-headline-lg text-primary mb-4">Adventure, curated for the observant.</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant">Private tours where your kashrut and scheduling are always respected.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 relative group overflow-hidden rounded shadow-lg h-[400px]">
            <OptimizedImage 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-102" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuANK9rsm8K6n4iL8wxPtoOT7EYvCCAqOx4VTGvmHMhgu_KtvCByYw-Q-ggAGyAczCWMbtTPMUUAXFB7-7uNy2SmVAboJaL8pr2X4LCM7K9Y9KdISHfx4Xu_pilN_Ex_kte08-ayznqSyjJ-Cd6aRSucbjn6tuP1COj-Lls9X1r1tnTN0is1kDq6dXqH9SQ41cfvQzsxz5SubN4jXQV1ngBpzRdWm2OW7Tq7jJIkrad8kHJU_ak4PNPTySJb6Sr5qQ9bb3ueIih-TljQ"
              alt="Irazu Volcano Crater"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/15 transition-all duration-500" />
            <div className="absolute bottom-0 left-0 p-8 text-on-primary">
              <span className="font-label-caps text-xs uppercase bg-secondary px-3 py-1 mb-3 inline-block rounded-sm text-on-secondary">Private Peak Tour</span>
              <h3 className="font-headline-md text-headline-md text-on-primary">Irazú Volcano Expedition</h3>
            </div>
          </div>

          <div className="relative group overflow-hidden rounded shadow-lg h-[400px]">
            <OptimizedImage 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-102" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2hNA9HeAmj4BqPhOwLQC1eRoWfAxzou_4T_xg-zqlhGwXDqD5U0UyixRDImGgg5Gn8Wa4QpUwepAG-XVOA9TQTOiKv4sa14heW7Z7jEyTqdO_3D3bdH2g3jzU1Oybii8L2j4K6CHs4GTlaX1zDXD54D0zr3dJ4kNxecfKhWUTGFCyQb9CgQj5OqGzTCfZM88Fr3b5h9KIA8i37ASqmtHw_nXVmC8JXw8LpkZsbKRhs8uS_Yop9NVb1QFzc9Pmfu65i-dONxI4Ns48"
              alt="Secret Waterfall"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/15 transition-all duration-500" />
            <div className="absolute bottom-0 left-0 p-8 text-on-primary">
              <span className="font-label-caps text-xs uppercase bg-secondary/80 px-3 py-1 mb-3 inline-block rounded-sm text-on-secondary">Secluded Hike</span>
              <h3 className="font-headline-sm text-headline-sm text-on-primary">Secret Waterfalls</h3>
            </div>
          </div>

          <div className="relative group overflow-hidden rounded shadow-lg h-[400px]">
            <OptimizedImage 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-102" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_v3ha99zBFSjQZsZlsg0p_pNYNbZhG1k3GBL4n_7XWqjSl8Yq1B8uvvr-UUy2rnJ1PUj7Ohy2UWUBakA0dAtH6jxyTx8ohBzA4Xi7hVoaSuI-ERr1hdV4qn_8KL4toFiXeW3NHDQbp7lE0-yxR2oyxRt0uijKu4-1lcUqlrkObsK8ZZi2b536DBNAJMfNYeSUlinHzSkwTL-wk6DSole-AzuR6Ko2pJ1bRgh0NLXFe_aUTV0ePlwkVhgvH3coeTONwJBTARtyClUf"
              alt="Jungle Canopy Zip line"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/15 transition-all duration-500" />
            <div className="absolute bottom-0 left-0 p-8 text-on-primary">
              <span className="font-label-caps text-xs uppercase bg-secondary/80 px-3 py-1 mb-3 inline-block rounded-sm text-on-secondary">Thrills</span>
              <h3 className="font-headline-sm text-headline-sm text-on-primary">Jungle Canopy Tour</h3>
            </div>
          </div>

          <div className="lg:col-span-2 relative group overflow-hidden rounded shadow-lg h-[400px]">
            <OptimizedImage 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-102" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBW57tk1v5yYmILjD_TFfPcoSqflF_I1DJ6gz9AdAdu_KSHbd-faNxN5qDhJ3_BvicK3FogMPsUCvIKQxuTRxtQ9IJ3wtyDg0U8qXkJWu-nPrMAunOxWx0Q5xJ3vCB2a_hwXKvQP0YkvrIbQn4gyet4IdC-Ol3o_L4C482SiJ3tD7F2UZAFUYdtH0yIZHPLwMpkn-1Y_D6N8TFVEaSuuCJ6EcAWEGmB9k6ke9PG4JZnhLsmpO8GPjK7dXzN8iZLPe8xNmPA5uFlP7b3"
              alt="Sunset catamaran cruise"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/15 transition-all duration-500" />
            <div className="absolute bottom-0 left-0 p-8 text-on-primary">
              <span className="font-label-caps text-xs uppercase bg-secondary px-3 py-1 mb-3 inline-block rounded-sm text-on-secondary">Ocean Escape</span>
              <h3 className="font-headline-md text-headline-md text-on-primary">Private Sunset Sail</h3>
            </div>
          </div>
        </div>
      </section>

      {/* 10. Rooms & Villas Section */}
      <section className="bg-surface-container py-24 px-6 md:px-margin-desktop" id="rooms">
        <div className="max-w-container-max mx-auto">
          <div className="mb-16 flex flex-col md:flex-row justify-between items-center">
            <div className="max-w-xl text-center md:text-left mb-8 md:mb-0">
              <span className="font-label-caps text-label-caps text-secondary block mb-2 uppercase tracking-widest">Luxury Chambers</span>
              <h2 className="font-headline-lg text-headline-lg text-primary mb-4">Comfort for couples and groups.</h2>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Every sanctuary suite and villa is thoroughly designed with separate bedding capabilities, kosher kitchen amenities, and Sabbath-compliant systems.
              </p>
            </div>
            <button 
              onClick={onStartPlanning}
              className="font-label-caps text-label-caps text-secondary border-b-2 border-secondary pb-1 hover:text-primary hover:border-primary transition-all font-semibold uppercase cursor-pointer"
            >
              Configure & Book Accommodations
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {ROOM_OPTIONS.map((room) => (
              <div key={room.id} className="bg-surface rounded overflow-hidden shadow-lg border border-surface-container hover:shadow-2xl transition-all duration-300">
                <div className="aspect-[16/10] overflow-hidden relative group">
                  <OptimizedImage 
                    src={room.imageUrl} 
                    alt={room.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
                  />
                  <div className="absolute top-4 right-4 bg-primary text-on-primary font-label-caps text-xs px-3 py-1.5 rounded-sm shadow">
                    From ${room.pricePerNight} / Night
                  </div>
                </div>
                <div className="p-8">
                  <span className="font-label-caps text-xs text-secondary mb-2 block tracking-wider uppercase font-semibold">{room.category}</span>
                  <h3 className="font-headline-sm text-headline-sm text-primary mb-4">{room.name}</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant mb-6 leading-relaxed h-20 overflow-hidden text-ellipsis">
                    {room.description}
                  </p>
                  <div className="flex flex-wrap gap-2.5 mb-6">
                    {room.features.slice(0, 3).map((f, i) => (
                      <span key={i} className="bg-surface-container text-on-surface-variant px-3 py-1 text-[11px] font-label-caps uppercase tracking-wider rounded-sm">
                        {f}
                      </span>
                    ))}
                  </div>
                  <button 
                    onClick={() => onExploreRoom(room.id)}
                    className="w-full bg-primary-container text-on-primary py-3 font-label-caps text-xs uppercase tracking-widest hover:bg-secondary transition-colors rounded-sm shadow hover:shadow-md cursor-pointer"
                  >
                    Select in Planner
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. Program Calendar */}
      <section className="py-24 px-6 md:px-margin-desktop max-w-container-max mx-auto" id="programs">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="font-label-caps text-label-caps text-secondary mb-3 block uppercase tracking-widest font-semibold">Bespoke Seasons</span>
          <h2 className="font-headline-lg text-headline-lg text-primary mb-4">A Calendar of Sanctuary.</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant">Special seasonal packages throughout the Jewish year.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="border border-surface-container-high p-10 hover:shadow-2xl hover:border-secondary transition-all rounded-sm flex flex-col justify-between group bg-surface-container-low text-center">
            <div>
              <h3 className="font-headline-sm text-headline-sm text-primary mb-4">Passover</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-8 leading-relaxed">
                The ultimate Seder under the equatorial stars. Fully inclusive premium Glatt Kosher for Pesach culinary programs, kids camps, and scholars.
              </p>
            </div>
            <button onClick={onStartPlanning} className="font-label-caps text-label-caps text-secondary group-hover:text-primary font-semibold transition-colors uppercase border-b border-transparent group-hover:border-primary pb-1 self-center">
              Request Passover Rates
            </button>
          </div>

          <div className="border border-surface-container-high p-10 hover:shadow-2xl hover:border-secondary transition-all rounded-sm flex flex-col justify-between group bg-surface-container-low text-center">
            <div>
              <h3 className="font-headline-sm text-headline-sm text-primary mb-4">Sukkot</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-8 leading-relaxed">
                Dine in our majestic custom mountain Sukkah overlooking the emerald valleys. Beautiful Tefillot, lulav & etrog concierge, and intermediate activities.
              </p>
            </div>
            <button onClick={onStartPlanning} className="font-label-caps text-label-caps text-secondary group-hover:text-primary font-semibold transition-colors uppercase border-b border-transparent group-hover:border-primary pb-1 self-center">
              Book Sukkot package
            </button>
          </div>

          <div className="border border-surface-container-high p-10 hover:shadow-2xl hover:border-secondary transition-all rounded-sm flex flex-col justify-between group bg-surface-container-low text-center">
            <div>
              <h3 className="font-headline-sm text-headline-sm text-primary mb-4">Winter Retreats</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-8 leading-relaxed">
                Enjoy crisp highland sun during the cold Northern winter. Specialized active weeks tailored for family camps and exciting zip expeditions.
              </p>
            </div>
            <button onClick={onStartPlanning} className="font-label-caps text-label-caps text-secondary group-hover:text-primary font-semibold transition-colors uppercase border-b border-transparent group-hover:border-primary pb-1 self-center">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* 12. Trust Section */}
      <section className="bg-primary-container text-on-primary py-24">
        <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop text-center">
          <h2 className="font-headline-lg text-headline-lg text-on-primary mb-12">The details matter. We plan for them.</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="border-r border-on-primary/10 last:border-0 pr-4">
              <div className="flex justify-center mb-3">
                <Award className="w-8 h-8 text-secondary-fixed" />
              </div>
              <h4 className="font-headline-sm text-2xl md:text-headline-sm text-secondary-fixed mb-2">100%</h4>
              <p className="font-label-caps text-xs uppercase tracking-wider text-on-primary-container">Glatt Kosher Certification</p>
            </div>
            
            <div className="border-r border-on-primary/10 last:border-0 pr-4">
              <div className="flex justify-center mb-3">
                <Compass className="w-8 h-8 text-secondary-fixed" />
              </div>
              <h4 className="font-headline-sm text-2xl md:text-headline-sm text-secondary-fixed mb-2">24/7</h4>
              <p className="font-label-caps text-xs uppercase tracking-wider text-on-primary-container">Dedicated Concierge</p>
            </div>
            
            <div className="border-r border-on-primary/10 last:border-0 pr-4">
              <div className="flex justify-center mb-3">
                <Users className="w-8 h-8 text-secondary-fixed" />
              </div>
              <h4 className="font-headline-sm text-2xl md:text-headline-sm text-secondary-fixed mb-2">Private</h4>
              <p className="font-label-caps text-xs uppercase tracking-wider text-on-primary-container">Bespoke Airport Transfers</p>
            </div>
            
            <div className="border-r border-on-primary/10 last:border-0 pr-4">
              <div className="flex justify-center mb-3">
                <ShieldCheck className="w-8 h-8 text-secondary-fixed" />
              </div>
              <h4 className="font-headline-sm text-2xl md:text-headline-sm text-secondary-fixed mb-2">Secure</h4>
              <p className="font-label-caps text-xs uppercase tracking-wider text-on-primary-container">Private Volcanic Estate</p>
            </div>
          </div>
        </div>
      </section>

      {/* 13. Inquiry Form Call-to-action */}
      <section className="py-24 px-6 md:px-margin-desktop bg-surface-container-low text-center">
        <div className="max-w-3xl mx-auto">
          <span className="font-label-caps text-label-caps text-secondary mb-4 block uppercase tracking-widest font-semibold">Begin your journey</span>
          <h2 className="font-headline-lg text-headline-lg text-primary mb-6">Experience absolute luxury.</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-10 leading-relaxed">
            Our luxury travel planners and certified on-site mashgichim are ready to coordinate your customized mountain sanctuary.
          </p>
          <button
            onClick={onStartPlanning}
            className="bg-primary text-on-primary hover:bg-secondary px-10 py-5 font-label-caps text-label-caps uppercase tracking-widest shadow-xl hover:shadow-2xl transition-all rounded-sm cursor-pointer"
          >
            Open Retreat Planner & Calculator
          </button>
        </div>
      </section>
    </div>
  );
}
