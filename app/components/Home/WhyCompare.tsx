'use client';

export default function WhyCompare() {
  return (
    <section className="w-full bg-[#000000] text-[#ffffff]">
      {/* ===================== MOBILE VIEW ===================== */}
      {/* Frame spec: W390 Fill / H180 Hug, padding 20 (L/R) x 40 (T/B), gap 0, bg Primary/Black */}
      <div className="h-auto w-full px-[20px] py-[40px] lg:hidden">
        {/* Title L: 24px, Medium, 100% */}
        <h2 className="font-sans text-[24px] font-medium leading-none text-[#ffffff]">
          Compare Flights &amp; Hotels with{' '}
          <span className="text-[#FDDB32]">TravelMommy</span>
        </h2>
        {/* Body M: 14px, Regular, 143% */}
        <p className="mt-[12px] font-sans text-[14px] font-normal leading-[1.43] text-white/70">
          Compare prices from trusted travel providers all in one
          place. Whether for family holidays or business trips,
          TravelMommy makes it easier to save.
        </p>
      </div>

      {/* ===================== DESKTOP VIEW ===================== */}
      <div className="hidden py-[80px] lg:block lg:py-[128px]">
        <div className="mx-auto max-w-[1280px] px-[24px] lg:px-[40px]">
          {/* Display L: 48px, Medium, 100% */}
          <h2 className="mb-[32px] font-sans text-[48px] font-medium leading-none text-[#ffffff]">
            Why Compare Travel Prices with{' '}
            <span className="text-[#FDDB32]">TravelMommy?</span>
          </h2>
          {/* Body L: 16px, Regular, 150% */}
          <p className="max-w-[1000px] font-sans text-[16px] font-normal leading-[1.5] text-white/70">
            TravelMommy helps you compare flight and hotel
            prices from trusted airlines, booking websites
            and travel providers - all in one place. Search
            live fares, compare accommodation prices, discover
            the cheapest travel dates and book directly with your
            preferred provider. Whether you're planning a weekend
            city break, a family holiday, a business trip or a
            long-haul adventure, TravelMommy makes it easier to
            compare travel prices without searching multiple websites
            individually.
          </p>
        </div>
      </div>
    </section>
  );
}