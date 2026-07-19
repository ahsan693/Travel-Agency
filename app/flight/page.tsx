'use client';

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Plane,
  Building2,
  Calendar,
  Users,
  Search,
  ArrowLeftRight,
  Check,
  Star,
  ArrowUpRight,
  Clock,
  CreditCard,
  UserCheck,
  RefreshCw,
  Minus,
  Plus,
  Mail,
} from "lucide-react";

// ============================================================================
// IMPORTANT: Adjust these import paths to match your project's folder structure
// ============================================================================
import Header from "../components/Home/header";
import Footer from "../components/Home/footer";

/* ----------------------------------------------------------------
   STATIC DATA
---------------------------------------------------------------- */

const desktopFields = [
  { key: "from", icon: Plane, label: "Departure", value: "Dublin (DUB)", width: "w-[197px]" },
  { key: "to", icon: Plane, label: "To", value: "Country, City or air...", width: "w-[198px]" },
  { key: "depart", icon: Calendar, label: "Depart", value: "08 Nov 2025", width: "w-[193px]" },
  { key: "return", icon: Calendar, label: "Return", value: "08 Jan 2026", width: "w-[193px]" },
  { key: "travellers", icon: Users, label: "Travellers and Cabin Class", value: "01 Adult 01 Child", width: "w-[273px]" },
];

const mobileFields = [
  { key: "from", icon: Plane, label: "Departure", value: "Dublin (DUB)" },
  { key: "to", icon: Plane, label: "To", value: "Country, City or Airport" },
];

const mobileSplitFields = [
  { key: "depart", icon: Calendar, label: "Depart", value: "08 Nov" },
  { key: "return", icon: Calendar, label: "Return", value: "08 Jan" },
];

const mobileTravellersField = { key: "travellers", icon: Users, label: "Travellers", value: "01 Adult, 01 Child" };

