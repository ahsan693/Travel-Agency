'use client';

import Image from "next/image";
import { Star, ArrowUpRight } from "lucide-react";
import SearchWidget from "./SearchWidget";

export default function Hero() {
  return (
    <section className="relative flex min-h-[820px] flex-col items-center overflow-hidden pt-[100px]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/Homepage/Section 1/Header Images/526214caf79a7211f2ad2806141f3fa8.jpg"
          alt="Hero background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex w-full max-w-[1280px] flex-col px-8 pb-[48px] pt-[28px]">

        {/* Main Heading */}
        <h1 className="font-sans text-[clamp(2.5rem,7vw,6rem)] font-semibold leading-[0.9] tracking-[-0.045em] text-black">
          <span className="block">Compare Flights, Hotels</span>
          <span className="block">&amp; Travel Deals</span>
        </h1>

        {/* Two-Column Layout */}
        <div className="mt-[28px] flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">

          {/* Left Column (Paragraph & Button) */}
          <div className="flex max-w-[330px] flex-col items-start gap-[18px]">
            <p className="font-sans text-[14px] font-medium leading-[20px] tracking-[-0.02em] text-black">
              Compare flight prices, hotels, and holiday deals from trusted travel providers. Search hundreds of booking sites in seconds and find the best option for your next trip.
            </p>
            <button className="group flex h-[42px] items-center gap-[10px] rounded-[14px] border border-[#e6e6e6] bg-white px-[18px] text-[14px] font-medium leading-[20px] tracking-[-0.02em] text-black transition-all hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(0,0,0,0.10)]">
              Compare Flights
              <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          {/* Right Column (Reviews & Huge Text) */}
          <div className="flex flex-col items-start gap-[18px] lg:items-end">

            {/* Reviews Block */}
            <div className="flex items-end gap-[14px]">
              {/* Avatars */}
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

              {/* Review Text */}
              <div className="flex flex-col justify-center text-left">
                <div className="flex items-center gap-[8px]">
                  <div className="flex gap-px text-[#fddb32]">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={11} fill="currentColor" stroke="none" />
                    ))}
                  </div>
                  <div className="flex items-end gap-[2px]">
                    <span className="font-sans text-[16px] font-semibold leading-[24px] tracking-[-0.02em] text-black">4.9</span>
                    <span className="font-sans text-[14px] font-medium leading-[20px] tracking-[-0.02em] text-black">/ 5</span>
                  </div>
                </div>
                <p className="mt-[2px] w-[215px] font-sans text-[14px] font-medium leading-[20px] tracking-[-0.02em] text-black">
                  Compare live prices from trusted airlines and travel websites.
                </p>
              </div>
            </div>

            {/* "from 500+ Travel Sites" Heading */}
            <h2 className="font-sans text-[clamp(2.5rem,7vw,6rem)] font-semibold leading-[0.9] tracking-[-0.045em] text-black lg:text-right">
              <span className="block">from 500+</span>
              <span className="block">Travel Sites</span>
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