'use client';

import { useState, type ElementType } from "react";
import Image from "next/image";
import Link from "next/link";
import {
    Plane,
    ArrowLeftRight,
    Calendar,
    Users,
    Search,
    Clock,
    ArrowUpRight,
    CreditCard,
    UserCheck,
    RefreshCw,
    MapPin,
    Minus,
    Plus,
    Mail,
} from "lucide-react";

// NOTE: Header and Footer already exist in the codebase and are reused here
// exactly as they appear on the homepage.
import Header from "../components/Home/header";
import Footer from "../components/Home/footer";

// ============================================================================
// STATIC DATA
// ============================================================================

const cheapFlights = [
    { flag: "🇬🇧", city: "London", route: "Dub → LHR", price: "€24", airline: "Ryanair", duration: "Direct • 1h 20m", image: "/assets/destinations/london-1.jpg", featured: true },
    { flag: "🇬🇧", city: "London", route: "Dub → LHR", price: "€24", airline: "Ryanair", duration: "Direct • 1h 20m", image: "/assets/destinations/london-2.jpg" },
    { flag: "🇪🇸", city: "Barcelona", route: "Dub → BCN", price: "€24", airline: "Ryanair", duration: "Direct • 1h 20m", image: "/assets/destinations/barcelona.jpg" },
    { flag: "🇵🇹", city: "Lisbon", route: "Dub → LIS", price: "€24", airline: "Ryanair", duration: "Direct • 1h 20m", image: "/assets/destinations/lisbon.jpg" },
    { flag: "🇺🇸", city: "New York", route: "Dub → JFK", price: "€24", airline: "Ryanair", duration: "Direct • 1h 20m", image: "/assets/destinations/new-york.jpg" },
    { flag: "🇮🇹", city: "Rome", route: "Dub → FCO", price: "€24", airline: "Ryanair", duration: "Direct • 1h 20m", image: "/assets/destinations/rome.jpg" },
    { flag: "🇦🇪", city: "Dubai", route: "Dub → DXB", price: "€24", airline: "Ryanair", duration: "Direct • 1h 20m", image: "/assets/destinations/dubai.jpg" },
    { flag: "🇳🇱", city: "Amsterdam", route: "Dub → AMS", price: "€24", airline: "Ryanair", duration: "Direct • 1h 20m", image: "/assets/destinations/amsterdam.jpg" },
];

const whyCompareFeatures = [
    {
        icon: CreditCard,
        title: "No Hidden Booking Fees",
        description: "TravelMommy doesn't sell flights or charge booking fees. Compare prices for free and choose the deal that works best for you.",
    },
    {
        icon: UserCheck,
        title: "Book with Trusted Partners",
        description: "View the latest flight prices and availability so you can compare deals before booking with your preferred travel provider.",
    },
    {
        icon: RefreshCw,
        title: "Live Prices, Updated Daily",
        description: "View the latest flight prices and availability so you can compare deals before booking with your preferred travel provider.",
    },
];

const popularAirlines = [
    "Emirates", "American Airlines", "Ryanair", "Qatar Airways", "British Airways",
    "Etihad", "KLM", "Lufthansa", "Turkish Airlines", "easyJet",
];

const popularAirports = [
    { name: "Dublin Airport", code: "DUB", location: "Dublin, Ireland" },
    { name: "Heathrow Airport", code: "LHR", location: "London, United Kingdom" },
    { name: "Dubai International", code: "DXB", location: "Dubai, United Arab Emirates" },
    { name: "John F. Kennedy", code: "JFK", location: "New York, United States" },
    { name: "Los Angeles Intl", code: "LAX", location: "Los Angeles, United States" },
    { name: "Amsterdam Schiphol", code: "AMS", location: "Amsterdam, Netherlands" },
];

