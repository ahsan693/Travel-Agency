'use client';

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Coins,
  MessageCircle,
  Clock,
  Calendar,
  Plane,
  Building2,
  ArrowUpRight,
  Minus,
  Plus,
  Star,
  ChevronDown
} from "lucide-react";

import Header from "../components/Home/header";
import Footer from "../components/Home/footer";

/* =====================================================================
   STATIC DATA
===================================================================== */

const INFO_BAR_DATA = [
  { icon: MapPin, label: "Capital", value: "Athens" },
  { icon: Coins, label: "Currency", value: "Euro" },
  { icon: MessageCircle, label: "Language", value: "Greek" },
  { icon: Clock, label: "Timezone", value: "GMT+2" },
  { icon: Calendar, label: "Best Time", value: "May - Oct" },
];

const DESTINATIONS = [
  {
    city: "Santorini",
    desc: "Iconic white-washed houses, blue domes, and breathtaking sunsets.",
    badge: "Popular",
    badgeStyles: "bg-[#DBEAFE] text-[#1E40AF]",
    flightsFrom: "€50",
    hotelsFrom: "€85",
    image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&w=800&q=80",
  },
  {
    city: "Athens",
    desc: "The historical heart of ancient Greece, home to the mighty Acropolis.",
    badge: "Best Value",
    badgeStyles: "bg-[#E0E7FF] text-[#3730A3]",
    flightsFrom: "€35",
    hotelsFrom: "€55",
    image: "https://images.unsplash.com/photo-1555993539-1732b0258235?auto=format&w=800&q=80",
  },
  {
    city: "Mykonos",
    desc: "Vibrant nightlife, luxury resorts, and picturesque windmills.",
    badge: "Trending",
    badgeStyles: "bg-[#FCE7F3] text-[#9D174D]",
    flightsFrom: "€60",
    hotelsFrom: "€120",
    image: "https://images.unsplash.com/photo-1601581875309-fafbf2d3ed3a?auto=format&w=800&q=80",
  },
  {
    city: "Crete",
    desc: "A massive island offering diverse landscapes, deep history, and beaches.",
    badge: "Hidden Gem",
    badgeStyles: "bg-[#D1FAE5] text-[#065F46]",
    flightsFrom: "€45",
    hotelsFrom: "€60",
    image: "https://images.unsplash.com/photo-1582650837562-b9e78299a910?auto=format&w=800&q=80",
  },
];

