'use client';

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Check,
  Star,
  ArrowUpRight,
  MapPin,
  Calendar,
  Clock,
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
    name: "The Westin Paris", 
    location: "Paris, France", 
    rating: "4.9",
    maxRating: "/5",
    price: "€29", 
    unit: "/ person", 
    tags: ["Hotel", "Luxury", "Spa"], 
    checkin: "Apr 21, 2024",
    checkout: "12:00 PM",
    image: "/Homepage/Section 4/Images/Image.png",
    tagColors: { bg: "#FFF0F8", border: "#FBBDEA", text: "#C050A0" }
  },
  { 
    name: "Hilton Barcelona", 
    location: "Barcelona, Spain", 
    rating: "4.7",
    maxRating: "/5",
    price: "€142", 
    unit: "/ night", 
    tags: ["Hotel", "Business", "Pool"], 
    checkin: "May 10, 2024",
    checkout: "11:00 AM",
    image: "/Homepage/Section 4/Images/Image-1.png",
    tagColors: { bg: "#FFF4ED", border: "#FDCBA8", text: "#C06020" }
  },
  { 
    name: "Marriott Dubai", 
    location: "Dubai, UAE", 
    rating: "4.8",
    maxRating: "/5",
    price: "€98", 
    unit: "/ night", 
    tags: ["Hotel", "Resort", "Beachfront"], 
    checkin: "Jun 15, 2024",
    checkout: "12:00 PM",
    image: "/Homepage/Section 4/Images/Image-2.png",
    tagColors: { bg: "#FFFBEB", border: "#FDE68A", text: "#A08010" }
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

        <div className="mt-[32px] grid w-full grid-cols-1 gap-[8px] md:grid-cols-2 lg:grid-cols-3">
          {popularHotels.map((hotel, i) => (
            <div 
              key={i} 
              className="group flex h-auto lg:h-[527px] flex-col overflow-hidden rounded-[20px] bg-[#ffffff] pb-[10px] shadow-[0_4px_24px_rgba(0,0,0,0.08)] transition-transform duration-300 hover:-translate-y-1"
            >
              {/* Image Header */}
              <div className="relative h-[200px] w-full shrink-0 overflow-hidden bg-neutral-900">
                <Image 
                  src={hotel.image} 
                  alt={hotel.name} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105" 
                />
                
                {/* Popular Badge */}
                <div className="absolute left-[12px] top-[12px] rounded-full bg-[#FFFFFF] px-[10px] py-[4px] shadow-sm">
                  <span className="font-sans text-[14px] font-medium text-[#000000]">
                    Popular
                  </span>
                </div>

                {/* Arrow Badge (Top Right) */}
                <div className="absolute right-[12px] top-[12px] flex h-[36px] w-[36px] items-center justify-center rounded-full bg-[#FDDB32] shadow-sm">
                  <Image 
                    src="/Homepage/Section 1/Header Icons/Icons/Component 1.png" 
                    alt="Arrow" 
                    width={14} 
                    height={14} 
                    className="object-contain" 
                  />
                </div>
              </div>

              {/* Card Body */}
              <div className="flex flex-1 flex-col gap-[12px] p-[14px]">
                
                {/* Row 1: Rating & Compare Row */}
                <div className="flex h-[20px] w-full items-center justify-between">
                  <div className="flex shrink-0 items-center gap-[6px]">
                    <div className="flex gap-[2px]">
                      {Array.from({ length: 5 }).map((_, j) => (
                        <Star key={j} size={12} className="fill-[#000000] text-[#000000]" strokeWidth={0} />
                      ))}
                    </div>
                    <div className="flex items-baseline font-sans">
                      <span className="text-[14px] font-medium leading-[20px] tracking-[0px] text-[#F59E0B]">
                        {hotel.rating}<span className="text-[14px] font-medium leading-[20px] tracking-[0px] text-[#7D7D7D]">{hotel.maxRating}</span>
                      </span>
                    </div>
                  </div>
                  
                  {/* Explicitly Black Compare Prices Link */}
                  <Link 
                    href="#" 
                    className="group/compare z-10 flex shrink-0 items-center gap-[4px] whitespace-nowrap hover:underline"
                  >
                    <span className="font-sans text-[13px] font-medium leading-[20px] tracking-[0px] text-[#000000]">
                      Compare Prices
                    </span>
                    <Image 
                      src="/Homepage/Section 1/Header Icons/Icons/Component 1.png" 
                      alt="Arrow" 
                      width={10} 
                      height={10} 
                      className="object-contain transition-transform group-hover/compare:translate-x-0.5 group-hover/compare:-translate-y-0.5" 
                    />
                  </Link>
                </div>

                {/* Row 2: Title & Location */}
                <div className="flex flex-col gap-[2px]">
                  <h3 className="font-sans text-[16px] font-medium leading-[24px] tracking-[0px] text-[#000000]">
                    {hotel.name}
                  </h3>
                  <div className="flex items-center gap-[4px] font-sans text-[14px] font-normal leading-[20px] tracking-[0px] text-[#7D7D7D]">
                    <MapPin size={12} className="text-[#7D7D7D]" />
                    <span>{hotel.location}</span>
                  </div>
                </div>

                {/* Row 3: Tags */}
                <div className="flex flex-wrap gap-[6px]">
                  {hotel.tags.map(tag => (
                    <span 
                      key={tag} 
                      style={{ 
                        backgroundColor: hotel.tagColors.bg,
                        borderColor: hotel.tagColors.border, 
                        color: hotel.tagColors.text
                      }}
                      className="flex h-[26px] items-center justify-center rounded-full border px-[8px] py-[3px] font-sans text-[14px] font-normal leading-[20px]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Divider */}
                <div className="h-[1px] w-full bg-[#E6E6E6]" />

                {/* Row 4: Details List */}
                <div className="flex flex-col gap-[8px]">
                  <div className="flex items-center gap-[8px] font-sans text-[14px] font-normal leading-[20px] tracking-[0px] text-[#7D7D7D]">
                    <Calendar size={14} className="text-[#7D7D7D]" />
                    <span>Check-in: {hotel.checkin}</span>
                  </div>
                  <div className="flex items-center gap-[8px] font-sans text-[14px] font-normal leading-[20px] tracking-[0px] text-[#7D7D7D]">
                    <MapPin size={14} className="text-[#7D7D7D]" />
                    <span>{hotel.location}</span>
                  </div>
                  <div className="flex items-center gap-[8px] font-sans text-[14px] font-normal leading-[20px] tracking-[0px] text-[#7D7D7D]">
                    <Clock size={14} className="text-[#7D7D7D]" />
                    <span>Check-out: {hotel.checkout}</span>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-[1px] w-full bg-[#E6E6E6]" />

                {/* Row 5: Price & CTA */}
                <div className="mt-auto flex items-center justify-between">
                  <div className="flex flex-col gap-[2px]">
                    <span className="font-sans text-[14px] font-normal leading-[20px] tracking-[0px] text-[#7D7D7D]">
                      Start from
                    </span>
                    <div className="flex items-baseline gap-[2px]">
                      <span className="font-sans text-[22px] font-medium leading-none tracking-[0px] text-[#000000]">
                        {hotel.price}
                      </span>
                      <span className="font-sans text-[14px] font-normal leading-[20px] tracking-[0px] text-[#7D7D7D]">
                        {hotel.unit}
                      </span>
                    </div>
                  </div>
                  <button className="flex h-[40px] items-center justify-center rounded-full bg-[#FDDB32] px-[18px] py-[10px] font-sans text-[14px] font-medium leading-[20px] tracking-[0px] text-[#000000] transition-colors duration-200 hover:bg-[#e5c52c]">
                    Book Now
                  </button>
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