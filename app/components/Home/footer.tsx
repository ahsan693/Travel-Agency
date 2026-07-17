'use client';

import Image from "next/image";
import Link from "next/link";

const columns = [
  { title: "Search", links: ["Cheap Flights to Dubai", "Hotels in Paris", "Flights from Dublin", "Flights from London"] },
  { title: "Discover", links: ["Deals", "Destinations", "Airlines", "Airports"] },
  { title: "Discover", links: ["Trips", "Travel Guide", "Travel Tips", "FAQs"] },
  { title: "Company", links: ["About", "Contact", "Partners", "Help Centre"] },
];

const legalLinks = [
  "Privacy Policy",
  "Terms & Conditions",
  "Cookie Policy",
  "Affiliate Disclosure",
  "Accessibility",
];

const socialIcons = [
  { src: "/assets/instagram.svg", alt: "Instagram" },
  { src: "/assets/facebook.svg", alt: "Facebook" },
  { src: "/assets/tiktok.svg", alt: "TikTok" },
];

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto w-full max-w-[1216px] px-6 lg:px-10 pt-16 lg:pt-20 pb-10 lg:pb-12">

        {/* ===== Top frame: logo block (left) + nav columns (right), gap 33 ===== */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-12 lg:gap-[33px]">

          {/* Logo + locale pill + blurb + socials */}
          <div className="flex max-w-[300px] flex-col gap-6">
            <Link href="/" className="flex items-center">
              <Image src="/assets/logo.svg" alt="TravelMommy" width={140} height={36} className="h-9 w-auto" />
            </Link>

            <span className="w-fit rounded-[10px] border border-white/15 bg-white/5 px-[12px] py-[8px] text-[13px] font-medium leading-[18px] tracking-[-0.02em] text-white/80">
              IE Ireland · English (UK) · EUR €
            </span>

            <p className="text-[14px] font-medium leading-[21px] tracking-[-0.02em] text-white/50">
              Compare flights, hotels and travel deals from trusted travel
              providers - all in one place.
            </p>

            <div className="flex items-center gap-4">
              {socialIcons.map((icon) => (
                <Link key={icon.alt} href="#" aria-label={icon.alt}>
                  <Image
                    src={icon.src}
                    alt={icon.alt}
                    width={18}
                    height={18}
                    className="opacity-50 transition-opacity hover:opacity-100"
                  />
                </Link>
              ))}
            </div>
          </div>

          {/* Nav columns group */}
          <div className="grid grid-cols-2 gap-x-10 gap-y-10 sm:grid-cols-4 lg:flex lg:gap-16">
            {columns.map((col, i) => (
              <div key={i} className="flex flex-col gap-4">
                <span className="text-[13px] font-semibold leading-[18px] tracking-[-0.02em] text-white">
                  {col.title}
                </span>
                <ul className="flex flex-col gap-3">
                  {col.links.map((link) => (
                    <li key={link}>
                      <Link
                        href="#"
                        className="text-[13px] font-medium leading-[18px] tracking-[-0.02em] text-white/50 transition-colors hover:text-white"
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

        {/* ===== Divider ===== */}
        <div className="mt-16 lg:mt-20 border-t border-white/10" />

        {/* ===== Bottom frame: fully centered (legal links → copyright → disclaimer) ===== */}
        <div className="flex flex-col items-center gap-4 pt-8 text-center">
          <p className="flex flex-wrap items-center justify-center gap-x-[10px] gap-y-[6px] text-[12px] font-medium leading-[16px] tracking-[-0.02em] text-white/40">
            {legalLinks.map((link, i) => (
              <span key={link} className="flex items-center gap-[10px]">
                <Link href="#" className="transition-colors hover:text-white">
                  {link}
                </Link>
                {i < legalLinks.length - 1 && <span className="text-white/15">|</span>}
              </span>
            ))}
          </p>

          <p className="text-[12px] font-medium leading-[16px] tracking-[-0.02em] text-white/30">
            © 2025 TravelMommy
          </p>

          <p className="max-w-[640px] text-[12px] font-medium leading-[18px] tracking-[-0.02em] text-white/25">
            TravelMommy is a travel metasearch platform. We compare prices
            from airlines, hotels and travel providers. Bookings are
            completed directly with our travel partners.
          </p>
        </div>
      </div>
    </footer>
  );
}