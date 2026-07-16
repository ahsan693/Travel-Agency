'use client';

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-20 lg:pt-32 pb-16">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr_1fr] gap-12 lg:gap-16 mb-20 lg:mb-32">
          <div>
            <Link href="/">
              <Image src="/assets/logo.svg" alt="TravelMommy" width={160} height={40} className="h-10 w-auto mb-8" />
            </Link>
            <div className="bg-white/5 border border-white/10 px-4 py-3 rounded-xl flex items-center gap-4 text-xs font-bold mb-10 w-fit">
              <span>IE Ireland</span>
              <span className="opacity-20">•</span>
              <span>English (UK)</span>
              <span className="opacity-20">•</span>
              <span>EUR €</span>
            </div>
            <p className="text-sm text-white/50 leading-relaxed mb-8">
              Compare flights, hotels and travel deals from trusted travel providers - all in one place.
            </p>
            <div className="flex gap-4">
              <Image src="/assets/instagram.svg" alt="Instagram" width={20} height={20} className="w-5 h-5 opacity-60 hover:opacity-100 cursor-pointer" />
              <Image src="/assets/facebook.svg" alt="Facebook" width={20} height={20} className="w-5 h-5 opacity-60 hover:opacity-100 cursor-pointer" />
              <Image src="/assets/tiktok.svg" alt="TikTok" width={20} height={20} className="w-5 h-5 opacity-60 hover:opacity-100 cursor-pointer" />
            </div>
          </div>
          
          {[
            { title: "Search", links: ["Cheap Flights to Dubai", "Hotels in Paris", "Flights from Dublin", "Flights from London"] },
            { title: "Discover", links: ["Deals", "Destinations", "Airlines", "Airports"] },
            { title: "Travel Tips", links: ["Trips", "Travel Guide", "Travel Tips", "FAQs"] },
            { title: "Company", links: ["About", "Contact", "Partners", "Help Centre"] }
          ].map((col, i) => (
            <div key={i}>
              <h4 className="font-bold mb-8 uppercase tracking-widest text-xs text-white/40">{col.title}</h4>
              <ul className="space-y-4 text-sm font-medium text-white/60">
                {col.links.map(link => (
                  <li key={link} className="hover:text-white cursor-pointer transition-colors">{link}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-white/10 pt-12 pb-12 flex flex-col items-center">
          <div className="flex flex-wrap justify-center gap-4 lg:gap-8 text-xs font-bold text-white/40 mb-12">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span className="hidden sm:inline">|</span>
            <Link href="#" className="hover:text-white transition-colors">Terms & Conditions</Link>
            <span className="hidden sm:inline">|</span>
            <Link href="#" className="hover:text-white transition-colors">Cookie Policy</Link>
            <span className="hidden sm:inline">|</span>
            <Link href="#" className="hover:text-white transition-colors">Affiliate Disclosure</Link>
            <span className="hidden sm:inline">|</span>
            <Link href="#" className="hover:text-white transition-colors">Accessibility</Link>
          </div>
          <div className="text-center max-w-[800px]">
            <p className="text-xs text-white/30 font-bold mb-4">© 2025 TravelMommy</p>
            <p className="text-[10px] text-white/20 uppercase tracking-widest leading-loose">
              TravelMommy is a travel metasearch platform. We compare prices from airlines, hotels and travel providers. Bookings are completed directly with our travel partners.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
