'use client';

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const guides = [
  { 
    date: "June 12, 2026", 
    title: "Best Time to Visit Bali", 
    image: "https://images.unsplash.com/photo-1537522515082-f5f458117769?q=80&w=1200&auto=format&fit=crop", 
    large: true 
  },
  { 
    date: "May 28, 2026", 
    title: "How to Find Cheap Flights", 
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800&auto=format&fit=crop", 
    large: false 
  },
  { 
    date: "May 15, 2026", 
    title: "Paris Travel Guide", 
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=800&auto=format&fit=crop", 
    large: false 
  },
];

export default function TravelGuides() {
  return (
    <section className="w-full bg-[#ffffff] py-[80px] text-[#000000]">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col px-[32px] max-[430px]:px-4">
        
        {/* Section Heading - Display L: 48px, Medium, 100% (Desktop) | Title L: 24px (Mobile) */}
        <h2 className="mb-[48px] text-center font-sans text-[48px] font-medium leading-none text-[#000000] max-[768px]:text-[24px]">
          Featured Travel Guides
        </h2>

        {/* Grid Layout */}
        <div className="grid w-full grid-cols-1 gap-[24px] md:grid-cols-4">
          {guides.map((guide, i) => (
            <div 
              key={i} 
              className={`group flex cursor-pointer flex-col ${guide.large ? 'md:col-span-2' : 'md:col-span-1'}`}
            >
              {/* Image Container */}
              <div className="relative mb-[16px] h-[400px] w-full overflow-hidden rounded-[24px] bg-neutral-100 max-[768px]:h-[300px]">
                <Image 
                  src={guide.image} 
                  alt={guide.title} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105" 
                />
                
                {/* Top Right Hover Icon */}
                <div className="absolute right-5 top-5 flex h-[36px] w-[36px] items-center justify-center rounded-full bg-white shadow-sm transition-transform duration-300 group-hover:scale-110">
                  <ArrowUpRight size={18} strokeWidth={2.5} className="text-[#000000]" />
                </div>
              </div>

              {/* Text Content */}
              <div className="flex flex-col px-1">
                {/* Date - Title XS: 12px, Medium, 133% */}
                <span className="mb-[6px] font-sans text-[12px] font-medium leading-[1.33] text-[#777777]">
                  {guide.date}
                </span>
                
                {/* Guide Title 
                    Large Card -> Title L: 24px, Medium, 100% 
                    Small Card -> Title M: 16px, Medium, 150% 
                */}
                <h3 className={`font-sans font-medium text-[#000000] ${guide.large ? 'text-[24px] leading-none' : 'text-[16px] leading-[1.5]'}`}>
                  {guide.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Button */}
        <div className="mt-[48px] flex justify-center">
          {/* Button - Title S: 14px, Medium, 143% */}
          <button className="flex h-[44px] items-center gap-2 rounded-full bg-[#FDDB32] px-[28px] font-sans text-[14px] font-medium leading-[1.43] text-[#000000] transition-colors hover:bg-[#e5c52c]">
            View All Guides
            <ArrowUpRight size={16} strokeWidth={2.5} className="text-[#000000]" />
          </button>
        </div>

      </div>
    </section>
  );
}