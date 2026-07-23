'use client';

import Image from "next/image";
import { Clock } from "lucide-react";

const cheapFlights = [
  { city: "London", route: "Dub → LHR", price: "€24", airline: "Ryanair", duration: "1h 20m", image: "/Homepage/Section 3/Images/Image Container.png" },
  { city: "London", route: "Dub → LGW", price: "€24", airline: "Ryanair", duration: "1h 25m", image: "/Homepage/Section 3/Images/Image Container-1.png" },
  { city: "Barcelona", route: "Dub → BCN", price: "€24", airline: "Ryanair", duration: "2h 35m", image: "/Homepage/Section 3/Images/Image Container-2.png" },
  { city: "Lisbon", route: "Dub → LIS", price: "€24", airline: "Ryanair", duration: "2h 50m", image: "/Homepage/Section 3/Images/Image Container-3.png" },
  { city: "New York", route: "Dub → JFK", price: "€189", airline: "Aer Lingus", duration: "7h 15m", image: "/Homepage/Section 3/Images/Image Container-4.png" },
  { city: "Rome", route: "Dub → FCO", price: "€34", airline: "Ryanair", duration: "3h 10m", image: "/Homepage/Section 3/Images/Image Container-5.png" },
  { city: "Dubai", route: "Dub → DXB", price: "€245", airline: "Emirates", duration: "7h 45m", image: "/Homepage/Section 3/Images/Image Container-6.png" },
  { city: "Amsterdam", route: "Dub → AMS", price: "€28", airline: "Ryanair", duration: "1h 40m", image: "/Homepage/Section 3/Images/Image Container-7.png" },
];

export default function CheapFlights() {
  return (
    <section className="w-full bg-[#ffffff] py-[80px] text-[#000000]">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col px-[32px] max-[430px]:px-4">

        {/* Header Section */}
        <div className="mb-[48px] flex flex-col items-start justify-between gap-8 lg:flex-row">
          <div className="flex max-w-[700px] flex-col gap-[10px]">
            <h2 className="font-sans text-[48px] font-medium leading-[100%] tracking-[0px] text-[#000000]">
              Cheap Flights from <span className="text-[#FDDB32]">Dublin</span>
            </h2>
            <p className="font-sans text-[14px] font-normal leading-[143%] text-[#555555]">
              Looking for cheap flights from Dublin? Compare today&apos;s lowest fares from Dublin Airport to
              popular destinations across Europe, North America and beyond. Prices update regularly so you
              can find the best available deals before you book.
            </p>
          </div>

          <button className="inline-flex h-[48px] shrink-0 items-center gap-2 rounded-full bg-[#FDDB32] px-[28px] font-sans text-[14px] font-medium leading-[143%] text-[#000000] transition-colors hover:bg-[#e5c52c]">
            Browse All Flight Routes
            <Image 
              src="/Homepage/Section 3/Icon/KQY0VNx64.png" 
              alt="Arrow Right" 
              width={16} 
              height={16} 
              className="object-contain" 
            />
          </button>
        </div>

        {/* Flight Cards Grid (Unified for Desktop and Mobile) */}
        <div className="grid w-full grid-cols-1 gap-[24px] sm:grid-cols-2 lg:grid-cols-4">
          {cheapFlights.map((flight, i) => (
            <div
              key={i}
              className="group flex h-[364px] flex-col overflow-hidden rounded-[24px] border border-[#E6E6E6] bg-[#FFFFFF] shadow-[0_4px_12px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* 1. Image Container (140px fixed height) */}
              <div className="relative h-[140px] w-full shrink-0 overflow-hidden bg-neutral-100">
                <Image
                  src={flight.image}
                  alt={flight.city}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* 2. Content Section (156px height) */}
              <div className="flex w-full flex-col gap-[12px] p-[20px]">
                
                {/* Route Info */}
                <div className="flex w-full flex-col gap-[4px]">
                  <h3 className="font-sans text-[24px] font-medium leading-[24px] text-[#000000]">
                    {flight.city}
                  </h3>
                  <p className="font-sans text-[14px] font-normal leading-[20px] tracking-[0px] text-[#7D7D7D]">
                    {flight.route}
                  </p>
                </div>

                {/* Price Row */}
                <div className="flex h-[24px] w-full items-center justify-between">
                  <p className="font-sans text-[24px] font-medium leading-[24px] text-[#212121]">
                    {flight.price}
                  </p>
                  <div className="flex items-center gap-[4px] rounded-[6px] border border-[#E6E6E6] bg-[#F9FBF5] px-[8px] py-[4px]">
                    <Image 
                      src="/Homepage/Section 3/Icon/Airline Logo.png" 
                      alt={`${flight.airline} logo`} 
                      width={16} 
                      height={16} 
                      className="object-contain" 
                    />
                    <span className="font-sans text-[12px] font-medium leading-[16px] tracking-[0px] text-[#000000]">
                      {flight.airline}
                    </span>
                  </div>
                </div>

                {/* Meta Row */}
                <div className="flex h-[20px] items-center gap-[6px]">
                  <Clock size={14} className="text-[#7D7D7D]" />
                  <span className="font-sans text-[14px] font-normal leading-[20px] tracking-[0px] text-[#7D7D7D]">
                    Direct &bull; {flight.duration}
                  </span>
                </div>
              </div>

              {/* 3. Footer Section (68px height) */}
              <div className="mt-auto px-[20px] pb-[20px] pt-0">
                <button className="flex h-[48px] w-full items-center justify-center gap-[8px] rounded-[12px] border border-[#E6E6E6] bg-[#FFFFFF] transition-colors hover:bg-[#FDDB32] hover:border-[#FDDB32]">
                  <span className="font-sans text-[14px] font-medium leading-[20px] tracking-[0px] text-[#000000]">
                    View Flights
                  </span>
                  <Image 
                    src="/Homepage/Section 3/Icon/KQY0VNx64.png" 
                    alt="Arrow Right" 
                    width={14} 
                    height={14} 
                    className="object-contain" 
                  />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}