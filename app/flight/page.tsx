'use client';

import { useState, type ElementType } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Plane,
  Building2,
  ArrowLeftRight,
  Calendar,
  Users,
  Search,
  Clock,
  ArrowUpRight,
  CreditCard,
  UserCheck,
  RefreshCw,
  MapPin,
  Minus,
  Plus,
  Mail,
  Star,
  Check,
} from "lucide-react";

import Header from "../components/Home/header";
import Footer from "../components/Home/footer";

// ============================================================================
// STATIC DATA
// ============================================================================

const cheapFlights = [
  { flag: "🇬🇧", city: "London", route: "Dub → LHR", price: "€24", airline: "Ryanair", duration: "Direct • 1h 20m", image: "/assets/destinations/london-1.jpg", featured: true },
  { flag: "🇬🇧", city: "London", route: "Dub → LHR", price: "€24", airline: "Ryanair", duration: "Direct • 1h 20m", image: "/assets/destinations/london-2.jpg" },
  { flag: "🇪🇸", city: "Barcelona", route: "Dub → BCN", price: "€24", airline: "Ryanair", duration: "Direct • 1h 20m", image: "/assets/destinations/barcelona.jpg" },
  { flag: "🇵🇹", city: "Lisbon", route: "Dub → LIS", price: "€24", airline: "Ryanair", duration: "Direct • 1h 20m", image: "/assets/destinations/lisbon.jpg" },
  { flag: "🇺🇸", city: "New York", route: "Dub → JFK", price: "€24", airline: "Ryanair", duration: "Direct • 1h 20m", image: "/assets/destinations/new-york.jpg" },
  { flag: "🇮🇹", city: "Rome", route: "Dub → FCO", price: "€24", airline: "Ryanair", duration: "Direct • 1h 20m", image: "/assets/destinations/rome.jpg" },
  { flag: "🇦🇪", city: "Dubai", route: "Dub → DXB", price: "€24", airline: "Ryanair", duration: "Direct • 1h 20m", image: "/assets/destinations/dubai.jpg" },
  { flag: "🇳🇱", city: "Amsterdam", route: "Dub → AMS", price: "€24", airline: "Ryanair", duration: "Direct • 1h 20m", image: "/assets/destinations/amsterdam.jpg" },
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
  "Emirates", "American Airlines", "Ryanair", "Qatar Airways", "British Airways",
  "Etihad", "KLM", "Lufthansa", "Turkish Airlines", "easyJet",
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

// ============================================================================
// PAGE
// ============================================================================

export default function FlightsPage() {
  return (
    <main className="bg-[#f9fbf5]">
      {/* Global Header */}
      <Header />
      
      {/* Hero Sections (Mobile + Desktop handled internally) */}
      <HeroMobile />
      <HeroDesktop />

      {/* Content Sections */}
      <CheapFlightsFromDublinSection />
      <WhyCompareFlightsSection />
      <PopularAirlinesSection />
      <PopularAirportsSection />
      <FaqSection />
      <NewsletterSection />
      
      {/* Global Footer */}
      <Footer />
    </main>
  );
}

// ============================================================================
// HERO DESKTOP
// ============================================================================

function HeroDesktop() {
  return (
    <section className="relative hidden min-h-[820px] flex-col items-center overflow-hidden pt-[100px] lg:flex">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1800&q=80"
          alt="Hero background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex w-full max-w-[1280px] flex-col px-8 pb-[48px] pt-[28px]">
        {/* Main Heading - Display XXL/XL */}
        <h1 className="font-sans text-[72px] font-medium leading-none text-black xl:text-[110px] xl:leading-[0.89]">
          <span className="block">Compare Flights &amp;</span>
          <span className="block">Travel Deals</span>
        </h1>

        {/* Two-Column Layout */}
        <div className="mt-[28px] flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          {/* Left Column */}
          <div className="flex max-w-[330px] flex-col items-start gap-[18px]">
            {/* Body M: 14px, Regular, 143% */}
            <p className="font-sans text-[14px] font-normal leading-[1.43] text-black">
              Compare flight prices from airlines and trusted travel providers. Search hundreds of booking sites in seconds and find the best option for your next trip.
            </p>
            {/* Title S: 14px, Medium, 143% */}
            <button className="group flex h-[42px] items-center gap-[10px] rounded-[14px] border border-[#e6e6e6] bg-white px-[18px] font-sans text-[14px] font-medium leading-[1.43] text-black transition-all hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(0,0,0,0.10)]">
              Compare Flights
              <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          {/* Right Column */}
          <div className="flex flex-col items-start gap-[18px] lg:items-end">
            <div className="flex items-end gap-[14px]">
              <div className="flex shrink-0 items-center">
                {[11, 12, 13, 14].map((imgId, index) => (
                  <div
                    key={imgId}
                    className={`flex size-[36px] items-center justify-center rounded-full bg-white p-[2px] ${index > 0 ? '-ml-4' : ''}`}
                    style={{ zIndex: 40 - index * 10 }}
                  >
                    <img
                      src={`https://i.pravatar.cc/100?img=${imgId}`}
                      alt={`Reviewer ${index + 1}`}
                      className="size-[32px] shrink-0 rounded-full object-cover"
                    />
                  </div>
                ))}
              </div>

              <div className="flex flex-col justify-center text-left">
                <div className="flex items-center gap-[8px]">
                  <div className="flex gap-px text-[#fddb32]">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={11} fill="currentColor" stroke="none" />
                    ))}
                  </div>
                  <div className="flex items-baseline gap-[4px]">
                    {/* Title M: 16px, Medium, 150% */}
                    <span className="font-sans text-[16px] font-medium leading-[1.5] text-black">4.9</span>
                    {/* Body M: 14px, Regular, 143% */}
                    <span className="font-sans text-[14px] font-normal leading-[1.43] text-black">/ 5</span>
                  </div>
                </div>
                {/* Body M: 14px, Regular, 143% */}
                <p className="mt-[2px] w-[215px] font-sans text-[14px] font-normal leading-[1.43] text-black">
                  Compare live prices from trusted airlines and travel websites.
                </p>
              </div>
            </div>

            {/* "from 500+ Airlines & Sites" Heading - Display XXL/XL */}
            <h2 className="font-sans text-[72px] font-medium leading-none text-black lg:text-right xl:text-[110px] xl:leading-[0.89]">
              <span className="block">from 500+</span>
              <span className="block">Airlines &amp; Sites</span>
            </h2>
          </div>
        </div>

        {/* Search Widget */}
        <div className="mt-[64px] w-full">
          <SearchWidget />
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// HERO MOBILE
// ============================================================================

