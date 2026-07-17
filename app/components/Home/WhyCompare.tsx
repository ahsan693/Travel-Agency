'use client';

export default function WhyCompare() {
  return (
    <section className="bg-black text-white">
      {/* ===================== MOBILE VIEW ===================== */}
      {/* Frame spec: W390 Fill / H180 Hug, padding 20 (L/R) x 40 (T/B), gap 0, bg Primary/Black */}
    <div className="lg:hidden w-full h-auto py-10 px-5">
  <h2 className="text-lg font-normal font-saans tracking-tight leading-snug">
    Compare Flights &amp; Hotels with{' '}
    <span className="text-sunbeam">TravelMommy</span>
  </h2>
        <p className="mt-3 text-base text-white/70 leading-relaxed">
          Compare prices from trusted travel providers all in one
          place. Whether for family holidays or business trips,
          TravelMommy makes it easier to save.
        </p>
      </div>

      {/* ===================== DESKTOP VIEW ===================== */}
      <div className="hidden lg:block py-20 lg:py-32">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <h2 className="text-3xl lg:text-5xl font-bold mb-8 font-saans tracking-tight">
            Why Compare Travel Prices with{' '}
            <span className="text-sunbeam">TravelMommy?</span>
          </h2>
          <p className="text-lg lg:text-xl text-white/70 max-w-[1000px] leading-relaxed">
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