'use client';

import { useState } from "react";
import Image from "next/image";
import type { JSX } from "react";
import {
  ChevronDown,
  ArrowUpRight,
  Star,
  MapPin,
  Plane,
  Building2,
  Umbrella,
  Minus,
  Plus,
  BarChart2,
  ShieldCheck,
  Compass
} from "lucide-react";

import Header from "../components/Home/header";
import Footer from "../components/Home/footer";

/* =====================================================================
   TYPES & INTERFACES
===================================================================== */

interface CountryChip {
  name: string;
  img: string;
  swatch?: string; // Marks swatch as an optional property to fix the build error
}

interface DestinationItem {
  city?: string;
  name?: string;
  desc: string;
  badge?: string;
  badgeStyles?: string;
  flightsFrom?: string;
  hotelsFrom?: string;
  image: string;
  tags?: string[];
  perk?: string;
  price?: string;
  rating?: string;
}

/* =====================================================================
   STATIC DATA
===================================================================== */

const REGIONS = [
  "Europe",
  "Central America",
  "Africa",
  "Caribbean",
  "North America",
  "South America",
];

const COUNTRY_CHIPS: CountryChip[] = [
  { name: "Canada", img: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&w=100&q=80" },
  { name: "Poland", img: "https://images.unsplash.com/photo-1518098268026-4e89f1a2cd8e?auto=format&w=100&q=80" },
  { name: "United States", img: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?auto=format&w=100&q=80" },
  { name: "Paris", img: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&w=100&q=80" },
  { name: "UAE", img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&w=100&q=80" },
  { name: "Czech Republic", img: "https://images.unsplash.com/photo-1519677100203-a0e668c92439?auto=format&w=100&q=80" },
  { name: "Germany", img: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&w=100&q=80" },
  { name: "New York City", img: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&w=100&q=80" },
  { name: "Fukuoka", img: "https://images.unsplash.com/photo-1574343806283-e18e59ec2548?auto=format&w=100&q=80" },
  { name: "Sapporo", img: "https://images.unsplash.com/photo-1596711585257-227bb30953a7?auto=format&w=100&q=80" },
  { name: "Kyoto", img: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&w=100&q=80" },
  { name: "Osaka", img: "https://images.unsplash.com/photo-1590559899731-a38283bce401?auto=format&w=100&q=80" },
];

const FEATURED_COUNTRIES: DestinationItem[] = [
  {
    name: "Greece",
    desc: "Beautiful islands, ancient history",
    rating: "4.8",
    image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&w=800&q=80",
    tags: ["Islands", "History", "Beach"],
    flightsFrom: "€50",
    hotelsFrom: "€65",
    perk: "Mediterranean beaches",
    price: "€49",
  },
  {
    name: "Spain",
    desc: "Sun-soaked beaches, vibrant culture",
    rating: "4.7",
    image: "https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&w=800&q=80",
    tags: ["Culture", "Beaches", "Tapas"],
    flightsFrom: "€35",
    hotelsFrom: "€55",
    perk: "Incredible tapas & nightlife",
    price: "€39",
  },
  {
    name: "Italy",
    desc: "Ancient ruins, rolling vineyards",
    rating: "4.9",
    image: "https://images.unsplash.com/photo-1516483638261-f40889eba30e?auto=format&w=800&q=80",
    tags: ["Art", "History", "Wine"],
    flightsFrom: "€40",
    hotelsFrom: "€70",
    perk: "World-class cuisine & art",
    price: "€55",
  },
];

const WHY_COMPARE = [
  {
    icon: BarChart2,
    title: "Compare Prices",
    description: "Compare flights and hotels from hundreds of trusted travel providers.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted Partners",
    description: "Book securely through leading airlines and hotel booking platforms.",
  },
  {
    icon: Compass,
    title: "Travel Inspiration",
    description: "Discover destinations, travel guides and tips to help plan your next adventure.",
  },
];

const FAQS = [
  {
    q: "Is TravelMommy free to use?",
    a: "Yes. You can compare flights and hotels for free and book directly with trusted travel partners.",
  },
  {
    q: "Can I compare flights and hotels?",
    a: "Yes. Compare prices from hundreds of airlines, hotels and booking websites in one place.",
  },
  {
    q: "Which countries are most popular?",
    a: "Some of our most searched destinations include Greece, Spain, Italy, France, Thailand and Japan.",
  },
  {
    q: "How do I find cheap flights?",
    a: "Use our flight search to compare prices across multiple travel providers and book when you find the best deal.",
  },
  {
    q: "When is the best time to travel?",
    a: "It depends on your destination. Each country guide includes seasonal travel tips and the best times to visit.",
  },
];

/* =====================================================================
   HERO SECTION
===================================================================== */

function HeroSection() {
  const [activeRegion, setActiveRegion] = useState("Europe");

  return (
    <section className="relative flex h-[700px] w-full flex-col items-center overflow-hidden bg-[#000000]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&w=1920&q=80"
          alt="Desert canyon arch at sunset"
          fill
          className="object-cover opacity-80"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/60" />
      </div>

      <div className="relative z-10 flex h-full w-full max-w-[1440px] flex-col px-[112px] pb-[80px] pt-[24px]">
        <Header />

        <div className="mt-auto flex w-full max-w-[1198px] flex-col gap-[26px]">
          
          <div className="flex flex-col gap-[12px]">
            {/* Display: 72px, Medium, 100%, -3% */}
            <h1 className="font-sans text-[72px] font-medium leading-none tracking-[-0.03em] text-[#FFFFFF]">
              Discover Your Next Destination
            </h1>
            {/* Subtitle: 16px, Regular, 150%, 0px */}
            <p className="max-w-[700px] font-sans text-[16px] font-normal leading-[1.5] tracking-[0px] text-[rgba(255,255,255,0.8)]">
              Explore countries across Europe, Asia, the Americas, Africa and Oceania. Compare flights and
              hotels, explore travel guides, and plan your next adventure with TravelMommy.
            </p>
          </div>

          <div className="flex flex-col gap-[19px]">
            <p className="font-sans text-[14px] font-medium leading-[1.43] tracking-[-0.28px] text-[#FFFFFF]">
              Browse by Region
            </p>

            {/* Region pills */}
            <div className="flex flex-wrap gap-[8px]">
              {REGIONS.map((region) => (
                <button
                  key={region}
                  onClick={() => setActiveRegion(region)}
                  className={`flex h-[40px] items-center gap-[6px] rounded-full px-[20px] font-sans text-[14px] font-medium leading-[1.43] tracking-[-0.28px] transition-colors ${
                    activeRegion === region
                      ? "bg-[#FDDB32] text-[#000000]"
                      : "bg-[#FFFFFF] text-[#000000] hover:bg-[#F9FBF5]"
                  }`}
                >
                  {region}
                  {activeRegion === region && <ChevronDown className="h-[16px] w-[16px]" />}
                </button>
              ))}
            </div>

            {/* Country chips */}
            <div className="mt-[4px] flex flex-wrap gap-[8px]">
              {COUNTRY_CHIPS.map((chip) => (
                <button
                  key={chip.name}
                  className="flex h-[40px] items-center gap-[8px] rounded-full border border-white/20 bg-white/10 py-[4px] pl-[4px] pr-[16px] font-sans text-[14px] font-medium leading-[1.43] tracking-[-0.28px] text-[#FFFFFF] backdrop-blur-sm transition-colors hover:bg-white/20"
                >
                  {chip.swatch ? (
                    <span className="h-[32px] w-[32px] rounded-full" style={{ backgroundColor: chip.swatch }} />
                  ) : (
                    <Image
                      src={chip.img}
                      alt={chip.name}
                      width={32}
                      height={32}
                      className="h-[32px] w-[32px] rounded-full object-cover"
                    />
                  )}
                  {chip.name}
                </button>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

/* =====================================================================
   FEATURED COUNTRIES SECTION
===================================================================== */

function FeaturedCountriesSection() {
  return (
    <section className="flex w-full flex-col items-center bg-[#FFFFFF] py-[80px]">
      <div className="flex w-full max-w-[1440px] flex-col px-[80px]">
        
        <div className="mb-[32px] flex flex-col items-center text-center">
          {/* Section Title: 48px, Medium, 100%, -1px */}
          <h2 className="font-sans text-[48px] font-medium leading-none tracking-[-1px] text-[#000000]">
            Featured Countries
          </h2>
        </div>

        {/* Card Grid */}
        <div className="mx-auto grid w-full max-w-[1280px] grid-cols-1 gap-[24px] md:grid-cols-3">
          {FEATURED_COUNTRIES.map((country, idx) => (
            <div
              key={idx}
              className="group flex h-[527px] w-full flex-col overflow-hidden rounded-[20px] border border-[rgba(0,0,0,0.16)] bg-[#FFFFFF] pb-[10px] shadow-[0_4px_24px_rgba(0,0,0,0.08)] transition-transform duration-300 hover:-translate-y-1"
            >
              {/* Image Container */}
              <div className="relative h-[200px] w-full shrink-0 overflow-hidden bg-[#F3F4F6] p-[14px]">
                <Image
                  src={country.image}
                  alt={country.name || ""}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Popular Badge */}
                <div className="absolute left-[14px] top-[14px] rounded-full bg-[#FFFFFF] px-[12px] py-[4px] shadow-sm">
                  <span className="font-sans text-[14px] font-medium leading-[20px] tracking-[-0.28px] text-[#000000]">
                    Popular
                  </span>
                </div>
                
                <div className="absolute right-[14px] top-[14px] flex h-[36px] w-[36px] items-center justify-center rounded-full bg-[#FDDB32] shadow-md transition-transform group-hover:scale-110">
                  <ArrowUpRight size={18} strokeWidth={2.5} className="text-[#000000]" />
                </div>
              </div>

              {/* Card Body */}
              <div className="flex flex-1 flex-col gap-[12px] p-[14px]">
                
                {/* Rating */}
                <div className="flex h-[20px] items-center gap-[6px]">
                  <div className="flex gap-[2px]">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star key={j} size={14} className="fill-[#F59E0B] text-[#F59E0B]" strokeWidth={0} />
                    ))}
                  </div>
                  <span className="font-sans text-[14px] font-medium leading-[20px] tracking-[-0.28px] text-[#F59E0B]">
                    {country.rating}/5
                  </span>
                </div>

                {/* Country Name & Desc */}
                <div className="flex flex-col gap-[2px]">
                  <h3 className="font-sans text-[16px] font-medium leading-[24px] tracking-[-0.32px] text-[#000000]">
                    {country.name}
                  </h3>
                  <div className="flex items-center gap-[6px]">
                    <MapPin size={14} className="text-[#7D7D7D]" />
                    <span className="font-sans text-[14px] font-normal leading-[20px] tracking-[-0.28px] text-[#7D7D7D]">
                      {country.desc}
                    </span>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-[6px]">
                  {country.tags?.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[#FBBDEA] bg-[#FFF0F8] px-[10px] py-[2px] font-sans text-[14px] font-regular leading-[20px] tracking-[-0.28px] text-[#C050A0]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="h-[1px] w-full bg-[#E6E6E6]" />

                {/* Details List */}
                <div className="flex flex-col gap-[8px]">
                  <div className="flex items-center gap-[8px] font-sans text-[14px] font-normal leading-[20px] tracking-[-0.28px] text-[#7D7D7D]">
                    <Plane size={14} className="text-[#7D7D7D]" />
                    <span>Flights from {country.flightsFrom}</span>
                  </div>
                  <div className="flex items-center gap-[8px] font-sans text-[14px] font-normal leading-[20px] tracking-[-0.28px] text-[#7D7D7D]">
                    <Building2 size={14} className="text-[#7D7D7D]" />
                    <span>Hotels from {country.hotelsFrom}</span>
                  </div>
                  <div className="flex items-center gap-[8px] font-sans text-[14px] font-normal leading-[20px] tracking-[-0.28px] text-[#7D7D7D]">
                    <Umbrella size={14} className="text-[#7D7D7D]" />
                    <span>{country.perk}</span>
                  </div>
                </div>

                <div className="h-[1px] w-full bg-[#E6E6E6]" />

                {/* Footer / Price & CTA */}
                <div className="mt-auto flex items-center justify-between">
                  <div className="flex flex-col gap-[2px]">
                    <span className="font-sans text-[14px] font-normal leading-[20px] tracking-[-0.28px] text-[#7D7D7D]">
                      Explore
                    </span>
                    <div className="flex items-baseline gap-[2px]">
                      <span className="font-sans text-[22px] font-medium leading-none tracking-[0px] text-[#000000]">
                        {country.price}
                      </span>
                      <span className="font-sans text-[14px] font-normal leading-[20px] tracking-[-0.28px] text-[#7D7D7D]">
                        / night
                      </span>
                    </div>
                  </div>
                  <button className="flex h-[40px] items-center justify-center gap-[6px] rounded-full bg-[#FDDB32] px-[16px] py-[10px] font-sans text-[14px] font-medium leading-[20px] tracking-[-0.28px] text-[#000000] transition-colors duration-200 hover:bg-[#e5c52c]">
                    Explore
                    <ArrowUpRight size={14} />
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

/* =====================================================================
   WHY PLAN YOUR TRIP SECTION
===================================================================== */

function WhyPlanSection() {
  return (
    <section className="flex w-full flex-col items-center bg-[#FFFFFF] py-[80px]">
      <div className="flex w-full max-w-[1280px] flex-col items-center px-[32px]">
        
        {/* Heading Block */}
        <div className="mb-[48px] flex w-full max-w-[1216px] flex-col items-center text-center gap-[24px]">
          <h2 className="font-sans text-[48px] font-medium leading-[48px] tracking-[-1px] text-[#000000]">
            Why Plan Your Trip with TravelMommy?
          </h2>
          <p className="max-w-[700px] font-sans text-[16px] font-normal leading-[24px] tracking-[0px] text-[#000000]">
            Search and compare cheap flights from multiple airlines and trusted booking
            partners to find the best fare for your trip.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid w-full max-w-[1216px] grid-cols-1 gap-[15px] md:grid-cols-3">
          {WHY_COMPARE.map((feature, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center rounded-[20px] border-[1.5px] border-[#E6E6E6] bg-[#F9FBF5] p-[30px] text-center"
            >
              <div className="mb-[15px] flex h-[56px] w-[56px] items-center justify-center rounded-full bg-[#FDDB32]">
                <feature.icon className="h-[24px] w-[24px] text-[#000000]" strokeWidth={2} />
              </div>
              <h3 className="mb-[15px] font-sans text-[24px] font-medium leading-[24px] tracking-[0px] text-[#000000]">
                {feature.title}
              </h3>
              <p className="font-sans text-[16px] font-normal leading-[24px] tracking-[0px] text-[#000000]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Explore Button */}
        <div className="mt-[48px]">
          <button className="flex h-[44px] items-center justify-center gap-[6px] rounded-full bg-[#FDDB32] px-[24px] font-sans text-[14px] font-medium leading-[20px] tracking-[-0.28px] text-[#000000] transition-colors duration-200 hover:bg-[#e5c52c]">
            Explore tours
            <ArrowUpRight size={16} />
          </button>
        </div>

      </div>
    </section>
  );
}

/* =====================================================================
   FAQ SECTION
===================================================================== */

function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="flex w-full flex-col items-center bg-[#FFFFFF] pt-[80px] pb-[160px] px-[80px]">
      <div className="flex w-full max-w-[800px] flex-col items-center">
        
        <h2 className="mb-[48px] text-center font-sans text-[48px] font-medium leading-[48px] tracking-[-1px] text-[#000000]">
          Frequently Asked Questions
        </h2>

        <div className="flex w-full flex-col gap-[24px]">
          {FAQS.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} className="flex flex-col gap-[12px] border-b border-[#E6E6E6] pb-[24px]">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between text-left"
                >
                  <span className="font-sans text-[16px] font-medium leading-[24px] tracking-[-0.32px] text-[#000000]">
                    {faq.q}
                  </span>
                  <span className="flex shrink-0 text-[#000000]">
                    {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                  </span>
                </button>
                {isOpen && (
                  <p className="font-sans text-[16px] font-normal leading-[24px] tracking-[0px] text-[#7D7D7D]">
                    {faq.a}
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

/* =====================================================================
   PAGE
===================================================================== */

export default function Destinations(): JSX.Element {
  return (
    <main className="flex min-h-screen w-full flex-col bg-[#FFFFFF]">
      <HeroSection />
      <FeaturedCountriesSection />
      <WhyPlanSection />
      <FaqSection />
      <Footer />
    </main>
  );
}