const faqs = [
    {
        question: "How does TravelMommy compare flight prices?",
        answer: "TravelMommy displays prices provided by airlines and trusted travel partners. Because fares can change quickly, the final price is confirmed when you complete your booking on the provider's website.",
    },
    {
        question: "Does TravelMommy charge booking fees?",
        answer: "No. TravelMommy is a travel metasearch platform. We compare flight prices but do not sell tickets directly or charge booking fees. You always book with the airline or travel provider you choose.",
    },
    {
        question: "Can I compare flights from different airlines?",
        answer: "Yes. TravelMommy lets you compare flights from multiple airlines and travel providers, making it easier to find the best combination of price, travel time and convenience.",
    },
    {
        question: "When is the best time to book cheap flights?",
        answer: "Flight prices can change based on demand, season and availability. Comparing fares early and checking different travel dates can help you find cheaper flights.",
    },
    {
        question: "Are the flight prices shown on TravelMommy live?",
        answer: "TravelMommy displays prices provided by airlines and trusted travel partners. Because fares can change quickly, the final price is confirmed when you complete your booking on the provider's website.",
    },
    {
        question: "Can I book flights directly on TravelMommy?",
        answer: "No. TravelMommy helps you compare flight prices from multiple providers. When you choose a flight, you'll be redirected to the airline or booking partner to complete your booking securely.",
    },
    {
        question: "Which airlines can I compare on TravelMommy?",
        answer: "You can compare flights from a wide range of domestic and international airlines, as well as trusted online travel agencies, helping you find the best available deal for your journey.",
    },
    {
        question: "Why should I compare flights before booking?",
        answer: "Comparing flights helps you find the best available fare, discover alternative airlines or travel dates, and make informed booking decisions without searching multiple websites individually.",
    },
];

// ============================================================================
// PAGE
// ============================================================================

export default function FlightsPage() {
    return (
        <main className="bg-white">
            <HeroSection />
            <CheapFlightsFromDublinSection />
            <WhyCompareFlightsSection />
            <PopularAirlinesSection />
            <PopularAirportsSection />
            <FaqSection />
            <NewsletterSection />
            <Footer />
        </main>
    );
}

// ============================================================================
// HERO SECTION — background image, heading, and flight search form
// ============================================================================

function HeroSection() {
    return (
        <section className="relative">
            {/* Background image + gradient overlay, clipped to rounded bottom corners */}
            <div className="absolute inset-0 -z-10 overflow-hidden rounded-b-[32px]">
                <Image
                    src="/assets/hero-flight.jpg"
                    alt="Airplane wing at sunset"
                    fill
                    priority
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/50" />
            </div>

            <div className="mx-auto w-full max-w-[1216px] px-6 pb-40 pt-6 lg:px-10 lg:pb-48 lg:pt-8">
                {/* Reused site header, rendered on top of the hero image */}
                <Header />

                {/* Heading + subheading */}
                <div className="mt-16 max-w-3xl lg:mt-24">
                    <h1 className="font-sans text-[44px] font-semibold leading-[1.1] text-white lg:text-[64px]">
                        Compare Flights from 500+ Airlines &amp; Travel Sites
                    </h1>
                    <p className="mt-6 max-w-xl font-sans text-[16px] font-normal leading-[1.5] text-white/80">
                        Compare live flight prices from airlines and trusted travel
                        partners to find the best fare before you book.
                    </p>
                </div>
            </div>

            {/* Search form card — intentionally overlaps the hero image and the
          section below it, so it sits outside the overflow-hidden wrapper */}
            <div className="relative z-10 mx-auto -mt-28 w-full max-w-[1216px] px-6 lg:-mt-16 lg:px-10">
                <FlightSearchForm />
            </div>
        </section>
    );
}

function FlightSearchForm() {
    const [addNearbyFrom, setAddNearbyFrom] = useState(false);
    const [addNearbyTo, setAddNearbyTo] = useState(true);
    const [directOnly, setDirectOnly] = useState(false);

    return (
        <div className="w-full max-w-[820px]">
            {/* "Flights" tab above the card */}
            <div className="flex w-fit items-center gap-2 rounded-t-2xl bg-white px-5 py-3 font-sans text-[14px] font-medium text-black">
                <Plane className="h-4 w-4" />
                Flights
            </div>

            <div className="rounded-2xl rounded-tl-none bg-white p-4 shadow-xl lg:p-5">
                <div className="flex flex-col gap-3 lg:flex-row lg:items-stretch">
                    {/* Departure */}
                    <FormField icon={Plane} label="Departure" value="Dublin (DUB)" />

                    {/* Swap icon between departure and destination */}
                    <div className="hidden items-center justify-center lg:flex">
                        <ArrowLeftRight className="h-4 w-4 text-black/40" />
                    </div>

                    {/* Destination */}
                    <FormField icon={Plane} label="To" value="Country, City or air..." muted />

                    {/* Depart date */}
                    <FormField icon={Calendar} label="Depart" value="08 Nov 2025" />

                    {/* Return date */}
                    <FormField icon={Calendar} label="Return" value="08 Jan 2026" />

                    {/* Travellers */}
                    <FormField icon={Users} label="Travellers and Cabin Class" value="01 Adult 01 Child" />

                    {/* Search button */}
                    <button
                        type="button"
                        aria-label="Search flights"
                        className="flex h-14 w-14 shrink-0 items-center justify-center self-center rounded-xl bg-[#FDDB32] transition-colors hover:bg-[#f5cf1a] lg:self-stretch"
                    >
                        <Search className="h-5 w-5 text-black" />
                    </button>
                </div>

                {/* Checkboxes */}
                <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 px-1">
                    <Checkbox checked={addNearbyFrom} onChange={setAddNearbyFrom} label="Add Nearby Airports" />
                    <Checkbox checked={addNearbyTo} onChange={setAddNearbyTo} label="Add Nearby Airports" />
                    <Checkbox checked={directOnly} onChange={setDirectOnly} label="Direct Flights" />
                </div>
            </div>
        </div>
    );
}