function HeroMobile() {
  return (
    <section className="relative flex flex-col overflow-hidden pb-[32px] pt-[88px] lg:hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=900&q=80"
          alt="Hero background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col px-[20px]">
        {/* Heading - Display L: 48px, Medium, 100% */}
        <h1 className="w-[352px] max-w-full font-sans text-[48px] font-medium leading-none text-white">
          <span className="block">Compare Cheap</span>
          <span className="block">Flights from 500+</span>
          <span className="block">Airlines &amp; Sites</span>
        </h1>

        {/* Paragraph - Body M: 14px, Regular, 143% */}
        <p className="mt-[16px] max-w-[300px] font-sans text-[14px] font-normal leading-[1.43] text-white/90">
          Unrivaled expertise for unique travel experiences. We're here to take you to your dream travels!
        </p>

        {/* Button - Title S: 14px, Medium, 143% */}
        <button className="group mt-[20px] flex h-[44px] w-fit items-center gap-[8px] rounded-full bg-white px-[18px] font-sans text-[14px] font-medium leading-[1.43] text-black shadow-sm transition-transform active:scale-[0.98]">
          Discover now
          <ArrowUpRight size={14} className="transition-transform group-active:translate-x-0.5 group-active:-translate-y-0.5" />
        </button>

        {/* Search Widget */}
        <div className="mt-[32px]">
          <SearchWidget />
        </div>

        {/* Trust row */}
        <div className="mt-[16px] flex items-center justify-center gap-[12px]">
          <div className="flex shrink-0 items-center">
            {[11, 12, 13, 14].map((imgId, index) => (
              <div
                key={imgId}
                className={`flex size-[28px] items-center justify-center rounded-full bg-white p-[2px] ${index > 0 ? "-ml-3" : ""}`}
                style={{ zIndex: 40 - index * 10 }}
              >
                <img
                  src={`https://i.pravatar.cc/100?img=${imgId}`}
                  alt={`Reviewer ${index + 1}`}
                  className="size-[24px] shrink-0 rounded-full object-cover"
                />
              </div>
            ))}
          </div>

          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-[6px]">
              <div className="flex gap-px text-[#fddb32]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={10} fill="currentColor" stroke="none" />
                ))}
              </div>
              {/* Title S: 14px, Medium, 143% */}
              <span className="font-sans text-[14px] font-medium leading-[1.43] text-white">
                4.9 <span className="font-normal text-white/80">/ 5</span>
              </span>
            </div>
            {/* Title XS: 12px, Medium, 133% */}
            <p className="mt-[2px] font-sans text-[12px] font-medium leading-[1.33] text-white/90">
              Trusted by 300+ travelers
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// SEARCH WIDGET DESKTOP
// ============================================================================

