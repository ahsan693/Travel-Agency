'use client';

import Image from "next/image";
import { Plane, Hotel, ArrowUpRight } from "lucide-react";

const destinations = [
  { 
    city: "Paris, France", 
    tagline: "The City of Light", 
    image: "https://images.unsplash.com/photo-1431274172761-fca41d930114?auto=format&w=800&q=80&fit=crop" 
  },
  { 
    city: "Barcelona, Spain", 
    tagline: "Modernism & beaches", 
    image: "https://images.pexels.com/photos/16984552/pexels-photo-16984552.jpeg?auto=compress&cs=tinysrgb&w=800&q=80" 
  },
  { 
    city: "Dubai, UAE", 
    tagline: "Luxury & desert dunes", 
    image: "https://images.pexels.com/photos/31566720/pexels-photo-31566720.jpeg?auto=compress&cs=tinysrgb&w=800&q=80" 
  },
  { 
    city: "Bali, Indonesia", 
    tagline: "Island paradise & temples", 
    image: "https://images.unsplash.com/photo-1573790387438-4da905039392?auto=format&w=800&q=80&fit=crop" 
  },
];

export default function Destinations() {
  return (
    <section className="w-full bg-[#ffffff] py-[80px] text-[#111827]">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col px-[32px] max-[430px]:px-4">
        
        {/* Header Section */}
        <div className="mb-[48px] flex items-start justify-between gap-8 max-[768px]:flex-col max-[768px]:items-stretch">
          <div className="flex max-w-[700px] flex-col gap-[10px]">
            <h2 className="font-sans text-[36px] font-bold leading-tight tracking-tight text-[#111827] max-[768px]:text-[28px] max-[480px]:text-[24px]">
              Discover Your Next Destination
            </h2>
            <p className="font-sans text-[14px] leading-[1.6] text-[#6B7280]">
              Discover popular cities and compare flights and hotels before you book.
            </p>
          </div>
          
          <button className="inline-flex h-[44px] shrink-0 items-center gap-2 rounded-full bg-[#FDDB32] px-[24px] text-[14px] font-semibold text-[#111827] transition-colors hover:bg-[#e5c52c] max-[768px]:self-start">
            More Destinations
            <ArrowUpRight size={16} strokeWidth={2.5} />
          </button>
        </div>

        {/* Cards Grid - 4 Columns */}
        <div className="grid w-full grid-cols-1 gap-[24px] md:grid-cols-2 lg:grid-cols-4">
          {destinations.map((dest, i) => (
            <div 
              key={i} 
              // Explicit 474px height matching Figma auto-layout spec
              className="group flex h-[474px] flex-col overflow-hidden rounded-[24px] border border-[#E5E7EB] bg-[#ffffff] shadow-[0_4px_20px_rgba(0,0,0,0.04)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)]"
            >
              {/* Image Header - Fixed height leaving exact room for content */}
              <div className="relative h-[220px] w-full shrink-0 overflow-hidden bg-[#F3F4F6]">
                <Image 
                  src={dest.image} 
                  alt={dest.city} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105" 
                />
                <div className="absolute left-[16px] top-[16px] rounded-full bg-[#ffffff] px-[14px] py-[6px] font-sans text-[11px] font-bold tracking-wide text-[#111827] shadow-sm">
                  Popular
                </div>
              </div>

              {/* Card Body */}
              <div className="flex flex-1 flex-col p-[24px]">
                
                {/* Title & Tagline */}
                <h3 className="font-sans text-[20px] font-bold leading-tight text-[#111827]">
                  {dest.city}
                </h3>
                <p className="mt-[6px] font-sans text-[13px] font-medium text-[#6B7280]">
                  {dest.tagline}
                </p>

                {/* Pills List */}
                <div className="mt-[24px] flex flex-col gap-[10px]">
                  <div className="flex w-fit items-center gap-[8px] rounded-full border border-[#E5E7EB] bg-[#ffffff] px-[14px] py-[8px]">
                    <Plane size={14} strokeWidth={2.5} className="text-[#111827]" />
                    <span className="font-sans text-[12px] font-bold text-[#111827]">
                      Flights from €38
                    </span>
                  </div>
                  <div className="flex w-fit items-center gap-[8px] rounded-full border border-[#E5E7EB] bg-[#ffffff] px-[14px] py-[8px]">
                    <Hotel size={14} strokeWidth={2.5} className="text-[#111827]" />
                    <span className="font-sans text-[12px] font-bold text-[#111827]">
                      Hotels from €94/night
                    </span>
                  </div>
                </div>

                {/* Explore Button - Pinned to bottom */}
                <div className="mt-auto">
                  <button className="flex h-[44px] w-full items-center justify-center gap-2 rounded-[14px] bg-[#FDDB32] font-sans text-[14px] font-bold text-[#111827] transition-colors duration-200 hover:bg-[#e5c52c]">
                    Explore
                    <ArrowUpRight size={16} strokeWidth={2.5} />
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