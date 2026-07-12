"use client";

import { useState } from "react";
import type { JSX } from "react";
import {
  ChevronDown,
  ChevronUp,
  ArrowUpRight,
  Star,
  Users,
  Clock3,
  Minus,
  Plus,
  HelpCircle,
} from "lucide-react";
import Header from "./Home/header";
import Link from "next/link";

/* =====================================================================
   DATA
   In production, all of the arrays below should come from Sanity CMS
   (e.g. `groq` queries for `region`, `destination`, `hotel`, `faq`
   document types) instead of being hard-coded here.
===================================================================== */

const REGIONS = [
  "Europe",
  "Central America",
  "Africa",
  "Caribbean",
  "North America",
  "North America",
] as const;

const COUNTRY_CHIPS = [
  { name: "Canada", img: "canada" },
  { name: "Poland", img: "poland" },
  { name: "United States", img: "united-states" },
  { name: "Paris", img: "paris" },
  { name: "UAE", img: "uae" },
  { name: "Czech Republic", img: "czech" },
  { name: "Germany", img: "germany" },
  { name: "New York City", img: "nyc", swatch: "#E7B8F0" },
  { name: "Fukuoka", img: "fukuoka" },
  { name: "Sapporo", img: "sapporo" },
  { name: "Kyoto", img: "kyoto" },
  { name: "Osaka", img: "osaka" },
];

const CATEGORIES = [
  { label: "Beaches", emoji: "🏖️" },
  { label: "City Breaks", emoji: "🏙️" },
  { label: "Mountains", emoji: "🏔️" },
  { label: "Islands", emoji: "🏝️" },
  { label: "Ski", emoji: "🎿" },
  { label: "Romantic", emoji: "🌅" },
  { label: "Family", emoji: "👨‍👩‍👧" },
  { label: "Digital Nomad", emoji: "💻" },
];

const DESTINATIONS = [
  {
    city: "Paris, France",
    img: "paris-eiffel",
    flightsFrom: "€48",
    hotelsFrom: "€109/night",
    seasonLabel: "Best time: Apr–Jun",
    ctaLabel: "Explore Destination",
  },
  {
    city: "Kyoto,Japan",
    img: "kyoto-temple",
    flightsFrom: "€699",
    hotelsFrom: "€82/night",
    seasonLabel: "Best Seasons",
    ctaLabel: "Explore",
  },
  {
    city: "New York, USA",
    img: "new-york",
    flightsFrom: "€389",
    hotelsFrom: "€145/night",
    seasonLabel: "Best Seasons",
    ctaLabel: "Explore",
  },
  {
    city: "Barcelona, Spain",
    img: "barcelona",
    flightsFrom: "€38",
    hotelsFrom: "€94/night",
    seasonLabel: "Best Seasons",
    ctaLabel: "Explore",
  },
];

const HOTEL_FILTERS = [
  "All",
  "★★★★★ 5-Star",
  "★★★★ 4-Star",
  "Budget",
  "Family Friendly",
  "Luxury",
  "Business",
  "Boutique",
  "Beach Resorts",
  "Pet Friendly",
];

const HOTELS = [
  {
    name: "Hilton Barcelona",
    city: "Barcelona",
    img: "hilton-barcelona",
    price: "$29",
    tags: ["Free cancellation", "Breakfast included"],
    tagIcon: "clock" as const,
    compareLabel: "Compare Prices",
    bg: "#F98DF2",
    tagBg: "#FBBDEA",
  },
  {
    name: "Marriott Dubai",
    city: "Dubai",
    img: "marriott-dubai-1",
    price: "$169",
    tags: ["Excellent (4.7)"],
    tagIcon: "users" as const,
    compareLabel: "Compare",
    bg: "#FFC796",
    tagBg: "#FFDCB3",
  },
  {
    name: "Marriott Dubai",
    city: "Dubai",
    img: "marriott-dubai-2",
    price: "$169",
    tags: ["Excellent (4.7)"],
    tagIcon: "users" as const,
    compareLabel: "Compare",
    bg: "#FFED91",
    tagBg: "#FFF4B8",
  },
];

