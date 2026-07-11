'use client';

import { useState } from 'react';
import Link from 'next/link';

const NAV_LINKS = [
  { label: 'Flights', href: '/flights' },
  { label: 'Hotels', href: '/hotels' },
  { label: 'Destinations', href: '/destinations' },
  { label: 'About', href: '/about' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative z-50 box-border w-full rounded-[24px] border border-white/55 bg-white/92 shadow-[0_18px_50px_rgba(16,24,40,0.08)] backdrop-blur-[18px]">
      <div className="mx-auto flex max-w-[1328px] items-center justify-between gap-6 box-border px-[22px] py-[14px] max-[1024px]:px-8 max-[430px]:px-4">
        <Link href="/" className="shrink-0 no-underline" aria-label="Travel Mommy home">
          <span className="flex flex-col font-serif text-[18px] font-black italic leading-[0.78] tracking-[-0.06em] text-[#101010] max-[430px]:text-[16px]" aria-hidden="true">
            Travel
            <span className="ml-[14px]">Mommy</span>
          </span>
        </Link>

        <nav
          className={`flex items-center gap-10 max-[1024px]:gap-7 max-[860px]:absolute max-[860px]:left-0 max-[860px]:right-0 max-[860px]:top-full max-[860px]:flex-col max-[860px]:items-start max-[860px]:gap-5 max-[860px]:bg-white/98 max-[860px]:px-5 max-[860px]:py-6 max-[860px]:shadow-[0_8px_16px_rgba(0,0,0,0.08)] ${
            menuOpen ? 'max-[860px]:flex' : 'max-[860px]:hidden'
          }`}
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="whitespace-nowrap text-[15px] font-medium text-[#111111] no-underline transition-opacity hover:opacity-60"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/search-deals"
          className="flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full bg-[#ffc629] px-5 py-3 text-sm font-semibold text-[#111111] transition-colors hover:bg-[#f5b800] max-[860px]:ml-auto"
        >
          Search Deals
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 11L11 3M11 3H4M11 3V10"
              stroke="#111111"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>

        <button
          className="flex h-8 w-8 flex-col justify-center gap-[5px] border-0 bg-transparent p-0 min-[861px]:hidden"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span className="block h-[2px] w-full rounded-full bg-[#111111]" />
          <span className="block h-[2px] w-full rounded-full bg-[#111111]" />
          <span className="block h-[2px] w-full rounded-full bg-[#111111]" />
        </button>
      </div>
    </header>
  );
}
