"use client";

import { useState } from "react";

/* ------------------------------------------------------------------ */
/*  Palette sampled directly from the source PDF (do not "round" these */
/*  to the nearest Tailwind default — they are intentionally custom)   */
/* ------------------------------------------------------------------ */
const YELLOW = "#FDDB32"; // page / accent yellow
const CREAM = "#F9F8F5"; // header pill + flight-card background
const PINK = "#FBBDEA"; // hotel card 1
const PEACH = "#FFC796"; // hotel card 2
const PALE_YELLOW = "#FFED91"; // hotel card 3

/* ------------------------------------------------------------------ */
/*  Static content — mirrors the copy in the source PDF exactly       */
/* ------------------------------------------------------------------ */

const NAV_LINKS = ["Flights", "Hotels", "Destinations", "About", "Travel"];

const FLIGHT_ROUTES = [
  { flag: "🇬🇧", route: "Dub → LHR London", price: "€24", duration: "1h 20m", airline: "Ryanair" },
  { flag: "🇬🇧", route: "Dub → LHR London", price: "€24", duration: "1h 20m", airline: "Ryanair" },
  { flag: "🇪🇸", route: "Dub → BCN Barcelona", price: "€24", duration: "1h 20m", airline: "Ryanair" },
  { flag: "🇵🇹", route: "Dub → LIS Lisbon", price: "€24", duration: "1h 20m", airline: "Ryanair" },
];

const NEIGHBOURHOODS = [
  { name: "Old Port", caption: "Perfect for first time visitors", img: "https://images.unsplash.com/photo-1596395463695-8a0d9b1becd6?w=600&q=80" },
  { name: "Le Panier", caption: "Historic streets and boutique hotels", img: "https://images.unsplash.com/photo-1590077428593-a55bb07c4665?w=600&q=80" },
  { name: "Prado", caption: "Beach hotels and family stays", img: "https://images.unsplash.com/photo-1533760881669-80d0a72e3e2a?w=600&q=80" },
  { name: "La Joliette", caption: "Business hotels and modern apartments", img: "https://images.unsplash.com/photo-1541445188794-8a6ffe2f7b23?w=600&q=80" },
];

