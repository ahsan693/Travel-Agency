"use client";



import { useState, type ReactNode } from "react";

/* ------------------------------------------------------------------ */
/*  Palette sampled directly from the source PDF                       */
/* ------------------------------------------------------------------ */
const YELLOW = "#FDDB32";
const CREAM = "#F9F8F5";
const GOLD_TEXT = "#C79A00"; // "From €24" price text on cream cards
const PALE_YELLOW = "#FFED91"; // icon badge circles

/* ------------------------------------------------------------------ */
/*  Static content — mirrors the copy in the source PDF exactly       */
/* ------------------------------------------------------------------ */

const NAV_LINKS = ["Flights", "Hotels", "Destinations", "About", "Travel"];

const FLIGHT_ROUTES = [
  { flag: "🇬🇧", route: "Dub → LHR London", duration: "1h 20m", airline: "Ryanair" },
  { flag: "🇬🇧", route: "Dub → LHR London", duration: "1h 20m", airline: "Ryanair" },
  { flag: "🇪🇸", route: "Dub → BCN Barcelona", duration: "1h 20m", airline: "Ryanair" },
  { flag: "🇵🇹", route: "Dub → LIS Lisbon", duration: "1h 20m", airline: "Ryanair" },
  { flag: "🇺🇸", route: "Dub → JFK New York", duration: "1h 20m", airline: "Ryanair" },
  { flag: "🇮🇹", route: "Dub → FCO Rome", duration: "1h 20m", airline: "Ryanair" },
  { flag: "🇦🇪", route: "Dub → DXB Dubai", duration: "1h 20m", airline: "Ryanair" },
  { flag: "🇳🇱", route: "Dub → AMS Amsterdam", duration: "1h 20m", airline: "Ryanair" },
];

const FEATURES = [
  {
    title: "No Hidden Booking Fees",
    text: "TravelMommy doesn't sell flights or charge booking fees. Compare prices for free and choose the deal that works best for you.",
    icon: "fee",
  },
  {
    title: "Book with Trusted Partners",
    text: "View the latest flight prices and availability so you can compare deals before booking with your preferred travel provider.",
    icon: "shield",
  },
  {
    title: "Live Prices, Updated Daily",
    text: "View the latest flight prices and availability so you can compare deals before booking with your preferred travel provider.",
    icon: "clock",
  },
];

const AIRLINES = [
  "Emirates",
  "American Airlines",
  "Ryanair",
  "Qatar Airways",
  "British Airways",
  "Etihad Airways",
  "KLM",
  "Lufthansa",
  "Turkish Airlines",
  "easyJet",
];

const FAQS = [
  {
    q: "How does TravelMommy compare flight prices?",
    a: "TravelMommy displays prices provided by airlines and trusted travel partners. Because fares can change quickly, the final price is confirmed when you complete your booking on the provider's website.",
  },
  {
    q: "Does TravelMommy charge booking fees?",
    a: "No. TravelMommy is a travel metasearch platform. We compare flight prices but do not sell tickets directly or charge booking fees. You always book with the airline or travel provider you choose.",
  },
  {
    q: "Can I compare flights from different airlines?",
    a: "Yes. TravelMommy lets you compare flights from multiple airlines and travel providers, making it easier to find the best combination of price, travel time and convenience.",
  },
  {
    q: "When is the best time to book cheap flights?",
    a: "Flight prices can change based on demand, season and availability. Comparing fares early and checking different travel dates can help you find cheaper flights.",
  },
  {
    q: "Are the flight prices shown on TravelMommy live?",
    a: "TravelMommy displays prices provided by airlines and trusted travel partners. Because fares can change quickly, the final price is confirmed when you complete your booking on the provider's website.",
  },
  {
    q: "Can I book flights directly on TravelMommy?",
    a: "No. TravelMommy helps you compare flight prices from multiple providers. When you choose a flight, you'll be redirected to the airline or booking partner to complete your booking securely.",
  },
  {
    q: "Which airlines can I compare on TravelMommy?",
    a: "You can compare flights from a wide range of domestic and international airlines, as well as trusted online travel agencies, helping you find the best available deal for your journey.",
  },
  {
    q: "Why should I compare flights before booking?",
    a: "Comparing flights helps you find the best available fare, discover alternative airlines or travel dates, and make informed booking decisions without searching multiple websites individually.",
  },
];

