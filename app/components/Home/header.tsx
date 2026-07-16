'use client';

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 px-6 lg:px-10 py-6">
      <div className="mx-auto flex w-full max-w-[1216px] items-center gap-[24px] rounded-[20px] bg-[#f5f5f5] p-[12px]">

        {/* Logo */}
        <Link href="/" className="flex shrink-0 items-center">
          <Image src="/assets/logo.svg" alt="TravelMommy" width={72} height={30} className="h-[30px] w-auto" />
        </Link>

        {/* Nav */}
        <nav className="flex flex-1 items-center justify-end gap-[4px]">
          <Link
            href="#"
            className="flex h-[40px] items-center rounded-[14px] px-[16px] text-[14px] font-medium leading-[20px] tracking-[-0.02em] text-black transition-colors hover:bg-white"
          >
            Flights
          </Link>
          <Link
            href="#"
            className="flex h-[40px] items-center rounded-[14px] px-[16px] text-[14px] font-medium leading-[20px] tracking-[-0.02em] text-black transition-colors hover:bg-white"
          >
            Hotels
          </Link>
          <Link
            href="#"
            className="flex h-[40px] items-center rounded-[14px] px-[16px] text-[14px] font-medium leading-[20px] tracking-[-0.02em] text-black transition-colors hover:bg-white"
          >
            Destinations
          </Link>
          <Link
            href="#"
            className="flex h-[40px] items-center rounded-[14px] px-[16px] text-[14px] font-medium leading-[20px] tracking-[-0.02em] text-black transition-colors hover:bg-white"
          >
            About
          </Link>

          <div className="w-[6px]" />

          <button
            className="relative flex h-[40px] min-w-[100px] items-center justify-center gap-[10px] rounded-[14px] bg-[#fddb32] px-[18px] text-[14px] font-medium leading-[20px] tracking-[-0.02em] text-black shadow-[0px_16px_8px_0px_rgba(31,31,31,0.01),0px_12px_6px_0px_rgba(31,31,31,0.04),0px_4px_4px_0px_rgba(31,31,31,0.07),0px_1.5px_3px_0px_rgba(31,31,31,0.08),0px_0px_0px_1px_#c29700] transition-all hover:brightness-105"
          >
            Search Deals
            <ArrowUpRight size={14} />
            <span className="pointer-events-none absolute inset-0 rounded-[inherit] shadow-[inset_0px_1px_2px_0px_rgba(255,255,255,0.12)]" />
          </button>
        </nav>
      </div>
    </header>
  );
}