function FormField({
    icon: Icon,
    label,
    value,
    muted = false,
}: {
    icon: ElementType;
    label: string;
    value: string;
    muted?: boolean;
}) {
    return (
        <div className="flex flex-1 items-center gap-3 rounded-xl border border-black/10 bg-black/[0.02] px-4 py-3">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#FDDB32]/60">
                <Icon className="h-4 w-4 text-black" />
            </span>
            <span className="flex flex-col">
                <span className="font-sans text-[12px] leading-[1.33] text-black/40">{label}</span>
                <span className={`font-sans text-[14px] font-medium leading-[1.43] ${muted ? "text-black/40" : "text-black"}`}>
                    {value}
                </span>
            </span>
        </div>
    );
}

function Checkbox({
    checked,
    onChange,
    label,
}: {
    checked: boolean;
    onChange: (v: boolean) => void;
    label: string;
}) {
    return (
        <button
            type="button"
            onClick={() => onChange(!checked)}
            className="flex items-center gap-2 font-sans text-[13px] font-normal text-black/60"
        >
            <span
                className={`flex h-4 w-4 items-center justify-center rounded border ${checked ? "border-[#FDDB32] bg-[#FDDB32]" : "border-black/20 bg-white"
                    }`}
            >
                {checked && (
                    <svg viewBox="0 0 12 12" className="h-2.5 w-2.5" fill="none">
                        <path d="M2 6l2.5 2.5L10 3" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                )}
            </span>
            {label}
        </button>
    );
}

// ============================================================================
// CHEAP FLIGHTS FROM DUBLIN SECTION — destination cards grid
// ============================================================================