const FOOTER_COLUMNS = [
  { title: "Search", links: ["Flights", "Hotels", "Airlines", "Airports"] },
  { title: "Discover", links: ["Deals", "Destinations", "Airlines", "Airports"] },
  { title: "Discover", links: ["Trips", "Travel Guide", "Travel Tips", "FAQs"] },
  { title: "Company", links: ["About", "Contact", "Partners", "Help Centre"] },
];

/* ------------------------------------------------------------------ */
/*  Icons                                                               */
/* ------------------------------------------------------------------ */

const ArrowUpRight = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M7 17 17 7M8 7h9v9" />
  </svg>
);

const SearchIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className={className}>
    <circle cx="11" cy="11" r="7" />
    <path strokeLinecap="round" d="m20 20-3.5-3.5" />
  </svg>
);

const PlaneTakeoff = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 21h18M6 16l4-1 3.5-6.5L16 8l4 4-2 1-4.5-1.5L9 15l-3-1-2 1z" />
  </svg>
);

const PlaneLanding = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 21h18M4 13l4 1 4.5-4L15 9l4.5 2-1 2-5-1-4 3.5-3-.5-1.5-1z" />
  </svg>
);

const CalendarIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
    <rect x="3.5" y="5" width="17" height="15" rx="2" />
    <path strokeLinecap="round" d="M3.5 9.5h17M8 3v3.5M16 3v3.5" />
  </svg>
);

const UsersIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
    <circle cx="9" cy="8" r="3" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.5 19c0-3 2.5-5 5.5-5s5.5 2 5.5 5" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.5 5.5a3 3 0 0 1 0 5.8M18.5 19c0-2.6-1.8-4.6-4-5.2" />
  </svg>
);

const ChevronDown = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
  </svg>
);