const POPULAR_FLIGHTS = [
  { city: "London", route: "LON → ATH", price: "€24", airline: "Ryanair", duration: "Direct • 3h 40m", emoji: "🇬🇧", image: "https://images.unsplash.com/photo-1513635269975-5969336cdac0?auto=format&w=800&q=80" },
  { city: "Manchester", route: "MAN → ATH", price: "€32", airline: "easyJet", duration: "Direct • 3h 55m", emoji: "🇬🇧", image: "https://images.unsplash.com/photo-1515586835455-8d2a632c0255?auto=format&w=800&q=80" },
  { city: "Dublin", route: "DUB → ATH", price: "€45", airline: "Ryanair", duration: "Direct • 4h 10m", emoji: "🇮🇪", image: "https://images.unsplash.com/photo-1549918864-48ac978761a4?auto=format&w=800&q=80" },
  { city: "New York", route: "JFK → ATH", price: "€310", airline: "Delta", duration: "Direct • 9h 30m", emoji: "🇺🇸", image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&w=800&q=80" },
];

const THINGS_TO_DO = [
  { title: "Oia Sunset Catamaran Cruise", duration: "5 Hours", price: "From €95", image: "https://images.unsplash.com/photo-1598094625513-43fccf8e2170?auto=format&w=800&q=80" },
  { title: "Acropolis Guided Tour", duration: "2 Hours", price: "From €35", image: "https://images.unsplash.com/photo-1555993539-1732b0258235?auto=format&w=800&q=80" },
  { title: "Delos & Rhenia Boat Trip", duration: "6 Hours", price: "From €80", image: "https://images.unsplash.com/photo-1601581875309-fafbf2d3ed3a?auto=format&w=800&q=80" },
  { title: "Knossos Palace Ticket", duration: "Flexible", price: "From €18", image: "https://images.unsplash.com/photo-1582650837562-b9e78299a910?auto=format&w=800&q=80" },
];

const HOTELS = [
  { name: "Grace Santorini", location: "Imerovigli", rating: "4.9/5", price: "€450", image: "https://images.unsplash.com/photo-1580946342895-716b2512a803?auto=format&w=800&q=80" },
  { name: "Cavo Tagoo", location: "Mykonos Town", rating: "4.8/5", price: "€520", image: "https://images.unsplash.com/photo-1601582589907-f92af5ed9db8?auto=format&w=800&q=80" },
  { name: "Katikies Hotel", location: "Oia", rating: "4.9/5", price: "€480", image: "https://images.unsplash.com/photo-1469796466635-455ede14929b?auto=format&w=800&q=80" },
];

const NEARBY_COUNTRIES = [
  { city: "Italy", desc: "Just across the Ionian Sea, explore Rome, Venice, and incredible cuisine.", image: "https://images.unsplash.com/photo-1516483638261-f40889eba30e?auto=format&w=800&q=80" },
  { city: "Turkey", desc: "Discover the vibrant culture of Istanbul and the ruins of Ephesus.", image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&w=800&q=80" },
  { city: "Cyprus", desc: "An island nation mixing Greek and Turkish influences with stunning beaches.", image: "https://images.unsplash.com/photo-1588180891305-ec9b26e0e37e?auto=format&w=800&q=80" },
  { city: "Croatia", desc: "Sail the Adriatic coast and walk the ancient walls of Dubrovnik.", image: "https://images.unsplash.com/photo-1555661608-8e6f1f31f9d4?auto=format&w=800&q=80" },
];

const FAQS = [
  { q: "When is the best time to visit Greece?", a: "The best time to visit is during the shoulder seasons (May-June and September-October) when the weather is pleasant and the crowds are thinner. July and August are peak summer months, ideal for beach holidays but can be very hot and crowded." },
  { q: "Do I need a visa to travel to Greece?", a: "Greece is part of the Schengen Area. If you are an EU citizen, or from a visa-exempt country (like the US, UK, Canada, Australia), you do not need a visa for stays up to 90 days. Always check the latest entry requirements before traveling." },
  { q: "How do I get around the Greek islands?", a: "The most common way to hop between islands is by ferry. Domestic flights are also available connecting Athens to major islands like Santorini, Mykonos, and Crete." },
  { q: "What should I pack for a trip to Greece?", a: "Pack light, breathable clothing for the summer, comfortable walking shoes for ancient ruins, swimwear, a hat, and plenty of sunscreen. A light jacket is recommended for breezy island evenings." },
  { q: "Is Greece expensive?", a: "Greece caters to all budgets. While luxury hotspots like Santorini and Mykonos can be expensive, destinations like Crete, Naxos, and the mainland offer excellent value for money with affordable local food and accommodation." },
];

/* =====================================================================
   HERO SECTION
===================================================================== */

function HeroSection() {
  return (
    <section className="relative flex h-[581px] w-full flex-col items-center justify-center overflow-hidden bg-[#000000]">
      
      {/* Absolute Header Overlay */}
      <Header />

      {/* Background Image + 30% Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&w=1920&q=80"
          alt="Greece"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[rgba(0,0,0,0.3)]" />
      </div>

      <div className="relative z-10 mt-[104px] flex w-full max-w-[1440px] flex-col items-center px-[32px] text-center">
        {/* Breadcrumb: 12px, Medium, 16px, -0.12px */}
        <div className="mb-[12px] flex items-center justify-center rounded-full bg-[#FDDB32] px-[12px] py-[4px]">
          <span className="font-sans text-[12px] font-medium leading-[16px] tracking-[0px] text-[#000000]">
            GREECE
          </span>
        </div>
        
        {/* Title: 72px, Medium, 100%, -3% */}
        <h1 className="mb-[12px] font-sans text-[72px] font-medium leading-none tracking-[0px] text-[#FFFFFF] max-[768px]:text-[48px]">
          Discover Greece
        </h1>
        
        {/* Subtitle: 16px, Regular, 24px, 0px */}
        <p className="max-w-[700px] font-sans text-[16px] font-normal leading-[24px] tracking-[0px] text-[#FFFFFF] max-[768px]:text-[14px]">
          Explore ancient ruins, pristine beaches, and world-class island hopping in one of Europe's most breathtaking destinations.
        </p>
      </div>
    </section>
  );
}

/* =====================================================================
   INFO BAR SECTION
===================================================================== */

function InfoBarSection() {
  return (
    <section className="w-full bg-[#F9FBF5]">
      <div className="mx-auto flex w-full max-w-[1440px] flex-wrap items-center justify-between gap-[24px] px-[20px] py-[40px] lg:px-[80px]">
        {INFO_BAR_DATA.map((info, i) => (
          <div key={i} className="flex items-center gap-[12px]">
            <div className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[#FFFFFF] shadow-sm">
              <info.icon size={18} className="text-[#000000]" />
            </div>
            <div className="flex flex-col gap-[2px]">
              {/* Label: 12px, Medium, 16px, -0.12px */}
              <span className="font-sans text-[12px] font-medium leading-[16px] tracking-[0px] text-[#000000]">
                {info.label}
              </span>
              {/* Value: 14px, Medium, 20px, -0.28px */}
              <span className="font-sans text-[14px] font-medium leading-[20px] tracking-[0px] text-[#000000]">
                {info.value}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* =====================================================================
   ABOUT SECTION
===================================================================== */

function AboutSection() {
  return (
    <section className="w-full bg-[#FFFFFF] py-[80px] lg:py-[120px]">
      <div className="mx-auto w-full max-w-[1440px] px-[20px] lg:px-[160px]">
        
        <div className="flex flex-col gap-[64px] lg:flex-row lg:items-start lg:gap-[80px]">
          {/* Left Col */}
          <div className="flex flex-1 flex-col gap-[24px]">
            <h2 className="font-sans text-[48px] font-medium leading-[48px] tracking-[0px] text-[#000000] max-[768px]:text-[36px]">
              About Greece
            </h2>
            <div className="flex flex-col gap-[16px]">
              <p className="font-sans text-[16px] font-normal leading-[24px] tracking-[0px] text-[#000000]">
                Greece is a country in southeastern Europe with thousands of islands throughout the Aegean and Ionian seas. Influential in ancient times, it's often called the cradle of Western civilization.
              </p>
              <p className="font-sans text-[16px] font-normal leading-[24px] tracking-[0px] text-[#000000]">
                Athens, its capital, retains landmarks including the 5th-century B.C. Acropolis citadel with the Parthenon temple. Beaches, black sands, and party resorts like Mykonos make it a premier destination.
              </p>
            </div>
            <div className="mt-[16px] flex flex-wrap gap-[12px]">
              {["Ancient History", "Island Hopping", "Mediterranean Cuisine"].map(feat => (
                <div key={feat} className="flex items-center gap-[8px] rounded-full border border-[#E5E7EB] bg-[#F9FBF5] px-[16px] py-[8px]">
                  <span className="font-sans text-[14px] font-medium leading-[20px] tracking-[0px] text-[#000000]">
                    ✓ {feat}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Col */}
          <div className="relative h-[300px] w-full flex-1 overflow-hidden rounded-[24px] lg:h-[400px]">
            <Image 
              src="https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&w=800&q=80" 
              alt="Greece Coastline" 
              fill 
              className="object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}

/* =====================================================================
   DESTINATIONS SECTION & NEARBY COUNTRIES
===================================================================== */

function DestinationCard({ item }: { item: any }) {
  return (
    <div className="flex h-[524px] w-full flex-col overflow-hidden rounded-[24px] border border-[#E5E7EB] bg-[#FFFFFF] shadow-[0_2px_8px_rgba(0,0,0,0.06),0_18px_40px_rgba(0,0,0,0.08)] transition-transform duration-300 hover:-translate-y-1">
      {/* Image Container (282x220 scaled to flex width) */}
      <div className="relative h-[220px] w-full shrink-0 overflow-hidden bg-neutral-100">
        <Image src={item.image} alt={item.city || item.name} fill className="object-cover transition-transform duration-700 hover:scale-105" />
        
        {item.badge && (
          <div className={`absolute left-[16px] top-[16px] rounded-full px-[12px] py-[4px] font-sans text-[12px] font-medium leading-[16px] tracking-[0px] ${item.badgeStyles}`}>
            {item.badge}
          </div>
        )}
      </div>

      {/* Content Area */}
      <div className="flex flex-1 flex-col gap-[16px] p-[24px]">
        <div className="flex flex-col gap-[4px]">
          <h3 className="font-sans text-[16px] font-medium leading-[24px] tracking-[0px] text-[#000000]">
            {item.city || item.name}
          </h3>
          <p className="font-sans text-[14px] font-normal leading-[20px] tracking-[0px] text-[#000000] line-clamp-2">
            {item.desc}
          </p>
        </div>

        {(item.flightsFrom || item.hotelsFrom) && (
          <div className="flex flex-col gap-[8px] rounded-[12px] bg-[#F9FBF5] p-[12px]">
            {item.flightsFrom && (
              <div className="flex items-center gap-[8px]">
                <Plane size={14} className="text-[#000000]" />
                <span className="font-sans text-[14px] font-normal leading-[20px] tracking-[0px] text-[#000000]">
                  Flights from {item.flightsFrom}
                </span>
              </div>
            )}
            {item.hotelsFrom && (
              <div className="flex items-center gap-[8px]">
                <Building2 size={14} className="text-[#000000]" />
                <span className="font-sans text-[14px] font-normal leading-[20px] tracking-[0px] text-[#000000]">
                  Hotels from {item.hotelsFrom} / night
                </span>
              </div>
            )}
          </div>
        )}

        {/* CTA */}
        <div className="mt-auto">
          <button className="flex h-[44px] w-full items-center justify-center rounded-[12px] bg-[#000000] font-sans text-[14px] font-medium leading-[20px] text-[#FFFFFF] transition-colors hover:bg-neutral-800">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}

function DestinationsSection() {
  return (
    <section className="w-full bg-[#000000] py-[80px] lg:py-[96px]">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col px-[20px] lg:px-[120px]">
        
        <div className="mb-[56px] flex flex-col gap-[12px]">
          <h2 className="font-sans text-[48px] font-medium leading-[48px] tracking-[0px] text-[#FFFFFF] max-[768px]:text-[32px]">
            Explore Greece's Most Popular Destinations
          </h2>
          <p className="font-sans text-[16px] font-normal leading-[24px] tracking-[0px] text-[#F9FBF5]">
            Discover top-rated cities and islands for your Mediterranean adventure.
          </p>
        </div>

        <div className="grid w-full max-w-[1200px] grid-cols-1 gap-[24px] sm:grid-cols-2 lg:grid-cols-4">
          {DESTINATIONS.map((dest, i) => (
            <DestinationCard key={i} item={dest} />
          ))}
        </div>

      </div>
    </section>
  );
}

/* =====================================================================
   POPULAR FLIGHTS SECTION
===================================================================== */

function PopularFlightsSection() {
  return (
    <section className="w-full bg-[#FFFFFF] py-[80px] lg:py-[120px]">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col px-[20px] lg:px-[120px]">
        
        <div className="mb-[48px] flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <h2 className="font-sans text-[48px] font-medium leading-[48px] tracking-[0px] text-[#000000] max-[768px]:text-[32px]">
            Popular Flights to <span className="text-[#FDDB32]">Greece</span>
          </h2>
          <button className="flex items-center gap-[6px] rounded-full bg-[#F9FBF5] px-[20px] py-[10px] font-sans text-[14px] font-medium leading-[20px] tracking-[0px] text-[#000000] transition-colors hover:bg-neutral-100">
            Browse All Greece Routes <ArrowUpRight size={14} />
          </button>
        </div>

        {/* Flight Cards Grid (Re-used structure) */}
        <div className="grid w-full max-w-[1200px] grid-cols-1 gap-[24px] sm:grid-cols-2 lg:grid-cols-4">
          {POPULAR_FLIGHTS.map((flight, i) => (
            <div
              key={i}
              className="flex h-[364px] flex-col overflow-hidden rounded-[24px] border border-[#E6E6E6] bg-[#FFFFFF] shadow-[0_4px_12px_rgba(0,0,0,0.04)] transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="relative h-[140px] w-full shrink-0 overflow-hidden bg-neutral-100">
                <Image src={flight.image} alt={flight.city} fill className="object-cover" />
                <div className="absolute left-[12px] top-[12px] flex items-center justify-center rounded-[20px] bg-[#FFFFFF] px-[10px] py-[6px]">
                  <span className="text-[24px] leading-none">{flight.emoji}</span>
                </div>
              </div>

              <div className="flex w-full flex-col gap-[12px] p-[20px]">
                <div className="flex w-full flex-col gap-[4px]">
                  <h3 className="font-sans text-[24px] font-medium leading-[24px] text-[#000000]">
                    {flight.city}
                  </h3>
                  <p className="font-sans text-[14px] font-normal leading-[20px] tracking-[0px] text-[#7D7D7D]">
                    {flight.route}
                  </p>
                </div>
                <div className="flex h-[24px] w-full items-center justify-between">
                  <p className="font-sans text-[24px] font-medium leading-[24px] text-[#212121]">
                    {flight.price}
                  </p>
                  <div className="flex items-center gap-[4px] rounded-[6px] border border-[#E6E6E6] bg-[#F9FBF5] px-[8px] py-[4px]">
                    <Plane size={16} className="text-[#00529C]" />
                    <span className="font-sans text-[12px] font-medium leading-[16px] tracking-[0px] text-[#000000]">
                      {flight.airline}
                    </span>
                  </div>
                </div>
                <div className="flex h-[20px] items-center gap-[6px]">
                  <Clock size={14} className="text-[#7D7D7D]" />
                  <span className="font-sans text-[14px] font-normal leading-[20px] tracking-[0px] text-[#7D7D7D]">
                    {flight.duration}
                  </span>
                </div>
              </div>

              <div className="mt-auto px-[20px] pb-[20px] pt-0">
                <button className="flex h-[48px] w-full items-center justify-center gap-[8px] rounded-[12px] bg-[#FDDB32] transition-colors hover:bg-[#e5c52c]">
                  <span className="font-sans text-[14px] font-medium leading-[20px] tracking-[0px] text-[#000000]">
                    View Flights
                  </span>
                  <ArrowUpRight size={14} className="text-[#000000]" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =====================================================================
   THINGS TO DO SECTION
===================================================================== */

function TopThingsToDoSection() {
  return (
    <section className="w-full bg-[#000000] py-[80px] lg:py-[120px]">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col px-[20px] lg:px-[160px]">
        
        <h2 className="mb-[48px] font-sans text-[48px] font-medium leading-[48px] tracking-[0px] text-[#FFFFFF] max-[768px]:text-[32px]">
          Top Things To Do
        </h2>

        <div className="grid w-full max-w-[1120px] grid-cols-1 gap-[24px] sm:grid-cols-2 lg:grid-cols-4">
          {THINGS_TO_DO.map((item, i) => (
            <div key={i} className="flex h-[292px] flex-col rounded-[24px] bg-[#FFFFFF] p-[6px] transition-transform duration-300 hover:-translate-y-1">
              <div className="relative h-[200px] w-full shrink-0 overflow-hidden rounded-[20px]">
                <Image src={item.image} alt={item.title} fill className="object-cover" />
              </div>
              <div className="flex flex-col justify-between px-[12px] pb-[12px] pt-[12px]">
                <h3 className="truncate font-sans text-[16px] font-medium leading-[24px] tracking-[0px] text-[#000000]">
                  {item.title}
                </h3>
                <div className="flex items-center justify-between">
                  <span className="font-sans text-[14px] font-normal leading-[20px] tracking-[0px] text-[#7D7D7D]">
                    {item.duration}
                  </span>
                  <span className="font-sans text-[14px] font-medium leading-[20px] tracking-[0px] text-[#000000]">
                    {item.price}
                  </span>
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
   WHERE TO STAY SECTION (HOTELS)
===================================================================== */

function WhereToStaySection() {
  return (
    <section className="w-full bg-[#F9FBF5] py-[80px] lg:py-[120px]">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col px-[20px] lg:px-[160px]">
        
        <h2 className="mb-[48px] font-sans text-[48px] font-medium leading-[48px] tracking-[0px] text-[#000000] max-[768px]:text-[32px]">
          Where To Stay
        </h2>

        <div className="grid w-full max-w-[1120px] grid-cols-1 gap-[24px] md:grid-cols-3">
          {HOTELS.map((hotel, i) => (
            <div key={i} className="flex flex-col rounded-[32px] bg-[#FFFFFF] p-[6px] shadow-sm transition-transform duration-300 hover:-translate-y-1">
              <div className="relative h-[300px] w-full shrink-0 overflow-hidden rounded-[26px]">
                <Image src={hotel.image} alt={hotel.name} fill className="object-cover" />
              </div>
              <div className="flex flex-col gap-[16px] p-[20px]">
                <div className="flex items-center gap-[4px]">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} size={14} className="fill-[#F59E0B] text-[#F59E0B]" strokeWidth={0} />
                  ))}
                  <span className="ml-[4px] font-sans text-[14px] font-medium text-[#F59E0B]">{hotel.rating}</span>
                </div>
                <h3 className="font-sans text-[16px] font-medium leading-[24px] tracking-[0px] text-[#000000]">
                  {hotel.name}
                </h3>
                <div className="flex items-center justify-between">
                  <span className="font-sans text-[16px] font-medium text-[#000000]">{hotel.price} <span className="text-[14px] font-normal text-[#7D7D7D]">/ night</span></span>
                  <button className="rounded-full bg-[#000000] px-[16px] py-[8px] font-sans text-[12px] font-medium leading-[16px] tracking-[0px] text-[#FFFFFF] transition-colors hover:bg-neutral-800">
                    View Details
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
   NEARBY COUNTRIES SECTION
===================================================================== */

function NearbyCountriesSection() {
  return (
    <section className="w-full bg-[#000000] py-[80px] lg:py-[96px]">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col px-[20px] lg:px-[120px]">
        
        <div className="mb-[56px] flex flex-col gap-[12px]">
          <h2 className="font-sans text-[48px] font-medium leading-[48px] tracking-[0px] text-[#FFFFFF] max-[768px]:text-[32px]">
            Explore Nearby Countries
          </h2>
          <p className="font-sans text-[16px] font-normal leading-[24px] tracking-[0px] text-[#F9FBF5]">
            Add more destinations to your itinerary with these fantastic nearby escapes.
          </p>
        </div>

        <div className="grid w-full max-w-[1200px] grid-cols-1 gap-[24px] sm:grid-cols-2 lg:grid-cols-4">
          {NEARBY_COUNTRIES.map((dest, i) => (
            <DestinationCard key={i} item={dest} />
          ))}
        </div>

      </div>
    </section>
  );
}

/* =====================================================================
   TRAVEL HELP (FAQ) SECTION
===================================================================== */

function TravelHelpSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="w-full bg-[#F9F8F5] py-[80px] lg:py-[120px]">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-[64px] px-[20px] lg:flex-row lg:items-start lg:px-[160px]">
        
        {/* Left Col */}
        <div className="flex flex-1 flex-col gap-[12px]">
          <h2 className="font-sans text-[48px] font-medium leading-[48px] tracking-[0px] text-[#000000] max-[768px]:text-[36px]">
            Travel Help
          </h2>
          <p className="font-sans text-[16px] font-normal leading-[24px] tracking-[0px] text-[#000000]">
            Everything you need to know about visiting Greece.
          </p>
        </div>

        {/* Right Col */}
        <div className="flex w-full max-w-[800px] flex-col gap-[24px]">
          {FAQS.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} className="flex flex-col gap-[12px] border-b border-[#E6E6E6] pb-[24px]">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between text-left"
                >
                  <span className="font-sans text-[16px] font-medium leading-[24px] tracking-[0px] text-[#000000]">
                    {faq.q}
                  </span>
                  <span className="flex shrink-0 text-[#000000]">
                    {isOpen ? <ChevronDown size={20} className={`transform transition-transform ${isOpen ? "rotate-180" : ""}`} /> : <ChevronDown size={20} />}
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
   NEWSLETTER SECTION
===================================================================== */

function NewsletterSection() {
  return (
    <section className="w-full bg-[#FFFFFF] py-[80px]">
      <div className="mx-auto w-full max-w-[1440px] px-[20px] lg:px-[160px]">
        <div className="mx-auto flex w-full max-w-[1120px] flex-col items-center justify-center rounded-[42px] bg-[#FDDB32] p-[40px] text-center lg:h-[328px] lg:p-[64px]">
          <h2 className="font-sans text-[48px] font-medium leading-[48px] tracking-[0px] text-[#000000] max-[768px]:text-[32px]">
            Get Greece Travel Deals
          </h2>
          <p className="mt-[16px] max-w-[600px] font-sans text-[16px] font-normal leading-[24px] tracking-[0px] text-[#000000]">
            Sign up to our newsletter and be the first to know about cheap flights and hotel offers.
          </p>

          <form className="mt-[32px] flex w-full max-w-[500px] flex-col gap-[12px] sm:flex-row">
            <input
              type="email"
              placeholder="Email Address"
              className="h-[56px] flex-1 rounded-full px-[24px] font-sans text-[16px] text-[#000000] focus:outline-none"
            />
            <button
              type="submit"
              className="flex h-[56px] shrink-0 items-center justify-center rounded-full bg-[#000000] px-[32px] font-sans text-[16px] font-medium leading-[24px] tracking-[0px] text-[#FFFFFF] transition-colors hover:bg-neutral-800"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

/* =====================================================================
   PAGE EXPORT
===================================================================== */

export default function DiscoverGreecePage() {
  return (
    <main className="flex min-h-screen w-full flex-col bg-[#FFFFFF]">
      <HeroSection />
      <InfoBarSection />
      <AboutSection />
      <DestinationsSection />
      <PopularFlightsSection />
      <TopThingsToDoSection />
      <WhereToStaySection />
      <NearbyCountriesSection />
      <TravelHelpSection />
      <NewsletterSection />
      <Footer />
    </main>
  );
}