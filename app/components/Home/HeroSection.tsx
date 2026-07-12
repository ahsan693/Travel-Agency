'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from './header';

/* =====================================================================
   CHANGES MADE TO MATCH Homepage.pdf PIXEL-FOR-PIXEL
   ---------------------------------------------------------------------
   1. Hero background: replaced the abstract CSS radial-gradient stand-in
      with a real photograph (plane wing / sunset sky) — the PDF shows an
      actual photo, not a gradient. The two decorative clip-path "cloud"
      divs are removed since the photo itself provides that atmosphere.
   2. Container width: the PDF measures a consistent 1216px content width
      centered with ~112px side margins on every section (hero, flights,
      hotels, destinations). The previous code mixed max-w-[1376px] and
      max-w-[1440px]+px-[160px] containers, which don't match. All
      sections now share one `CONTAINER` class.
   3. Rating avatars: PDF shows flat solid lavender circles (#DEADEE),
      not a photo-style gradient.
   4. Flag icons: PDF renders native emoji flags (🇬🇧 🇪🇸 etc.), larger and
      without a card/border/shadow — swapped out the flagcdn <img> usage.
   5. Card backgrounds: the flight-route and destination cards use the
      brand off-white "#F9F8F5" (same tone as the header pill), not pure
      white / #fafafa.
   6. Destination price badges ("Flights from …") are pale yellow
      #FFED91 in the PDF, not the bright accent yellow #ffc629.
   7. Hotel deal card fills are the saturated pastel tones measured from
      the PDF (#FBBDEA / #FFC796 / #FFED91), not the near-white tints
      used before.
   8. Removed the pagination controls under the flight-cards and
      destination-cards grids — the PDF does not show them anywhere.
===================================================================== */

const CONTAINER = 'mx-auto w-full max-w-[1216px] px-6 min-[1216px]:px-0';

const flightCards = [
  {
    id: '1',
    flagEmoji: '🇬🇧',
    fromCode: 'Dub',
    toCode: 'LHR',
    destination: 'London',
    price: '€24',
    type: 'Direct',
    duration: '1h 20m',
    airline: 'Ryanair',
    isFeatured: true,
  },
  {
    id: '2',
    flagEmoji: '🇬🇧',
    fromCode: 'Dub',
    toCode: 'LHR',
    destination: 'London',
    price: '€24',
    type: 'Direct',
    duration: '1h 20m',
    airline: 'Ryanair',
    isFeatured: false,
  },
  {
    id: '3',
    flagEmoji: '🇪🇸',
    fromCode: 'Dub',
    toCode: 'BCN',
    destination: 'Barcelona',
    price: '€24',
    type: 'Direct',
    duration: '1h 20m',
    airline: 'Ryanair',
    isFeatured: false,
  },
  {
    id: '4',
    flagEmoji: '🇵🇹',
    fromCode: 'Dub',
    toCode: 'LIS',
    destination: 'Lisbon',
    price: '€24',
    type: 'Direct',
    duration: '1h 20m',
    airline: 'Ryanair',
    isFeatured: false,
  },
  {
    id: '5',
    flagEmoji: '🇺🇸',
    fromCode: 'Dub',
    toCode: 'JFK',
    destination: 'NewYork',
    price: '€24',
    type: 'Direct',
    duration: '1h 20m',
    airline: 'Ryanair',
    isFeatured: false,
  },
  {
    id: '6',
    flagEmoji: '🇮🇹',
    fromCode: 'Dub',
    toCode: 'FCO',
    destination: 'Rome',
    price: '€24',
    type: 'Direct',
    duration: '1h 20m',
    airline: 'Ryanair',
    isFeatured: false,
  },
  {
    id: '7',
    flagEmoji: '🇦🇪',
    fromCode: 'Dub',
    toCode: 'DXB',
    destination: 'Dubai',
    price: '€24',
    type: 'Direct',
    duration: '1h 20m',
    airline: 'Ryanair',
    isFeatured: false,
  },
  {
    id: '8',
    flagEmoji: '🇳🇱',
    fromCode: 'Dub',
    toCode: 'AMS',
    destination: 'Amsterdam',
    price: '€24',
    type: 'Direct',
    duration: '1h 20m',
    airline: 'Ryanair',
    isFeatured: false,
  },
];

