'use client';

import Image from "next/image";
import { Clock, ArrowUpRight } from "lucide-react";

const cheapFlights = [
  { city: "London", route: "Dub → LHR", price: "€24", image: "https://images.pexels.com/photos/16230720/pexels-photo-16230720.jpeg?auto=compress&cs=tinysrgb&w=800&q=80", flag: "https://flagcdn.com/gb.svg" },
  { city: "London", route: "Dub → LHR", price: "€24", image: "https://images.pexels.com/photos/16230720/pexels-photo-16230720.jpeg?auto=compress&cs=tinysrgb&w=800&q=80", flag: "https://flagcdn.com/gb.svg" },
  { city: "Barcelona", route: "Dub → BCN", price: "€24", image: "https://images.unsplash.com/photo-1578095172812-dcc191c5aed8?auto=format&w=800&q=80&fit=crop", flag: "https://flagcdn.com/es.svg" },
  { city: "Lisbon", route: "Dub → LIS", price: "€24", image: "https://images.unsplash.com/photo-1585208798174-6cedd86e019a?auto=format&w=800&q=80&fit=crop", flag: "https://flagcdn.com/pt.svg" },
  { city: "New York", route: "Dub → JFK", price: "€24", image: "https://images.unsplash.com/photo-1496588152823-86ff7695e68f?auto=format&w=800&q=80&fit=crop", flag: "https://flagcdn.com/us.svg" },
  { city: "Rome", route: "Dub → FCO", price: "€24", image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&w=800&q=80&fit=crop", flag: "https://flagcdn.com/it.svg" },
  { city: "Dubai", route: "Dub → DXB", price: "€24", image: "https://images.unsplash.com/photo-1623725206109-3ef2c2eec00e?auto=format&w=800&q=80&fit=crop", flag: "https://flagcdn.com/ae.svg" },
  { city: "Amsterdam", route: "Dub → AMS", price: "€24", image: "https://images.unsplash.com/photo-1580996378027-23040f16f157?auto=format&w=800&q=80&fit=crop", flag: "https://flagcdn.com/nl.svg" },
];

const mobileFlights = [
  { city: "London", route: "Dub → LHR", price: "€24", airline: "Ryanair", duration: "1h 20m", image: "https://images.pexels.com/photos/16230720/pexels-photo-16230720.jpeg?auto=compress&cs=tinysrgb&w=800&q=80", flag: "https://flagcdn.com/gb.svg" },
  { city: "London", route: "Dub → LGW", price: "€24", airline: "Ryanair", duration: "1h 25m", image: "https://images.pexels.com/photos/16230720/pexels-photo-16230720.jpeg?auto=compress&cs=tinysrgb&w=800&q=80", flag: "https://flagcdn.com/gb.svg" },
  { city: "Barcelona", route: "Dub → BCN", price: "€29", airline: "Ryanair", duration: "2h 35m", image: "https://images.unsplash.com/photo-1578095172812-dcc191c5aed8?auto=format&w=800&q=80&fit=crop", flag: "https://flagcdn.com/es.svg" },
  { city: "Lisbon", route: "Dub → LIS", price: "€31", airline: "Ryanair", duration: "2h 50m", image: "https://images.unsplash.com/photo-1585208798174-6cedd86e019a?auto=format&w=800&q=80&fit=crop", flag: "https://flagcdn.com/pt.svg" },
  { city: "New York", route: "Dub → JFK", price: "€189", airline: "Aer Lingus", duration: "7h 15m", image: "https://images.unsplash.com/photo-1496588152823-86ff7695e68f?auto=format&w=800&q=80&fit=crop", flag: "https://flagcdn.com/us.svg" },
  { city: "Rome", route: "Dub → FCO", price: "€34", airline: "Ryanair", duration: "3h 10m", image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&w=800&q=80&fit=crop", flag: "https://flagcdn.com/it.svg" },
  { city: "Dubai", route: "Dub → DXB", price: "€245", airline: "Emirates", duration: "7h 45m", image: "https://images.unsplash.com/photo-1623725206109-3ef2c2eec00e?auto=format&w=800&q=80&fit=crop", flag: "https://flagcdn.com/ae.svg" },
  { city: "Amsterdam", route: "Dub → AMS", price: "€28", airline: "Ryanair", duration: "1h 40m", image: "https://images.unsplash.com/photo-1580996378027-23040f16f157?auto=format&w=800&q=80&fit=crop", flag: "https://flagcdn.com/nl.svg" },
];

/**
 * Type scale reference (from Typography spec — Saans Trial):
 * Display L  : 48px / 100% / Medium   → section H2
 * Title L    : 24px / 100% / Medium   → card city name, price
 * Title M    : 16px / 150% / Medium   → mobile price
 * Title S    : 14px / 143% / Medium   → buttons, mobile card title
 * Title XS   : 12px / 133% / Medium   → badges, meta labels
 * Body L     : 16px / 150% / Regular  → (unused here, reserved for larger paragraphs)
 * Body M     : 14px / 143% / Regular  → paragraphs, route text, duration text
 */

export default function CheapFlights() {
  return (
    <section className="w-full bg-[#ffffff] py-[80px] text-[#000000]">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col px-[32px] max-[430px]:px-4">

        {/* Header Section — DESKTOP ONLY */}
        <div className="mb-[48px] hidden items-start justify-between gap-8 lg:flex">
          <div className="flex max-w-[700px] flex-col gap-[10px]">
            {/* Display L: 48px / 100% / Medium */}
            <h2 className="font-sans text-[48px] font-medium leading-[100%] tracking-tight text-[#000000]">
              Cheap Flights from <span className="text-[#FDDB32]">Dublin</span>
            </h2>
            {/* Body M: 14px / 143% / Regular */}
            <p className="font-sans text-[14px] font-normal leading-[143%] text-[#555555]">
              Looking for cheap flights from Dublin? Compare today&apos;s lowest fares from Dublin Airport to
              popular destinations across Europe, North America and beyond. Prices update regularly so you
              can find the best available deals before you book.
            </p>
          </div>

          {/* Title S: 14px / 143% / Medium */}
          <button className="inline-flex h-[48px] shrink-0 items-center gap-2 rounded-full bg-[#FDDB32] px-[28px] font-sans text-[14px] font-medium leading-[143%] text-[#000000] transition-colors hover:bg-[#e5c52c]">
            Browse All Flight Routes
            <ArrowUpRight size={16} strokeWidth={2} />
          </button>
        </div>

        {/* Flight Cards Grid — DESKTOP ONLY */}
        <div className="hidden w-full grid-cols-1 gap-[24px] sm:grid-cols-2 lg:grid lg:grid-cols-4">
          {cheapFlights.map((flight, i) => (
            <div
              key={i}
              className="group flex flex-col overflow-hidden rounded-[24px] border border-neutral-200/60 bg-[#ffffff] shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Image & Flag Badge */}
              <div className="relative h-[200px] w-full shrink-0 overflow-hidden bg-neutral-100">
                <Image
                  src={flight.image}
                  alt={flight.city}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute left-[16px] top-[16px] flex h-[40px] w-[40px] items-center justify-center rounded-full bg-white p-[6px] shadow-md">
                  <img src={flight.flag} alt={`${flight.city} flag`} className="h-full w-full rounded-full object-cover" />
                </div>
              </div>

              {/* Card Content */}
              <div className="flex flex-1 flex-col p-[24px]">

                {/* Title L: 24px / 100% / Medium */}
                <h3 className="font-sans text-[24px] font-medium leading-[100%] text-[#000000]">
                  {flight.city}
                </h3>
                {/* Body M: 14px / 143% / Regular */}
                <p className="mt-[4px] font-sans text-[14px] font-normal leading-[143%] text-[#777777]">
                  {flight.route}
                </p>

                {/* Price & Airline Row */}
                <div className="mt-[16px] flex items-center justify-between">
                  {/* Title L: 24px / 100% / Medium */}
                  <p className="font-sans text-[24px] font-medium leading-[100%] text-[#000000]">
                    {flight.price}
                  </p>
                  <div className="flex items-center gap-[6px] rounded-full border border-neutral-200 px-[10px] py-[5px]">
                    {/* Title XS: 12px / 133% / Medium */}
                    <span className="font-sans text-[12px] font-medium leading-[133%] text-[#777777]">by</span>
                    <span className="font-sans text-[12px] font-medium leading-[133%] text-[#00529C]">Ryanair</span>
                  </div>
                </div>

                {/* Duration Row — Body M: 14px / 143% / Regular */}
                <div className="mt-[14px] mb-[20px] flex items-center gap-[6px] font-sans text-[14px] font-normal leading-[143%] text-[#777777]">
                  <Clock size={14} strokeWidth={2.5} />
                  <span>Direct &bull; 1h 20m</span>
                </div>

                {/* Card Button — Title S: 14px / 143% / Medium */}
                <div className="mt-auto">
                  <button
                    className={`flex h-[48px] w-full items-center justify-center gap-2 rounded-[16px] border font-sans text-[14px] font-medium leading-[143%] transition-colors duration-200
                      ${i === 0
                        ? 'border-[#FDDB32] bg-[#FDDB32] text-[#000000]'
                        : 'border-neutral-200 bg-white text-[#000000] hover:border-[#FDDB32] hover:bg-[#FDDB32]'
                      }`
                    }
                  >
                    View Flights
                    <ArrowUpRight size={16} strokeWidth={2} />
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* ===================== MOBILE VIEW (lg:hidden) ===================== */}
        <div className="flex w-full flex-col gap-[32px] py-[10px] px-[16px] lg:hidden">

          {/* Mobile Header */}
          <div className="flex flex-col gap-[8px]">
            {/* Display L: 48px / 100% / Medium */}
            <h2 className="font-sans text-[48px] font-medium leading-[100%] tracking-tight text-[#000000]">
              Cheap Flights from
              <br />
              <span className="text-[#FDDB32]">Dublin</span>
            </h2>
            {/* Body M: 14px / 143% / Regular */}
            <p className="font-sans text-[14px] font-normal leading-[143%] text-[#555555]">
              Compare today&apos;s lowest fares from Dublin Airport to popular destinations across Europe, North
              America, and beyond. Prices update regularly.
            </p>
          </div>

          {/* Mobile Flight Cards Grid */}
          <div className="grid w-full grid-cols-2 gap-x-[10px] gap-y-[16px]">
            {mobileFlights.map((flight, i) => (
              <div
                key={i}
                className="flex flex-col overflow-hidden rounded-[12px] border border-neutral-200/60 bg-[#ffffff] shadow-[0_2px_8px_rgba(0,0,0,0.04)]"
              >
                {/* Image & Flag Badge */}
                <div className="relative h-[110px] w-full shrink-0 overflow-hidden bg-neutral-100">
                  <Image
                    src={flight.image}
                    alt={flight.city}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute left-[8px] top-[8px] flex h-[28px] w-[28px] items-center justify-center rounded-full bg-white p-[4px] shadow-sm">
                    <img src={flight.flag} alt={`${flight.city} flag`} className="h-full w-full rounded-full object-cover" />
                  </div>
                </div>

                {/* Card Content */}
                <div className="flex flex-1 flex-col p-[12px]">
                  {/* Title S: 14px / 143% / Medium */}
                  <h3 className="font-sans text-[14px] font-medium leading-[143%] text-[#000000]">
                    {flight.city}
                  </h3>
                  {/* Title XS: 12px / 133% / Medium (compact meta label) */}
                  <p className="mt-[2px] font-sans text-[12px] font-medium leading-[133%] text-[#777777]">
                    {flight.route}
                  </p>

                  <div className="mt-[10px] flex items-center justify-between gap-[4px]">
                    {/* Title M: 16px / 150% / Medium */}
                    <p className="font-sans text-[16px] font-medium leading-[150%] text-[#000000]">
                      {flight.price}
                    </p>
                    <div className="flex items-center gap-[3px] rounded-full border border-neutral-200 px-[6px] py-[3px]">
                      {/* Title XS: 12px / 133% / Medium */}
                      <span className="font-sans text-[12px] font-medium leading-[133%] text-[#777777]">by</span>
                      <span className="font-sans text-[12px] font-medium leading-[133%] text-[#00529C]">{flight.airline}</span>
                    </div>
                  </div>

                  {/* Title XS: 12px / 133% / Medium */}
                  <div className="mt-[8px] mb-[10px] flex items-center gap-[4px] font-sans text-[12px] font-medium leading-[133%] text-[#777777]">
                    <Clock size={11} strokeWidth={2.5} />
                    <span>Direct &bull; {flight.duration}</span>
                  </div>

                  <div className="mt-auto">
                    {/* Title XS: 12px / 133% / Medium */}
                    <button className="flex h-[34px] w-full items-center justify-center gap-1 rounded-[8px] border border-neutral-200 bg-white font-sans text-[12px] font-medium leading-[133%] text-[#000000]">
                      View Flights
                      <ArrowUpRight size={12} strokeWidth={2} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile CTA Button — Title S: 14px / 143% / Medium */}
          <button className="flex h-[56px] w-full items-center justify-center gap-2 rounded-full bg-[#FDDB32] font-sans text-[14px] font-medium leading-[143%] text-[#000000]">
            Browse All Flight Routes
            <ArrowUpRight size={18} strokeWidth={2} />
          </button>

        </div>

      </div>
    </section>
  );
}