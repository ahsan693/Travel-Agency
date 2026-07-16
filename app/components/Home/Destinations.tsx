'use client';

import Image from "next/image";
import { Plane, Hotel, ArrowUpRight } from "lucide-react";

const destinations = [
  { city: "Paris, France", tagline: "The City of Light", image: "https://images.unsplash.com/photo-1431274172761-fca41d930114?auto=format&w=800&q=80&fit=crop" },
  { city: "Barcelona, Spain", tagline: "Modernism & beaches", image: "https://images.pexels.com/photos/16984552/pexels-photo-16984552.jpeg?auto=compress&cs=tinysrgb&w=800&q=80" },
  { city: "Dubai, UAE", tagline: "Luxury & desert dunes", image: "https://images.pexels.com/photos/31566720/pexels-photo-31566720.jpeg?auto=compress&cs=tinysrgb&w=800&q=80" },
  { city: "Bali, Indonesia", tagline: "Island paradise & temples", image: "https://images.unsplash.com/photo-1573790387438-4da905039392?auto=format&w=800&q=80&fit=crop" },
];

export default function Destinations() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between mb-16 gap-8">
          <div>
            <h2 className="text-3xl lg:text-5xl font-bold mb-4 font-saans tracking-tight text-ink">
              Discover Your Next Destination
            </h2>
            <p className="text-ink-muted max-w-[600px]">
              Discover popular cities and compare flights and hotels before you book.
            </p>
          </div>
          <button className="bg-sunbeam px-8 py-4 rounded-2xl font-bold flex items-center gap-3 hover:brightness-110 transition-all text-ink">
            More Destinations
            <ArrowUpRight size={16} />
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {destinations.map((dest, i) => (
            <div key={i} className="bg-white rounded-[40px] border border-gray-100 shadow-xl overflow-hidden group">
              <div className="relative h-[320px]">
                <Image src={dest.image} alt={dest.city} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur px-4 py-1.5 rounded-full text-sm font-bold text-ink">Popular</div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-black mb-1 text-ink">{dest.city}</h3>
                <p className="text-sm text-ink-muted font-medium mb-8">{dest.tagline}</p>
                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3 bg-gray-50 px-4 py-2 rounded-full w-fit">
                    <Plane size={16} className="text-ink" />
                    <span className="text-sm font-bold text-ink">Flights from €38</span>
                  </div>
                  <div className="flex items-center gap-3 bg-gray-50 px-4 py-2 rounded-full w-fit">
                    <Hotel size={16} className="text-ink" />
                    <span className="text-sm font-bold text-ink">Hotels from €94/night</span>
                  </div>
                </div>
                <button className="w-full bg-sunbeam py-4 rounded-2xl font-bold flex items-center justify-center gap-3 shadow-lg shadow-sunbeam/20 hover:brightness-110 transition-all text-ink text-sm">
                  Explore
                  <ArrowUpRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
