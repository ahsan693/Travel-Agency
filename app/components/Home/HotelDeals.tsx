'use client';

import Image from "next/image";
import Link from "next/link";
import { Star, MapPin, Calendar, Clock, ArrowUpRight } from "lucide-react";

const hotels = [
  { 
    name: "The Westin Paris", 
    location: "Paris, France", 
    rating: "4.9/5", 
    price: "€29", 
    unit: "/ person", 
    tags: ["Hotel", "Luxury", "Spa"], 
    checkin: "Apr 21, 2024",
    image: "https://images.unsplash.com/photo-1460627390041-532a28402358?auto=format&w=800&q=80&fit=crop"
  },
  { 
    name: "Hilton Barcelona", 
    location: "Barcelona, Spain", 
    rating: "4.7/5", 
    price: "€142", 
    unit: "/ night", 
    tags: ["Hotel", "Business", "Pool"], 
    checkin: "May 10, 2024",
    image: "https://images.unsplash.com/photo-1612899326681-66508905b4ce?auto=format&w=800&q=80&fit=crop"
  },
  { 
    name: "Marriott Dubai", 
    location: "Dubai, UAE", 
    rating: "4.8/5", 
    price: "€98", 
    unit: "/ night", 
    tags: ["Hotel", "Resort", "Beachfront"], 
    checkin: "Jun 15, 2024",
    image: "https://images.pexels.com/photos/23696832/pexels-photo-23696832.jpeg?auto=compress&cs=tinysrgb&w=800&q=80"
  },
];

export default function HotelDeals() {
  return (
    <section className="py-20 lg:py-32 bg-black text-white">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <div className="mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6 font-saans tracking-tight text-white">Find Great Hotel Deals</h2>
          <p className="text-white/60 mb-8 max-w-2xl">
            Compare hotel prices from trusted booking partners and find great places to stay around the world.
          </p>
          <div className="flex flex-wrap gap-2">
            {["All", "Luxury", "Budget", "Family", "Beach", "Business", "Boutique"].map((tag, i) => (
              <button key={tag} className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all ${i === 0 ? 'bg-sunbeam text-ink' : 'bg-white/10 text-white hover:bg-white/20'}`}>
                {tag}
              </button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hotels.map((hotel, i) => (
            <div key={i} className="bg-white text-ink rounded-[32px] overflow-hidden group shadow-xl">
              <div className="relative h-64">
                <Image src={hotel.image} alt={hotel.name} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur px-4 py-1.5 rounded-full text-xs font-bold text-ink">Popular</div>
                <div className="absolute top-6 right-6 bg-sunbeam w-10 h-10 rounded-full flex items-center justify-center shadow-lg">
                  <ArrowUpRight size={20} className="text-ink" />
                </div>
              </div>
              <div className="p-8">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center gap-1.5">
                    <div className="flex text-rating">
                      {Array.from({ length: 5 }).map((_, j) => <Star key={j} size={12} fill="currentColor" />)}
                    </div>
                    <span className="text-sm font-bold text-rating">{hotel.rating}</span>
                  </div>
                  <Link href="#" className="text-xs font-bold text-ink-muted uppercase tracking-tight hover:text-ink transition-colors">Compare Prices ↗</Link>
                </div>
                <h3 className="text-2xl font-bold mb-2 text-ink">{hotel.name}</h3>
                <div className="flex items-center gap-2 text-sm text-ink-muted mb-6">
                  <MapPin size={16} />
                  {hotel.location}
                </div>
                <div className="flex flex-wrap gap-2 mb-8">
                  {hotel.tags.map(tag => (
                    <span key={tag} className="bg-tag-hotel/10 text-tag-hotel text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-tighter">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="space-y-3 pt-6 border-t border-divider mb-8">
                  <div className="flex items-center gap-3 text-sm text-gray-500">
                    <Calendar size={16} />
                    Check-in: {hotel.checkin}
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-500">
                    <MapPin size={16} />
                    {hotel.location}
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-500">
                    <Clock size={16} />
                    Check-out: 12:00 PM
                  </div>
                </div>
                <div className="flex items-center justify-between pt-6 border-t border-divider">
                  <div>
                    <p className="text-xs text-ink-muted font-bold uppercase tracking-widest">Start from</p>
                    <p className="text-3xl font-extrabold text-ink">
                      {hotel.price}
                      <span className="text-sm text-ink-muted font-medium ml-1">{hotel.unit}</span>
                    </p>
                  </div>
                  <button className="bg-sunbeam px-6 py-3 rounded-xl font-bold hover:brightness-110 transition-all text-ink">
                    Book Now
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
