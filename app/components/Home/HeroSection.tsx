'use client';

import { useState } from 'react';
import Header from './header';

export default function HeroSection() {
  const [activeTab, setActiveTab] = useState<'flights' | 'hotels'>('flights');
  const [nearbyLeft, setNearbyLeft] = useState(false);
  const [nearbyRight, setNearbyRight] = useState(true);
  const [directFlights, setDirectFlights] = useState(false);

  return (
    <section className="relative isolate min-h-screen w-full overflow-hidden bg-[radial-gradient(circle_at_88%_78%,rgba(255,186,96,0.62)_0,rgba(255,186,96,0.18)_14%,rgba(255,186,96,0)_34%),radial-gradient(circle_at_14%_18%,rgba(255,255,255,0.92)_0,rgba(255,255,255,0.26)_22%,rgba(255,255,255,0)_44%),linear-gradient(180deg,#b7d7ee_0%,#d8ecf7_36%,#f4eadf_100%)]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-auto -bottom-[9%] -left-[8%] -right-[10%] z-0 h-[54%] bg-[linear-gradient(180deg,rgba(255,255,255,0.18),rgba(255,255,255,0)),linear-gradient(132deg,rgba(255,184,92,0.34)_0%,rgba(250,235,219,0.28)_24%,rgba(225,240,248,0)_58%),linear-gradient(180deg,rgba(86,106,125,0.24)_0%,rgba(36,50,67,0.28)_8%,rgba(255,255,255,0)_18%)] [clip-path:polygon(0_44%,18%_28%,42%_35%,63%_50%,80%_59%,100%_66%,100%_100%,0_100%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-[-8%] z-0 h-[30%] w-[60%] bg-[linear-gradient(180deg,rgba(255,255,255,0),rgba(255,255,255,0.36))] [clip-path:polygon(0_18%,18%_0,100%_55%,100%_100%,0_100%)]"
      />

      <div className="relative z-10 mx-auto box-border max-w-[1376px] px-6 pb-9 pt-6 max-[430px]:px-4 max-[430px]:pb-7 max-[430px]:pt-4">
        <Header />

        <div className="flex items-start justify-between gap-6 pt-[78px] max-[1024px]:pt-12 max-[860px]:flex-col max-[860px]:items-start max-[430px]:pt-7">
          <div className="max-w-[720px] pt-2">
            <h1 className="mb-[26px] max-w-[840px] font-sans text-[clamp(3.25rem,7vw,6.875rem)] font-medium leading-none tracking-[-0.02em] text-[#111111] max-[1024px]:text-[clamp(2.75rem,6vw,4.5rem)] max-[430px]:text-[clamp(2rem,9vw,3rem)] max-[430px]:tracking-[-0.01em]">
              <span className="block">Compare Cheap</span>
              <span className="block">Flights &amp; Hotels</span>
            </h1>

            <p className="mb-[30px] max-w-[360px] text-[16px] leading-[1.45] text-[#171717] max-[430px]:max-w-full max-[430px]:text-[16px]">
              Compare live prices from trusted airlines and hotels in one place.
              Book directly with the provider—zero booking fees from TravelMommy.
            </p>

            <a
              href="#search"
              className="inline-flex items-center gap-2 rounded-[18px] border-0 bg-white px-[22px] py-4 text-sm font-semibold text-[#111111] shadow-[0_10px_24px_rgba(0,0,0,0.13)] transition-transform transition-shadow duration-200 hover:-translate-y-px hover:shadow-[0_12px_28px_rgba(0,0,0,0.18)]"
            >
              Search Flights
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path
                  d="M3 11L11 3M11 3H4M11 3V10"
                  stroke="#111111"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>

          <div className="flex min-h-[510px] w-[min(520px,44vw)] flex-col items-end justify-between pt-[6px] max-[1300px]:min-h-0 max-[1300px]:w-full max-[1300px]:items-start">
            <div className="mb-7 mt-[44px] flex items-center gap-[14px] max-[1300px]:mt-0 max-[1024px]:mb-[18px] max-[430px]:flex-wrap">
              <div className="flex shrink-0">
                <span className="-ml-2 h-8 w-8 rounded-full border-2 border-white bg-[radial-gradient(circle_at_35%_32%,rgba(255,255,255,0.9)_0_14%,rgba(255,255,255,0)_15%),linear-gradient(135deg,#68758a_0%,#27405e_48%,#b86d3d_100%)] first:ml-0" />
                <span className="-ml-2 h-8 w-8 rounded-full border-2 border-white bg-[radial-gradient(circle_at_35%_32%,rgba(255,255,255,0.9)_0_14%,rgba(255,255,255,0)_15%),linear-gradient(135deg,#68758a_0%,#27405e_48%,#b86d3d_100%)] first:ml-0" />
                <span className="-ml-2 h-8 w-8 rounded-full border-2 border-white bg-[radial-gradient(circle_at_35%_32%,rgba(255,255,255,0.9)_0_14%,rgba(255,255,255,0)_15%),linear-gradient(135deg,#68758a_0%,#27405e_48%,#b86d3d_100%)] first:ml-0" />
                <span className="-ml-2 h-8 w-8 rounded-full border-2 border-white bg-[radial-gradient(circle_at_35%_32%,rgba(255,255,255,0.9)_0_14%,rgba(255,255,255,0)_15%),linear-gradient(135deg,#68758a_0%,#27405e_48%,#b86d3d_100%)] first:ml-0" />
              </div>

              <div className="text-left">
                <div className="flex items-baseline gap-1.5">
                  <span className="text-sm tracking-[0.7px] text-[#111111]">★★★★★</span>
                  <span className="text-sm text-[#555555]">4.9/5</span>
                </div>
                <p className="mt-0.5 whitespace-nowrap text-sm text-[#333333] max-[430px]:whitespace-normal">
                  Compare prices from trusted travel partners
                </p>
              </div>
            </div>

            <h2 className="m-0 text-right font-sans text-[clamp(3.25rem,7vw,6.875rem)] font-medium leading-none tracking-[-0.02em] text-[#111111] max-[1300px]:text-left max-[1024px]:text-[clamp(2.75rem,6vw,4.5rem)] max-[430px]:text-[clamp(2rem,9vw,3rem)] max-[430px]:tracking-[-0.01em]">
              <span className="block">from 500+</span>
              <span className="block">Travel Sites</span>
            </h2>
          </div>
        </div>

        <div id="search" className="mt-auto w-[min(1232px,calc(100vw-48px))] max-[1300px]:w-full max-[860px]:mt-7">
          <div className="w-full">
            <div className="relative z-20 flex gap-1 pl-2.5">
              <button
                type="button"
                className={`flex cursor-pointer items-center gap-1.5 rounded-t-[18px] border-0 px-[22px] pb-[14px] pt-[15px] text-[13px] font-semibold ${
                  activeTab === 'flights' ? 'bg-white text-[#111111]' : 'bg-white/90 text-[#8b8f98]'
                }`}
                onClick={() => setActiveTab('flights')}
              >
                <PlaneIcon />
                Flights
              </button>
              <button
                type="button"
                className={`flex cursor-pointer items-center gap-1.5 rounded-t-[18px] border-0 px-[22px] pb-[14px] pt-[15px] text-[13px] font-semibold ${
                  activeTab === 'hotels' ? 'bg-white text-[#111111]' : 'bg-white/90 text-[#8b8f98]'
                }`}
                onClick={() => setActiveTab('hotels')}
              >
                <HotelIcon />
                Hotels
              </button>
            </div>

            <div className="box-border rounded-[24px] border border-white/80 bg-white/95 px-[22px] pb-4 pt-5 shadow-[0_24px_60px_rgba(12,23,40,0.18)] max-[640px]:px-4">
              <div className="flex items-center gap-3 max-[1024px]:flex-wrap max-[640px]:flex-col max-[640px]:items-stretch">
                <div className="flex min-w-0 flex-1 items-center gap-3 rounded-2xl bg-[#f7f7f8] px-4 py-[14px]">
                  <span className="flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-full bg-[rgba(255,198,41,0.24)] text-[#9f7108]">
                    <PlaneIcon />
                  </span>
                  <div className="min-w-0">
                    <span className="block whitespace-nowrap text-[11px] leading-[1.3] text-[#9aa0a6]">Departure</span>
                    <span className="block truncate text-[13px] font-semibold leading-[1.3] text-[#111111]">
                      Dublin (DUB)
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  className="flex h-6 w-6 shrink-0 items-center justify-center border-0 bg-transparent p-0 max-[640px]:self-center max-[640px]:rotate-90"
                  aria-label="Swap origin and destination"
                >
                  <SwapIcon />
                </button>

                <div className="flex min-w-0 flex-1 items-center gap-3 rounded-2xl bg-[#f7f7f8] px-4 py-[14px]">
                  <span className="flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-full bg-[rgba(255,198,41,0.24)] text-[#9f7108]">
                    <PlaneIcon flipped />
                  </span>
                  <div className="min-w-0">
                    <span className="block whitespace-nowrap text-[11px] leading-[1.3] text-[#9aa0a6]">To</span>
                    <span className="block truncate text-[13px] font-normal leading-[1.3] text-[#9aa0a6]">
                      Country, City or air...
                    </span>
                  </div>
                </div>

                <div className="flex min-w-0 flex-1 items-center gap-3 rounded-2xl bg-[#f7f7f8] px-4 py-[14px]">
                  <span className="flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-full bg-[rgba(255,198,41,0.24)] text-[#9f7108]">
                    <CalendarIcon />
                  </span>
                  <div className="min-w-0">
                    <span className="block whitespace-nowrap text-[11px] leading-[1.3] text-[#9aa0a6]">Depart</span>
                    <span className="block truncate text-[13px] font-semibold leading-[1.3] text-[#111111]">
                      08 Nov 2025
                    </span>
                  </div>
                </div>

                <div className="flex min-w-0 flex-1 items-center gap-3 rounded-2xl bg-[#f7f7f8] px-4 py-[14px]">
                  <span className="flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-full bg-[rgba(255,198,41,0.24)] text-[#9f7108]">
                    <CalendarIcon />
                  </span>
                  <div className="min-w-0">
                    <span className="block whitespace-nowrap text-[11px] leading-[1.3] text-[#9aa0a6]">Return</span>
                    <span className="block truncate text-[13px] font-semibold leading-[1.3] text-[#111111]">
                      08 Jan 2026
                    </span>
                  </div>
                </div>

                <div className="flex min-w-0 flex-[1.4_1_0%] items-center gap-3 rounded-2xl bg-[#f7f7f8] px-4 py-[14px]">
                  <span className="flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-full bg-[rgba(255,198,41,0.24)] text-[#9f7108]">
                    <PersonIcon />
                  </span>
                  <div className="min-w-0">
                    <span className="block whitespace-nowrap text-[11px] leading-[1.3] text-[#9aa0a6]">
                      Travellers and Cabin Class
                    </span>
                    <span className="block truncate text-[13px] font-semibold leading-[1.3] text-[#111111]">
                      01 Adult 01 Child
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-0 bg-[#ffc629] max-[640px]:w-full max-[640px]:rounded-[12px]"
                  aria-label="Search"
                >
                  <SearchIcon />
                </button>
              </div>

              <div className="mt-4 flex gap-[180px] pl-1 max-[1100px]:gap-8 max-[640px]:flex-col max-[640px]:gap-3">
                <div className="flex flex-col gap-2">
                  <Checkbox
                    label="Add Nearby Airports"
                    checked={nearbyLeft}
                    onChange={() => setNearbyLeft((value) => !value)}
                  />
                  <Checkbox
                    label="Direct Flights"
                    checked={directFlights}
                    onChange={() => setDirectFlights((value) => !value)}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Checkbox
                    label="Add Nearby Airports"
                    checked={nearbyRight}
                    onChange={() => setNearbyRight((value) => !value)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Checkbox({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: () => void;
}) {
  return (
    <label className="flex cursor-pointer select-none items-center gap-2 text-[13px] text-[#374151]">
      <span
        className={`flex h-4 w-4 shrink-0 items-center justify-center rounded border-[1.5px] ${
          checked ? 'border-[#ffc629] bg-[#ffc629]' : 'border-[#d1d5db]'
        }`}
        onClick={onChange}
      >
        {checked && <CheckIcon />}
      </span>
      {label}
    </label>
  );
}

function PlaneIcon({ flipped }: { flipped?: boolean }) {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      style={{ transform: flipped ? 'rotate(90deg)' : 'rotate(-45deg)' }}
    >
      <path
        d="M2 16L22 8L14 22L11 15L2 16Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function HotelIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path
        d="M3 21V8L12 3L21 8V21M3 21H21M3 21V16H8V21M16 21V16H21V21"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="5" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M3 10H21M8 3V7M16 3V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function PersonIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M4 20C4 16 7.5 14 12 14C16.5 14 20 16 20 20"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function SwapIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path
        d="M7 7H17M17 7L13 3M17 7L13 11"
        stroke="#4b5563"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17 17H7M7 17L11 13M7 17L11 21"
        stroke="#4b5563"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <circle cx="11" cy="11" r="7" stroke="#111111" strokeWidth="2" />
      <path d="M21 21L16.5 16.5" stroke="#111111" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
      <path
        d="M2 6L5 9L10 3"
        stroke="#111111"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
