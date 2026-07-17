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

export default function CheapFlights() {
  return (
    <section className="w-full bg-[#ffffff] py-[80px] text-[#000000]">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col px-[32px] max-[430px]:px-4">

        {/* Header Section */}
        <div className="mb-[48px] flex items-start justify-between gap-8 max-[768px]:flex-col max-[768px]:items-stretch">
          <div className="flex max-w-[700px] flex-col gap-[10px]">
            <h2 className="font-sans text-[36px] font-bold leading-tight tracking-tight text-[#000000] max-[768px]:text-[28px] max-[480px]:text-[24px]">
              Cheap Flights from <span className="text-[#FDDB32]">Dublin</span>
            </h2>
            <p className="font-sans text-[14px] leading-[1.6] text-[#555555]">
              Looking for cheap flights from Dublin? Compare today&apos;s lowest fares from Dublin Airport to
              popular destinations across Europe, North America and beyond. Prices update regularly so you
              can find the best available deals before you book.
            </p>
          </div>

          <button className="inline-flex h-[48px] shrink-0 items-center gap-2 rounded-full bg-[#FDDB32] px-[28px] text-[14px] font-semibold text-[#000000] transition-colors hover:bg-[#e5c52c] max-[768px]:self-start">
            Browse All Flight Routes
            <ArrowUpRight size={16} strokeWidth={2} />
          </button>
        </div>

        {/* Flight Cards Grid — card spec: W292 x H364 (Fill), radius 24, clip content, padding 0 */}
        <div className="grid w-full grid-cols-1 gap-[24px] sm:grid-cols-2 lg:grid-cols-4">
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

      </div>
    </section>
  );
}