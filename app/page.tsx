'use client';

import Header from "./components/Home/header";
import Hero from "./components/Home/Hero";
import WhyCompare from "./components/Home/WhyCompare";
import CheapFlights from "./components/Home/CheapFlights";
import HotelDeals from "./components/Home/HotelDeals";
import Destinations from "./components/Home/Destinations";
import TravelGuides from "./components/Home/TravelGuides";
import Footer from "./components/Home/footer";

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