const FAQS = [
  {
    q: "How do I choose a destination?",
    a: "Browse destinations by region, travel style or budget and compare flights and hotels before booking.",
  },
  {
    q: "Can I compare flights for every destination?",
    a: "Yes. TravelMommy helps you compare flight prices for destinations around the world.",
  },
  {
    q: "Can I compare hotel prices too?",
    a: "Yes. Search hotels from trusted booking providers and compare accommodation prices before booking.",
  },
  {
    q: "Can I compare hotel prices too?",
    a: "Yes. Search hotels from trusted booking providers and compare accommodation prices before booking.",
  },
  {
    q: "Are destination prices updated?",
    a: "Flight and hotel prices are updated from our travel partners and may change based on availability.",
  },
];

const FOOTER_COLUMNS: { title: string; links: string[] }[] = [
  { title: "Search", links: ["Flights", "Hotels", "Airlines", "Airports"] },
  { title: "Discover", links: ["Deals", "Destinations", "Airlines", "Airports"] },
  { title: "Discover", links: ["Trips", "Travel Guide", "Travel Tips", "FAQs"] },
  { title: "Company", links: ["About", "Contact", "Partners", "Help Centre"] },
];

/** Deterministic placeholder image. Swap for Sanity `image` asset urls. */
function img(seed: string, w: number, h: number) {
  return `https://picsum.photos/seed/travelmommy-${seed}/${w}/${h}`;
}

/* =====================================================================
   SHARED PRIMITIVES
===================================================================== */

function Container({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={`mx-auto w-full max-w-[1216px] px-6 lg:px-0 ${className}`}>
      {children}
    </div>
  );
}