const hotelDeals = [
  {
    id: '1',
    name: 'The Westin Paris',
    location: 'Paris',
    rating: 5,
    price: '€29',
    unit: '/ person',
    buttonText: 'Compare Prices',
    image: '/snowy_mountain_resort.png',
    categories: ['All', 'Luxury', 'Boutique'],
    theme: {
      border: 'border-[#ff66cc]',
      bg: 'bg-[#FBBDEA]',
    },
  },
  {
    id: '2',
    name: 'Hilton Barcelona',
    rating: 5,
    price: '€142',
    unit: '/ night',
    buttonText: 'Compare',
    image: '/snowy_mountain_resort.png',
    categories: ['All', 'Luxury', 'Business'],
    theme: {
      border: 'border-[#ff9966]',
      bg: 'bg-[#FFC796]',
    },
  },
  {
    id: '3',
    name: 'Marriott Dubai',
    rating: 5,
    price: '€98',
    unit: '/ night',
    buttonText: 'Compare',
    image: '/snowy_mountain_resort.png',
    categories: ['All', 'Luxury', 'Family'],
    theme: {
      border: 'border-[#ffdd55]',
      bg: 'bg-[#FFED91]',
    },
  },
];

const destinationCards = [
  {
    id: '1',
    city: 'Barcelona',
    country: 'Spain',
    flightPrice: '€38',
    hotelPrice: '€94/night',
    image: '/snowy_mountain_resort.png',
  },
  {
    id: '2',
    city: 'Barcelona',
    country: 'Spain',
    flightPrice: '€38',
    hotelPrice: '€94/night',
    image: '/snowy_mountain_resort.png',
  },
  {
    id: '3',
    city: 'Barcelona',
    country: 'Spain',
    flightPrice: '€38',
    hotelPrice: '€94/night',
    image: '/snowy_mountain_resort.png',
  },
  {
    id: '4',
    city: 'Barcelona',
    country: 'Spain',
    flightPrice: '€38',
    hotelPrice: '€94/night',
    image: '/snowy_mountain_resort.png',
  },
];