const PlusMinus = ({ open, className = "" }: { open: boolean; className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <path strokeLinecap="round" d="M5 12h14" />
    {!open && <path strokeLinecap="round" d="M12 5v14" />}
  </svg>
);

const FeatureIcon = ({ type, className = "" }: { type: string; className?: string }) => {
  if (type === "fee")
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h13l3 5-3 5H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2Z" />
        <circle cx="14" cy="12" r="1.6" />
      </svg>
    );
  if (type === "shield")
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="m9 12 2 2 4-4" />
      </svg>
    );
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <circle cx="12" cy="12" r="8.5" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5V12l3 2" />
    </svg>
  );
};

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
    <div className={`leading-[0.8] ${size}`} style={{ color, fontFamily: "'Brush Script MT','Segoe Script',cursive" }}>
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
  center,
}: {
  title: ReactNode;
  subtitle?: string;
  action?: string;
  dark?: boolean;
  center?: boolean;
}) {
  return (
    <div className={`mb-8 flex items-start justify-between gap-6 ${center ? "flex-col items-center text-center" : ""}`}>
      <div className={center ? "max-w-2xl" : ""}>
        <h2 className={`text-3xl font-extrabold tracking-tight sm:text-[2.25rem] ${dark ? "text-white" : "text-gray-900"}`}>
          {title}
        </h2>
        {subtitle && <p className={`mt-3 text-sm leading-relaxed ${dark ? "text-gray-300" : "text-gray-500"}`}>{subtitle}</p>}
      </div>
      {action && !center && (
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

function FieldDivider() {
  return <div className="hidden h-10 w-px shrink-0 bg-gray-200 lg:block" />;
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function Travel() {
  const [openFaqs, setOpenFaqs] = useState<Set<number>>(new Set([0]));

  const toggleFaq = (i: number) => {
    setOpenFaqs((prev) => {
      const next = new Set(prev);
      next.has(i) ? next.delete(i) : next.add(i);
      return next;
    });
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 antialiased">
      {/* ============================= HERO ============================= */}
      <section
        className="relative overflow-hidden bg-cover bg-center pb-16"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(10,8,6,0.35) 0%, rgba(8,10,10,0.65) 45%, rgba(3,6,7,0.92) 100%), url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1800&q=80')",
        }}
      >
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

        {/* heading */}
        <div className="mx-auto max-w-7xl px-6 pt-16 lg:px-8">
          <h1 className="max-w-2xl text-4xl font-extrabold leading-[1.05] text-white sm:text-5xl lg:text-[3.4rem]">
            Compare Cheap Flights from Hundreds of Airlines
          </h1>
          <p className="mt-5 max-w-lg text-sm leading-relaxed text-gray-200">
            Compare live flight prices from airlines and trusted travel partners to find the best fare before you
            book.
          </p>
        </div>

        {/* search widget */}
        <div className="mx-auto max-w-7xl px-6 pt-10 lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-t-2xl px-6 py-3 text-sm font-semibold text-gray-900" style={{ backgroundColor: CREAM }}>
            <PlaneTakeoff className="h-4 w-4" />
            Flights
          </div>

          <div className="rounded-b-[24px] rounded-tr-[24px] bg-white p-6 shadow-xl sm:p-8">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-4">
              {/* Departure */}
              <div className="flex-1">
                <label className="flex items-center gap-1.5 text-xs font-semibold text-gray-500">
                  <PlaneTakeoff className="h-3.5 w-3.5" /> Departure
                </label>
                <p className="mt-1.5 text-base font-bold text-gray-900">Dublin (DUB)</p>
                <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-gray-400">
                  <button className="underline decoration-dotted hover:text-gray-600">Add Nearby Airports</button>
                  <label className="flex items-center gap-1.5">
                    <input type="checkbox" className="h-3.5 w-3.5 rounded border-gray-300" />
                    Direct Flights
                  </label>
                </div>
              </div>

              <FieldDivider />

              {/* To */}
              <div className="flex-1">
                <label className="flex items-center gap-1.5 text-xs font-semibold text-gray-500">
                  <PlaneLanding className="h-3.5 w-3.5" /> To
                </label>
                <p className="mt-1.5 text-base font-bold text-gray-400">Country, City or airport</p>
                <button className="mt-1 text-xs text-gray-400 underline decoration-dotted hover:text-gray-600">
                  Add Nearby Airports
                </button>
              </div>

              <FieldDivider />

              {/* Depart */}
              <div className="flex-1">
                <label className="flex items-center gap-1.5 text-xs font-semibold text-gray-500">
                  <CalendarIcon className="h-3.5 w-3.5" /> Depart
                </label>
                <p className="mt-1.5 text-base font-bold text-gray-900">08 Nov 2025</p>
              </div>

              <FieldDivider />

              {/* Return */}
              <div className="flex-1">
                <label className="flex items-center gap-1.5 text-xs font-semibold text-gray-500">
                  <CalendarIcon className="h-3.5 w-3.5" /> Return
                </label>
                <p className="mt-1.5 text-base font-bold text-gray-900">08 Jan 2026</p>
              </div>

              <FieldDivider />

              {/* Travellers */}
              <div className="flex-1">
                <label className="flex items-center gap-1.5 text-xs font-semibold text-gray-500">
                  <UsersIcon className="h-3.5 w-3.5" /> Travellers and Cabin Class
                </label>
                <p className="mt-1.5 flex items-center gap-1 text-base font-bold text-gray-900">
                  01 Adult, 01 Child <ChevronDown className="h-3.5 w-3.5 text-gray-400" />
                </p>
              </div>

              {/* Search button */}
              <button
                className="flex h-14 w-14 shrink-0 items-center justify-center self-center rounded-full text-gray-900 shadow-sm transition-transform hover:scale-105 lg:self-auto"
                style={{ backgroundColor: YELLOW }}
                aria-label="Search flights"
              >
                <SearchIcon className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* ===================== CHEAP FLIGHTS FROM DUBLIN ===================== */}
        <section className="py-16">
          <SectionHeading
            title={
              <>
                Cheap Flights from <span style={{ color: GOLD_TEXT }}>Dublin</span>
              </>
            }
            action="View All Routes"
          />
          <p className="-mt-6 mb-8 max-w-3xl text-sm leading-relaxed text-gray-500">
            Looking for cheap flights from Dublin? Compare today&apos;s lowest fares from Dublin Airport to popular
            destinations across Europe, North America and beyond. Prices update regularly so you can find the best
            available deals before you book.
          </p>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {FLIGHT_ROUTES.map((f, i) => {
              const featured = i === 0;
              return (
                <div key={i} className="rounded-2xl p-6" style={{ backgroundColor: CREAM }}>
                  <div className="flex items-center gap-2 text-sm font-bold text-gray-900">
                    <span className="text-base leading-none">{f.flag}</span>
                    <span>{f.route}</span>
                  </div>
                  <p className="mt-5 text-2xl font-extrabold" style={{ color: GOLD_TEXT }}>
                    From €24
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

        {/* ===================== WHY COMPARE FLIGHTS ===================== */}
        <section className="py-16">
          <p className="text-center text-xs font-bold uppercase tracking-wider" style={{ color: GOLD_TEXT }}>
            Easy process
          </p>
          <SectionHeading
            title="Why Compare Flights with TravelMommy?"
            subtitle="Search and compare cheap flights from multiple airlines and trusted booking partners to find the best fare for your trip."
            center
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {FEATURES.map((f) => (
              <div key={f.title} className="rounded-2xl p-7" style={{ backgroundColor: CREAM }}>
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-full text-gray-900"
                  style={{ backgroundColor: PALE_YELLOW }}
                >
                  <FeatureIcon type={f.icon} className="h-5 w-5" />
                </div>
                <p className="mt-5 text-base font-bold text-gray-900">{f.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">{f.text}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* ===================== POPULAR AIRLINES (dark) ===================== */}
      <section className="bg-black py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            title="Compare Flights from Popular Airlines."
            subtitle="Search and compare fares from leading airlines around the world. Discover competitive prices, flexible travel options and routes from trusted carriers."
            action="View All Routes"
            dark
          />
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {AIRLINES.map((name) => (
              <div
                key={name}
                className="flex h-24 items-center justify-center rounded-2xl px-4 text-center text-sm font-bold text-gray-900"
                style={{ backgroundColor: CREAM }}
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* ===================== FAQ ===================== */}
        <section className="py-16">
          <h2 className="mb-10 text-center text-3xl font-extrabold tracking-tight text-gray-900 sm:text-[2.25rem]">
            Frequently Asked Questions
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
          <h2 className="mt-4 text-3xl font-extrabold text-gray-900 sm:text-[2.25rem]">Never Miss a Great Travel Deal</h2>
          <p className="mx-auto mt-2 max-w-md text-sm text-gray-800">
            Get cheap flight alerts, hotel deals and travel inspiration delivered to your inbox.
          </p>
          <form className="mx-auto mt-6 flex max-w-md items-center gap-2 rounded-full bg-white p-1.5 shadow-sm">
            <input
              type="email"
              placeholder="Your Email Address"
              className="w-full flex-1 bg-transparent px-4 py-2 text-sm text-gray-700 outline-none placeholder:text-gray-400"
            />
            <button type="submit" className="flex shrink-0 items-center gap-1.5 rounded-full bg-gray-950 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-gray-800">
              Get Deals
              <ArrowUpRight className="h-3.5 w-3.5" />
            </button>
          </form>
          <p className="mt-3 text-xs text-gray-700">No Spam, Unsubscribe Anytime</p>
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
            <div className="mt-2">
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