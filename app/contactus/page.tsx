'use client';

import { useState } from "react";
import Link from "next/link";
import {
  Mail,
  Handshake,
  Megaphone,
  AtSign,
  Plus,
  Minus,
} from "lucide-react";

// ============================================================================
// IMPORTANT: Adjust these import paths to match your project's folder structure
// ============================================================================
import Header from "../components/Home/header";
import Footer from "../components/Home/footer";

/* ----------------------------------------------------------------
   INLINE SOCIAL ICONS (Replaces removed Lucide brand icons)
---------------------------------------------------------------- */

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5v3a8 8 0 0 1-5-1.5z"/>
  </svg>
);

const YouTubeIcon = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"/>
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/>
  </svg>
);

/* ----------------------------------------------------------------
   STATIC DATA
---------------------------------------------------------------- */

const contactCards = [
  {
    icon: Mail,
    title: "General Enquiries",
    description: "Questions about using TravelMommy or general support.",
    email: "support@travelmommy.com",
  },
  {
    icon: Handshake,
    title: "Business & Partnerships",
    description: "Affiliate partnerships, collaborations and business enquiries.",
    email: "partners@travelmommy.com",
  },
  {
    icon: Megaphone,
    title: "Media & Press",
    description: "Press enquiries and media requests.",
    email: "press@travelmommy.com",
  },
];

const faqs = [
  {
    question: "Can I change my booking?",
    answer: "No. Bookings are completed through our travel partners. Please contact the provider you booked with directly.",
  },
  {
    question: "Does TravelMommy charge booking fees?",
    answer: "No. TravelMommy is free to use, and we don't add extra booking fees.",
  },
  {
    question: "I found an incorrect price.",
    answer: "Travel prices change frequently. If you notice an issue, let us know and we'll investigate.",
  },
  {
    question: "Can I advertise on TravelMommy?",
    answer: "Yes. Please contact our partnerships team for collaboration opportunities.",
  },
];

const socialLinks = [
  { icon: InstagramIcon, href: "#", label: "Instagram", bgColor: "bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-500" },
  { icon: FacebookIcon, href: "#", label: "Facebook", bgColor: "bg-[#1877F2]" },
  { icon: TikTokIcon, href: "#", label: "TikTok", bgColor: "bg-[#000000]" },
  { icon: YouTubeIcon, href: "#", label: "YouTube", bgColor: "bg-[#FF0000]" },
];

/* ----------------------------------------------------------------
   MAIN PAGE COMPONENT
---------------------------------------------------------------- */

export default function ContactUs() {
  return (
    <main className="flex min-h-screen w-full flex-col bg-[#FFFFFF]">
      <HeroSection />
      <ContactCardsSection />
      <FormSection />
      <FaqSection />
      <FollowUsSection />
      <Footer />
    </main>
  );
}

/* ----------------------------------------------------------------
   HERO SECTION
---------------------------------------------------------------- */

