'use client';

import Header from "./header";
import Hero from "./Hero";
import WhyCompare from "./WhyCompare";
import CheapFlights from "./CheapFlights";
import HotelDeals from "./HotelDeals";
import Destinations from "./Destinations";
import TravelGuides from "./TravelGuides";
import Footer from "./footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <Hero />
      <WhyCompare />
      <CheapFlights />
      <HotelDeals />
      <Destinations />
      <TravelGuides />
      <Footer />
    </main>
  );
}
