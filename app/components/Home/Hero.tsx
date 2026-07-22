'use client';

import Image from "next/image";
import { Star, ArrowUpRight } from "lucide-react";
import SearchWidget from "./SearchWidget";

/* ----------------------------------------------------------------
   DESKTOP
---------------------------------------------------------------- */

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

        {/* Main Heading - Display XXL: 110px, 98px line-height, -5px letter spacing */}
        <h1 className="font-sans text-[72px] font-medium leading-none tracking-[-2px] text-black xl:text-[110px] xl:leading-[98px] xl:tracking-[-5px]">
          <span className="block">Compare Flights, Hotels</span>
          <span className="block">&amp; Travel Deals</span>
        </h1>

        {/* Two-Column Layout */}
        <div className="mt-[28px] flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">

          {/* Left Column (Paragraph & Button) */}
          <div className="flex max-w-[330px] transform -translate-y-4 flex-col items-start gap-[10px]">
            {/* Paragraph Text - Title S: 14px, Medium, 20px leading, -0.28px tracking */}
            <p className="font-sans text-[14px] font-medium leading-[20px] tracking-[-0.28px] text-black">
              Compare flight prices, hotels, and holiday deals from trusted travel providers. Search hundreds of booking sites in seconds and find the best option for your next trip.
            </p>
            <button className="group flex h-[42px] items-center gap-[10px] rounded-[14px] border border-[#e6e6e6] bg-white px-[18px] font-sans text-[14px] font-medium leading-[1.43] text-black transition-all hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(0,0,0,0.10)]">
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
                  <div className="flex items-baseline gap-[4px]">
                    <span className="font-sans text-[16px] font-medium leading-[1.5] text-black">4.9</span>
                    <span className="font-sans text-[14px] font-normal leading-[1.43] text-black">/ 5</span>
                  </div>
                </div>
                {/* Body M: 14px, Regular, 143% */}
                <p className="mt-[2px] w-[215px] font-sans text-[14px] font-medium leading-[1.43] text-black">
                  Compare live prices from trusted airlines and travel websites.
                </p>
              </div>
            </div>

            {/* "from 500+ Travel Sites" Heading - Display XXL: 110px, 98px line-height, -5px letter spacing */}
            <h2 className="font-sans text-[72px] font-medium leading-none tracking-[-2px] text-black lg:text-right xl:text-[110px] xl:leading-[98px] xl:tracking-[-5px]">
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

/* ----------------------------------------------------------------
   MOBILE
---------------------------------------------------------------- */

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
        <h1 className="w-[352px] max-w-full font-sans text-[48px] font-medium leading-none tracking-[-1px] text-white">
          <span className="block">Compare Cheap</span>
          <span className="block">Flights &amp; Hotels</span>
          <span className="block">from 500+</span>
          <span className="block">Travel Sites</span>
        </h1>

        {/* Paragraph Text - Title S: 14px, Medium, 20px leading, -0.28px tracking */}
        <p className="mt-[16px] max-w-[300px] font-sans text-[14px] font-medium leading-[20px] tracking-[-0.28px] text-white/90">
          Unrivaled expertise for unique travel experiences. We're here to take you there dream travels!
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

/* ----------------------------------------------------------------
   EXPORT — renders both, CSS breakpoint decides which shows
---------------------------------------------------------------- */

export default function Hero() {
  return (
    <>
      <HeroMobile />
      <HeroDesktop />
    </>
  );
}