function HeroSection() {
  return (
    <section className="relative flex w-full flex-col items-center bg-[#FDDB32] px-[16px] pb-[100px] pt-[24px] md:px-[112px]">
      <div className="w-full max-w-[1440px]">
        <Header />
      </div>

      <div className="mt-[64px] flex max-w-[800px] flex-col items-center text-center md:mt-[100px]">
        <h1 className="font-sans text-[42px] font-medium leading-none tracking-[-1.5px] text-[#000000] md:text-[64px] md:tracking-[-0.03em]">
          Contact TravelMommy
        </h1>
        <p className="mt-[24px] max-w-[650px] font-sans text-[15px] font-normal leading-[1.6] text-[#000000] opacity-80 md:text-[16px]">
          Have a question about TravelMommy? We're here to help. Whether you need
          assistance using our platform, have feedback, or want to discuss a partnership,
          we'd love to hear from you.
        </p>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------
   CONTACT CARDS SECTION
---------------------------------------------------------------- */

function ContactCardsSection() {
  return (
    <section className="flex w-full flex-col items-center bg-[#0F1420] px-[16px] py-[100px] md:px-[112px]">
      <div className="mx-auto grid w-full max-w-[1216px] grid-cols-1 gap-[24px] md:grid-cols-3">
        {contactCards.map(({ icon: Icon, title, description, email }) => (
          <div
            key={title}
            className="flex flex-col items-start rounded-[20px] bg-[#FFFFFF] p-[32px] shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
          >
            <div className="mb-[24px] flex h-[48px] w-[48px] items-center justify-center rounded-[12px] bg-[#FFED91]">
              <Icon className="h-[22px] w-[22px] text-[#000000]" strokeWidth={2} />
            </div>
            <h3 className="mb-[12px] font-sans text-[20px] font-medium leading-[26px] tracking-[-0.2px] text-[#000000]">
              {title}
            </h3>
            <p className="mb-[32px] flex-1 font-sans text-[15px] font-normal leading-[24px] text-[#7D7D7D]">
              {description}
            </p>
            <a
              href={`mailto:${email}`}
              className="flex items-center gap-[8px] font-sans text-[14px] font-medium text-[#000000] transition-colors hover:text-[#7D7D7D]"
            >
              <AtSign className="h-[16px] w-[16px]" />
              {email}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------
   FORM SECTION
---------------------------------------------------------------- */

function FormSection() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="flex w-full flex-col items-center bg-[#FFFFFF] px-[16px] py-[100px] md:px-[112px]">
      <div className="mx-auto grid w-full max-w-[1216px] grid-cols-1 gap-[56px] lg:grid-cols-[1fr_1.2fr] lg:gap-[96px]">
        
        {/* Left Column: Text Content */}
        <div className="flex flex-col lg:pt-[40px]">
          <h2 className="mb-[24px] font-sans text-[36px] font-medium leading-[1.1] tracking-[-1px] text-[#000000] sm:text-[48px]">
            Before You Get in Touch
          </h2>
          <p className="max-w-[480px] font-sans text-[15px] font-normal leading-[1.6] text-[#000000] opacity-80 sm:text-[16px]">
            TravelMommy helps you compare flights and hotels from trusted travel
            partners. We don't process bookings or payments directly. If you've already
            made a booking, please contact the booking provider shown in your
            confirmation email for assistance with cancellations, refunds or booking
            changes.
          </p>
        </div>

        {/* Right Column: Form Card */}
        <div className="rounded-[24px] border border-[#E6E6E6] bg-[#FFFFFF] p-[32px] shadow-[0_4px_30px_rgba(0,0,0,0.03)] sm:p-[48px]">
          {submitted ? (
            <div className="flex min-h-[460px] flex-col items-center justify-center text-center">
              <h3 className="font-sans text-[24px] font-medium text-[#000000]">Message sent!</h3>
              <p className="mt-[12px] max-w-[300px] font-sans text-[16px] text-[#7D7D7D]">
                Thanks for reaching out. Our team will get back to you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-[24px]">
              <div className="flex flex-col gap-[10px]">
                <label htmlFor="name" className="font-sans text-[14px] font-medium text-[#000000]">
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Jane Smith"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-[12px] border border-[#E6E6E6] bg-[#FFFFFF] px-[16px] py-[14px] font-sans text-[15px] text-[#000000] placeholder:text-[#A0A0A0] outline-none transition-colors focus:border-[#FDDB32]"
                />
              </div>

              <div className="flex flex-col gap-[10px]">
                <label htmlFor="email" className="font-sans text-[14px] font-medium text-[#000000]">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="jane@travel.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-[12px] border border-[#E6E6E6] bg-[#FFFFFF] px-[16px] py-[14px] font-sans text-[15px] text-[#000000] placeholder:text-[#A0A0A0] outline-none transition-colors focus:border-[#FDDB32]"
                />
              </div>

              <div className="flex flex-col gap-[10px]">
                <label htmlFor="subject" className="font-sans text-[14px] font-medium text-[#000000]">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="General Enquiry"
                  value={form.subject}
                  onChange={handleChange}
                  required
                  className="w-full rounded-[12px] border border-[#E6E6E6] bg-[#FFFFFF] px-[16px] py-[14px] font-sans text-[15px] text-[#000000] placeholder:text-[#A0A0A0] outline-none transition-colors focus:border-[#FDDB32]"
                />
              </div>

              <div className="flex flex-col gap-[10px]">
                <label htmlFor="message" className="font-sans text-[14px] font-medium text-[#000000]">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="How can we help you today?"
                  value={form.message}
                  onChange={handleChange}
                  required
                  className="w-full resize-none rounded-[12px] border border-[#E6E6E6] bg-[#FFFFFF] px-[16px] py-[14px] font-sans text-[15px] text-[#000000] placeholder:text-[#A0A0A0] outline-none transition-colors focus:border-[#FDDB32]"
                />
              </div>

              <button
                type="submit"
                className="mt-[8px] flex w-full items-center justify-center rounded-[12px] bg-[#FDDB32] py-[16px] font-sans text-[15px] font-medium text-[#000000] transition-colors hover:bg-[#e5c52c]"
              >
                Send Message
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  );
}

/* ----------------------------------------------------------------
   FAQ SECTION
---------------------------------------------------------------- */

function FaqSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <section className="flex w-full flex-col items-center bg-[#000000] px-[16px] py-[100px] md:px-[112px]">
      <div className="mx-auto grid w-full max-w-[1216px] gap-[56px] lg:grid-cols-[1fr_1.4fr] lg:gap-[64px]">
        
        {/* Left Column: Text Content */}
        <div className="flex flex-col lg:pt-[20px]">
          <h2 className="mb-[16px] font-sans text-[36px] font-medium leading-[1.1] tracking-[-1px] text-[#FFFFFF] sm:text-[48px]">
            Frequently Asked<br />Questions
          </h2>
          <p className="font-sans text-[15px] font-normal leading-[24px] text-[#FFFFFF] opacity-80 sm:text-[16px]">
            Got questions? We've got answers.
          </p>
        </div>

        {/* Right Column: Accordion */}
        <div className="flex flex-col gap-[16px]">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div key={faq.question} className="rounded-[20px] bg-[#FFFFFF] px-[28px] py-[24px]">
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="flex w-full items-center justify-between text-left"
                >
                  <span className="font-sans text-[16px] font-medium leading-[24px] tracking-[-0.32px] text-[#000000]">
                    {faq.question}
                  </span>
                  <span className="flex h-[24px] w-[24px] flex-shrink-0 items-center justify-center text-[#000000]">
                    {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                  </span>
                </button>
                {isOpen && (
                  <p className="mt-[16px] font-sans text-[15px] font-normal leading-[1.6] text-[#7D7D7D]">
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

/* ----------------------------------------------------------------
   FOLLOW US SECTION
---------------------------------------------------------------- */

function FollowUsSection() {
  return (
    <section className="flex w-full flex-col items-center bg-[#FFFFFF] px-[16px] py-[80px]">
      <h3 className="mb-[28px] font-sans text-[20px] font-medium leading-[24px] text-[#000000]">
        Follow Us
      </h3>
      <div className="flex items-center gap-[16px]">
        {socialLinks.map(({ icon: Icon, href, label, bgColor }) => (
          <a
            key={label}
            href={href}
            aria-label={label}
            className={`flex h-[48px] w-[48px] items-center justify-center rounded-full text-[#FFFFFF] transition-transform hover:scale-110 ${bgColor}`}
          >
            <Icon className="h-[20px] w-[20px]" />
          </a>
        ))}
      </div>
    </section>
  );
}