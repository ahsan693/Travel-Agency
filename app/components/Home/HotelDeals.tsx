'use client';

import Image from "next/image";
import Link from "next/link";
import { Star, MapPin, Calendar, Clock } from "lucide-react";

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

const filterTags = ["All", "Luxury", "Budget", "Family", "Beach", "Business", "Boutique"];

export default function HotelDeals() {
  return (
    <section className="w-full bg-[#000000] py-[80px] lg:py-[160px] text-[#ffffff]">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col px-[20px] lg:px-[112px]">

        {/* =========================================
            HEADER SECTION
            ========================================= */}
        <div className="flex flex-col">
          <div className="flex flex-col gap-[15px]">
            <h2 className="font-sans text-[48px] font-medium leading-[48px] tracking-[0px] text-[#FFFFFF]">
              Find Great Hotel Deals
            </h2>
            <p className="max-w-[700px] font-sans text-[16px] font-normal leading-[24px] tracking-[0px] text-[#FFFFFF]">
              Compare hotel prices from trusted booking partners and find great places to stay around the world.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="mt-[48px] flex flex-wrap gap-[8px]">
            {filterTags.map((tag, i) => (
              <button 
                key={tag} 
                className={`flex h-[44px] items-center justify-center rounded-full font-sans text-[14px] font-medium transition-colors duration-200 
                  ${i === 0 
                    ? 'bg-[#FDDB32] border border-[#FDDB32] px-[20px] py-[6px] text-[#000000]' 
                    : 'bg-[#ffffff] border border-[#E6E6E6] px-[14px] py-[6px] text-[#000000] hover:bg-[#FDDB32] hover:border-[#FDDB32]'
                  }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* =========================================
            CARDS GRID
            ========================================= */}
        <div className="mt-[32px] grid w-full grid-cols-1 gap-[8px] md:grid-cols-2 lg:grid-cols-3">
          {hotels.map((hotel, i) => (
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