const ARTICLES = [
  { date: "April 29, 2026", title: "Why this matters for travelers?", img: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=700&q=80" },
  { date: "April 29, 2026", title: "A mix of casual and dressy options", img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=700&q=80" },
  { date: "April 29, 2026", title: "2026 spring travel trends revealed", img: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=700&q=80" },
];

const HOTELS = [
  { name: "Hilton Barcelona", city: "Barcelona", tags: ["Free cancellation", "Breakfast included"], price: "29", cta: "Compare Prices", bg: PINK, img: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600&q=80" },
  { name: "Marriott Dubai", city: "Dubai", tags: ["Excellent (4.7)"], price: "169", cta: "Compare", bg: PEACH, img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80" },
  { name: "Marriott Dubai", city: "Dubai", tags: ["Excellent (4.7)"], price: "169", cta: "Compare", bg: PALE_YELLOW, img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&q=80" },
];

const NEARBY = [
  { name: "Nice", img: "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=500&q=80" },
  { name: "Cannes", img: "https://images.unsplash.com/photo-1591182799213-40dd9d3e0e2e?w=500&q=80" },
  { name: "Monaco", img: "https://images.unsplash.com/photo-1548574505-5e239809ee19?w=500&q=80" },
];

// Two rows of identical data — reproduced exactly as it appears in the source PDF.
const WEATHER_ROW = [
  { month: "Jan", temp: "13°C" },
  { month: "Feb", temp: "15°C" },
  { month: "Mar", temp: "16°C" },
  { month: "April", temp: "18°C" },
  { month: "May", temp: "21°C" },
  { month: "Jun", temp: "24°C" },
];

const SEASONS = [
  { name: "Spring (Mar–May)", range: "18–26°C", text: "Flowers bloom, cities buzz, perfect for sightseeing in Barcelona or Seville." },
  { name: "Summer (Jun–Aug)", range: "28–35°C", text: "Hot, lively, peak beach season. Think Balearics, Costa del Sol and late night fiestas." },
  { name: "Autumn (Sept–Oct)", range: "22–28°C", text: "Warm, fewer crowds, cheaper prices. Ideal for relaxed beach dinners and cultural trips." },
  { name: "Winter (Nov–Feb)", range: "12–18°C", text: "Cooler on the mainland, but 20–24°C in the Canaries. Perfect for off season sun." },
];

const FAQS = [
  {
    q: "How many days should I spend in Marseille?",
    a: "We recommend spending 3 to 4 days in Marseille to experience the city's highlights. This gives you enough time to explore the Old Port, Le Panier, Notre Dame de la Garde, Calanques National Park, local markets and Mediterranean beaches. If you plan to visit nearby destinations like Cassis or Aix en Provence, consider staying for 5 to 7 days.",
  },
  {
    q: "When is the best time to visit Marseille?",
    a: "The best time to visit Marseille is between May and September, when the weather is warm and perfect for sightseeing, beaches and outdoor dining. Spring and early autumn offer pleasant temperatures with fewer crowds, while summer is ideal for enjoying the Mediterranean coastline and festivals.",
  },
  {
    q: "Which airport serves Marseille?",
    a: "Marseille is served by Marseille Provence Airport (MRS), located around 27 km (17 miles) northwest of the city centre. The airport offers domestic and international flights and is well connected by shuttle buses, taxis, car hire and regional train services.",
  },
  {
    q: "Is Marseille expensive?",
    a: "Marseille is generally more affordable than Paris and many other major European cities. Budget travellers can find reasonably priced accommodation, local restaurants and public transport, while luxury hotels and fine dining are also widely available. Comparing hotel prices before booking can help you find the best value for your stay.",
  },
  {
    q: "Where should I stay in Marseille?",
    a: "The best area depends on your travel style. Vieux Port (Old Port) is perfect for first time visitors, Le Panier offers historic charm and boutique accommodation, Prado is ideal for beach holidays and families, while La Joliette is popular with business travellers thanks to its modern hotels and waterfront location.",
  },
  {
    q: "Can I compare flights to Marseille?",
    a: "Yes. TravelMommy lets you compare flight prices to Marseille from trusted airlines and travel providers in one place. Search available routes, compare fares, choose the best option for your travel dates and book directly with your preferred airline or booking partner.",
  },
  {
    q: "Can I compare hotels in Marseille?",
    a: "Absolutely. TravelMommy helps you compare hotel prices in Marseille from trusted booking websites, making it easy to find accommodation that suits your budget and travel style. Compare prices, amenities, guest ratings and locations before booking directly with the hotel or travel provider.",
  },
];

// Column headers are reproduced exactly as printed in the source PDF —
// "Discover" genuinely appears twice there.
const FOOTER_COLUMNS = [
  { title: "Search", links: ["Flights", "Hotels", "Airlines", "Airports"] },
  { title: "Discover", links: ["Deals", "Destinations", "Airlines", "Airports"] },
  { title: "Discover", links: ["Trips", "Travel Guide", "Travel Tips", "FAQs"] },
  { title: "Company", links: ["About", "Contact", "Partners", "Help Centre"] },
];

/* ------------------------------------------------------------------ */
/*  Icons (inline, no external icon package required)                  */
/* ------------------------------------------------------------------ */

const ArrowUpRight = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M7 17 17 7M8 7h9v9" />
  </svg>
);

const ChevronRight = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 6l6 6-6 6" />
  </svg>
);

const HomeIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 11.5 12 4l9 7.5" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 10v9a1 1 0 0 0 1 1h4v-6h4v6h4a1 1 0 0 0 1-1v-9" />
  </svg>
);

const Star = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 2.5l2.9 6.06 6.6.77-4.86 4.5 1.28 6.6L12 17.06 6.08 20.4l1.28-6.6-4.86-4.5 6.6-.77L12 2.5z" />
  </svg>
);

const PlusMinus = ({ open, className = "" }: { open: boolean; className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <path strokeLinecap="round" d="M5 12h14" />
    {!open && <path strokeLinecap="round" d="M12 5v14" />}
  </svg>
);

const InstagramIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none" />
  </svg>
);

const FacebookIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className}>
    <circle cx="12" cy="12" r="9" />
    <path d="M13.8 8.5h-1.4c-.7 0-1.2.5-1.2 1.2V11h2.5l-.3 2.2h-2.2V21" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const TikTokIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className}>
    <circle cx="12" cy="12" r="9" />
    <path d="M11.5 7v7.2a2 2 0 1 1-1.4-1.9" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M11.5 7.2c.3 1.3 1.3 2.3 2.6 2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/* ------------------------------------------------------------------ */