const desktopFields = [
  { key: "from", icon: Plane, label: "Departure", value: "Dublin (DUB)", width: "w-[197px]" },
  { key: "to", icon: Plane, label: "To", value: "Country, City or air...", width: "w-[198px]" },
  { key: "depart", icon: Calendar, label: "Depart", value: "08 Nov 2025", width: "w-[193px]" },
  { key: "return", icon: Calendar, label: "Return", value: "08 Jan 2026", width: "w-[193px]" },
  { key: "travellers", icon: Users, label: "Travellers and Cabin Class", value: "01 Adult 01 Child", width: "w-[273px]" },
];

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
      {/* Title S: 14px, Medium, 143% */}
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
        {/* Title S: 14px, Medium, 143% */}
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
                {/* Title S: 14px, Medium, 143% */}
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

// ============================================================================
// SEARCH WIDGET MOBILE
// ============================================================================

const mobileFields = [
  { key: "from", icon: Plane, label: "Departure", value: "Dublin (DUB)" },
  { key: "to", icon: Plane, label: "To", value: "Country, City or Airport" },
];

const mobileSplitFields = [
  { key: "depart", icon: Calendar, label: "Depart", value: "08 Nov" },
  { key: "return", icon: Calendar, label: "Return", value: "08 Jan" },
];

const mobileTravellersField = { key: "travellers", icon: Users, label: "Travellers", value: "01 Adult, 01 Child" };

