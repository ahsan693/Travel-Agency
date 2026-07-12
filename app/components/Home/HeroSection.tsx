'use client';

import { useState } from 'react';
import Header from './header';
import Footer from './footer';

const flightCards = [
  {
    id: '1',
    countryCode: 'gb',
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
    countryCode: 'gb',
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
    countryCode: 'es',
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
    countryCode: 'pt',
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
    countryCode: 'us',
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
    countryCode: 'it',
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
    countryCode: 'ae',
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
    countryCode: 'nl',
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
      bg: 'bg-[#fdf2f8]',
    }
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
      bg: 'bg-[#fff7ed]',
    }
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
      bg: 'bg-[#fefce8]',
    }
  }
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

      <section className="w-full bg-[#000000] py-[80px] text-white">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-[10px] px-[160px] max-[1200px]:px-16 max-[768px]:px-8 max-[480px]:px-4">
          <h2 className="font-sans text-[36px] font-semibold leading-tight tracking-tight text-white max-[768px]:text-[28px] max-[480px]:text-[24px]">
            Compare Flights &amp; Hotels with{' '}
            <span className="text-[#ffc629]">TravelMommy</span>
          </h2>
          <p className="font-sans text-[14px] leading-[1.6] text-white/80 max-w-[1120px] max-[480px]:text-[13px]">
            TravelMommy helps you compare flight and hotel prices from trusted airlines, booking websites and travel providers - all in one place. Search live fares, compare accommodation prices, discover the cheapest travel dates and book directly with your preferred provider. Whether you're planning a weekend city break, a family holiday, a business trip or a long-haul adventure, TravelMommy makes it easier to compare travel prices without searching multiple websites individually.
          </p>
        </div>
      </section>

      <section className="w-full bg-[#ffffff] py-[80px] text-[#111111]">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-[40px] px-[160px] max-[1200px]:px-16 max-[768px]:px-8 max-[480px]:px-4">

          <div className="flex justify-between items-start gap-8 max-[768px]:flex-col max-[768px]:items-stretch max-[768px]:gap-4">
            <div className="max-w-[700px] flex flex-col gap-[10px]">
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
                className="flex flex-col justify-between rounded-[24px] border border-neutral-200/60 bg-[#ffffff] p-6 shadow-[0_1px_3px_rgba(0,0,0,0.02)] transition-shadow duration-200 hover:shadow-md"
              >
                <div>
                  <div className="mb-4 flex items-center">
                    <img
                      src={`https://flagcdn.com/w80/${card.countryCode}.png`}
                      alt={`${card.destination} flag`}
                      className="h-[22px] w-auto rounded-[4px] border border-neutral-200/50 object-cover shadow-[0_1px_3px_rgba(0,0,0,0.05)]"
                    />
                  </div>
                  <h3 className="font-sans text-[18px] font-semibold text-[#111111] leading-tight">
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
                      className="w-full flex items-center justify-center gap-1.5 rounded-[14px] bg-[#ffc629] py-[11px] text-[13px] font-bold text-[#111111] border-0 cursor-pointer transition-transform duration-150 hover:-translate-y-px"
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
                      className="w-full flex items-center justify-center gap-1.5 rounded-[14px] bg-white py-[11px] text-[13px] font-bold text-[#111111] border border-neutral-200 cursor-pointer transition-all duration-150 hover:bg-neutral-50 hover:-translate-y-px"
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

          <div className="flex justify-center mt-2">
            <div className="flex items-center gap-5 rounded-[16px] bg-[#1a1a1a] px-5 py-3.5 text-white shadow-md">
              <button
                type="button"
                className="flex cursor-pointer items-center justify-center text-white/50 hover:text-white transition-colors duration-150 border-0 bg-transparent p-0"
                aria-label="Previous page"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <span className="font-sans text-[14px] font-medium tracking-wider select-none text-white/90">
                4 / 9
              </span>
              <button
                type="button"
                className="flex cursor-pointer items-center justify-center text-white/50 hover:text-white transition-colors duration-150 border-0 bg-transparent p-0"
                aria-label="Next page"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

        </div>
      </section>

      <section className="w-full bg-[#000000] py-[80px] text-white">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-[32px] px-[160px] max-[1200px]:px-16 max-[768px]:px-8 max-[480px]:px-4">

          <div className="flex flex-col gap-[10px]">
            <h2 className="font-sans text-[36px] font-semibold leading-tight tracking-tight text-white max-[768px]:text-[28px] max-[480px]:text-[24px]">
              Compare Hotel Deals
            </h2>
            <p className="font-sans text-[14px] leading-[1.6] text-white/60 max-w-[700px]">
              Compare hotel prices from trusted booking partners and find great places to stay around the world.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 max-[480px]:gap-2">
            {['All', 'Luxury', 'Budget', 'Family', 'Beach', 'Business', 'Boutique'].map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveHotelCategory(category)}
                className={`cursor-pointer px-6 py-2.5 rounded-full text-[14px] font-semibold transition-all duration-200 border-0 ${activeHotelCategory === category
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
                  className={`flex flex-col rounded-[28px] border-[3px] ${hotel.theme.border} bg-white overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg`}
                >
                  <div className="relative w-full aspect-[4/3] overflow-hidden bg-neutral-900">
                    <img
                      src={hotel.image}
                      alt={hotel.name}
                      className="w-full h-full object-cover"
                    />

                    <span className="absolute top-4 left-4 rounded-full bg-white px-4 py-1.5 text-[12px] font-semibold text-[#111111]">
                      Popular
                    </span>

                    <span className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full bg-[#ffc629] text-black shadow-[0_2px_8px_rgba(0,0,0,0.15)]">
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

                  <div className={`flex flex-col p-6 text-[#111111] flex-1 justify-between gap-4 ${hotel.theme.bg}`}>
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-[14px] text-black select-none tracking-[1.5px]">★★★★★</span>
                        <a href="#compare" className="text-[13px] font-bold text-black flex items-center gap-0.5 hover:underline">
                          {hotel.buttonText} ↗
                        </a>
                      </div>
                      <h3 className="font-sans text-[20px] font-bold leading-snug text-black">
                        {hotel.name}
                      </h3>
                      {hotel.location && (
                        <div className="text-[13px] text-neutral-600 mt-0.5">
                          {hotel.location}
                        </div>
                      )}
                    </div>

                    <div className="font-sans text-[16px] font-bold text-black">
                      From {hotel.price} <span className="text-[13px] font-normal text-neutral-600">{hotel.unit}</span>
                    </div>
                  </div>
                </div>
              ))}
            {hotelDeals.filter((hotel) => hotel.categories.includes(activeHotelCategory)).length === 0 && (
              <div className="col-span-full py-16 text-center text-white/60 font-medium">
                No hotel deals available for "{activeHotelCategory}" right now. Check back later!
              </div>
            )}
          </div>

        </div>
      </section>

      <section className="w-full bg-[#ffffff] py-[80px] text-[#111111]">
        <div className="mx-auto flex max-w-[1216px] flex-col gap-[32px] px-4 min-[1216px]:px-0">

          <div className="flex justify-between items-start gap-8 max-[768px]:flex-col max-[768px]:items-stretch max-[768px]:gap-4">
            <div className="max-w-[700px] flex flex-col gap-[10px]">
              <h2 className="font-sans text-[36px] font-semibold leading-tight tracking-tight text-[#111111] max-[768px]:text-[28px] max-[480px]:text-[24px]">
                Explore Popular Destinations
              </h2>
              <p className="font-sans text-[14px] leading-[1.6] text-[#555555]">
                Discover popular cities and compare flights and hotels before you book.
              </p>
            </div>

            <a
              href="#destinations"
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
            </a>
          </div>

          <div className="grid grid-cols-4 gap-2 w-full max-[1216px]:grid-cols-2 max-[640px]:grid-cols-1">
            {destinationCards.map((card) => (
              <div
                key={card.id}
                className="flex flex-col justify-between rounded-[24px] border border-neutral-200/60 bg-[#fafafa] overflow-hidden min-[1216px]:w-[298px] h-[428px] w-full shadow-[0_1px_3px_rgba(0,0,0,0.02)] transition-shadow duration-200 hover:shadow-md"
              >
                <div className="relative w-full h-[220px] overflow-hidden bg-neutral-900">
                  <img
                    src={card.image}
                    alt={`${card.city}, ${card.country}`}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-5 flex flex-col justify-between flex-grow gap-3">
                  <div>
                    <h3 className="font-sans text-[18px] font-bold leading-tight text-[#111111]">
                      {card.city}, {card.country}
                    </h3>

                    <div className="mt-3 flex flex-wrap gap-2">
                      <span className="inline-block rounded-full bg-[#ffc629] px-3 py-1 text-[11px] font-bold text-black select-none">
                        Flights from {card.flightPrice}
                      </span>
                      <span className="inline-block rounded-full bg-[#ffc629] px-3 py-1 text-[11px] font-bold text-black select-none">
                        Hotels from {card.hotelPrice}
                      </span>
                    </div>
                  </div>

                  <div className="mt-auto">
                    <a
                      href="#explore"
                      className="inline-flex items-center gap-1 text-[13px] font-bold text-black hover:underline"
                    >
                      Explore ↗
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-2">
            <div className="flex items-center gap-5 rounded-[16px] bg-[#1a1a1a] px-5 py-3.5 text-white shadow-md">
              <button
                type="button"
                className="flex cursor-pointer items-center justify-center text-white/50 hover:text-white transition-colors duration-150 border-0 bg-transparent p-0"
                aria-label="Previous page"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <span className="font-sans text-[14px] font-medium tracking-wider select-none text-white/90">
                4 / 9
              </span>
              <button
                type="button"
                className="flex cursor-pointer items-center justify-center text-white/50 hover:text-white transition-colors duration-150 border-0 bg-transparent p-0"
                aria-label="Next page"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

        </div>
      </section>

      <Footer />
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