/*  Small reusable bits                                                */
/* ------------------------------------------------------------------ */

function Logo({ color = "#111111", size = "text-2xl" }: { color?: string; size?: string }) {
  return (
    <div
      className={`leading-[0.8] ${size}`}
      style={{ color, fontFamily: "'Brush Script MT','Segoe Script',cursive" }}
    >
      <div>Travel</div>
      <div className="-mt-1">Mommy</div>
    </div>
  );
}

function SectionHeading({
  title,
  subtitle,
  action,
  dark,
}: {
  title: string;
  subtitle?: string;
  action?: string;
  dark?: boolean;
}) {
  return (
    <div className="mb-8 flex items-start justify-between gap-6">
      <div>
        <h2 className={`text-3xl font-extrabold tracking-tight sm:text-[2.25rem] ${dark ? "text-white" : "text-gray-900"}`}>
          {title}
        </h2>
        {subtitle && <p className={`mt-2 text-sm ${dark ? "text-gray-300" : "text-gray-500"}`}>{subtitle}</p>}
      </div>
      {action && (
        <button
          className="flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-semibold text-gray-900 transition-colors hover:brightness-95"
          style={{ backgroundColor: YELLOW }}
        >
          {action}
          <ArrowUpRight className="h-3.5 w-3.5" />
        </button>
      )}
    </div>
  );
}

