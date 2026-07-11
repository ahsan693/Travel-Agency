'use client';

import Link from 'next/link';

export default function Footer() {
  const footerLinks = [
    {
      title: 'Search',
      links: ['Flights', 'Hotels', 'Airlines', 'Airports'],
    },
    {
      title: 'Discover',
      links: ['Deals', 'Destinations', 'Airlines', 'Airports'],
    },
    {
      title: 'Discover',
      links: ['Trips', 'Travel Guide', 'Travel Tips', 'FAQs'],
    },
    {
      title: 'Company',
      links: ['About', 'Contact', 'Partners', 'Help Centre'],
    },
  ];

  return (
    <footer className="w-full bg-[#000000] text-white py-[80px]">
      <div className="mx-auto flex max-w-[1216px] flex-col px-4 min-[1216px]:px-0">
        
        {/* Top grid section */}
        <div className="grid grid-cols-12 gap-8 pb-[40px] max-[1024px]:flex max-[1024px]:flex-col">
          
          {/* Left brand column */}
          <div className="col-span-4 flex flex-col gap-6 max-w-[340px]">
            <div className="flex flex-col font-serif text-[32px] font-black italic leading-[0.78] tracking-[-0.06em] text-[#ffc629] select-none">
              Travel
              <span className="ml-[24px]">Mommy</span>
            </div>

            <div className="inline-flex self-start items-center gap-1.5 rounded-lg bg-[#1a1a1a] px-3.5 py-2 text-[12px] font-medium text-white border border-neutral-800">
              <span className="mr-0.5">🇮🇪</span>
              <span>Ireland</span>
              <span className="text-neutral-500">·</span>
              <span>English (UK)</span>
              <span className="text-neutral-500">·</span>
              <span>EUR €</span>
            </div>

            <p className="font-sans text-[13px] leading-[1.6] text-neutral-400">
              Compare flights, hotels and travel deals from trusted travel providers - all in one place.
            </p>

            <div className="flex items-center gap-4 text-neutral-400">
              <a href="#instagram" className="hover:text-white transition-colors" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#facebook" className="hover:text-white transition-colors" aria-label="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#tiktok" className="hover:text-white transition-colors" aria-label="TikTok">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right link columns */}
          <div className="col-span-8 grid grid-cols-4 gap-6 max-[640px]:grid-cols-2 max-[400px]:grid-cols-1">
            {footerLinks.map((section, idx) => (
              <div key={idx} className="flex flex-col gap-3">
                <h4 className="font-sans text-[14px] font-semibold text-white tracking-wider">
                  {section.title}
                </h4>
                <ul className="list-none p-0 m-0 flex flex-col gap-2">
                  {section.links.map((link, lIdx) => (
                    <li key={lIdx}>
                      <Link
                        href={`/${link.toLowerCase()}`}
                        className="font-sans text-[13px] text-neutral-400 no-underline hover:text-white transition-colors duration-150"
                      >
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>

        {/* Middle links divider */}
        <div className="border-t border-neutral-800 py-6 text-center">
          <div className="flex flex-wrap justify-center gap-x-2 gap-y-1 text-[13px] text-neutral-400">
            <Link href="/privacy" className="hover:text-white underline decoration-neutral-600">Privacy Policy</Link>
            <span>|</span>
            <Link href="/terms" className="hover:text-white underline decoration-neutral-600">Terms &amp; Conditions</Link>
            <span>|</span>
            <Link href="/cookie" className="hover:text-white underline decoration-neutral-600">Cookie Policy</Link>
          </div>
          <div className="flex flex-wrap justify-center gap-x-2 gap-y-1 text-[13px] text-neutral-400 mt-2">
            <Link href="/affiliate" className="hover:text-white underline decoration-neutral-600">Affiliate Disclosure</Link>
            <span>|</span>
            <Link href="/accessibility" className="hover:text-white underline decoration-neutral-600">Accessibility</Link>
          </div>
        </div>

        {/* Bottom copyright divider */}
        <div className="border-t border-neutral-800 pt-6 flex flex-col items-center gap-4 text-center">
          <div className="font-sans text-[13px] text-neutral-400">
            &copy; 2025 TravelMommy
          </div>
          <p className="font-sans text-[12px] leading-[1.6] text-neutral-500 max-w-[800px]">
            TravelMommy is a travel metasearch platform. We compare prices from airlines, hotels and travel providers. Bookings are completed directly with our travel partners.
          </p>
        </div>

      </div>
    </footer>
  );
}