function Pill({
  active,
  children,
  className = "",
  onClick,
}: {
  active?: boolean;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full border px-5 py-2.5 text-[15px] font-medium transition-colors ${
        active
          ? "border-[#FDDB32] bg-[#FDDB32] text-black"
          : "border-gray-200 bg-white text-black hover:border-gray-300"
      } ${className}`}
    >
      {children}
    </button>
  );
}

/* =====================================================================
   HERO SECTION  (background image + heading + region browser)
===================================================================== */

function HeroSection() {
  const [activeRegion, setActiveRegion] = useState(0);

  return (
    <section className="relative h-[700px] w-full overflow-hidden bg-black">
      <img
        src={img("canyon-arch-hero", 1920, 1000)}
        alt="Desert canyon arch at sunset"
        className="absolute inset-0 h-full w-full object-cover"
      />
      {/* Dark gradient overlay so text stays legible */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/60" />

      <Container className="relative z-10 flex h-full flex-col pt-6">
        <Header />

        <div className="flex flex-1 flex-col justify-end pb-16">
        <h1 className="max-w-3xl text-6xl font-bold leading-[1.05] tracking-tight text-white sm:text-7xl">
          Explore Travel Destinations
          <br />
          Around the World
        </h1>

        <div className="mt-10">
          <p className="mb-3 text-[15px] font-medium text-white/90">
            Browse by Region
          </p>

          {/* Region pills */}
          <div className="flex gap-3 overflow-x-auto pb-1">
            {REGIONS.map((region, i) => (
              <button
                key={`${region}-${i}`}
                type="button"
                onClick={() => setActiveRegion(i)}
                className={`inline-flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full border px-5 py-2.5 text-[15px] font-medium transition-colors ${
                  activeRegion === i
                    ? "border-[#FDDB32] bg-[#FDDB32] text-black"
                    : "border-white/25 bg-[#F9F8F5]/95 text-black"
                }`}
              >
                {region}
                {activeRegion === i ? (
                  <ChevronDown className="h-4 w-4" />
                ) : (
                  <ChevronUp className="h-4 w-4" />
                )}
              </button>
            ))}
          </div>

          {/* Divider */}
          <div className="my-4 h-px w-full bg-white/25" />

          {/* Country / city chips */}
          <div className="flex flex-wrap gap-3">
            {COUNTRY_CHIPS.map((chip) => (
              <button
                key={chip.name}
                type="button"
                className="inline-flex shrink-0 items-center gap-2.5 whitespace-nowrap rounded-full border border-white/20 bg-[#F9F8F5]/95 py-1.5 pl-1.5 pr-5 text-[15px] font-medium text-black"
              >
                {chip.swatch ? (
                  <span
                    className="h-8 w-8 rounded-full"
                    style={{ backgroundColor: chip.swatch }}
                  />
                ) : (
                  <img
                    src={img(chip.img, 64, 64)}
                    alt=""
                    className="h-8 w-8 rounded-full object-cover"
                  />
                )}
                {chip.name}
              </button>
            ))}
          </div>
        </div>
        </div>
      </Container>
    </section>
  );
}

/* =====================================================================
   CATEGORY FILTER TABS  +  DESTINATION CARDS GRID
===================================================================== */

function DestinationsSection() {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section className="bg-white pb-24 pt-16">
      <Container>
        {/* Category tabs */}
        <div className="flex gap-3 overflow-x-auto pb-1">
          {CATEGORIES.map((cat, i) => (
            <Pill
              key={cat.label}
              active={activeCategory === i}
              onClick={() => setActiveCategory(i)}
            >
              <span className="text-lg leading-none">{cat.emoji}</span>
              {cat.label}
            </Pill>
          ))}
        </div>

        {/* Destination cards */}
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {DESTINATIONS.map((d) => (
            <article
              key={d.city}
              className="rounded-[28px] border border-gray-200 bg-white p-3.5"
            >
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={img(d.img, 640, 640)}
                  alt={d.city}
                  className="aspect-square w-full object-cover"
                />
              </div>

              <div className="px-1 pt-4">
                <h3 className="text-lg font-semibold text-black">{d.city}</h3>

                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="rounded-full bg-[#FFED91] px-3.5 py-1.5 text-sm font-medium text-black">
                    Flights from {d.flightsFrom}
                  </span>
                  <span className="rounded-full bg-[#FFED91] px-3.5 py-1.5 text-sm font-medium text-black">
                    Hotels from {d.hotelsFrom}
                  </span>
                </div>

                <p className="mt-4 text-[15px] text-gray-500">
                  {d.seasonLabel}
                </p>

                <Link
                  href="/city"
                  className="mt-2 inline-flex items-center gap-1 text-[15px] font-semibold text-black hover:underline"
                >
                  {d.ctaLabel}
                  <ArrowUpRight className="h-4 w-4" strokeWidth={2.5} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* =====================================================================
   "EXPLORE DESTINATIONS WITH TRAVELMOMMY" BANNER (black band)
===================================================================== */

function AboutBanner() {
  return (
    <section className="bg-black py-24">
      <Container>
        <h2 className="text-4xl font-bold leading-tight sm:text-5xl">
          <span className="text-[#FDDB32]">Explore Destinations</span>{" "}
          <span className="text-white">with TravelMommy</span>
        </h2>
        <p className="mt-6 max-w-4xl text-lg leading-relaxed text-white/70">
          TravelMommy helps you discover destinations around the world while
          comparing flights and hotel prices from trusted travel providers.
          Explore popular cities, beach holidays, mountain escapes and
          cultural destinations, then compare travel options before booking
          your trip.
        </p>
      </Container>
    </section>
  );
}

/* =====================================================================
   POPULAR HOTELS SECTION
===================================================================== */

function TagIcon({ type }: { type: "clock" | "users" }) {
  return type === "clock" ? (
    <Clock3 className="h-3.5 w-3.5" />
  ) : (
    <Users className="h-3.5 w-3.5" />
  );
}

function PopularHotelsSection() {
  const [activeFilter, setActiveFilter] = useState(0);

  return (
    <section className="bg-white py-24">
      <Container>
        <h2 className="text-5xl font-bold text-black sm:text-6xl">
          Popular Hotels
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-gray-500">
          Compare prices on popular hotels from trusted booking partners.
          Discover great stays for every budget.
        </p>

        {/* Filter pills */}
        <div className="mt-8 flex gap-3 overflow-x-auto pb-1">
          {HOTEL_FILTERS.map((f, i) => (
            <Pill
              key={f}
              active={activeFilter === i}
              onClick={() => setActiveFilter(i)}
            >
              {f}
            </Pill>
          ))}
        </div>

        {/* Hotel cards */}
        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">
          {HOTELS.map((h, idx) => (
            <article
              key={`${h.name}-${idx}`}
              className="overflow-hidden rounded-[28px] border-2 p-3.5"
              style={{ backgroundColor: h.bg, borderColor: h.bg }}
            >
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src={img(h.img, 640, 480)}
                  alt={h.name}
                  className="aspect-[4/3] w-full object-cover"
                />
                <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-black">
                  Popular
                </span>
                <span className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-[#FDDB32]">
                  <ArrowUpRight className="h-4 w-4" strokeWidth={2.5} />
                </span>
              </div>

              <div className="px-1 pt-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-black text-black"
                      />
                    ))}
                  </div>
                  <a
                    href="#"
                    className="inline-flex items-center gap-1 text-sm font-semibold text-black hover:underline"
                  >
                    {h.compareLabel}
                    <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.5} />
                  </a>
                </div>

                <h3 className="mt-2 text-lg font-semibold text-black">
                  {h.name}
                </h3>
                <p className="text-[15px] text-black/60">{h.city}</p>

                <div className="mt-3 flex flex-wrap gap-2">
                  {h.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-medium text-black"
                      style={{ backgroundColor: h.tagBg }}
                    >
                      <TagIcon type={h.tagIcon} />
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="mt-4 text-lg text-black">
                  <span className="font-bold">From{h.price}</span>{" "}
                  <span className="text-black/60">/ night</span>
                </p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* =====================================================================
   FAQ SECTION
===================================================================== */

function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-white py-24">
      <Container className="max-w-[860px]">
        <h2 className="text-center text-5xl font-bold leading-tight text-black sm:text-6xl">
          Frequently Asked
          <br />
          Questions
        </h2>

        <div className="mt-16">
          {FAQS.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} className="border-b border-gray-200 py-6">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-6 text-left"
                >
                  <span className="text-lg font-semibold text-black">
                    {item.q}
                  </span>
                  {isOpen ? (
                    <Minus className="h-5 w-5 shrink-0 text-black" />
                  ) : (
                    <Plus className="h-5 w-5 shrink-0 text-black" />
                  )}
                </button>
                {isOpen && (
                  <p className="mt-4 text-[15px] leading-relaxed text-gray-500">
                    {item.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

/* =====================================================================
   NEWSLETTER SECTION (yellow banner)
===================================================================== */

function NewsletterSection() {
  return (
    <section className="bg-white px-6 py-16">
      <div className="mx-auto max-w-[1216px] rounded-[36px] bg-[#FDDB32] px-6 py-16 text-center">
        <span className="inline-block rounded-full bg-[#F9F8F5] px-5 py-2 text-sm font-semibold text-black">
          Let&apos;s go on a trip!
        </span>

        <h2 className="mx-auto mt-6 max-w-2xl text-4xl font-bold leading-tight text-black sm:text-5xl">
          Get Hotel Deals Delivered to Your Inbox
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-[15px] text-black/70">
          Get Travel Inspiration &amp; Exclusive Deals Receive destination
          ideas, cheap flights and hotel offers directly in your inbox.
        </p>

        <form className="mx-auto mt-8 flex max-w-lg items-center gap-3">
          <div className="flex flex-1 items-center gap-2 rounded-full bg-white px-5 py-3.5">
            <input
              type="email"
              placeholder="Your Email Address"
              className="w-full bg-transparent text-[15px] text-black placeholder:text-gray-400 focus:outline-none"
            />
            <HelpCircle className="h-4 w-4 shrink-0 text-gray-400" />
          </div>
          <button
            type="submit"
            className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-black px-6 py-3.5 text-[15px] font-semibold text-white hover:bg-black/90"
          >
            Get Deals
            <ArrowUpRight className="h-4 w-4" strokeWidth={2.5} />
          </button>
        </form>
      </div>
    </section>
  );
}

/* =====================================================================
   FOOTER
===================================================================== */

function SocialIcon({ children }: { children: React.ReactNode }) {
  return (
    <a
      href="#"
      className="flex h-9 w-9 items-center justify-center rounded-full border border-white/25 text-white hover:bg-white/10"
    >
      {children}
    </a>
  );
}

function Footer() {
  return (
    <footer className="bg-black pt-16 text-white">
      <Container>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.3fr_1fr_1fr_1fr_1fr]">
          {/* Brand column */}
          <div>
            <span className="select-none font-serif text-3xl italic text-[#FDDB32]">
              Travel Mommy
            </span>

            <div className="mt-5 inline-block rounded-full bg-white/10 px-4 py-2 text-sm text-white/80">
              IE Ireland &middot; English (UK) &middot; EUR &euro;
            </div>

            <p className="mt-6 max-w-xs text-[15px] leading-relaxed text-white/85">
              Compare flights, hotels and travel deals from trusted travel
              providers - all in one place.
            </p>

            <div className="mt-5 flex gap-3">
              <SocialIcon>
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.8}>
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
                </svg>
              </SocialIcon>
              <SocialIcon>
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.8}>
                  <path d="M15 3h-2a4 4 0 0 0-4 4v3H7v4h2v7h4v-7h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </SocialIcon>
              <SocialIcon>
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                  <path d="M16.5 3c.4 2.2 1.9 3.7 4.1 4v2.4a7 7 0 0 1-4.1-1.3v6.4a5.7 5.7 0 1 1-5.7-5.7c.3 0 .6 0 .9.1v2.5a3.2 3.2 0 1 0 2.3 3V3h2.5z" />
                </svg>
              </SocialIcon>
            </div>
          </div>

          {/* Link columns */}
          {FOOTER_COLUMNS.map((col, i) => (
            <div key={`${col.title}-${i}`}>
              <h4 className="text-[15px] font-semibold text-white">
                {col.title}
              </h4>
              <ul className="mt-5 space-y-4">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-[15px] text-white/60 hover:text-white"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-14 border-t border-white/15 py-8 text-center text-[15px] text-white/70">
          <p>
            <a href="#" className="underline hover:text-white">
              Privacy Policy
            </a>{" "}
            |{" "}
            <a href="#" className="underline hover:text-white">
              Terms &amp; Conditions
            </a>{" "}
            |{" "}
            <a href="#" className="underline hover:text-white">
              Cookie Policy
            </a>
          </p>
          <p className="mt-1">
            <a href="#" className="underline hover:text-white">
              Affiliate Disclosure
            </a>{" "}
            |{" "}
            <a href="#" className="underline hover:text-white">
              Accessibility
            </a>
          </p>
        </div>

        <div className="border-t border-white/15 py-8 text-center text-[15px] text-white/50">
          <p>&copy; 2025 TravelMommy</p>
          <p className="mx-auto mt-4 max-w-3xl leading-relaxed">
            TravelMommy is a travel metasearch platform. We compare prices
            from airlines, hotels and travel providers. Bookings are
            completed directly with our travel partners.
          </p>
        </div>
      </Container>
    </footer>
  );
}

/* =====================================================================
   PAGE
===================================================================== */

export default function Destinations(): JSX.Element {
  return (
    <main className="min-h-screen w-full bg-white">
      <HeroSection />
      <DestinationsSection />
      <AboutBanner />
      <PopularHotelsSection />
      <FaqSection />
      <NewsletterSection />
      <Footer />
    </main>
  );
}