function ArrowBadge() {
  return (
    <span className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/95 shadow-sm">
      <ArrowUpRight className="h-3.5 w-3.5 text-gray-700" />
    </span>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function City() {
  const [openFaqs, setOpenFaqs] = useState<Set<number>>(new Set(FAQS.map((_, i) => i)));

  const toggleFaq = (i: number) => {
    setOpenFaqs((prev) => {
      const next = new Set(prev);
      next.has(i) ? next.delete(i) : next.add(i);
      return next;
    });
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 antialiased">
      {/* ============================= HERO (full-bleed yellow band) ============================= */}
      <section style={{ backgroundColor: YELLOW }} className="pb-14">
        {/* header */}
        <div className="mx-auto max-w-7xl px-6 pt-6 lg:px-8">
          <div className="flex items-center justify-between rounded-full px-6 py-3.5" style={{ backgroundColor: CREAM }}>
            <Logo color="#111111" size="text-[1.6rem]" />
            <nav className="hidden items-center gap-8 text-[15px] font-medium text-gray-800 md:flex">
              {NAV_LINKS.map((link) => (
                <a key={link} href="#" className="transition-colors hover:text-gray-950">
                  {link}
                </a>
              ))}
            </nav>
            <button
              className="flex items-center gap-1.5 rounded-full px-5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm transition-colors hover:brightness-95"
              style={{ backgroundColor: YELLOW }}
            >
              Search Deals
              <ArrowUpRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>

        {/* card + image row */}
        <div className="mx-auto max-w-7xl px-6 pt-8 lg:px-8">
          <div className="flex flex-col items-stretch gap-6 md:flex-row md:items-center">
            {/* white info card */}
            <div className="order-2 rounded-[28px] bg-white p-8 shadow-sm md:order-1 md:w-[380px] md:shrink-0 md:p-10">
              <div className="flex items-center gap-2 text-xs font-medium text-gray-500">
                <HomeIcon className="h-4 w-4 text-gray-700" />
                <ChevronRight className="h-3 w-3 text-gray-400" />
                <span className="font-bold text-gray-900">Destinations</span>
                <ChevronRight className="h-3 w-3 text-gray-400" />
                <span>Marseille, France</span>
              </div>

              <h1 className="mt-10 text-4xl font-extrabold text-gray-900 sm:text-[2.75rem]">Marseille, Spain</h1>
              <p className="mt-4 text-sm leading-relaxed text-gray-500">
                Discover Marseille&apos;s historic Old Port, Mediterranean coastline, vibrant food scene and
                nearby beaches. Compare flights, hotels and travel deals before planning your trip.
              </p>
            </div>

            {/* hero image */}
            <div className="order-1 h-[280px] w-full overflow-hidden rounded-[28px] md:order-2 md:h-[420px] md:flex-1">
              <img
                src="https://images.unsplash.com/photo-1596395463695-8a0d9b1becd6?w=1600&q=80"
                alt="Marseille Old Port"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* stats row — plain text, no card, no dividers */}
        <div className="mx-auto max-w-7xl px-6 pt-10 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div>
              <p className="text-sm font-medium text-gray-800">Flights from</p>
              <p className="mt-1 text-xl font-extrabold text-gray-900">€49/person</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-800">Hotels from</p>
              <p className="mt-1 text-xl font-extrabold text-gray-900">€89/night</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-800">Best time</p>
              <p className="mt-1 text-xl font-extrabold text-gray-900">May – September</p>
            </div>
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* ===================== COMPARE FLIGHTS ===================== */}
        <section className="py-16">
          <SectionHeading
            title="Compare Flights to Marseille"
            subtitle="Find the best neighbourhood based on your travel style."
            action="View All Routes"
          />
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {FLIGHT_ROUTES.map((f, i) => {
              const featured = i === 0;
              return (
                <div key={i} className="rounded-2xl p-6" style={{ backgroundColor: CREAM }}>
                  <div className="flex items-center gap-2 text-sm font-bold text-gray-900">
                    <span className="text-base leading-none">{f.flag}</span>
                    <span>{f.route}</span>
                  </div>
                  <p className="mt-5 text-2xl font-extrabold" style={{ color: "#C79A00" }}>
                    From {f.price}
                  </p>
                  <p className="mt-2 text-xs text-gray-500">Direct • {f.duration}</p>
                  <p className="mt-0.5 text-xs text-gray-500">{f.airline}</p>
                  <button
                    className={`mt-5 w-full rounded-full py-2.5 text-xs font-semibold transition-colors ${
                      featured ? "text-gray-900" : "border border-gray-300 bg-white text-gray-800 hover:border-gray-400"
                    }`}
                    style={featured ? { backgroundColor: YELLOW } : undefined}
                  >
                    Compare Prices
                  </button>
                </div>
              );
            })}
          </div>
        </section>

        {/* ===================== WHERE TO STAY ===================== */}
        <section className="py-16">
          <SectionHeading
            title="Where to Stay in Spain"
            subtitle="Find the best neighbourhood based on your travel style."
            action="Compare Hotels"
          />
          <div className="grid grid-cols-2 gap-5 sm:grid-cols-4">
            {NEIGHBOURHOODS.map((n) => (
              <div key={n.name} className="group cursor-pointer">
                <div className="relative h-40 overflow-hidden rounded-2xl bg-gray-100 sm:h-48">
                  <img
                    src={n.img}
                    alt={n.name}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <ArrowBadge />
                </div>
                <p className="mt-3 text-sm font-bold text-gray-900">{n.name}</p>
                <p className="mt-0.5 text-xs leading-snug text-gray-500">{n.caption}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* ===================== THINGS TO DO (dark) ===================== */}
      <section className="bg-black py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading title="Things to Do in Spain" action="Popular Attractions" dark />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {ARTICLES.map((a, i) => (
              <div key={i} className="cursor-pointer">
                <div className="relative h-64 w-full overflow-hidden rounded-2xl sm:h-72">
                  <img src={a.img} alt={a.title} className="h-full w-full object-cover" />
                  <ArrowBadge />
                </div>
                <p className="mt-4 text-xs font-medium text-gray-400">{a.date}</p>
                <p className="mt-1 text-lg font-bold text-white">{a.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* ===================== POPULAR HOTELS ===================== */}
        <section className="py-16">
          <SectionHeading title="Popular Hotels" />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {HOTELS.map((h, i) => (
              <div key={i} className="overflow-hidden rounded-[24px] p-3" style={{ backgroundColor: h.bg }}>
                <div className="relative h-48 w-full overflow-hidden rounded-2xl">
                  <img src={h.img} alt={h.name} className="h-full w-full object-cover" />
                  <span className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1 text-[11px] font-semibold text-gray-800 shadow-sm">
                    Popular
                  </span>
                  <ArrowBadge />
                </div>
                <div className="px-2 pb-2 pt-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-0.5" style={{ color: "#1a1a1a" }}>
                      {Array.from({ length: 5 }).map((_, s) => (
                        <Star key={s} className="h-3.5 w-3.5" />
                      ))}
                    </div>
                    <a href="#" className="flex items-center gap-1 text-xs font-semibold text-gray-900 hover:opacity-70">
                      {h.cta}
                      <ArrowUpRight className="h-3 w-3" />
                    </a>
                  </div>

                  <p className="mt-3 text-base font-bold text-gray-900">{h.name}</p>
                  <p className="text-xs text-gray-600">{h.city}</p>

                  <div className="mt-3 flex flex-wrap items-center gap-2">
                    {h.tags.map((tag) => (
                      <span key={tag} className="rounded-full bg-white/70 px-2.5 py-1 text-[11px] font-medium text-gray-800">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <p className="mt-4 text-lg font-extrabold text-gray-900">
                    From ${h.price} <span className="text-xs font-medium text-gray-600">/ night</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ===================== NEARBY DESTINATIONS ===================== */}
        <section className="py-16">
          <SectionHeading title="Nearby Destinations" action="Compare Hotels" />
          <div className="grid grid-cols-3 gap-5">
            {NEARBY.map((n) => (
              <div key={n.name} className="group cursor-pointer">
                <div className="relative h-36 overflow-hidden rounded-2xl bg-gray-100 sm:h-44">
                  <img
                    src={n.img}
                    alt={n.name}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <ArrowBadge />
                </div>
                <p className="mt-3 text-sm font-bold text-gray-900">{n.name}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ===================== WEATHER ===================== */}
        <section className="py-16">
          <h2 className="mb-8 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-[2.25rem]">
            Weather In Spain
          </h2>
          <div className="rounded-[28px] p-8 sm:p-10" style={{ backgroundColor: YELLOW }}>
            {/* row 1 */}
            <div className="grid grid-cols-3 gap-3 sm:grid-cols-6">
              {WEATHER_ROW.map((w) => (
                <div key={`r1-${w.month}`} className="rounded-2xl px-3 py-4 text-center" style={{ backgroundColor: CREAM }}>
                  <p className="text-xs font-medium text-gray-500">{w.month}</p>
                  <p className="mt-1 text-base font-extrabold text-gray-900">{w.temp}</p>
                </div>
              ))}
            </div>
            {/* row 2 — duplicated exactly as it appears in the source PDF */}
            <div className="mt-3 grid grid-cols-3 gap-3 sm:grid-cols-6">
              {WEATHER_ROW.map((w) => (
                <div key={`r2-${w.month}`} className="rounded-2xl px-3 py-4 text-center" style={{ backgroundColor: CREAM }}>
                  <p className="text-xs font-medium text-gray-500">{w.month}</p>
                  <p className="mt-1 text-base font-extrabold text-gray-900">{w.temp}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 border-t border-black/10 pt-8">
              <p className="text-sm font-bold text-gray-900">
                Spain&apos;s a sunshine superstar, with something for every season:
              </p>

              <div className="mt-4 space-y-3">
                {SEASONS.map((s) => (
                  <p key={s.name} className="flex gap-2 text-sm leading-relaxed text-gray-800">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-900" />
                    <span>
                      <span className="font-bold">
                        {s.name} – {s.range}.
                      </span>{" "}
                      {s.text}
                    </span>
                  </p>
                ))}
              </div>

              <p className="mt-6 text-sm font-bold text-gray-900">
                ☀️ Top Tip: The Med coast = dry heat, the north west = breezier and cooler.
              </p>
            </div>
          </div>
        </section>

        {/* ===================== FAQ ===================== */}
        <section className="py-16">
          <h2 className="mb-10 text-center text-3xl font-extrabold tracking-tight text-gray-900 sm:text-[2.25rem]">
            Frequently Asked
            <br />
            Questions
          </h2>
          <div className="mx-auto max-w-3xl divide-y divide-gray-100 border-t border-b border-gray-100">
            {FAQS.map((f, i) => {
              const open = openFaqs.has(i);
              return (
                <div key={i}>
                  <button onClick={() => toggleFaq(i)} className="flex w-full items-center justify-between gap-4 py-5 text-left">
                    <span className="text-sm font-bold text-gray-900 sm:text-base">{f.q}</span>
                    <PlusMinus open={open} className="h-4 w-4 shrink-0 text-gray-500" />
                  </button>
                  {open && <p className="pb-5 text-sm leading-relaxed text-gray-500">{f.a}</p>}
                </div>
              );
            })}
          </div>
        </section>
      </main>

      {/* ===================== NEWSLETTER CTA ===================== */}
      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-8">
        <div className="rounded-[28px] px-8 py-14 text-center" style={{ backgroundColor: YELLOW }}>
          <span className="inline-block rounded-full bg-white px-4 py-1.5 text-xs font-semibold text-gray-900">
            Let&apos;s go on a trip!
          </span>
          <h2 className="mt-4 text-3xl font-extrabold text-gray-900 sm:text-[2.25rem]">Never Miss a Travel Deal</h2>
          <p className="mt-2 text-sm text-gray-800">Receive flight deals, hotel offers and destination inspiration.</p>
          <form className="mx-auto mt-6 flex max-w-md items-center gap-2 rounded-full bg-white p-1.5 shadow-sm">
            <input
              type="email"
              placeholder="Your Email Address"
              className="w-full flex-1 bg-transparent px-4 py-2 text-sm text-gray-700 outline-none placeholder:text-gray-400"
            />
            <button type="submit" className="shrink-0 rounded-full bg-gray-950 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-gray-800">
              Get Deals
            </button>
          </form>
        </div>
      </section>

      {/* ============================= FOOTER ============================= */}
      <footer className="bg-black pt-16 text-gray-400">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-6">
            <div className="col-span-2 lg:col-span-2">
              <Logo color={YELLOW} size="text-4xl" />
              <span className="mt-4 inline-block rounded-full bg-white/10 px-3 py-1.5 text-xs font-medium text-gray-300">
                IE Ireland · English (UK) · EUR €
              </span>
              <p className="mt-5 text-sm leading-relaxed text-gray-400">
                Compare flights, hotels and travel deals from trusted travel providers - all in one place.
              </p>
              <div className="mt-5 flex items-center gap-3">
                <a href="#" aria-label="Instagram" className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-700 text-gray-300 hover:border-gray-500 hover:text-white">
                  <InstagramIcon className="h-4 w-4" />
                </a>
                <a href="#" aria-label="Facebook" className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-700 text-gray-300 hover:border-gray-500 hover:text-white">
                  <FacebookIcon className="h-4 w-4" />
                </a>
                <a href="#" aria-label="TikTok" className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-700 text-gray-300 hover:border-gray-500 hover:text-white">
                  <TikTokIcon className="h-4 w-4" />
                </a>
              </div>
            </div>

            {FOOTER_COLUMNS.map((col, i) => (
              <div key={`${col.title}-${i}`}>
                <p className="text-xs font-bold uppercase tracking-wider text-white">{col.title}</p>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-xs text-gray-400 transition-colors hover:text-yellow-400">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-14 border-t border-gray-800 py-6 text-center text-xs text-gray-500">
            <a href="#" className="underline hover:text-gray-300">Privacy Policy</a>
            <span className="mx-2 text-gray-700">|</span>
            <a href="#" className="underline hover:text-gray-300">Terms &amp; Conditions</a>
            <span className="mx-2 text-gray-700">|</span>
            <a href="#" className="underline hover:text-gray-300">Cookie Policy</a>
            <br className="sm:hidden" />
            <span className="hidden sm:inline" />
            <div className="mt-2 sm:mt-0 sm:inline">
              <a href="#" className="underline hover:text-gray-300">Affiliate Disclosure</a>
              <span className="mx-2 text-gray-700">|</span>
              <a href="#" className="underline hover:text-gray-300">Accessibility</a>
            </div>
          </div>

          <p className="border-t border-gray-800 py-6 text-center text-[11px] leading-relaxed text-gray-600">
            © 2025 TravelMommy
          </p>

          <p className="pb-8 text-center text-[11px] leading-relaxed text-gray-600">
            TravelMommy is a travel metasearch platform. We compare prices from airlines, hotels and travel
            providers. Bookings are completed directly with our travel partners.
          </p>
        </div>
      </footer>
    </div>
  );
}