const cheapFlights = [
  { city: "London", route: "Dub → LHR", price: "€24", airline: "Ryanair", duration: "Direct • 1h 20m", image: "https://images.pexels.com/photos/16230720/pexels-photo-16230720.jpeg?auto=compress&cs=tinysrgb&w=800&q=80", flag: "https://flagcdn.com/gb.svg", featured: true },
  { city: "London", route: "Dub → LHR", price: "€24", airline: "Ryanair", duration: "Direct • 1h 20m", image: "https://images.pexels.com/photos/16230720/pexels-photo-16230720.jpeg?auto=compress&cs=tinysrgb&w=800&q=80", flag: "https://flagcdn.com/gb.svg" },
  { city: "Barcelona", route: "Dub → BCN", price: "€24", airline: "Ryanair", duration: "Direct • 2h 35m", image: "https://images.unsplash.com/photo-1578095172812-dcc191c5aed8?auto=format&w=800&q=80&fit=crop", flag: "https://flagcdn.com/es.svg" },
  { city: "Lisbon", route: "Dub → LIS", price: "€24", airline: "Ryanair", duration: "Direct • 2h 50m", image: "https://images.unsplash.com/photo-1585208798174-6cedd86e019a?auto=format&w=800&q=80&fit=crop", flag: "https://flagcdn.com/pt.svg" },
  { city: "New York", route: "Dub → JFK", price: "€24", airline: "Aer Lingus", duration: "Direct • 7h 15m", image: "https://images.unsplash.com/photo-1496588152823-86ff7695e68f?auto=format&w=800&q=80&fit=crop", flag: "https://flagcdn.com/us.svg" },
  { city: "Rome", route: "Dub → FCO", price: "€24", airline: "Ryanair", duration: "Direct • 3h 10m", image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&w=800&q=80&fit=crop", flag: "https://flagcdn.com/it.svg" },
  { city: "Dubai", route: "Dub → DXB", price: "€24", airline: "Emirates", duration: "Direct • 7h 45m", image: "https://images.unsplash.com/photo-1623725206109-3ef2c2eec00e?auto=format&w=800&q=80&fit=crop", flag: "https://flagcdn.com/ae.svg" },
  { city: "Amsterdam", route: "Dub → AMS", price: "€24", airline: "Ryanair", duration: "Direct • 1h 40m", image: "https://images.unsplash.com/photo-1580996378027-23040f16f157?auto=format&w=800&q=80&fit=crop", flag: "https://flagcdn.com/nl.svg" },
];

const mobileFlights = [
  { city: "London", route: "Dub → LHR", price: "€24", airline: "Ryanair", duration: "1h 20m", image: "https://images.pexels.com/photos/16230720/pexels-photo-16230720.jpeg?auto=compress&cs=tinysrgb&w=800&q=80", flag: "https://flagcdn.com/gb.svg" },
  { city: "London", route: "Dub → LGW", price: "€24", airline: "Ryanair", duration: "1h 25m", image: "https://images.pexels.com/photos/16230720/pexels-photo-16230720.jpeg?auto=compress&cs=tinysrgb&w=800&q=80", flag: "https://flagcdn.com/gb.svg" },
  { city: "Barcelona", route: "Dub → BCN", price: "€29", airline: "Ryanair", duration: "2h 35m", image: "https://images.unsplash.com/photo-1578095172812-dcc191c5aed8?auto=format&w=800&q=80&fit=crop", flag: "https://flagcdn.com/es.svg" },
  { city: "Lisbon", route: "Dub → LIS", price: "€31", airline: "Ryanair", duration: "2h 50m", image: "https://images.unsplash.com/photo-1585208798174-6cedd86e019a?auto=format&w=800&q=80&fit=crop", flag: "https://flagcdn.com/pt.svg" },
  { city: "New York", route: "Dub → JFK", price: "€189", airline: "Aer Lingus", duration: "7h 15m", image: "https://images.unsplash.com/photo-1496588152823-86ff7695e68f?auto=format&w=800&q=80&fit=crop", flag: "https://flagcdn.com/us.svg" },
  { city: "Rome", route: "Dub → FCO", price: "€34", airline: "Ryanair", duration: "3h 10m", image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&w=800&q=80&fit=crop", flag: "https://flagcdn.com/it.svg" },
  { city: "Dubai", route: "Dub → DXB", price: "€245", airline: "Emirates", duration: "7h 45m", image: "https://images.unsplash.com/photo-1623725206109-3ef2c2eec00e?auto=format&w=800&q=80&fit=crop", flag: "https://flagcdn.com/ae.svg" },
  { city: "Amsterdam", route: "Dub → AMS", price: "€28", airline: "Ryanair", duration: "1h 40m", image: "https://images.unsplash.com/photo-1580996378027-23040f16f157?auto=format&w=800&q=80&fit=crop", flag: "https://flagcdn.com/nl.svg" },
];

const whyCompareFeatures = [
  {
    icon: CreditCard,
    title: "No Hidden Booking Fees",
    description: "TravelMommy doesn't sell flights or charge booking fees. Compare prices for free and choose the deal that works best for you.",
  },
  {
    icon: UserCheck,
    title: "Book with Trusted Partners",
    description: "View the latest flight prices and availability so you can compare deals before booking with your preferred travel provider.",
  },
  {
    icon: RefreshCw,
    title: "Live Prices, Updated Daily",
    description: "View the latest flight prices and availability so you can compare deals before booking with your preferred travel provider.",
  },
];

const popularAirlines = [
  { name: "Emirates", logo: "/assets/airlines/emirates.svg" },
  { name: "American Airlines", logo: "/assets/airlines/american-airlines.svg" },
  { name: "RYANAIR", logo: "/assets/airlines/ryanair.svg" },
  { name: "QATAR AIRWAYS", logo: "/assets/airlines/qatar-airways.svg" },
  { name: "BRITISH AIRWAYS", logo: "/assets/airlines/british-airways.svg" },
  { name: "ETIHAD", logo: "/assets/airlines/etihad.svg" },
  { name: "KLM", logo: "/assets/airlines/klm.svg" },
  { name: "Lufthansa", logo: "/assets/airlines/lufthansa.svg" },
  { name: "TURKISH AIRLINES", logo: "/assets/airlines/turkish-airlines.svg" },
  { name: "easyJet", logo: "/assets/airlines/easyjet.svg" },
];

const popularAirports = [
  { name: "Dublin Airport", code: "DUB", location: "Dublin, Ireland" },
  { name: "Heathrow Airport", code: "LHR", location: "London, United Kingdom" },
  { name: "Dubai International", code: "DXB", location: "Dubai, United Arab Emirates" },
  { name: "John F. Kennedy", code: "JFK", location: "New York, United States" },
  { name: "Los Angeles Intl", code: "LAX", location: "Los Angeles, United States" },
  { name: "Amsterdam Schiphol", code: "AMS", location: "Amsterdam, Netherlands" },
];

const faqs = [
  {
    question: "How does TravelMommy compare flight prices?",
    answer: "TravelMommy displays prices provided by airlines and trusted travel partners. Because fares can change quickly, the final price is confirmed when you complete your booking on the provider's website.",
  },
  {
    question: "Does TravelMommy charge booking fees?",
    answer: "No. TravelMommy is a travel metasearch platform. We compare flight prices but do not sell tickets directly or charge booking fees. You always book with the airline or travel provider you choose.",
  },
  {
    question: "Can I compare flights from different airlines?",
    answer: "Yes. TravelMommy lets you compare flights from multiple airlines and travel providers, making it easier to find the best combination of price, travel time and convenience.",
  },
  {
    question: "When is the best time to book cheap flights?",
    answer: "Flight prices can change based on demand, season and availability. Comparing fares early and checking different travel dates can help you find cheaper flights.",
  },
  {
    question: "Are the flight prices shown on TravelMommy live?",
    answer: "TravelMommy displays prices provided by airlines and trusted travel partners. Because fares can change quickly, the final price is confirmed when you complete your booking on the provider's website.",
  },
  {
    question: "Can I book flights directly on TravelMommy?",
    answer: "No. TravelMommy helps you compare flight prices from multiple providers. When you choose a flight, you'll be redirected to the airline or booking partner to complete your booking securely.",
  },
  {
    question: "Which airlines can I compare on TravelMommy?",
    answer: "You can compare flights from a wide range of domestic and international airlines, as well as trusted online travel agencies, helping you find the best available deal for your journey.",
  },
  {
    question: "Why should I compare flights before booking?",
    answer: "Comparing flights helps you find the best available fare, discover alternative airlines or travel dates, and make informed booking decisions without searching multiple websites individually.",
  },
];

/* ----------------------------------------------------------------
   MAIN PAGE COMPONENT
---------------------------------------------------------------- */

export default function FlightPage() {
  return (
    <main className="bg-[#f9fbf5]">
      <Header />
      <Hero />
      <CheapFlightsFromDublinSection />
      <WhyCompareFlightsSection />
      <PopularAirlinesSection />
      <FaqSection />
      <NewsletterSection />
      <Footer />
    </main>
  );
}

/* ----------------------------------------------------------------
   HERO SECTIONS
---------------------------------------------------------------- */

function HeroDesktop() {
  return (
    <section className="relative hidden min-h-[820px] flex-col items-center overflow-hidden pt-[100px] lg:flex">
      <div className="absolute inset-0 z-0">
        <Image
          src="/Homepage/Section 1/Header Images/526214caf79a7211f2ad2806141f3fa8.jpg"
          alt="Hero background"
          fill
          className="object-cover"
          priority
        />
        {/* Exact 27% Black overlay from color spec */}
        <div className="absolute inset-0 bg-[#000000]/[0.27]" />
      </div>

      <div className="relative z-10 flex w-full max-w-[1280px] flex-col px-8 pb-[48px] pt-[28px]">
        
        {/* Headline - Exact specs applied */}
        <h1 className="w-full max-w-[1400px] font-sans text-[110px] font-[570] leading-[98px] tracking-[-5px] text-white">
          <span className="block">Compare Flights from</span>
          <span className="block">500+ Airlines &amp; Travel Sites</span>
        </h1>

        <div className="mt-[28px] flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <div className="flex max-w-[500px] flex-col items-start gap-[18px]">
            {/* Subheading / Description - Exact specs applied */}
            <p className="font-sans text-[16px] font-[380] leading-[24px] tracking-[0px] text-white">
              Compare live flight prices from airlines and trusted travel partners to find the best fare before you book.
            </p>
          </div>
        </div>

        <div className="mt-[64px] w-full">
          <SearchWidget />
        </div>
        
      </div>
    </section>
  );
}

function HeroMobile() {
  return (
    <section className="relative flex flex-col overflow-hidden pb-[32px] pt-[88px] lg:hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1517400508447-f8dd518b86db?auto=format&fit=crop&w=900&q=80"
          alt="Hero background"
          fill
          className="object-cover"
          priority
        />
        {/* Exact 27% Black overlay from color spec */}
        <div className="absolute inset-0 bg-[#000000]/[0.27]" />
      </div>

      <div className="relative z-10 flex flex-col px-[20px]">
        {/* Display L */}
        <h1 className="w-full max-w-full font-sans text-[48px] font-medium leading-none text-white">
          <span className="block">Compare Cheap</span>
          <span className="block">Flights from Hundreds</span>
          <span className="block">of Airlines</span>
        </h1>

        {/* Body M */}
        <p className="mt-[16px] max-w-[300px] font-sans text-[14px] font-normal leading-[1.43] text-white/90">
          Compare live flight prices from airlines and trusted travel partners to find the best fare before you book.
        </p>

        <div className="mt-[32px]">
          <SearchWidget />
        </div>
      </div>
    </section>
  );
}

function Hero() {
  return (
    <>
      <HeroMobile />
      <HeroDesktop />
    </>
  );
}

/* ----------------------------------------------------------------
   SEARCH WIDGET SECTIONS
---------------------------------------------------------------- */

function DesktopCheckbox({ checked, onChange, label }: any) {
  return (
    <label className="flex cursor-pointer items-center gap-[8px]">
      <span
        className={`flex size-[16px] shrink-0 items-center justify-center rounded-[5px] border transition-colors ${
          checked ? "border-[#fddb32] bg-[#fddb32]" : "border-[#e6e6e6] bg-[#f9fbf5]"
        }`}
      >
        {checked && <Check size={11} strokeWidth={3} className="text-black" />}
      </span>
      <input type="checkbox" checked={checked} onChange={onChange} className="hidden" />
      {/* Title S */}
      <span className="whitespace-nowrap font-sans text-[14px] font-medium leading-[1.43] text-black">
        {label}
      </span>
    </label>
  );
}

function SearchWidgetDesktop() {
  const [activeTab, setActiveTab] = useState("flights");
  const [nearbyDeparture, setNearbyDeparture] = useState(false);
  const [nearbyTo, setNearbyTo] = useState(true);
  const [directFlights, setDirectFlights] = useState(false);

  return (
    <div className="relative w-fit rounded-b-[28px] rounded-tr-[28px] bg-white/90 pb-[24px] pt-[24px] shadow-[0_20px_60px_rgba(0,0,0,0.12)] backdrop-blur-sm">
      <div className="absolute bottom-full left-0 flex h-[52px] items-end gap-[3px]">
        {/* Title S */}
        <button
          onClick={() => setActiveTab("flights")}
          aria-pressed={activeTab === "flights"}
          className={`flex h-full items-center gap-[6px] rounded-tl-[24px] rounded-tr-[14px] px-[20px] font-sans text-[14px] font-medium leading-[1.43] transition-colors ${
            activeTab === "flights"
              ? "bg-white/90 text-black"
              : "bg-white/25 text-black/60 backdrop-blur-md"
          }`}
        >
          <Plane size={18} />
          Flights
        </button>
        {/* Title S */}
        <button
          onClick={() => setActiveTab("hotels")}
          aria-pressed={activeTab === "hotels"}
          className={`flex h-full items-center gap-[6px] rounded-tl-[14px] rounded-tr-[24px] px-[20px] font-sans text-[14px] font-medium leading-[1.43] transition-colors ${
            activeTab === "hotels"
              ? "bg-white/90 text-black"
              : "bg-white/25 text-black/60 backdrop-blur-md"
          }`}
        >
          <Building2 size={18} />
          Hotels
        </button>
      </div>

      <div className="relative flex items-center gap-[11px] px-[24px]">
        {desktopFields.map((field) => (
          <div
            key={field.key}
            className={`flex h-[75px] shrink-0 items-center rounded-[20px] border border-[#e6e6e6] bg-[#f9fbf5] pl-[15px] ${field.width}`}
          >
            <div className="flex items-center gap-[12px]">
              <div className="flex size-[29.6px] shrink-0 items-center justify-center rounded-[7.4px] bg-[#ffed91]">
                <field.icon size={16} className="text-black" />
              </div>
              <div className="flex flex-col gap-[2px] font-sans">
                {/* Title S */}
                <span className="whitespace-nowrap text-[14px] font-medium leading-[1.43] text-[#7d7d7d]">{field.label}</span>
                <span className="whitespace-nowrap text-[14px] font-medium leading-[1.43] text-black">{field.value}</span>
              </div>
            </div>
          </div>
        ))}

        <button className="flex h-[49px] w-[52px] shrink-0 items-center justify-center rounded-[12px] bg-[#fddb32] transition-transform hover:scale-105">
          <Search size={22} className="text-black" />
        </button>

        <button
          aria-label="Swap origin and destination"
          className="absolute left-[188px] top-1/2 flex size-[30px] -translate-y-[46px] items-center justify-center rounded-full bg-white shadow-[0_2px_8px_rgba(0,0,0,0.15)]"
        >
          <ArrowLeftRight size={14} className="text-black" />
        </button>
      </div>

      <div className="mt-[16px] flex gap-[11px] px-[24px]">
        <div className="flex w-[197px] flex-col gap-[10px] pl-[15px]">
          <DesktopCheckbox checked={nearbyDeparture} onChange={() => setNearbyDeparture((v: any) => !v)} label="Add Nearby Airports" />
          <DesktopCheckbox checked={directFlights} onChange={() => setDirectFlights((v: any) => !v)} label="Direct Flights" />
        </div>
        <div className="flex w-[198px] flex-col gap-[10px] pl-[15px]">
          <DesktopCheckbox checked={nearbyTo} onChange={() => setNearbyTo((v: any) => !v)} label="Add Nearby Airports" />
        </div>
      </div>
    </div>
  );
}

function MobileFieldBox({ icon: Icon, label, value, className = "" }: any) {
  return (
    <div className={`flex h-[64px] w-full items-center gap-[12px] rounded-[18px] border border-[#e6e6e6] bg-[#f9fbf5] pl-[14px] pr-[14px] ${className}`}>
      <div className="flex size-[28px] shrink-0 items-center justify-center rounded-[8px] bg-[#ffed91]">
        <Icon size={14} className="text-black" />
      </div>
      <div className="flex min-w-0 flex-col font-sans">
        {/* Title XS */}
        <span className="truncate text-[12px] font-medium leading-[1.33] text-[#7d7d7d]">{label}</span>
        {/* Title S */}
        <span className="truncate text-[14px] font-medium leading-[1.43] text-black">{value}</span>
      </div>
    </div>
  );
}

function SearchWidgetMobile() {
  const [activeTab, setActiveTab] = useState("flights");

  return (
    <div className="w-full rounded-[28px] bg-white p-[16px] shadow-[0_20px_60px_rgba(0,0,0,0.18)]">
      <div className="mb-[16px] flex items-center gap-[8px]">
        {/* Title S */}
        <button
          onClick={() => setActiveTab("flights")}
          aria-pressed={activeTab === "flights"}
          className={`flex h-[36px] items-center gap-[6px] rounded-full px-[14px] font-sans text-[14px] font-medium leading-[1.43] transition-colors ${
            activeTab === "flights" ? "bg-[#fddb32] text-black" : "text-[#7d7d7d]"
          }`}
        >
          <Plane size={16} />
          Flights
        </button>
        <button
          onClick={() => setActiveTab("hotels")}
          aria-pressed={activeTab === "hotels"}
          className={`flex h-[36px] items-center gap-[6px] rounded-full px-[14px] font-sans text-[14px] font-medium leading-[1.43] transition-colors ${
            activeTab === "hotels" ? "bg-[#fddb32] text-black" : "text-[#7d7d7d]"
          }`}
        >
          <Building2 size={16} />
          Hotels
        </button>
      </div>

      <div className="flex flex-col gap-[12px]">
        {mobileFields.map((f) => (
          <MobileFieldBox key={f.key} icon={f.icon} label={f.label} value={f.value} />
        ))}
        <div className="grid grid-cols-2 gap-[12px]">
          {mobileSplitFields.map((f) => (
            <MobileFieldBox key={f.key} icon={f.icon} label={f.label} value={f.value} />
          ))}
        </div>
        <MobileFieldBox icon={mobileTravellersField.icon} label={mobileTravellersField.label} value={mobileTravellersField.value} />
      </div>

      {/* Title M */}
      <button className="relative mt-[16px] flex h-[56px] w-full items-center justify-center rounded-full bg-[#fddb32] font-sans text-[16px] font-medium leading-[1.5] text-black transition-transform active:scale-[0.98]">
        Search Flights
        <span className="absolute right-[6px] flex size-[36px] items-center justify-center rounded-full bg-white">
          <Search size={16} className="text-black" />
        </span>
      </button>
    </div>
  );
}

function SearchWidget() {
  return (
    <>
      <div className="lg:hidden">
        <SearchWidgetMobile />
      </div>
      <div className="hidden lg:block">
        <SearchWidgetDesktop />
      </div>
    </>
  );
}

/* ----------------------------------------------------------------
   CHEAP FLIGHTS FROM DUBLIN SECTION
---------------------------------------------------------------- */

function CheapFlightsFromDublinSection() {
  return (
    <section className="w-full bg-[#ffffff] py-[80px] text-[#000000]">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col px-[32px] max-[430px]:px-4">

        {/* ===================== DESKTOP VIEW ===================== */}
        <div className="mb-[48px] hidden items-start justify-between gap-8 lg:flex">
          <div className="flex max-w-[700px] flex-col gap-[10px]">
            {/* Display L */}
            <h2 className="font-sans text-[48px] font-medium leading-none text-[#000000]">
              Cheap Flights from <span className="text-[#FDDB32]">Dublin</span>
            </h2>
            {/* Body M */}
            <p className="font-sans text-[14px] font-normal leading-[1.43] text-[#555555]">
              Looking for cheap flights from Dublin? Compare today&apos;s lowest fares from Dublin Airport to
              popular destinations across Europe, North America and beyond. Prices update regularly so you
              can find the best available deals before you book.
            </p>
          </div>

          {/* Title S */}
          <Link href="/flights/routes" className="inline-flex h-[48px] shrink-0 items-center gap-2 rounded-full bg-[#FDDB32] px-[28px] font-sans text-[14px] font-medium leading-[1.43] text-[#000000] transition-colors hover:bg-[#e5c52c]">
            Browse All Flight Routes
            <ArrowUpRight size={16} strokeWidth={2.5} />
          </Link>
        </div>

        {/* Flight Cards Grid — DESKTOP ONLY */}
        <div className="hidden w-full grid-cols-1 gap-[24px] sm:grid-cols-2 lg:grid lg:grid-cols-4">
          {cheapFlights.map((flight, i) => (
            <div
              key={i}
              className="group flex flex-col overflow-hidden rounded-[24px] border border-neutral-200/60 bg-[#ffffff] shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Image & Flag Badge */}
              <div className="relative h-[200px] w-full shrink-0 overflow-hidden bg-neutral-100">
                <Image
                  src={flight.image}
                  alt={flight.city}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute left-[16px] top-[16px] flex h-[40px] w-[40px] items-center justify-center rounded-full bg-white p-[6px] shadow-md">
                  <img src={flight.flag} alt={`${flight.city} flag`} className="h-full w-full rounded-full object-cover" />
                </div>
              </div>

              {/* Card Content */}
              <div className="flex flex-1 flex-col p-[24px]">
                {/* Title L */}
                <h3 className="font-sans text-[24px] font-medium leading-none text-[#000000]">
                  {flight.city}
                </h3>
                {/* Body M */}
                <p className="mt-[4px] font-sans text-[14px] font-normal leading-[1.43] text-[#777777]">
                  {flight.route}
                </p>

                {/* Price & Airline Row */}
                <div className="mt-[16px] flex items-center justify-between">
                  {/* Title L */}
                  <p className="font-sans text-[24px] font-medium leading-none text-[#000000]">
                    {flight.price}
                  </p>
                  <div className="flex items-center gap-[6px] rounded-full border border-neutral-200 px-[10px] py-[5px]">
                    {/* Title XS */}
                    <span className="font-sans text-[12px] font-medium leading-[1.33] text-[#777777]">by</span>
                    <span className="font-sans text-[12px] font-medium leading-[1.33] text-[#00529C]">{flight.airline}</span>
                  </div>
                </div>

                {/* Duration Row — Body M */}
                <div className="mt-[14px] mb-[20px] flex items-center gap-[6px] font-sans text-[14px] font-normal leading-[1.43] text-[#777777]">
                  <Clock size={14} strokeWidth={2.5} />
                  <span>{flight.duration}</span>
                </div>

                {/* Card Button — Title S */}
                <div className="mt-auto">
                  <Link
                    href="/flights/search"
                    className={`flex h-[48px] w-full items-center justify-center gap-2 rounded-[16px] border font-sans text-[14px] font-medium leading-[1.43] transition-colors duration-200
                      ${flight.featured
                        ? 'border-[#FDDB32] bg-[#FDDB32] text-[#000000] hover:bg-[#f5cf1a]'
                        : 'border-neutral-200 bg-white text-[#000000] hover:border-[#FDDB32] hover:bg-[#FDDB32]'
                      }`
                    }
                  >
                    View Flights
                    <ArrowUpRight size={16} strokeWidth={2.5} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ===================== MOBILE VIEW ===================== */}
        <div className="flex w-full flex-col gap-[32px] py-[10px] px-[16px] lg:hidden">
          {/* Mobile Header */}
          <div className="flex flex-col gap-[8px]">
            {/* Display L */}
            <h2 className="font-sans text-[48px] font-medium leading-none text-[#000000]">
              Cheap Flights from
              <br />
              <span className="text-[#FDDB32]">Dublin</span>
            </h2>
            {/* Body M */}
            <p className="font-sans text-[14px] font-normal leading-[1.43] text-[#555555]">
              Compare today&apos;s lowest fares from Dublin Airport to popular destinations across Europe, North
              America, and beyond. Prices update regularly.
            </p>
          </div>

          {/* Mobile Flight Cards Grid */}
          <div className="grid w-full grid-cols-2 gap-x-[10px] gap-y-[16px]">
            {mobileFlights.map((flight, i) => (
              <div
                key={i}
                className="flex flex-col overflow-hidden rounded-[12px] border border-neutral-200/60 bg-[#ffffff] shadow-[0_2px_8px_rgba(0,0,0,0.04)]"
              >
                {/* Image & Flag Badge */}
                <div className="relative h-[110px] w-full shrink-0 overflow-hidden bg-neutral-100">
                  <Image
                    src={flight.image}
                    alt={flight.city}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute left-[8px] top-[8px] flex h-[28px] w-[28px] items-center justify-center rounded-full bg-white p-[4px] shadow-sm">
                    <img src={flight.flag} alt={`${flight.city} flag`} className="h-full w-full rounded-full object-cover" />
                  </div>
                </div>

                {/* Card Content */}
                <div className="flex flex-1 flex-col p-[12px]">
                  {/* Title S */}
                  <h3 className="font-sans text-[14px] font-medium leading-[1.43] text-[#000000]">
                    {flight.city}
                  </h3>
                  {/* Title XS */}
                  <p className="mt-[2px] font-sans text-[12px] font-medium leading-[1.33] text-[#777777]">
                    {flight.route}
                  </p>

                  <div className="mt-[10px] flex items-center justify-between gap-[4px]">
                    {/* Title M */}
                    <p className="font-sans text-[16px] font-medium leading-[1.5] text-[#000000]">
                      {flight.price}
                    </p>
                    <div className="flex items-center gap-[3px] rounded-full border border-neutral-200 px-[6px] py-[3px]">
                      {/* Title XS */}
                      <span className="font-sans text-[12px] font-medium leading-[1.33] text-[#777777]">by</span>
                      <span className="font-sans text-[12px] font-medium leading-[1.33] text-[#00529C]">{flight.airline}</span>
                    </div>
                  </div>

                  {/* Title XS */}
                  <div className="mt-[8px] mb-[10px] flex items-center gap-[4px] font-sans text-[12px] font-medium leading-[1.33] text-[#777777]">
                    <Clock size={11} strokeWidth={2.5} />
                    <span>Direct &bull; {flight.duration}</span>
                  </div>

                  <div className="mt-auto">
                    {/* Title XS */}
                    <Link href="/flights/search" className="flex h-[34px] w-full items-center justify-center gap-1 rounded-[8px] border border-neutral-200 bg-white font-sans text-[12px] font-medium leading-[1.33] text-[#000000] hover:bg-neutral-50 transition-colors">
                      View Flights
                      <ArrowUpRight size={12} strokeWidth={2.5} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile CTA Button — Title S */}
          <Link href="/flights/routes" className="flex h-[56px] w-full items-center justify-center gap-2 rounded-full bg-[#FDDB32] font-sans text-[14px] font-medium leading-[1.43] text-[#000000] hover:bg-[#e5c52c] transition-colors">
            Browse All Flight Routes
            <ArrowUpRight size={18} strokeWidth={2.5} />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------
   WHY COMPARE SECTION
---------------------------------------------------------------- */

function WhyCompareFlightsSection() {
  return (
    <section className="w-full bg-[#FFFFFF] pt-[80px] pb-[160px] lg:px-[80px]">
      {/* Section Frame: 80px top padding, 160px bottom padding, 80px side padding on desktop */}
      
      {/* Inner Container: max-width 1280px, 32px side padding */}
      <div className="mx-auto flex w-full max-w-[1280px] flex-col px-6 lg:px-[32px]">
        
        {/* Main layout: 48px gap between Heading Block and Cards Row */}
        <div className="flex w-full flex-col gap-[48px]">
          
          {/* Heading Block: vertical, center-aligned, 24px gap between Tag and Content */}
          <div className="flex flex-col items-center gap-[24px]">
            
            {/* Tag / Badge - Exact Typography and Colors applied */}
            <span className="flex h-[28px] items-center justify-center rounded-full border border-[#E6E6E6] bg-[#F9FBF5] px-[12px] py-[4px] font-sans text-[14px] font-[570] leading-[20px] tracking-[-0.28px] text-[#000000]">
              Easy process
            </span>
            
            {/* Content (Title + Subtext): 876px max-width, 15px gap */}
            <div className="flex w-full max-w-[876px] flex-col items-center gap-[15px] text-center">
              {/* Section Heading (H2) - Exact Typography applied */}
             <h2 className="w-full whitespace-nowrap font-sans text-[48px] font-[570] leading-[48px] tracking-[-1px] text-[#000000]">
  Why Compare Flights with TravelMommy?
</h2>
              {/* Section Subtext - Exact Typography applied */}
              <p className="w-full font-sans text-[16px] font-[380] leading-[24px] tracking-[0px] text-[#000000]">
                Search and compare cheap flights from multiple airlines and trusted booking partners to find the best fare for your trip.
              </p>
            </div>
          </div>

          {/* Cards Row: Horizontal grid, 15px gap */}
          <div className="grid w-full grid-cols-1 gap-[15px] lg:grid-cols-3">
            {whyCompareFeatures.map((feature) => (
              <div key={feature.title}>
                {/* Individual Card: 276px height, 15px outer padding, #F9FBF5 bg, #E6E6E6 border */}
                <div className="flex h-[276px] w-full flex-col items-center rounded-[20px] border border-[#E6E6E6] bg-[#F9FBF5] p-[15px]">
                  {/* Card Inner Container: 10px padding, 20px gap between icon and text content */}
                  <div className="flex h-full w-full flex-col items-center gap-[20px] p-[10px] text-center">
                    
                    {/* Icon Circle: ~61x61px, #FFED91 bg */}
                    <span className="flex h-[61px] w-[61px] shrink-0 items-center justify-center rounded-full bg-[#FFED91]">
                      <feature.icon className="h-[24px] w-[24px] text-[#000000]" />
                    </span>
                    
                    {/* Card Content (Title + Body): 10px gap */}
                    <div className="flex flex-col items-center gap-[10px]">
                      {/* Card Title - Exact Typography applied */}
                      <h3 className="w-full font-sans text-[24px] font-[570] leading-[24px] tracking-[0px] text-[#000000]">
                        {feature.title}
                      </h3>
                      {/* Card Body Text - Exact Typography applied */}
                      <p className="w-full font-sans text-[16px] font-[380] leading-[24px] tracking-[0px] text-[#000000]">
                        {feature.description}
                      </p>
                    </div>
                    
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------
   POPULAR AIRLINES SECTION
---------------------------------------------------------------- */

function PopularAirlinesSection() {
  return (
    <section className="w-full bg-[#000000] py-[80px] lg:px-[80px] lg:py-[160px]">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col px-6 lg:px-[32px]">
        <div className="flex flex-col gap-[48px]">
          
          <div className="flex flex-col gap-[15px]">
            <div className="flex flex-col items-start gap-6 lg:flex-row lg:items-start lg:justify-between lg:gap-[121px]">
            <h2 className="w-full whitespace-nowrap font-sans text-[48px] font-[570] leading-[48px] tracking-[-1px] text-[#FFFFFF] lg:max-w-[794px]">
  Compare Flights from Popular Airlines.
</h2>
              <Link
                href="/flights/airlines"
                className="flex shrink-0 items-center gap-2 rounded-full bg-[#FDDB32] px-[24px] py-[12px] font-sans text-[14px] font-[570] leading-[20px] tracking-[-0.28px] text-[#000000] transition-colors hover:bg-[#e5c52c]"
              >
                View All Airlines
                <ArrowUpRight className="h-[16px] w-[16px] text-[#000000]" />
              </Link>
            </div>
            <p className="w-full font-sans text-[16px] font-[380] leading-[24px] tracking-[0px] text-[#FFFFFF] lg:max-w-[800px]">
              Search and compare fares from leading airlines around the world. Discover competitive prices, flexible travel options and routes from trusted carriers.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-[6.39px] sm:grid-cols-3 lg:grid-cols-5">
            {popularAirlines.map((airline) => (
              <div
                key={airline.name}
                className="group flex h-[151.80px] w-full flex-col items-center justify-center rounded-[16px] border border-[#E6E6E6] bg-[#F9FBF5] p-[4.79px] shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-md lg:w-[238.09px]"
              >
                <div className="relative flex h-full w-full max-w-[140px] items-center justify-center">
                  <Image
                    src={airline.logo}
                    alt={`${airline.name} logo`}
                    fill
                    className="object-contain opacity-90 transition-opacity group-hover:opacity-100"
                  />
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------
   POPULAR AIRPORTS SECTION
---------------------------------------------------------------- */

/* ----------------------------------------------------------------
   FAQ SECTION
---------------------------------------------------------------- */

function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
     <section className="bg-white">
      <div className="mx-auto w-full max-w-[820px] px-6 py-20 lg:px-10 lg:py-24">
        {/* Display L */}
        <h2 className="text-center font-sans text-[36px] font-medium leading-none text-[#000000] lg:text-[48px]">
          Frequently Asked Questions
        </h2>

        <div className="mt-12 flex flex-col gap-8">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={faq.question}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-6 text-left"
                >
                  {/* Title M */}
                  <span className="font-sans text-[16px] font-semibold leading-[1.5] text-black">
                    {faq.question}
                  </span>
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center text-black">
                    {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </span>
                </button>
                {isOpen && (
                  <p className="mt-4 max-w-[680px] font-sans text-[14px] font-normal leading-[1.55] text-[#555555]">
                    {faq.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------
   NEWSLETTER SECTION
---------------------------------------------------------------- */

function NewsletterSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto w-full max-w-[1216px] px-6 pb-24 lg:px-10">
        <div className="flex flex-col items-center rounded-[32px] bg-[#FDDB32] px-6 py-16 text-center lg:py-20">
          {/* Title S */}
          <span className="w-fit rounded-full bg-white px-[16px] py-[8px] font-sans text-[14px] font-medium leading-[1.43] text-black">
            Let's go on a trip!
          </span>
          
          {/* Display L */}
          <h2 className="mt-[20px] max-w-2xl font-sans text-[36px] font-medium leading-none text-black lg:text-[48px]">
            Never Miss a Great Travel Deal
          </h2>
          
          {/* Body L */}
          <p className="mt-[16px] max-w-xl font-sans text-[16px] font-normal leading-[1.5] text-black/70">
            Get cheap flight alerts, hotel deals and travel inspiration delivered to your inbox.
          </p>

          <form className="mt-[32px] flex w-full max-w-md flex-col gap-3 sm:flex-row">
            <div className="flex flex-1 items-center gap-2 rounded-full bg-white px-[20px] py-[14px]">
              {/* Body M */}
              <input
                type="email"
                placeholder="Your Email Address"
                className="w-full bg-transparent font-sans text-[14px] font-normal leading-[1.43] text-black placeholder:text-black/40 focus:outline-none"
              />
              <Mail className="h-[16px] w-[16px] shrink-0 text-black/30" />
            </div>
            
            {/* Title S */}
            <button
              type="submit"
              className="flex shrink-0 items-center justify-center gap-2 rounded-full bg-black px-[24px] py-[14px] font-sans text-[14px] font-medium leading-[1.43] text-white transition-colors hover:bg-black/80"
            >
              Get Deals
              <ArrowUpRight className="h-[16px] w-[16px]" />
            </button>
          </form>
          
          {/* Body S / Custom */}
          <p className="mt-[12px] font-sans text-[12px] font-normal leading-[1.33] text-black/50">
            No Spam, Unsubscribe Anytime
          </p>
        </div>
      </div>
    </section>
  );
}