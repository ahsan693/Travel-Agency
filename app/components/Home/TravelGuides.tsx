'use client';

import { useState } from "react";
import Image from "next/image";

const guides = [
  {
    date: "June 12, 2026",
    title: "Best Time to Visit Bali",
    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80",
  },
  {
    date: "May 28, 2026",
    title: "How to Find Cheap Flights",
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=80",
  },
  {
    date: "May 15, 2026",
    title: "Paris Travel Guide",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function TravelGuides() {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  return (
    <section className="w-full bg-white py-20 text-black">
      <div className="mx-auto max-w-[1280px] px-8 max-[430px]:px-4">

        {/* Heading */}
        <h2 className="mb-12 text-center text-5xl font-medium max-md:text-3xl">
          Featured Travel Guides
        </h2>

        {/* Cards */}
        <div className="flex flex-col gap-6 md:flex-row">

          {guides.map((guide, i) => {
            const active = activeCard === i;

            return (
              <div
                key={i}
                onMouseEnter={() => setActiveCard(i)}
                onMouseLeave={() => setActiveCard(null)}
                onTouchStart={() => setActiveCard(i)}
                className={`
                  group
                  relative
                  overflow-hidden
                  rounded-[28px]
                  bg-white
                  transition-all
                  duration-700
                  ease-in-out
                  cursor-pointer

                  flex-[1]

                  ${active ? "md:flex-[2]" : "md:flex-1"}
                `}
              >
                {/* Image */}
                <div
                  className={`
                    relative
                    overflow-hidden
                    rounded-[28px]
                    transition-all
                    duration-700

                    ${active ? "h-[430px]" : "h-[430px]"}
                  `}
                >
                  <Image
                    src={guide.image}
                    alt={guide.title}
                    fill
                    className={`
                      object-cover
                      transition-transform
                      duration-700
                      ${active ? "scale-110" : "scale-100"}
                    `}
                  />

                  {/* Arrow */}
                  <div className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-lg transition-transform duration-500 group-hover:scale-110">
                    <Image
                      src="/Homepage/Section 6/Icon/KQY0VNx64.png"
                      alt="Arrow"
                      width={15}
                      height={15}
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="px-2 py-5">

                  <p className="mb-2 text-xs font-medium text-neutral-500">
                    {guide.date}
                  </p>

                  <h3
                    className={`
                      font-medium
                      transition-all
                      duration-500

                      ${
                        active
                          ? "text-3xl leading-tight"
                          : "text-xl leading-snug"
                      }
                    `}
                  >
                    {guide.title}
                  </h3>

                </div>
              </div>
            );
          })}
        </div>

        {/* Button */}
        <div className="mt-12 flex justify-center">

          <button className="flex items-center gap-2 rounded-full bg-[#FDDB32] px-8 py-3 text-sm font-medium transition hover:bg-yellow-400">

            View All Guides

            <Image
              src="/Homepage/Section 6/Icon/KQY0VNx64.png"
              alt="Arrow"
              width={14}
              height={14}
            />

          </button>

        </div>

      </div>
    </section>
  );
}