'use client';

import Image from "next/image";
import Link from "next/link";
import { Star, MapPin, Calendar, Clock, ArrowUpRight } from "lucide-react";

const hotels = [
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
    image: "https://images.unsplash.com/photo-1460627390041-532a28402358?auto=format&w=800&q=80&fit=crop",
    tagColor: "#C050A0" // Pink from palette
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
    image: "https://images.unsplash.com/photo-1612899326681-66508905b4ce?auto=format&w=800&q=80&fit=crop",
    tagColor: "#C06020" // Orange from palette
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
    image: "https://images.pexels.com/photos/23696832/pexels-photo-23696832.jpeg?auto=compress&cs=tinysrgb&w=800&q=80",
    tagColor: "#A08010" // Dark Gold/Yellow from palette
  },
];

const filterTags = ["All", "Luxury", "Budget", "Family", "Beach", "Business", "Boutique"];

export default function HotelDeals() {
  return (
    <section className="w-full bg-[#000000] py-[80px] text-[#ffffff]">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col px-[32px] max-[430px]:px-4">

        {/* =========================================
            HEADER SECTION — DESKTOP ONLY
            ========================================= */}
        <div className="mb-[48px] hidden flex-col lg:flex">
          {/* Display L: 48px, Medium, 100% */}
          <h2 className="mb-[16px] font-sans text-[48px] font-medium leading-none text-[#ffffff]">
            Find Great Hotel Deals
          </h2>
          {/* Body L: 16px, Regular, 150% */}
          <p className="mb-[32px] max-w-[700px] font-sans text-[16px] font-normal leading-[1.5] text-white/60">
            Compare hotel prices from trusted booking partners and find great places to stay around the world.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-[10px]">
            {filterTags.map((tag, i) => (
              <button 
                key={tag} 
                // Title S: 14px, Medium, 143%
                className={`rounded-full px-[24px] py-[10px] font-sans text-[14px] font-medium leading-[1.43] transition-colors duration-200 
                  ${i === 0 
                    ? 'bg-[#FDDB32] text-[#000000]' 
                    : 'bg-[#ffffff] text-[#000000] hover:bg-[#FDDB32]'
                  }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* =========================================
            CARDS GRID — DESKTOP ONLY
            ========================================= */}
        <div className="hidden w-full grid-cols-1 gap-[24px] md:grid-cols-2 lg:grid lg:grid-cols-3">
          {hotels.map((hotel, i) => (
            <div 
              key={i} 
              className="group flex h-[527px] flex-col overflow-hidden rounded-[24px] bg-[#ffffff] pb-[10px] shadow-[0_4px_20px_rgba(0,0,0,0.1)] transition-transform duration-300 hover:-translate-y-1"
            >
              {/* Image Header */}
              <div className="relative h-[200px] w-full shrink-0 overflow-hidden bg-neutral-900">
                <Image 
                  src={hotel.image} 
                  alt={hotel.name} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105" 
                />
                
                {/* Popular Badge - Title XS: 12px, Medium, 133% */}
                <div className="absolute left-[16px] top-[16px] rounded-full bg-white px-[12px] py-[6px] font-sans text-[12px] font-medium leading-[1.33] text-[#000000] shadow-sm">
                  Popular
                </div>
                
                <div className="absolute right-[16px] top-[16px] flex h-[36px] w-[36px] items-center justify-center rounded-full bg-[#FDDB32] shadow-md transition-transform duration-300 group-hover:scale-110">
                  <ArrowUpRight size={18} strokeWidth={2.5} className="text-[#000000]" />
                </div>
              </div>

              {/* Card Body */}
              <div className="flex flex-1 flex-col gap-[12px] p-[14px]">
                
                {/* Rating & Compare Row */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-[6px]">
                    <div className="flex text-[#111111]">
                      {Array.from({ length: 5 }).map((_, j) => (
                        <Star key={j} size={14} fill="currentColor" stroke="none" />
                      ))}
                    </div>
                    <div className="flex items-baseline font-sans">
                      {/* Title S: 14px, Medium, 143% */}
                      <span className="text-[14px] font-medium leading-[1.43] text-[#E2BC1B]">{hotel.rating}</span>
                      {/* Body M: 14px, Regular, 143% */}
                      <span className="text-[14px] font-normal leading-[1.43] text-[#777777]">{hotel.maxRating}</span>
                    </div>
                  </div>
                  {/* Compare Link - Title XS: 12px, Medium, 133% */}
                  <Link href="#" className="font-sans text-[12px] font-medium leading-[1.33] uppercase text-[#111111] transition-colors hover:text-[#555555]">
                    Compare Prices ↗
                  </Link>
                </div>

                {/* Title L: 24px, Medium, 100% */}
                <h3 className="font-sans text-[24px] font-medium leading-none text-[#000000]">
                  {hotel.name}
                </h3>

                {/* Body M: 14px, Regular, 143% */}
                <div className="flex items-center gap-[6px] font-sans text-[14px] font-normal leading-[1.43] text-[#777777]">
                  <MapPin size={15} strokeWidth={2.5} className="text-[#777777]" />
                  {hotel.location}
                </div>

                {/* Tags - Title XS: 12px, Medium, 133% */}
                <div className="flex flex-wrap gap-[8px]">
                  {hotel.tags.map(tag => (
                    <span 
                      key={tag} 
                      style={{ 
                        color: hotel.tagColor, 
                        borderColor: `${hotel.tagColor}50`, 
                        backgroundColor: 'transparent'
                      }}
                      className="rounded-full border px-[12px] py-[3px] font-sans text-[12px] font-medium leading-[1.33]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Details List - Body M: 14px, Regular, 143% */}
                <div className="flex flex-col gap-[8px] border-t border-[#F3F4F6] pt-[12px]">
                  <div className="flex items-center gap-[12px] font-sans text-[14px] font-normal leading-[1.43] text-[#777777]">
                    <Calendar size={16} strokeWidth={2.5} className="text-[#999999]" />
                    <span>Check-in: {hotel.checkin}</span>
                  </div>
                  <div className="flex items-center gap-[12px] font-sans text-[14px] font-normal leading-[1.43] text-[#777777]">
                    <MapPin size={16} strokeWidth={2.5} className="text-[#999999]" />
                    <span>{hotel.location}</span>
                  </div>
                  <div className="flex items-center gap-[12px] font-sans text-[14px] font-normal leading-[1.43] text-[#777777]">
                    <Clock size={16} strokeWidth={2.5} className="text-[#999999]" />
                    <span>Check-out: {hotel.checkout}</span>
                  </div>
                </div>

                {/* Footer */}
                <div className="mt-auto flex items-center justify-between border-t border-[#F3F4F6] pt-[12px]">
                  <div className="flex flex-col">
                    {/* Title XS: 12px, Medium, 133% */}
                    <p className="font-sans text-[12px] font-medium leading-[1.33] uppercase text-[#777777]">
                      Start from
                    </p>
                    <div className="flex items-baseline gap-[4px]">
                      {/* Title L: 24px, Medium, 100% */}
                      <span className="font-sans text-[24px] font-medium leading-none text-[#000000]">
                        {hotel.price}
                      </span>
                      {/* Body M: 14px, Regular, 143% */}
                      <span className="font-sans text-[14px] font-normal leading-[1.43] text-[#777777]">
                        {hotel.unit}
                      </span>
                    </div>
                  </div>
                  {/* Title S: 14px, Medium, 143% */}
                  <button className="flex h-[42px] items-center justify-center rounded-xl bg-[#FDDB32] px-[22px] font-sans text-[14px] font-medium leading-[1.43] text-[#000000] transition-colors duration-200 hover:bg-[#e5c52c]">
                    Book Now
                  </button>
                </div>
                
              </div>
            </div>
          ))}
        </div>

        {/* =========================================
            MOBILE VIEW (lg:hidden)
            ========================================= */}
        <div className="flex w-full flex-col gap-[40px] pt-[64px] pb-[80px] px-[20px] lg:hidden">

          {/* Mobile Header + Filters */}
          <div className="flex flex-col gap-[16px]">
            {/* Title L: 24px, Medium, 100% */}
            <h2 className="font-sans text-[24px] font-medium leading-none text-white">
              Find Great Hotel Deals
            </h2>
            {/* Body M: 14px, Regular, 143% */}
            <p className="font-sans text-[14px] font-normal leading-[1.43] text-white/60">
              Compare hotel prices from trusted booking partners and find great places to stay around the world.
            </p>

            <div className="flex flex-wrap gap-[10px] mt-[4px]">
              {filterTags.map((tag, i) => (
                <button
                  key={tag}
                  // Title S: 14px, Medium, 143%
                  className={`rounded-full px-[20px] py-[9px] font-sans text-[14px] font-medium leading-[1.43] transition-colors duration-200
                    ${i === 0
                      ? 'bg-[#FDDB32] text-[#000000]'
                      : 'bg-[#ffffff] text-[#000000]'
                    }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile Cards Stack */}
          <div className="flex w-full flex-col gap-[24px]">
            {hotels.map((hotel, i) => (
              <div
                key={i}
                className="flex h-[527px] w-full flex-col overflow-hidden rounded-[24px] bg-[#ffffff] pb-[10px] shadow-[0_4px_20px_rgba(0,0,0,0.1)]"
              >
                {/* Image */}
                <div className="relative h-[200px] w-full shrink-0 overflow-hidden bg-neutral-900">
                  <Image
                    src={hotel.image}
                    alt={hotel.name}
                    fill
                    className="object-cover"
                  />
                  {/* Title XS: 12px, Medium, 133% */}
                  <div className="absolute left-[14px] top-[14px] rounded-full bg-white px-[12px] py-[6px] font-sans text-[12px] font-medium leading-[1.33] text-[#000000] shadow-sm">
                    Popular
                  </div>
                  <div className="absolute right-[14px] top-[14px] flex h-[32px] w-[32px] items-center justify-center rounded-full bg-[#FDDB32] shadow-md">
                    <ArrowUpRight size={16} strokeWidth={2.5} className="text-[#000000]" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-[14px]">

                  {/* Rating & Compare Row */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-[6px]">
                      <div className="flex text-[#111111]">
                        {Array.from({ length: 5 }).map((_, j) => (
                          <Star key={j} size={13} fill="currentColor" stroke="none" />
                        ))}
                      </div>
                      <div className="flex items-baseline font-sans">
                        {/* Title S: 14px, Medium, 143% */}
                        <span className="text-[14px] font-medium leading-[1.43] text-[#E2BC1B]">{hotel.rating}</span>
                        {/* Body M: 14px, Regular, 143% */}
                        <span className="text-[14px] font-normal leading-[1.43] text-[#777777]">{hotel.maxRating}</span>
                      </div>
                    </div>
                    {/* Title XS: 12px, Medium, 133% */}
                    <Link href="#" className="font-sans text-[12px] font-medium leading-[1.33] uppercase text-[#111111]">
                      Compare Prices ↗
                    </Link>
                  </div>

                  {/* Title L: 24px, Medium, 100% */}
                  <h3 className="mt-[10px] font-sans text-[24px] font-medium leading-none text-[#000000]">
                    {hotel.name}
                  </h3>

                  {/* Body M: 14px, Regular, 143% */}
                  <div className="mt-[6px] flex items-center gap-[6px] font-sans text-[14px] font-normal leading-[1.43] text-[#777777]">
                    <MapPin size={13} strokeWidth={2.5} className="text-[#777777]" />
                    {hotel.location}
                  </div>

                  {/* Tags - Title XS: 12px, Medium, 133% */}
                  <div className="mt-[10px] flex flex-wrap gap-[6px]">
                    {hotel.tags.map(tag => (
                      <span
                        key={tag}
                        style={{
                          color: hotel.tagColor,
                          borderColor: `${hotel.tagColor}50`,
                          backgroundColor: 'transparent'
                        }}
                        className="rounded-full border px-[10px] py-[3px] font-sans text-[12px] font-medium leading-[1.33]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Details List - Body M: 14px, Regular, 143% */}
                  <div className="mt-[14px] flex flex-col gap-[7px] border-t border-[#F3F4F6] pt-[12px]">
                    <div className="flex items-center gap-[10px] font-sans text-[14px] font-normal leading-[1.43] text-[#777777]">
                      <Calendar size={14} strokeWidth={2.5} className="text-[#999999]" />
                      <span>Check-in: {hotel.checkin}</span>
                    </div>
                    <div className="flex items-center gap-[10px] font-sans text-[14px] font-normal leading-[1.43] text-[#777777]">
                      <MapPin size={14} strokeWidth={2.5} className="text-[#999999]" />
                      <span>{hotel.location}</span>
                    </div>
                    <div className="flex items-center gap-[10px] font-sans text-[14px] font-normal leading-[1.43] text-[#777777]">
                      <Clock size={14} strokeWidth={2.5} className="text-[#999999]" />
                      <span>Check-out: {hotel.checkout}</span>
                    </div>
                  </div>

                  {/* Footer (Price & CTA) */}
                  <div className="mt-auto flex items-center justify-between border-t border-[#F3F4F6] pt-[12px]">
                    <div className="flex flex-col">
                      {/* Title XS: 12px, Medium, 133% */}
                      <p className="font-sans text-[12px] font-medium leading-[1.33] uppercase text-[#777777]">
                        Start from
                      </p>
                      <div className="flex items-baseline gap-[4px]">
                        {/* Title L: 24px, Medium, 100% */}
                        <span className="font-sans text-[24px] font-medium leading-none text-[#000000]">
                          {hotel.price}
                        </span>
                        {/* Body M: 14px, Regular, 143% */}
                        <span className="font-sans text-[14px] font-normal leading-[1.43] text-[#777777]">
                          {hotel.unit}
                        </span>
                      </div>
                    </div>
                    {/* Title S: 14px, Medium, 143% */}
                    <button className="flex h-[40px] items-center justify-center rounded-xl bg-[#FDDB32] px-[20px] font-sans text-[14px] font-medium leading-[1.43] text-[#000000]">
                      Book Now
                    </button>
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