function MobileFieldBox({ icon: Icon, label, value, className = "" }: any) {
  return (
    <div className={`flex h-[64px] w-full items-center gap-[12px] rounded-[18px] border border-[#e6e6e6] bg-[#f9fbf5] pl-[14px] pr-[14px] ${className}`}>
      <div className="flex size-[28px] shrink-0 items-center justify-center rounded-[8px] bg-[#ffed91]">
        <Icon size={14} className="text-black" />
      </div>
      <div className="flex min-w-0 flex-col font-sans">
        {/* Title XS: 12px, Medium, 133% */}
        <span className="truncate text-[12px] font-medium leading-[1.33] text-[#7d7d7d]">{label}</span>
        {/* Title S: 14px, Medium, 143% */}
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
        {/* Title S: 14px, Medium, 143% */}
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

      {/* Title M: 16px, Medium, 150% */}
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

// ============================================================================
// CHEAP FLIGHTS SECTION
// ============================================================================

function CheapFlightsFromDublinSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto w-full max-w-[1280px] px-6 pb-24 pt-32 lg:px-10 lg:pt-40">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
          <div>
            {/* Display L: 48px, Medium, 100% */}
            <h2 className="font-sans text-[36px] font-medium leading-none text-black lg:text-[48px]">
              Cheap Flights from <span className="text-[#FDDB32]">Dublin</span>
            </h2>
            {/* Body L: 16px, Regular, 150% */}
            <p className="mt-4 max-w-2xl font-sans text-[16px] font-normal leading-[1.5] text-black/50">
              Looking for cheap flights from Dublin? Compare today&apos;s lowest
              fares from Dublin Airport to popular destinations across
              Europe, North America and beyond. Prices update regularly so
              you can find the best available deals before you book.
            </p>
          </div>

          {/* Title S: 14px, Medium, 143% */}
          <Link
            href="/flights/routes"
            className="flex shrink-0 items-center gap-2 rounded-full bg-[#FDDB32] px-5 py-3 font-sans text-[14px] font-medium leading-[1.43] text-black transition-colors hover:bg-[#f5cf1a]"
          >
            Browse All Flight Routes
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cheapFlights.map((flight, i) => (
            <div key={i} className="flex flex-col overflow-hidden rounded-[24px] border border-black/10">
              <div className="relative h-[192px] w-full">
                <Image src={flight.image} alt={flight.city} fill className="object-cover" />
                <span className="absolute left-[16px] top-[16px] flex h-[24px] w-[34px] items-center justify-center rounded-[4px] bg-white text-[12px] shadow-sm">
                  {flight.flag}
                </span>
              </div>

              <div className="flex flex-1 flex-col gap-3 p-[20px]">
                <div>
                  {/* Title M: 16px, Medium, 150% */}
                  <h3 className="font-sans text-[16px] font-medium leading-[1.5] text-black">{flight.city}</h3>
                  {/* Title XS: 12px, Medium, 133% */}
                  <p className="mt-1 font-sans text-[12px] font-medium leading-[1.33] text-black/40 uppercase tracking-wider">{flight.route}</p>
                </div>

                <div className="flex items-center justify-between mt-auto">
                  {/* Title L: 24px, Medium, 100% */}
                  <span className="font-sans text-[24px] font-medium leading-none text-black">{flight.price}</span>
                  {/* Title XS: 12px, Medium, 133% */}
                  <span className="font-sans text-[12px] font-medium leading-[1.33] text-[#00529C]">
                    by {flight.airline}
                  </span>
                </div>

                {/* Body M: 14px, Regular, 143% */}
                <div className="flex items-center gap-[6px] font-sans text-[14px] font-normal leading-[1.43] text-[#777777] my-[10px]">
                  <Clock className="h-[14px] w-[14px]" />
                  {flight.duration}
                </div>

                {/* Title S: 14px, Medium, 143% */}
                <Link
                  href="/flights/search"
                  className={`mt-1 flex h-[44px] items-center justify-center gap-2 rounded-[14px] px-4 font-sans text-[14px] font-medium leading-[1.43] transition-colors ${
                    flight.featured
                      ? "bg-[#FDDB32] text-black hover:bg-[#f5cf1a]"
                      : "border border-black/10 text-black hover:bg-[#FDDB32] hover:border-[#FDDB32]"
                  }`}
                >
                  View Flights
                  <ArrowUpRight className="h-[16px] w-[16px]" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// WHY COMPARE SECTION
// ============================================================================

function WhyCompareFlightsSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto w-full max-w-[1280px] px-6 pb-24 lg:px-10">
        <div className="mx-auto max-w-[800px] text-center">
          {/* Title S: 14px, Medium, 143% */}
          <span className="mx-auto w-fit rounded-full border border-black/10 bg-[#F9FBF5] px-4 py-2 font-sans text-[14px] font-medium leading-[1.43] text-black">
            Easy process
          </span>
          {/* Display L: 48px, Medium, 100% */}
          <h2 className="mt-[20px] font-sans text-[36px] font-medium leading-none text-black lg:text-[48px]">
            Why Compare Flights with TravelMommy?
          </h2>
          {/* Body L: 16px, Regular, 150% */}
          <p className="mt-[16px] font-sans text-[16px] font-normal leading-[1.5] text-[#555555]">
            Search and compare cheap flights from multiple airlines and
            trusted booking partners to find the best fare for your trip.
          </p>
        </div>

        <div className="mt-[48px] grid grid-cols-1 gap-[32px] lg:grid-cols-3">
          {whyCompareFeatures.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col items-center rounded-[24px] border border-neutral-100 bg-[#F9FBF5] p-[32px] text-center"
            >
              <span className="flex h-[48px] w-[48px] items-center justify-center rounded-full bg-[#FDDB32]">
                <feature.icon className="h-[24px] w-[24px] text-black" />
              </span>
              {/* Title L: 24px, Medium, 100% */}
              <h3 className="mt-[20px] font-sans text-[24px] font-medium leading-none text-black">{feature.title}</h3>
              {/* Body M: 14px, Regular, 143% */}
              <p className="mt-[12px] font-sans text-[14px] font-normal leading-[1.43] text-[#555555]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// POPULAR AIRLINES SECTION
// ============================================================================

function PopularAirlinesSection() {
  return (
    <section className="bg-[#F5F5F5]">
      <div className="mx-auto w-full max-w-[1280px] px-6 py-[80px] lg:px-10">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
          <div>
            {/* Display L: 48px, Medium, 100% */}
            <h2 className="font-sans text-[32px] font-medium leading-none text-[#000000] lg:text-[48px]">
              Compare Flights from Popular Airlines.
            </h2>
            {/* Body L: 16px, Regular, 150% */}
            <p className="mt-[16px] max-w-2xl font-sans text-[16px] font-normal leading-[1.5] text-[#555555]">
              Search and compare fares from leading airlines around the
              world. Discover competitive prices, flexible travel options
              and routes from trusted carriers.
            </p>
          </div>

          {/* Title S: 14px, Medium, 143% */}
          <Link
            href="/flights/airlines"
            className="flex shrink-0 items-center gap-2 rounded-full bg-[#FDDB32] px-[24px] py-[12px] font-sans text-[14px] font-medium leading-[1.43] text-black transition-colors hover:bg-[#e5c52c]"
          >
            View All Airlines
            <ArrowUpRight className="h-[16px] w-[16px]" />
          </Link>
        </div>

        <div className="mt-[48px] grid grid-cols-2 gap-[16px] sm:grid-cols-3 lg:grid-cols-5">
          {popularAirlines.map((airline) => (
            <div
              key={airline}
              className="flex h-[80px] items-center justify-center rounded-[16px] bg-[#ffffff] px-4 transition-transform hover:-translate-y-1 hover:shadow-sm"
            >
              {/* Title M: 16px, Medium, 150% */}
              <span className="text-center font-sans text-[16px] font-medium leading-[1.5] text-[#000000]">
                {airline}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// POPULAR AIRPORTS SECTION
// ============================================================================

function PopularAirportsSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto w-full max-w-[1280px] px-6 py-[80px] lg:px-10">
        <div className="mx-auto max-w-[800px] text-center">
          {/* Display L: 48px, Medium, 100% */}
          <h2 className="font-sans text-[32px] font-medium leading-none text-[#000000] lg:text-[48px]">
            Popular Airports
          </h2>
          {/* Body L: 16px, Regular, 150% */}
          <p className="mt-[16px] font-sans text-[16px] font-normal leading-[1.5] text-[#555555]">
            Search and compare flights from major airports around the
            world. Discover convenient departure points, route options and
            travel times before you book.
          </p>
        </div>

        <div className="mt-[48px] grid grid-cols-1 gap-[24px] sm:grid-cols-2 lg:grid-cols-3">
          {popularAirports.map((airport) => (
            <div
              key={airport.code}
              className="group flex cursor-pointer items-center justify-between gap-[16px] rounded-[20px] border border-neutral-200 bg-[#ffffff] p-[24px] transition-all hover:border-[#FDDB32] hover:shadow-md"
            >
              <div className="flex items-center gap-[16px]">
                <span className="flex h-[48px] w-[48px] shrink-0 items-center justify-center rounded-full bg-[#F5F5F5] transition-colors group-hover:bg-[#FDDB32]">
                  <Plane className="h-[20px] w-[20px] text-[#000000]" />
                </span>
                <div className="flex flex-col">
                  {/* Title L: 24px, Medium, 100% */}
                  <p className="font-sans text-[20px] font-medium leading-none text-[#000000] lg:text-[24px]">{airport.name}</p>
                  {/* Title XS: 12px, Medium, 133% */}
                  <p className="mt-[6px] font-sans text-[12px] font-medium leading-[1.33] uppercase text-[#777777] tracking-wider">{airport.code}</p>
                </div>
              </div>
              <ArrowUpRight className="h-[20px] w-[20px] text-[#777777] transition-colors group-hover:text-[#000000]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// FAQ SECTION
// ============================================================================

function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-[#F9FBF5]">
      <div className="mx-auto w-full max-w-[800px] px-6 py-[80px] lg:px-10">
        {/* Display L: 48px, Medium, 100% */}
        <h2 className="text-center font-sans text-[32px] font-medium leading-none text-[#000000] lg:text-[48px]">
          Frequently Asked Questions
        </h2>

        <div className="mt-[48px] flex flex-col gap-[16px]">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div 
                key={faq.question} 
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="cursor-pointer rounded-[20px] border border-neutral-100 bg-[#ffffff] p-[24px] shadow-sm transition-all hover:border-[#FDDB32]"
              >
                <div className="flex items-center justify-between gap-[16px]">
                  {/* Title M: 16px, Medium, 150% */}
                  <span className="font-sans text-[16px] font-medium leading-[1.5] text-[#000000]">{faq.question}</span>
                  <span className="flex h-[20px] w-[20px] shrink-0 items-center justify-center text-[#000000]">
                    {isOpen ? <Minus className="h-[20px] w-[20px]" /> : <Plus className="h-[20px] w-[20px]" />}
                  </span>
                </div>
                {isOpen && (
                  <div className="mt-[16px] border-t border-neutral-100 pt-[16px]">
                    {/* Body M: 14px, Regular, 143% */}
                    <p className="font-sans text-[14px] font-normal leading-[1.43] text-[#555555]">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// NEWSLETTER SECTION
// ============================================================================

function NewsletterSection() {
  return (
    <section className="bg-[#000000] py-[80px] text-[#ffffff]">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center px-6 text-center lg:px-10">
        <div className="mb-[24px] flex h-[64px] w-[64px] items-center justify-center rounded-full bg-[#FDDB32]">
          <Mail className="h-[32px] w-[32px] text-[#000000]" />
        </div>
        {/* Display L: 48px, Medium, 100% */}
        <h2 className="mb-[16px] font-sans text-[32px] font-medium leading-none text-[#ffffff] lg:text-[48px]">
          Never Miss a Great Travel Deal
        </h2>
        {/* Body L: 16px, Regular, 150% */}
        <p className="mb-[40px] max-w-[600px] font-sans text-[16px] font-normal leading-[1.5] text-white/70">
          Compare flights and hotels from trusted travel providers in one place. Sign up for our newsletter to receive the latest deals straight to your inbox.
        </p>

        <form className="flex w-full max-w-[500px] flex-col gap-[12px] sm:flex-row">
          <input
            type="email"
            placeholder="Enter your email address"
            // Title S: 14px, Medium, 143%
            className="h-[56px] flex-1 rounded-[16px] border border-white/20 bg-white/10 px-[24px] font-sans text-[14px] font-medium leading-[1.43] text-white placeholder-white/50 outline-none focus:border-[#FDDB32]"
          />
          {/* Title S: 14px, Medium, 143% */}
          <button
            type="submit"
            className="flex h-[56px] shrink-0 items-center justify-center gap-2 rounded-[16px] bg-[#FDDB32] px-[32px] font-sans text-[14px] font-medium leading-[1.43] text-[#000000] transition-colors hover:bg-[#e5c52c]"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}