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

// Mobile card data — matches the accurate per-destination pricing/airline/duration from the mobile design spec
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

export default function CheapFlights() {
  return (
    <section className="w-full bg-[#ffffff] py-[80px] text-[#000000]">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col px-[32px] max-[430px]:px-4">

        {/* Header Section — DESKTOP ONLY (untouched) */}
        <div className="mb-[48px] hidden items-start justify-between gap-8 lg:flex">
          <div className="flex max-w-[700px] flex-col gap-[10px]">
            <h2 className="font-sans text-[36px] font-bold leading-tight tracking-tight text-[#000000]">
              Cheap Flights from <span className="text-[#FDDB32]">Dublin</span>
            </h2>
            <p className="font-sans text-[14px] leading-[1.6] text-[#555555]">
              Looking for cheap flights from Dublin? Compare today&apos;s lowest fares from Dublin Airport to
              popular destinations across Europe, North America and beyond. Prices update regularly so you
              can find the best available deals before you book.
            </p>
          </div>

          <button className="inline-flex h-[48px] shrink-0 items-center gap-2 rounded-full bg-[#FDDB32] px-[28px] text-[14px] font-semibold text-[#000000] transition-colors hover:bg-[#e5c52c]">
            Browse All Flight Routes
            <ArrowUpRight size={16} strokeWidth={2} />
          </button>
        </div>

        {/* Flight Cards Grid — DESKTOP ONLY (untouched). card spec: W292 x H364 (Fill), radius 24, clip content, padding 0 */}
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

                {/* Title */}
                <h3 className="font-sans text-[24px] font-extrabold leading-tight text-[#000000]">
                  {flight.city}
                </h3>
                <p className="mt-[4px] font-sans text-[14px] text-[#777777]">
                  {flight.route}
                </p>

                {/* Price & Airline Row */}
                <div className="mt-[16px] flex items-center justify-between">
                  <p className="font-sans text-[28px] font-extrabold leading-none text-[#000000]">
                    {flight.price}
                  </p>
                  <div className="flex items-center gap-[6px] rounded-full border border-neutral-200 px-[10px] py-[5px]">
                    <span className="text-[11px] font-semibold text-[#777777]">by</span>
                    <span className="text-[12px] font-bold text-[#00529C]">Ryanair</span>
                  </div>
                </div>

                {/* Duration Row */}
                <div className="mt-[14px] mb-[20px] flex items-center gap-[6px] text-[13px] font-semibold text-[#777777]">
                  <Clock size={14} strokeWidth={2.5} />
                  <span>Direct &bull; 1h 20m</span>
                </div>

                {/* Card Button */}
                <div className="mt-auto">
                  <button
                    className={`flex h-[48px] w-full items-center justify-center gap-2 rounded-[16px] border text-[14px] font-bold transition-colors duration-200
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
        {/* Outer frame spec: W390 Hug, padding 16 (L/R) / 40 (T/B), gap 32, radius 0 */}
        <div className="flex w-full flex-col gap-[32px] py-[10px] px-[16px] lg:hidden">

          {/* Mobile Header */}
          <div className="flex flex-col gap-[8px]">
            <h2 className="font-sans text-[32px] font-bold leading-[1.15] tracking-tight text-[#000000]">
              Cheap Flights from
              <br />
              <span className="text-[#FDDB32]">Dublin</span>
            </h2>
            <p className="font-sans text-[14px] leading-[1.6] text-[#555555]">
              Compare today&apos;s lowest fares from Dublin Airport to popular destinations across Europe, North
              America, and beyond. Prices update regularly.
            </p>
          </div>

          {/* Mobile Flight Cards Grid — card spec: W174 Fill x H300 Fill, radius 12, clip content, padding 0, gap 0 */}
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
                  <h3 className="font-sans text-[15px] font-extrabold leading-tight text-[#000000]">
                    {flight.city}
                  </h3>
                  <p className="mt-[2px] font-sans text-[11px] text-[#777777]">
                    {flight.route}
                  </p>

                  <div className="mt-[10px] flex items-center justify-between gap-[4px]">
                    <p className="font-sans text-[17px] font-extrabold leading-none text-[#000000]">
                      {flight.price}
                    </p>
                    <div className="flex items-center gap-[3px] rounded-full border border-neutral-200 px-[6px] py-[3px]">
                      <span className="text-[9px] font-semibold text-[#777777]">by</span>
                      <span className="text-[9px] font-bold text-[#00529C]">{flight.airline}</span>
                    </div>
                  </div>

                  <div className="mt-[8px] mb-[10px] flex items-center gap-[4px] text-[10.5px] font-semibold text-[#777777]">
                    <Clock size={11} strokeWidth={2.5} />
                    <span>Direct &bull; {flight.duration}</span>
                  </div>

                  <div className="mt-auto">
                    <button className="flex h-[34px] w-full items-center justify-center gap-1 rounded-[8px] border border-neutral-200 bg-white text-[11px] font-bold text-[#000000]">
                      View Flights
                      <ArrowUpRight size={12} strokeWidth={2} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile CTA Button */}
          <button className="flex h-[56px] w-full items-center justify-center gap-2 rounded-full bg-[#FDDB32] text-[15px] font-semibold text-[#000000]">
            Browse All Flight Routes
            <ArrowUpRight size={18} strokeWidth={2} />
          </button>

        </div>

      </div>
    </section>
  );
}