export default function HeroSection() {
  const [activeTab, setActiveTab] = useState<'flights' | 'hotels'>('flights');
  const [nearbyLeft, setNearbyLeft] = useState(false);
  const [nearbyRight, setNearbyRight] = useState(true);
  const [directFlights, setDirectFlights] = useState(false);
  const [activeHotelCategory, setActiveHotelCategory] = useState('All');

  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section className="relative isolate min-h-screen w-full overflow-hidden bg-black">
        {/* Real photo background (swap the seed/URL for the licensed asset) */}
        <img
          src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1800&q=80"
          alt="Airplane wing over clouds at sunset"
          className="absolute inset-0 h-full w-full object-cover"
        />
        {/* Soft light wash so the dark heading/nav stay legible on any photo */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-white/5" />

        <div className={`relative z-10 box-border pb-9 pt-6 max-[430px]:pb-7 max-[430px]:pt-4 ${CONTAINER}`}>
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
                Search
                Flights
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
                {/* Flat lavender avatar circles — matches the PDF exactly (no photo/gradient texture) */}
                <div className="flex shrink-0">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <span
                      key={i}
                      className="-ml-2 h-8 w-8 rounded-full border-2 border-white bg-[#DEADEE] first:ml-0"
                    />
                  ))}
                </div>

                <div className="text-left">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-sm tracking-[0.7px] text-[#111111]">★★★★★</span>
                    <span className="text-sm">
                      <span className="font-semibold text-[#111111]">4.9</span>
                      <span className="text-[#777777]">/5</span>
                    </span>
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
                  className={`flex cursor-pointer items-center gap-1.5 rounded-t-[18px] border-0 px-[22px] pb-[14px] pt-[15px] text-[13px] font-semibold ${activeTab === 'flights' ? 'bg-white text-[#111111]' : 'bg-white/90 text-[#8b8f98]'
                    }`}
                  onClick={() => setActiveTab('flights')}
                >
                  <PlaneIcon />
                  Flights
                </button>
                <button
                  type="button"
                  className={`flex cursor-pointer items-center gap-1.5 rounded-t-[18px] border-0 px-[22px] pb-[14px] pt-[15px] text-[13px] font-semibold ${activeTab === 'hotels' ? 'bg-white text-[#111111]' : 'bg-white/90 text-[#8b8f98]'
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

      {/* ================= "COMPARE FLIGHTS & HOTELS WITH TRAVELMOMMY" BAND ================= */}
      <section className="w-full bg-[#000000] py-[80px] text-white">
        <div className={`flex flex-col gap-[10px] ${CONTAINER}`}>
          <h2 className="font-sans text-[36px] font-semibold leading-tight tracking-tight text-white max-[768px]:text-[28px] max-[480px]:text-[24px]">
            Compare Flights &amp; Hotels with{' '}
            <span className="text-[#ffc629]">TravelMommy</span>
          </h2>
          <p className="max-w-[1120px] font-sans text-[14px] leading-[1.6] text-white/80 max-[480px]:text-[13px]">
            TravelMommy helps you compare flight and hotel prices from trusted airlines, booking websites and travel providers - all in one place. Search live fares, compare accommodation prices, discover the cheapest travel dates and book directly with your preferred provider. Whether you're planning a weekend city break, a family holiday, a business trip or a long-haul adventure, TravelMommy makes it easier to compare travel prices without searching multiple websites individually.
          </p>
        </div>
      </section>

      {/* ================= CHEAP FLIGHTS FROM DUBLIN ================= */}
      <section className="w-full bg-[#ffffff] py-[80px] text-[#111111]">
        <div className={`flex flex-col gap-[40px] ${CONTAINER}`}>

          <div className="flex items-start justify-between gap-8 max-[768px]:flex-col max-[768px]:items-stretch max-[768px]:gap-4">
            <div className="flex max-w-[700px] flex-col gap-[10px]">
              <h2 className="font-sans text-[36px] font-semibold leading-tight tracking-tight text-[#111111] max-[768px]:text-[28px] max-[480px]:text-[24px]">
                Cheap Flights from <span className="text-[#ffc629]">Dublin</span>
              </h2>
              <p className="font-sans text-[14px] leading-[1.6] text-[#555555]">
                Looking for cheap flights from Dublin? Compare today's lowest fares from Dublin Airport to popular destinations across Europe, North America and beyond. Prices update regularly so you can find the best available deals before you book.
              </p>
            </div>

            <a
              href="#routes"
              className="inline-flex shrink-0 items-center gap-1.5 rounded-[18px] bg-[#ffc629] px-[22px] py-4 text-sm font-semibold text-[#111111] shadow-[0_10px_24px_rgba(0,0,0,0.06)] transition-all duration-200 hover:-translate-y-px hover:shadow-[0_12px_28px_rgba(0,0,0,0.12)] max-[768px]:self-start"
            >
              View All Routes
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path
                  d="M3 11L11 3M11 3H4M11 3V10"
                  stroke="#111111"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>

          <div className="grid grid-cols-4 gap-6 max-[1100px]:grid-cols-2 max-[640px]:grid-cols-1">
            {flightCards.map((card) => (
              <div
                key={card.id}
                className="flex flex-col justify-between rounded-[24px] border border-neutral-200/60 bg-[#F9F8F5] p-6 shadow-[0_1px_3px_rgba(0,0,0,0.02)] transition-shadow duration-200 hover:shadow-md"
              >
                <div>
                  <div className="mb-4 flex items-center">
                    <span className="text-[28px] leading-none" role="img" aria-label={`${card.destination} flag`}>
                      {card.flagEmoji}
                    </span>
                  </div>
                  <h3 className="font-sans text-[18px] font-semibold leading-tight text-[#111111]">
                    {card.fromCode} &rarr; {card.toCode} {card.destination}
                  </h3>
                  <div className="mt-1 text-[22px] font-bold text-[#ffc629]">
                    From {card.price}
                  </div>
                  <div className="mt-3 flex flex-col gap-0.5 text-[13px] text-[#777777]">
                    <div>{card.type} &bull; {card.duration}</div>
                    <div>{card.airline}</div>
                  </div>
                </div>

                <div className="mt-6">
                  {card.isFeatured ? (
                    <button
                      type="button"
                      className="flex w-full cursor-pointer items-center justify-center gap-1.5 rounded-[14px] border-0 bg-[#ffc629] py-[11px] text-[13px] font-bold text-[#111111] transition-transform duration-150 hover:-translate-y-px"
                    >
                      Compare Prices
                      <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                        <path
                          d="M3 11L11 3M11 3H4M11 3V10"
                          stroke="#111111"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="flex w-full cursor-pointer items-center justify-center gap-1.5 rounded-[14px] border border-neutral-200 bg-white py-[11px] text-[13px] font-bold text-[#111111] transition-all duration-150 hover:-translate-y-px hover:bg-neutral-50"
                    >
                      Compare Prices
                      <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                        <path
                          d="M3 11L11 3M11 3H4M11 3V10"
                          stroke="#111111"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= COMPARE HOTEL DEALS ================= */}
      <section className="w-full bg-[#000000] py-[80px] text-white">
        <div className={`flex flex-col gap-[32px] ${CONTAINER}`}>

          <div className="flex flex-col gap-[10px]">
            <h2 className="font-sans text-[36px] font-semibold leading-tight tracking-tight text-white max-[768px]:text-[28px] max-[480px]:text-[24px]">
              Compare Hotel Deals
            </h2>
            <p className="max-w-[700px] font-sans text-[14px] leading-[1.6] text-white/60">
              Compare hotel prices from trusted booking partners and find great places to stay around the world.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 max-[480px]:gap-2">
            {['All', 'Luxury', 'Budget', 'Family', 'Beach', 'Business', 'Boutique'].map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveHotelCategory(category)}
                className={`cursor-pointer rounded-full border-0 px-6 py-2.5 text-[14px] font-semibold transition-all duration-200 ${activeHotelCategory === category
                  ? 'bg-[#ffc629] text-black shadow-[0_4px_12px_rgba(255,198,41,0.3)]'
                  : 'bg-white text-black hover:bg-neutral-100'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-6 max-[960px]:grid-cols-2 max-[640px]:grid-cols-1">
            {hotelDeals
              .filter((hotel) => hotel.categories.includes(activeHotelCategory))
              .map((hotel) => (
                <div
                  key={hotel.id}
                  className={`flex flex-col overflow-hidden rounded-[28px] border-[3px] ${hotel.theme.border} bg-white shadow-md transition-all duration-300 hover:shadow-lg`}
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-900">
                    <img
                      src={hotel.image}
                      alt={hotel.name}
                      className="h-full w-full object-cover"
                    />

                    <span className="absolute left-4 top-4 rounded-full bg-white px-4 py-1.5 text-[12px] font-semibold text-[#111111]">
                      Popular
                    </span>

                    <span className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-[#ffc629] text-black shadow-[0_2px_8px_rgba(0,0,0,0.15)]">
                      <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                        <path
                          d="M3 11L11 3M11 3H4M11 3V10"
                          stroke="#111111"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </div>

                  <div className={`flex flex-1 flex-col justify-between gap-4 p-6 text-[#111111] ${hotel.theme.bg}`}>
                    <div>
                      <div className="mb-2 flex items-center justify-between">
                        <span className="select-none text-[14px] tracking-[1.5px] text-black">★★★★★</span>
                        <a href="#compare" className="flex items-center gap-0.5 text-[13px] font-bold text-black hover:underline">
                          {hotel.buttonText} ↗
                        </a>
                      </div>
                      <h3 className="font-sans text-[20px] font-bold leading-snug text-black">
                        {hotel.name}
                      </h3>
                      {hotel.location && (
                        <div className="mt-0.5 text-[13px] text-neutral-700">
                          {hotel.location}
                        </div>
                      )}
                    </div>

                    <div className="font-sans text-[16px] font-bold text-black">
                      From {hotel.price} <span className="text-[13px] font-normal text-neutral-700">{hotel.unit}</span>
                    </div>
                  </div>
                </div>
              ))}
            {hotelDeals.filter((hotel) => hotel.categories.includes(activeHotelCategory)).length === 0 && (
              <div className="col-span-full py-16 text-center font-medium text-white/60">
                No hotel deals available for "{activeHotelCategory}" right now. Check back later!
              </div>
            )}
          </div>

        </div>
      </section>

      {/* ================= EXPLORE POPULAR DESTINATIONS ================= */}
      <section className="w-full bg-[#ffffff] py-[80px] text-[#111111]">
        <div className={`flex flex-col gap-[32px] ${CONTAINER}`}>

          <div className="flex items-start justify-between gap-8 max-[768px]:flex-col max-[768px]:items-stretch max-[768px]:gap-4">
            <div className="flex max-w-[700px] flex-col gap-[10px]">
              <h2 className="font-sans text-[36px] font-semibold leading-tight tracking-tight text-[#111111] max-[768px]:text-[28px] max-[480px]:text-[24px]">
                Explore Popular Destinations
              </h2>
              <p className="font-sans text-[14px] leading-[1.6] text-[#555555]">
                Discover popular cities and compare flights and hotels before you book.
              </p>
            </div>

            <Link
              href="/destinations"
              className="inline-flex shrink-0 items-center gap-1.5 rounded-[18px] bg-[#ffc629] px-[22px] py-4 text-sm font-semibold text-[#111111] shadow-[0_10px_24px_rgba(0,0,0,0.06)] transition-all duration-200 hover:-translate-y-px hover:shadow-[0_12px_28px_rgba(0,0,0,0.12)] max-[768px]:self-start"
            >
              More destinations
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path
                  d="M3 11L11 3M11 3H4M11 3V10"
                  stroke="#111111"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>

          <div className="grid w-full grid-cols-4 gap-2 max-[1216px]:grid-cols-2 max-[640px]:grid-cols-1">
            {destinationCards.map((card) => (
              <div
                key={card.id}
                className="flex h-[428px] w-full flex-col justify-between overflow-hidden rounded-[24px] border border-neutral-200/60 bg-[#F9F8F5] shadow-[0_1px_3px_rgba(0,0,0,0.02)] transition-shadow duration-200 hover:shadow-md min-[1216px]:w-[298px]"
              >
                <div className="relative h-[220px] w-full overflow-hidden bg-neutral-900">
                  <img
                    src={card.image}
                    alt={`${card.city}, ${card.country}`}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="flex flex-grow flex-col justify-between gap-3 p-5">
                  <div>
                    <h3 className="font-sans text-[18px] font-bold leading-tight text-[#111111]">
                      {card.city}, {card.country}
                    </h3>

                    <div className="mt-3 flex flex-wrap gap-2">
                      <span className="inline-block select-none rounded-full bg-[#FFED91] px-3 py-1 text-[11px] font-bold text-black">
                        Flights from {card.flightPrice}
                      </span>
                      <span className="inline-block select-none rounded-full bg-[#FFED91] px-3 py-1 text-[11px] font-bold text-black">
                        Hotels from {card.hotelPrice}
                      </span>
                    </div>
                  </div>

                  <div className="mt-auto">
                    <Link
                      href="/city"
                      className="inline-flex items-center gap-1 text-[13px] font-bold text-black hover:underline"
                    >
                      Explore ↗
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
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
        className={`flex h-4 w-4 shrink-0 items-center justify-center rounded border-[1.5px] ${checked ? 'border-[#ffc629] bg-[#ffc629]' : 'border-[#d1d5db]'
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