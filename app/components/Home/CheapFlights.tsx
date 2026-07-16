'use client';

import Image from "next/image";
import { Clock, ArrowUpRight } from "lucide-react";

const cheapFlights = [
  { city: "London", route: "Dub → LHR", price: "€24", image: "https://images.pexels.com/photos/16230720/pexels-photo-16230720.jpeg?auto=compress&cs=tinysrgb&w=800&q=80", flag: "https://flagcdn.com/gb.svg" },
  { city: "Barcelona", route: "Dub → BCN", price: "€24", image: "https://images.unsplash.com/photo-1578095172812-dcc191c5aed8?auto=format&w=800&q=80&fit=crop", flag: "https://flagcdn.com/es.svg" },
  { city: "Lisbon", route: "Dub → LIS", price: "€24", image: "https://images.unsplash.com/photo-1585208798174-6cedd86e019a?auto=format&w=800&q=80&fit=crop", flag: "https://flagcdn.com/pt.svg" },
  { city: "New York", route: "Dub → JFK", price: "€24", image: "https://images.unsplash.com/photo-1496588152823-86ff7695e68f?auto=format&w=800&q=80&fit=crop", flag: "https://flagcdn.com/us.svg" },
  { city: "Rome", route: "Dub → FCO", price: "€24", image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&w=800&q=80&fit=crop", flag: "https://flagcdn.com/it.svg" },
  { city: "Dubai", route: "Dub → DXB", price: "€24", image: "https://images.unsplash.com/photo-1623725206109-3ef2c2eec00e?auto=format&w=800&q=80&fit=crop", flag: "https://flagcdn.com/ae.svg" },
  { city: "Amsterdam", route: "Dub → AMS", price: "€24", image: "https://images.unsplash.com/photo-1580996378027-23040f16f157?auto=format&w=800&q=80&fit=crop", flag: "https://flagcdn.com/nl.svg" },
  { city: "Paris", route: "Dub → CDG", price: "€24", image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&w=800&q=80&fit=crop", flag: "https://flagcdn.com/fr.svg" },
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
              Looking for cheap flights from Dublin? Compare today's lowest fares from Dublin Airport to popular destinations across Europe, North America and beyond. Prices update regularly so you can find the best available deals before you book.
            </p>
          </div>
          
          <button className="inline-flex h-[48px] shrink-0 items-center gap-2 rounded-full bg-[#FDDB32] px-[28px] text-[14px] font-semibold text-[#000000] transition-colors hover:bg-[#e5c52c] max-[768px]:self-start">
            Browse All Flight Routes
            <ArrowUpRight size={16} strokeWidth={2} />
          </button>
        </div>

        {/* Flight Cards Grid */}
        <div className="grid w-full grid-cols-1 gap-[24px] sm:grid-cols-2 lg:grid-cols-4">
          {cheapFlights.map((flight, i) => (
            <div 
              key={i} 
              className="group flex flex-col overflow-hidden rounded-[24px] border border-neutral-200/60 bg-[#ffffff] shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Image & Flag */}
              <div className="relative h-[200px] w-full shrink-0 overflow-hidden bg-neutral-100">
                <Image 
                  src={flight.image} 
                  alt={flight.city} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105" 
                />
                <div className="absolute left-[16px] top-[16px] flex h-[26px] w-[36px] items-center justify-center rounded-[6px] bg-white p-[3px] shadow-sm">
                  <img src={flight.flag} alt={`${flight.city} flag`} className="h-full w-full rounded-[3px] object-cover" />
                </div>
              </div>

              {/* Card Content (Using precise 24px padding to match Figma scale) */}
              <div className="flex flex-1 flex-col p-[24px]">
                
                {/* Title & Price Row */}
                <div className="mb-[20px] flex items-start justify-between">
                  <div className="flex flex-col pr-2">
                    <h3 className="font-sans text-[20px] font-bold leading-tight text-[#000000]">
                      {flight.city}
                    </h3>
                    <p className="mt-[4px] font-sans text-[12px] font-bold tracking-wider text-[#777777] uppercase">
                      {flight.route}
                    </p>
                  </div>
                  
                  <div className="flex flex-col items-end shrink-0">
                    <p className="font-sans text-[24px] font-extrabold leading-none text-[#000000]">
                      {flight.price}
                    </p>
                    <div className="mt-[6px] flex items-center gap-[4px]">
                      <span className="text-[11px] font-semibold text-[#777777]">by</span>
                      <span className="text-[12px] font-bold text-[#00529C]">Ryanair</span>
                    </div>
                  </div>
                </div>

                {/* Duration Row */}
                <div className="mb-[24px] flex items-center gap-[6px] text-[13px] font-semibold text-[#777777]">
                  <Clock size={14} strokeWidth={2.5} />
                  <span>Direct &bull; 1h 20m</span>
                </div>

                {/* Card Button */}
                <div className="mt-auto">
                  <button 
                    className={`flex h-[44px] w-full items-center justify-center gap-2 rounded-[14px] border text-[13px] font-bold transition-colors duration-200 
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