function CheapFlightsFromDublinSection() {
    return (
        <section className="bg-white">
            <div className="mx-auto w-full max-w-[1216px] px-6 pb-24 pt-32 lg:px-10 lg:pt-40">
                {/* Heading row */}
                <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
                    <div>
                        <h2 className="font-sans text-[36px] font-semibold leading-[1.15] text-black lg:text-[44px]">
                            Cheap Flights from <span className="text-[#FDDB32]">Dublin</span>
                        </h2>
                        <p className="mt-4 max-w-2xl font-sans text-[15px] font-normal leading-[1.55] text-black/50">
                            Looking for cheap flights from Dublin? Compare today&apos;s lowest
                            fares from Dublin Airport to popular destinations across
                            Europe, North America and beyond. Prices update regularly so
                            you can find the best available deals before you book.
                        </p>
                    </div>

                    <Link
                        href="/flights/routes"
                        className="flex shrink-0 items-center gap-2 rounded-full bg-[#FDDB32] px-5 py-3 font-sans text-[14px] font-medium text-black transition-colors hover:bg-[#f5cf1a]"
                    >
                        Browse All Flight Routes
                        <ArrowUpRight className="h-4 w-4" />
                    </Link>
                </div>

                {/* Destination cards */}
                <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {cheapFlights.map((flight, i) => (
                        <div key={i} className="flex flex-col overflow-hidden rounded-2xl border border-black/10">
                            {/* Image + flag badge */}
                            <div className="relative h-40 w-full">
                                <Image src={flight.image} alt={flight.city} fill className="object-cover" />
                                <span className="absolute left-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white text-[16px]">
                                    {flight.flag}
                                </span>
                            </div>

                            {/* Details */}
                            <div className="flex flex-1 flex-col gap-3 p-4">
                                <div>
                                    <h3 className="font-sans text-[18px] font-semibold text-black">{flight.city}</h3>
                                    <p className="font-sans text-[13px] text-black/40">{flight.route}</p>
                                </div>

                                <div className="flex items-center justify-between">
                                    <span className="font-sans text-[20px] font-bold text-black">{flight.price}</span>
                                    <span className="rounded-md border border-black/10 px-2 py-1 font-sans text-[12px] font-medium text-black/70">
                                        {flight.airline}
                                    </span>
                                </div>

                                <div className="flex items-center gap-1.5 font-sans text-[13px] text-black/40">
                                    <Clock className="h-3.5 w-3.5" />
                                    {flight.duration}
                                </div>

                                <Link
                                    href="/flights/search"
                                    className={`mt-1 flex items-center justify-center gap-2 rounded-xl px-4 py-3 font-sans text-[14px] font-medium transition-colors ${flight.featured
                                            ? "bg-[#FDDB32] text-black hover:bg-[#f5cf1a]"
                                            : "border border-black/10 text-black hover:bg-black/5"
                                        }`}
                                >
                                    View Flights
                                    <ArrowUpRight className="h-4 w-4" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// ============================================================================
// WHY COMPARE FLIGHTS SECTION — 3 feature cards
// ============================================================================

function WhyCompareFlightsSection() {
    return (
        <section className="bg-white">
            <div className="mx-auto w-full max-w-[1216px] px-6 pb-24 lg:px-10">
                <div className="mx-auto max-w-2xl text-center">
                    <span className="mx-auto w-fit rounded-full border border-black/10 bg-[#F9FBF5] px-4 py-2 font-sans text-[13px] font-medium text-black">
                        Easy process
                    </span>
                    <h2 className="mt-5 font-sans text-[32px] font-semibold leading-[1.2] text-black lg:text-[40px]">
                        Why Compare Flights with TravelMommy?
                    </h2>
                    <p className="mt-4 font-sans text-[15px] font-normal leading-[1.55] text-black/50">
                        Search and compare cheap flights from multiple airlines and
                        trusted booking partners to find the best fare for your trip.
                    </p>
                </div>

                <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
                    {whyCompareFeatures.map((feature) => (
                        <div
                            key={feature.title}
                            className="flex flex-col items-center rounded-2xl border border-black/10 bg-[#F9FBF5] p-8 text-center"
                        >
                            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-yellow-200">
                                <feature.icon className="h-6 w-6 text-black" />
                            </span>
                            <h3 className="mt-5 font-sans text-[18px] font-semibold text-black">{feature.title}</h3>
                            <p className="mt-3 font-sans text-[14px] font-normal leading-[1.55] text-black/50">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// ============================================================================
// POPULAR AIRLINES SECTION — dark section with airline logo grid
// ============================================================================

function PopularAirlinesSection() {
    return (
        <section className="bg-black">
            <div className="mx-auto w-full max-w-[1216px] px-6 py-24 lg:px-10">
                <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
                    <div>
                        <h2 className="font-sans text-[32px] font-semibold leading-[1.2] text-white lg:text-[40px]">
                            Compare Flights from Popular Airlines.
                        </h2>
                        <p className="mt-4 max-w-2xl font-sans text-[15px] font-normal leading-[1.55] text-white/50">
                            Search and compare fares from leading airlines around the
                            world. Discover competitive prices, flexible travel options
                            and routes from trusted carriers.
                        </p>
                    </div>

                    <Link
                        href="/flights/airlines"
                        className="flex shrink-0 items-center gap-2 rounded-full bg-[#FDDB32] px-5 py-3 font-sans text-[14px] font-medium text-black transition-colors hover:bg-[#f5cf1a]"
                    >
                        View All Airlines
                        <ArrowUpRight className="h-4 w-4" />
                    </Link>
                </div>

                <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
                    {popularAirlines.map((airline) => (
                        <div
                            key={airline}
                            className="flex h-28 items-center justify-center rounded-2xl bg-[#F9FBF5] px-4"
                        >
                            {/* Replace with the airline's actual logo asset */}
                            <span className="text-center font-sans text-[16px] font-semibold text-black">
                                {airline}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// ============================================================================
// POPULAR AIRPORTS SECTION — airport list cards
// ============================================================================

function PopularAirportsSection() {
    return (
        <section className="bg-white">
            <div className="mx-auto w-full max-w-[1216px] px-6 py-24 lg:px-10">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="font-sans text-[36px] font-semibold leading-[1.2] text-black lg:text-[44px]">
                        Popular Airports
                    </h2>
                    <p className="mt-4 font-sans text-[15px] font-normal leading-[1.55] text-black/50">
                        Search and compare flights from major airports around the
                        world. Discover convenient departure points, route options and
                        travel times before you book.
                    </p>
                </div>

                <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {popularAirports.map((airport) => (
                        <div
                            key={airport.code}
                            className="flex items-center gap-4 rounded-2xl border border-black/10 p-4"
                        >
                            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#FDDB32]/60">
                                <Plane className="h-5 w-5 text-black" />
                            </span>
                            <div className="flex flex-1 items-start justify-between gap-2">
                                <div>
                                    <p className="font-sans text-[15px] font-semibold text-black">{airport.name}</p>
                                    <p className="font-sans text-[13px] text-black/40">{airport.location}</p>
                                </div>
                                <span className="font-sans text-[13px] font-medium text-black/40">{airport.code}</span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-10 flex justify-center">
                    <Link
                        href="/airports"
                        className="flex items-center gap-2 rounded-full bg-[#FDDB32] px-5 py-3 font-sans text-[14px] font-medium text-black transition-colors hover:bg-[#f5cf1a]"
                    >
                        Explore All Airports
                        <ArrowUpRight className="h-4 w-4" />
                    </Link>
                </div>
            </div>
        </section>
    );
}

// ============================================================================
// FAQ SECTION — accordion
// ============================================================================

function FaqSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="bg-white">
            <div className="mx-auto w-full max-w-[820px] px-6 py-24 lg:px-10">
                <h2 className="text-center font-sans text-[36px] font-semibold leading-[1.2] text-black lg:text-[44px]">
                    Frequently Asked Questions
                </h2>

                <div className="mt-12 flex flex-col">
                    {faqs.map((faq, i) => {
                        const isOpen = openIndex === i;
                        return (
                            <div key={faq.question} className="border-b border-black/10 py-6 first:pt-0">
                                <button
                                    type="button"
                                    onClick={() => setOpenIndex(isOpen ? null : i)}
                                    className="flex w-full items-center justify-between gap-6 text-left"
                                >
                                    <span className="font-sans text-[16px] font-semibold text-black">{faq.question}</span>
                                    <span className="flex h-6 w-6 shrink-0 items-center justify-center text-black">
                                        {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                                    </span>
                                </button>
                                {isOpen && (
                                    <p className="mt-4 font-sans text-[14px] font-normal leading-[1.6] text-black/50">
                                        {faq.answer}
                                    </p>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

// ============================================================================
// NEWSLETTER SECTION — email capture CTA
// ============================================================================

function NewsletterSection() {
    return (
        <section className="bg-white">
            <div className="mx-auto w-full max-w-[1216px] px-6 pb-24 lg:px-10">
                <div className="flex flex-col items-center rounded-[32px] bg-[#FDDB32] px-6 py-16 text-center lg:py-20">
                    <span className="w-fit rounded-full bg-white px-4 py-2 font-sans text-[13px] font-medium text-black">
                        Let&apos;s go on a trip!
                    </span>
                    <h2 className="mt-5 max-w-2xl font-sans text-[32px] font-semibold leading-[1.2] text-black lg:text-[44px]">
                        Never Miss a Great Travel Deal
                    </h2>
                    <p className="mt-4 max-w-xl font-sans text-[15px] font-normal leading-[1.55] text-black/70">
                        Get cheap flight alerts, hotel deals and travel inspiration
                        delivered to your inbox.
                    </p>

                    <form className="mt-8 flex w-full max-w-md flex-col gap-3 sm:flex-row">
                        <div className="flex flex-1 items-center gap-2 rounded-full bg-white px-5 py-3.5">
                            <input
                                type="email"
                                placeholder="Your Email Address"
                                className="w-full bg-transparent font-sans text-[14px] text-black placeholder:text-black/40 focus:outline-none"
                            />
                            <Mail className="h-4 w-4 shrink-0 text-black/30" />
                        </div>
                        <button
                            type="submit"
                            className="flex shrink-0 items-center justify-center gap-2 rounded-full bg-black px-6 py-3.5 font-sans text-[14px] font-medium text-white transition-colors hover:bg-black/80"
                        >
                            Get Deals
                            <ArrowUpRight className="h-4 w-4" />
                        </button>
                    </form>
                    <p className="mt-3 font-sans text-[12px] text-black/50">No Spam, Unsubscribe Anytime</p>
                </div>
            </div>
        </section>
    );
}