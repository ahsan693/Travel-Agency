'use client';

import Image from "next/image";
import Link from "next/link";

const columns = [
  { title: "Search", links: ["Cheap Flights to Dubai", "Hotels in Paris", "Flights from Dublin", "Flights from London"] },
  { title: "Discover", links: ["Deals", "Destinations", "Airlines", "Airports"] },
  { title: "Discover", links: ["Trips", "Travel Guide", "Travel Tips", "FAQs"] },
  { title: "Company", links: ["About", "Contact", "Partners", "Help Centre"] },
];

const mobileOrder = ["order-1", "order-3", "order-2", "order-4"];

const socialIcons = [
  {
    alt: "Instagram",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
      </svg>
    )
  },
  {
    alt: "Facebook",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
      </svg>
    )
  },
  {
    alt: "TikTok",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 12a4 4 0 1 0 4 4V2a5 5 0 0 0 5 5h-2a3 3 0 0 1-3-3V2H9v10Z"></path>
      </svg>
    )
  }
];

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto w-full max-w-[1216px] px-6 pb-10 pt-16 lg:px-10 lg:pb-12 lg:pt-20">

        {/* ===== Top frame: logo block (left) + nav columns (right) ===== */}
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between lg:gap-[33px]">

          {/* Logo + locale pill + blurb + socials */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center">
              <Image
                src="/Homepage/Section 7/Vector-1.png"
                alt="TravelMommy Logo"
                width={203}
                height={128}
                className="h-32 w-auto object-contain lg:h-[117px]"
              />
            </Link>

            {/* Locale Pill */}
            <button className="flex w-fit items-center gap-[8px] rounded-[10px] border border-white/15 bg-white/5 px-[12px] py-[8px] font-sans text-[12px] font-medium leading-[1.33] text-white transition-colors hover:bg-white/10">
              <Image
                src="/Homepage/Section 7/Vector.png"
                alt="Region Settings"
                width={14}
                height={14}
                className="object-contain"
              />
              IE Ireland · English (UK) · EUR €
              <Image
                src="/Homepage/Section 7/KQY0VNx64.png"
                alt="Dropdown Arrow"
                width={12}
                height={12}
                className="object-contain"
              />
            </button>

            {/* Description text + social icons under logo */}
            <div className="flex flex-col gap-[10px]">
              <p className="w-full max-w-[350px] font-sans text-[16px] font-normal leading-[24px] text-white">
                Compare flights, hotels and travel deals from trusted travel
                providers - all in one place.
              </p>

              {/* Social Icons */}
              <div className="flex items-center gap-5 pt-2">
                {socialIcons.map((social) => (
                  <Link 
                    key={social.alt} 
                    href="#" 
                    aria-label={social.alt}
                    className="!text-[#7D7D7D] transition-colors hover:!text-white"
                  >
                    {social.icon}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Nav columns group */}
          <div className="grid grid-cols-2 gap-x-10 gap-y-10 sm:grid-cols-4 lg:flex lg:gap-16">
            {columns.map((col, i) => (
              <div
                key={i}
                className={`flex flex-col gap-4 ${mobileOrder[i]} sm:order-none`}
              >
                {/* Column Title */}
                <span className="font-sans text-[16px] font-medium leading-[1.5] text-white">
                  {col.title}
                </span>

                {/* Navigation Links */}
                <ul className="m-0 flex list-none flex-col gap-0 p-0">
                  {col.links.map((link) => (
                    <li key={link} className="m-0 p-0">
                      <Link
                        href="#"
                        className="block py-[8px] font-sans text-[14px] font-medium leading-[20px] !text-[#7D7D7D] transition-colors hover:!text-white"
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

        {/* ===== Bottom frame: dividers and legal text ===== */}
        <div className="mt-16 flex flex-col lg:mt-[33px]">

          {/* Divider 1 */}
          <div className="h-px w-full bg-white/10" />

          {/* Legal links perfectly matched to Figma dimensions/layout */}
          <div className="flex justify-center py-[33px]">
            <div className="flex w-[364px] flex-col items-center justify-center font-sans text-[16px] font-normal leading-[24px] tracking-[0px] text-white">
              
              {/* Line 1: 3 Links */}
              <div className="flex items-center gap-[6px] whitespace-nowrap">
                <Link href="#" className="transition-colors hover:text-white/70">Privacy Policy</Link>
                <span>|</span>
                <Link href="#" className="transition-colors hover:text-white/70">Terms & Conditions</Link>
                <span>|</span>
                <Link href="#" className="transition-colors hover:text-white/70">Cookie Policy</Link>
              </div>

              {/* Line 2: 2 Links */}
              <div className="flex items-center gap-[6px] whitespace-nowrap">
                <Link href="#" className="transition-colors hover:text-white/70">Affiliate Disclosure</Link>
                <span>|</span>
                <Link href="#" className="transition-colors hover:text-white/70">Accessibility</Link>
              </div>

            </div>
          </div>

          {/* Divider 2 */}
          <div className="h-px w-full bg-white/10" />

          {/* Copyright + disclaimer */}
          <div className="flex flex-col items-center pt-[33px] text-center">
            <p className="font-sans text-[16px] font-normal leading-[24px] text-white">
              © 2025 TravelMommy
            </p>

            <div className="h-[24px]" />

            <p className="max-w-[889px] font-sans text-[16px] font-normal leading-[24px] text-white">
              TravelMommy is a travel metasearch platform. We compare prices from airlines, hotels and travel providers. Bookings are completed directly with our travel partners.
            </p>
          </div>

        </div>

      </div>
    </footer>
  );
}