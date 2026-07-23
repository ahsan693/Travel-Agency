'use client';

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Check,
  Star,
  ArrowUpRight,
  MapPin,
  Minus,
  Plus,
  Mail,
  Search, // Keeping this for "Why Compare" section if it's used there
} from "lucide-react";

// ============================================================================
// IMPORTANT: Adjust these import paths to match your project's folder structure
// ============================================================================
import Header from "../components/Home/header";
import Footer from "../components/Home/footer";

const HOTELS_ICON_PATH = "/Hotels Page/Section 1/Icon";

/* ----------------------------------------------------------------
   STATIC DATA
---------------------------------------------------------------- */

// Updated to match the exact stars shown in the images
const hotelFilters = [
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

const popularHotels = [
  {
    name: "The Ritz-Carlton",
    location: "Paris, France",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&w=800&q=80",
    price: "€129",
    rating: 5,
    tags: ["Free cancellation", "Breakfast included"],
  },
  {
    name: "Hilton Barcelona",
    location: "Barcelona, Spain",
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&w=800&q=80",
    price: "€142",
    rating: 4,
    tags: ["Free WiFi", "Pool included"],
  },
  {
    name: "Marriott Dubai",
    location: "Dubai, UAE",
    image: "https://images.unsplash.com/photo-1551882547-ff40c0d13c05?auto=format&w=800&q=80",
    price: "€98",
    rating: 5,
    tags: ["Excellent (4.8)", "Spa access"],
  },
];

const hotelDestinations = [
  { city: "Paris", image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&w=800&q=80" },
  { city: "London", image: "https://images.unsplash.com/photo-1513635269975-5969336cdac0?auto=format&w=800&q=80" },
  { city: "Dubai", image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&w=800&q=80" },
  { city: "Rome", image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&w=800&q=80" },
];

const whyCompareFeatures = [
  {
    icon: Search,
    title: "Compare Prices",
    description: "Compare hotel prices from multiple booking sites all in one place.",
  },
  {
    icon: Check,
    title: "Book Direct",
    description: "Complete your booking securely directly with the hotel or booking provider.",
  },
  {
    icon: Star,
    title: "No Hidden Fees",
    description: "TravelMommy never adds extra booking fees to your final price.",
  },
];

const hotelBrands = [
  { name: "Hilton", logo: "https://upload.wikimedia.org/wikipedia/commons/2/25/Hilton_Hotels_and_Resorts_logo.svg" },
  { name: "Marriott", logo: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Marriott_Logo.svg" },
  { name: "Hyatt", logo: "https://upload.wikimedia.org/wikipedia/commons/7/77/Hyatt_Logo.svg" },
  { name: "Radisson", logo: "https://upload.wikimedia.org/wikipedia/en/2/23/Radisson_Hotels_logo.svg" },
  { name: "Holiday Inn", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a2/Holiday_Inn_Logo_2016.svg" },
  { name: "Novotel", logo: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Novotel_logo.svg" },
  { name: "Sheraton", logo: "https://upload.wikimedia.org/wikipedia/commons/2/24/Sheraton_Hotels_and_Resorts_logo.svg" },
  { name: "Accor", logo: "https://upload.wikimedia.org/wikipedia/commons/7/77/Accor_Logo.svg" },
];

const popularSearches = [
  { city: "Paris", desc: "Top-rated hotels in central Paris starting from $120/night", price: "$120", rating: 4.8, image: "https://images.unsplash.com/photo-1502602898657-3e9076006085?auto=format&w=800&q=80" },
  { city: "London", desc: "Luxury and budget options near London Bridge", price: "$110", rating: 4.7, image: "https://images.unsplash.com/photo-1520939817895-060bdaf4ed1a?auto=format&w=800&q=80" },
  { city: "Dubai", desc: "Premium resorts and city hotels in Dubai", price: "$145", rating: 4.9, image: "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&w=800&q=80" },
  { city: "Barcelona", desc: "Boutique hotels near the beach in Barcelona", price: "$90", rating: 4.6, image: "https://images.unsplash.com/photo-1583422409516-2895a77ef244?auto=format&w=800&q=80" },
];

const faqs = [
  {
    question: "How does TravelMommy compare hotel prices?",
    answer: "TravelMommy aggregates prices from hundreds of hotel booking platforms and direct hotel websites, allowing you to compare the best available rates in one unified search.",
  },
  {
    question: "Does TravelMommy charge booking fees?",
    answer: "No. We are a free comparison platform. The price you see is the price provided by our partners, with no hidden fees added by us.",
  },
  {
    question: "Can I compare hotels from specific booking websites?",
    answer: "Yes, you can easily filter results to see offers from your preferred booking websites or view prices directly from the hotel.",
  },
  {
    question: "Are hotel prices updated in real-time?",
    answer: "We strive to provide live pricing. However, prices are ultimately confirmed when you click through to our partner's website to complete your booking.",
  },
  {
    question: "Can I book hotels directly on TravelMommy?",
    answer: "TravelMommy is a comparison engine. When you find a deal you like, we redirect you to the trusted provider's website to securely complete your reservation.",
  },
];

/* ----------------------------------------------------------------
   MAIN PAGE COMPONENT
---------------------------------------------------------------- */

export default function HotelsPage() {
  return (
    <main className="bg-[#f9fbf5]">
      <Header />
      <Hero />
      <PopularHotelsSection />
      <PopularHotelDestinationsSection />
      <WhyCompareHotelsSection />
      <HotelBrandsSection />
      <PopularSearchesSection />
      <FaqSection />
      <NewsletterSection />
      <Footer />
    </main>
  );
}

/* ----------------------------------------------------------------
   HERO & WIDGET SECTIONS
---------------------------------------------------------------- */

function SearchWidgetDesktop() {
  return (
    <div className="relative w-fit rounded-b-[28px] rounded-tr-[28px] bg-white/90 pb-[24px] pt-[24px] shadow-[0_20px_60px_rgba(0,0,0,0.12)] backdrop-blur-sm">
      <div className="absolute bottom-full left-0 flex h-[52px] items-end gap-[3px]">
        {/* Title S */}
        <button
          className="flex h-full items-center gap-[6px] rounded-tl-[24px] rounded-tr-[14px] bg-white/90 px-[20px] font-sans text-[14px] font-medium leading-[1.43] text-black transition-colors"
        >
          <Image src={`${HOTELS_ICON_PATH}/home - 04.png`} alt="Hotels" width={18} height={18} className="object-contain" />
          Hotels
        </button>
      </div>

      <div className="relative flex items-center gap-[11px] px-[24px]">
        {/* Where are you going? */}
        <div className="flex h-[75px] w-[270px] shrink-0 items-center rounded-[20px] border border-[#e6e6e6] bg-[#f9fbf5] pl-[15px]">
          <div className="flex items-center gap-[12px]">
            <div className="flex size-[29.6px] shrink-0 items-center justify-center rounded-[7.4px] bg-[#ffed91]">
              <Image src={`${HOTELS_ICON_PATH}/location square - 02.png`} alt="Location" width={16} height={16} className="object-contain" />
            </div>
            <div className="flex flex-col gap-[2px] font-sans">
              {/* Title S */}
              <span className="whitespace-nowrap text-[14px] font-medium leading-[1.43] text-[#7d7d7d]">Where are you going?</span>
              {/* Title S */}
              <span className="whitespace-nowrap text-[14px] font-medium leading-[1.43] text-black">Jeddah, Saudi Arabia</span>
            </div>
          </div>
        </div>

        {/* Check in date */}
        <div className="flex h-[75px] w-[193px] shrink-0 items-center rounded-[20px] border border-[#e6e6e6] bg-[#f9fbf5] pl-[15px]">
          <div className="flex items-center gap-[12px]">
            <div className="flex size-[29.6px] shrink-0 items-center justify-center rounded-[7.4px] bg-[#ffed91]">
              <Image src={`${HOTELS_ICON_PATH}/calendar - 02.png`} alt="Check In" width={16} height={16} className="object-contain" />
            </div>
            <div className="flex flex-col gap-[2px] font-sans">
              {/* Title S */}
              <span className="whitespace-nowrap text-[14px] font-medium leading-[1.43] text-[#7d7d7d]">Check In date</span>
              {/* Title S */}
              <span className="whitespace-nowrap text-[14px] font-medium leading-[1.43] text-black">08 Nov 2025</span>
            </div>
          </div>
        </div>

        {/* Check Out Date */}
        <div className="flex h-[75px] w-[193px] shrink-0 items-center rounded-[20px] border border-[#e6e6e6] bg-[#f9fbf5] pl-[15px]">
          <div className="flex items-center gap-[12px]">
            <div className="flex size-[29.6px] shrink-0 items-center justify-center rounded-[7.4px] bg-[#ffed91]">
              <Image src={`${HOTELS_ICON_PATH}/calendar - 3.png`} alt="Check Out" width={16} height={16} className="object-contain" />
            </div>
            <div className="flex flex-col gap-[2px] font-sans">
              {/* Title S */}
              <span className="whitespace-nowrap text-[14px] font-medium leading-[1.43] text-[#7d7d7d]">Check Out Date</span>
              {/* Title S */}
              <span className="whitespace-nowrap text-[14px] font-medium leading-[1.43] text-black">08Jan 2026</span>
            </div>
          </div>
        </div>

        {/* Guests and rooms */}
        <div className="flex h-[75px] w-[273px] shrink-0 items-center rounded-[20px] border border-[#e6e6e6] bg-[#f9fbf5] pl-[15px]">
          <div className="flex items-center gap-[12px]">
            <div className="flex size-[29.6px] shrink-0 items-center justify-center rounded-[7.4px] bg-[#ffed91]">
              <Image src={`${HOTELS_ICON_PATH}/join a group - 01.png`} alt="Guests" width={16} height={16} className="object-contain" />
            </div>
            <div className="flex flex-col gap-[2px] font-sans">
              {/* Title S */}
              <span className="whitespace-nowrap text-[14px] font-medium leading-[1.43] text-[#7d7d7d]">Guests and rooms</span>
              {/* Title S */}
              <span className="whitespace-nowrap text-[14px] font-medium leading-[1.43] text-black">01 Adult 01 Child</span>
            </div>
          </div>
        </div>

        {/* Search Button */}
        <button className="flex h-[49px] w-[52px] shrink-0 items-center justify-center rounded-[12px] bg-[#fddb32] transition-transform hover:scale-105">
          <Image src={`${HOTELS_ICON_PATH}/search - 01.png`} alt="Search" width={22} height={22} className="object-contain" />
        </button>
      </div>
    </div>
  );
}

function MobileFieldBox({ iconSrc, label, value, className = "" }: any) {
  return (
    <div className={`flex h-[64px] w-full items-center gap-[12px] rounded-[18px] border border-[#e6e6e6] bg-[#f9fbf5] pl-[14px] pr-[14px] ${className}`}>
      <div className="flex size-[28px] shrink-0 items-center justify-center rounded-[8px] bg-[#ffed91]">
        <Image src={iconSrc} alt={label} width={14} height={14} className="object-contain" />
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
  return (
    <div className="w-full rounded-[28px] bg-white p-[16px] shadow-[0_20px_60px_rgba(0,0,0,0.18)]">
      <div className="mb-[16px] flex items-center gap-[8px]">
        {/* Title S */}
        <button className="flex h-[36px] items-center gap-[6px] rounded-full bg-[#fddb32] px-[14px] font-sans text-[14px] font-medium leading-[1.43] text-black transition-colors">
          <Image src={`${HOTELS_ICON_PATH}/home - 04.png`} alt="Hotels" width={16} height={16} className="object-contain" /> Hotels
        </button>
      </div>

      <div className="flex flex-col gap-[12px]">
        <MobileFieldBox iconSrc={`${HOTELS_ICON_PATH}/location square - 02.png`} label="Where are you going?" value="Jeddah, Saudi Arabia" />
        <div className="grid grid-cols-2 gap-[12px]">
          <MobileFieldBox iconSrc={`${HOTELS_ICON_PATH}/calendar - 02.png`} label="Check In date" value="08 Nov 2025" />
          <MobileFieldBox iconSrc={`${HOTELS_ICON_PATH}/calendar - 3.png`} label="Check Out Date" value="08Jan 2026" />
        </div>
        <MobileFieldBox iconSrc={`${HOTELS_ICON_PATH}/join a group - 01.png`} label="Guests and rooms" value="01 Adult 01 Child" />
      </div>

      {/* Title M */}
      <button className="relative mt-[16px] flex h-[56px] w-full items-center justify-center rounded-full bg-[#fddb32] font-sans text-[16px] font-medium leading-[1.5] text-black transition-transform active:scale-[0.98]">
        Search Hotels
        <span className="absolute right-[6px] flex size-[36px] items-center justify-center rounded-full bg-white">
          <Image src={`${HOTELS_ICON_PATH}/search - 01.png`} alt="Search" width={16} height={16} className="object-contain" />
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

function HeroDesktop() {
  return (
    <section className="relative hidden min-h-[820px] flex-col items-center overflow-hidden pt-[100px] lg:flex">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&w=1920&q=80"
          alt="Sunset Palm Trees Hero Background"
          fill
          className="object-cover"
          priority
        />
        {/* Exact 27% Black overlay to match flights.tsx structure */}
        <div className="absolute inset-0 bg-[#000000]/[0.27]" />
      </div>

      <div className="relative z-10 flex w-full max-w-[1280px] flex-col px-8 pb-[48px] pt-[28px]">
        
        {/* Display XXL / XL */}
       <h1 className="w-full max-w-[1400px] font-sans text-[60px] font-medium leading-[0.89] text-white xl:text-[100px] xl:leading-[100px]">
  <span className="block whitespace-nowrap">Compare Hotel Prices from</span>
  <span className="block">Hundreds of Booking Sites</span>
</h1>
        <div className="mt-[28px] flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <div className="flex max-w-[650px] flex-col items-start gap-[18px]">
            {/* Body M */}
            <p className="font-sans text-[14px] font-normal leading-[1.43] text-white">
              Compare hotel prices from trusted booking partners including luxury resorts, boutique hotels, family stays and business accommodation. Book directly with the provider at the best available price.
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
          src="https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&w=900&q=80"
          alt="Sunset Palm Trees Hero Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[#000000]/[0.27]" />
      </div>

      <div className="relative z-10 flex flex-col px-[20px]">
        {/* Display L */}
        <h1 className="w-full max-w-full font-sans text-[48px] font-medium leading-none text-white">
          <span className="block">Compare Hotel</span>
          <span className="block">Prices from Hundreds</span>
          <span className="block">of Booking Sites</span>
        </h1>

        {/* Body M */}
        <p className="mt-[16px] max-w-[320px] font-sans text-[14px] font-normal leading-[1.43] text-white/90">
          Compare hotel prices from trusted booking partners including luxury resorts, boutique hotels, family stays and business accommodation.
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
   POPULAR HOTELS SECTION
---------------------------------------------------------------- */

function PopularHotelsSection() {
  const [activeFilter, setActiveFilter] = useState("All");

  return (
    <section className="bg-[#f9fbf5] py-20">
      <div className="mx-auto w-full max-w-[1280px] px-6 lg:px-8">
        
        {/* Header and Filters Block with exact 48px gap */}
        <div className="flex w-full flex-col gap-[48px]">
          <div className="flex flex-col">
            {/* Display L */}
            <h2 className="font-sans text-[48px] font-medium leading-none text-[#000000]">
              Popular Hotels
            </h2>
            {/* Body L */}
            <p className="mt-[10px] font-sans text-[16px] font-normal leading-[1.5] text-[#555555]">
              Compare prices on popular hotels from trusted booking partners. Discover great stays for every budget.
            </p>
          </div>

          <div className="flex gap-[6px] overflow-x-auto pb-4 scrollbar-hide">
            {hotelFilters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                // Exact styling matching the provided images (44px height, minimal 6px gap, and tighter 16px horizontal padding)
                className={`flex h-[44px] shrink-0 items-center justify-center rounded-full border px-[16px] font-sans text-[14px] font-medium leading-[1.43] transition-colors ${
                  activeFilter === filter
                    ? "border-[#FDDB32] bg-[#FDDB32] text-[#000000]"
                    : "border-[#E6E6E6] bg-[#FFFFFF] text-[#000000] hover:border-[#FDDB32]"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-[32px] grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {popularHotels.map((hotel, i) => (
            <div key={i} className="group overflow-hidden rounded-[24px] bg-white shadow-sm border border-neutral-100 transition-all hover:-translate-y-1 hover:shadow-xl">
              <div className="relative h-[240px] w-full overflow-hidden">
                <Image
                  src={hotel.image}
                  alt={hotel.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Title XS */}
                <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 font-sans text-[12px] font-medium leading-[1.33] text-black">
                  Popular
                </span>
                <span className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-[#FDDB32]">
                  <ArrowUpRight className="h-4 w-4 text-black" strokeWidth={2.5} />
                </span>
              </div>

              <div className="flex flex-col p-6">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <Star key={idx} className={`h-4 w-4 ${idx < hotel.rating ? 'fill-[#FDDB32] text-[#FDDB32]' : 'fill-gray-200 text-gray-200'}`} />
                    ))}
                  </div>
                  {/* Title S */}
                  <Link href="#" className="flex items-center gap-1 font-sans text-[14px] font-medium leading-[1.43] text-black hover:underline">
                    Compare Prices <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                </div>

                {/* Title L */}
                <h3 className="font-sans text-[24px] font-medium leading-none text-black">{hotel.name}</h3>
                
                {/* Body M */}
                <p className="mt-[6px] flex items-center gap-1.5 font-sans text-[14px] font-normal leading-[1.43] text-[#777777]">
                  <MapPin size={14} /> {hotel.location}
                </p>

                <div className="mt-4 flex flex-col gap-2">
                  {hotel.tags.map(tag => (
                    // Body M
                    <div key={tag} className="flex items-center gap-2 font-sans text-[14px] font-normal leading-[1.43] text-gray-600">
                      <Check size={14} className="text-green-600" /> {tag}
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex items-end justify-between border-t border-gray-100 pt-4">
                  <div>
                    {/* Body M */}
                    <span className="block font-sans text-[14px] font-normal leading-[1.43] text-[#777777]">Prices from</span>
                    {/* Title L */}
                    <span className="font-sans text-[24px] font-medium leading-none text-black">{hotel.price}</span>
                    {/* Body M */}
                    <span className="font-sans text-[14px] font-normal leading-[1.43] text-[#777777]"> / night</span>
                  </div>
                  {/* Title S */}
                  <Link href="#" className="rounded-full bg-[#FDDB32] px-6 py-2.5 font-sans text-[14px] font-medium leading-[1.43] text-black hover:bg-[#e5c52c] transition-colors">
                    View Deal
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------
   POPULAR HOTEL DESTINATIONS
---------------------------------------------------------------- */

function PopularHotelDestinationsSection() {
  return (
    <section className="bg-[#0A0A0A] py-24">
      <div className="mx-auto w-full max-w-[1280px] px-6 lg:px-8">
        {/* Display L */}
        <h2 className="font-sans text-[48px] font-medium leading-none text-white">
          Popular Hotel Destinations
        </h2>
        {/* Body L */}
        <p className="mt-[10px] font-sans text-[16px] font-normal leading-[1.5] text-gray-400">
          Explore top destinations and find the best hotel deals worldwide.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {hotelDestinations.map((dest, i) => (
            <div key={i} className="group relative overflow-hidden rounded-[24px] bg-white">
              <div className="relative h-[320px] w-full">
                <Image
                  src={dest.image}
                  alt={dest.city}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                <div className="absolute left-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-[#FDDB32]">
                  <ArrowUpRight className="h-4 w-4 text-black" strokeWidth={2.5} />
                </div>

                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                  {/* Title L */}
                  <h3 className="font-sans text-[24px] font-medium leading-none text-white">{dest.city}</h3>
                  {/* Title S */}
                  <Link href="#" className="rounded-full bg-[#FDDB32] px-5 py-2 font-sans text-[14px] font-medium leading-[1.43] text-black hover:bg-[#e5c52c]">
                    Explore
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------
   WHY COMPARE SECTION
---------------------------------------------------------------- */

function WhyCompareHotelsSection() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto w-full max-w-[1280px] px-6 lg:px-8">
        <div className="mx-auto max-w-[800px] text-center">
          {/* Display L */}
          <h2 className="font-sans text-[48px] font-medium leading-none text-black">
            Why Compare Hotels with TravelMommy?
          </h2>
          {/* Body L */}
          <p className="mt-[16px] font-sans text-[16px] font-normal leading-[1.5] text-[#555555]">
            Search and compare cheap hotels from top booking sites to find the best room for your trip.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {whyCompareFeatures.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col items-center rounded-[24px] border border-neutral-100 bg-[#F9FBF5] p-10 text-center"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#FDDB32] mb-6">
                <feature.icon className="h-6 w-6 text-black" />
              </span>
              {/* Title L */}
              <h3 className="mb-[12px] font-sans text-[24px] font-medium leading-none text-black">{feature.title}</h3>
              {/* Body M */}
              <p className="font-sans text-[14px] font-normal leading-[1.43] text-[#555555]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------
   HOTEL BRANDS
---------------------------------------------------------------- */

function HotelBrandsSection() {
  return (
    <section className="bg-[#0A0A0A] py-24">
      <div className="mx-auto w-full max-w-[1280px] px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
          {/* Display L */}
          <h2 className="font-sans text-[48px] font-medium leading-none text-white">
            Compare Popular Hotel Brands
          </h2>
          {/* Title S */}
          <Link
            href="/hotels/brands"
            className="flex items-center gap-2 rounded-full bg-[#FDDB32] px-6 py-3 font-sans text-[14px] font-medium leading-[1.43] text-black hover:bg-[#e5c52c] transition-colors"
          >
            View All Brands
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {hotelBrands.map((brand) => (
            <div
              key={brand.name}
              className="flex h-[120px] items-center justify-center rounded-[16px] bg-white p-6 transition-transform hover:-translate-y-1"
            >
              <div className="relative h-full w-full">
                <Image
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------
   POPULAR SEARCHES
---------------------------------------------------------------- */

function PopularSearchesSection() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto w-full max-w-[1280px] px-6 lg:px-8">
        <div className="text-center mb-12">
          {/* Display L */}
          <h2 className="font-sans text-[48px] font-medium leading-none text-black">
            Popular Hotel Searches
          </h2>
          {/* Body L */}
          <p className="mt-[16px] font-sans text-[16px] font-normal leading-[1.5] text-[#555555]">
            Top destinations among our users to compare hotel prices from trusted booking sites.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {popularSearches.map((search, i) => (
            <div key={i} className="group overflow-hidden rounded-[20px] border border-gray-200 bg-white shadow-sm transition-all hover:shadow-lg">
              <div className="relative h-[180px] w-full">
                <Image
                  src={search.image}
                  alt={search.city}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                {/* Title L */}
                <h3 className="font-sans text-[24px] font-medium leading-none text-black">{search.city}</h3>
                {/* Body M */}
                <p className="mt-[8px] font-sans text-[14px] font-normal leading-[1.43] text-gray-600 line-clamp-2">{search.desc}</p>
                <div className="mt-4 flex items-center gap-1">
                  <Star className="h-4 w-4 fill-[#FDDB32] text-[#FDDB32]" />
                  {/* Title S */}
                  <span className="font-sans text-[14px] font-medium leading-[1.43] text-black">{search.rating}</span>
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <div>
                    {/* Title L */}
                    <span className="font-sans text-[24px] font-medium leading-none text-black">{search.price}</span>
                    {/* Body M */}
                    <span className="font-sans text-[14px] font-normal leading-[1.43] text-[#555555]"> / night</span>
                  </div>
                  {/* Title XS */}
                  <Link href="#" className="rounded-full bg-[#FDDB32] px-4 py-2 font-sans text-[12px] font-medium leading-[1.33] text-black hover:bg-[#e5c52c]">
                    View Hotels
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------
   FAQ SECTION
---------------------------------------------------------------- */

function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-white pb-24 pt-12">
      <div className="mx-auto w-full max-w-[860px] px-6 lg:px-8">
        {/* Display L */}
        <h2 className="text-center font-sans text-[48px] font-medium leading-none text-black">
          Frequently Asked<br/>Questions
        </h2>

        <div className="mt-16 flex flex-col gap-6">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={faq.question} className="border-b border-gray-200 pb-6">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-6 text-left"
                >
                  {/* Title M */}
                  <span className="font-sans text-[16px] font-medium leading-[1.5] text-black">
                    {faq.question}
                  </span>
                  <span className="flex shrink-0 text-black">
                    {isOpen ? <Minus className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
                  </span>
                </button>
                {isOpen && (
                  // Body M
                  <p className="mt-[16px] font-sans text-[14px] font-normal leading-[1.43] text-[#555555]">
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
    <section className="bg-white px-6 pb-24 lg:px-8">
      <div className="mx-auto w-full max-w-[1216px]">
        <div className="flex flex-col items-center rounded-[32px] bg-[#FDDB32] px-6 py-16 text-center lg:py-20">
          {/* Title S */}
          <span className="rounded-full bg-white px-[16px] py-[8px] font-sans text-[14px] font-medium leading-[1.43] text-black">
            Let's go on a trip!
          </span>
          
          {/* Display L */}
          <h2 className="mt-[20px] max-w-2xl font-sans text-[48px] font-medium leading-none text-black">
            Get Hotel Deals Delivered to Your Inbox.
          </h2>
          
          {/* Body L */}
          <p className="mt-[16px] max-w-xl font-sans text-[16px] font-normal leading-[1.5] text-black/80">
            Get exclusive destination ideas, cheap flights and hotel offers directly in your inbox.
          </p>

          <form className="mt-[32px] flex w-full max-w-md flex-col gap-3 sm:flex-row">
            <div className="flex flex-1 items-center gap-2 rounded-full bg-white px-[20px] py-[14px]">
              {/* Body M */}
              <input
                type="email"
                placeholder="Your Email Address"
                className="w-full bg-transparent font-sans text-[14px] font-normal leading-[1.43] text-black placeholder:text-gray-400 focus:outline-none"
              />
              <Mail className="h-[16px] w-[16px] shrink-0 text-gray-400" />
            </div>
            
            {/* Title S */}
            <button
              type="submit"
              className="flex shrink-0 items-center justify-center gap-2 rounded-full bg-black px-[24px] py-[14px] font-sans text-[14px] font-medium leading-[1.43] text-white transition-colors hover:bg-black/80"
            >
              Get Deals
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}