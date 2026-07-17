'use client';

import { useState } from "react";
import { Plane, Building2, Calendar, Users, Search, ArrowLeftRight, Check } from "lucide-react";

/* ----------------------------------------------------------------
   DESKTOP
---------------------------------------------------------------- */

const desktopFields = [
  { key: "from", icon: Plane, label: "Departure", value: "Dublin (DUB)", width: "w-[197px]" },
  { key: "to", icon: Plane, label: "To", value: "Country, City or air...", width: "w-[198px]" },
  { key: "depart", icon: Calendar, label: "Depart", value: "08 Nov 2025", width: "w-[193px]" },
  { key: "return", icon: Calendar, label: "Return", value: "08 Jan 2026", width: "w-[193px]" },
  { key: "travellers", icon: Users, label: "Travellers and Cabin Class", value: "01 Adult 01 Child", width: "w-[273px]" },
];

function DesktopCheckbox({ checked, onChange, label }) {
  return (
    <label className="flex cursor-pointer items-center gap-[8px]">
      <span
        className={`flex size-[16px] shrink-0 items-center justify-center rounded-[5px] border transition-colors ${
          checked ? "border-[#fddb32] bg-[#fddb32]" : "border-[#e6e6e6] bg-[#f9fbf5]"
        }`}
      >
        {checked && <Check size={11} strokeWidth={3} className="text-black" />}
      </span>
      <input type="checkbox" checked={checked} onChange={onChange} className="hidden" />
      {/* Title S: 14px, Medium, 143% */}
      <span className="whitespace-nowrap font-sans text-[14px] font-medium leading-[1.43] text-black">
        {label}
      </span>
    </label>
  );
}

function SearchWidgetDesktop() {
  const [activeTab, setActiveTab] = useState("flights");
  const [nearbyDeparture, setNearbyDeparture] = useState(false);
  const [nearbyTo, setNearbyTo] = useState(true);
  const [directFlights, setDirectFlights] = useState(false);

  return (
    <div className="relative w-fit rounded-b-[28px] rounded-tr-[28px] bg-white/90 pb-[24px] pt-[24px] shadow-[0_20px_60px_rgba(0,0,0,0.12)] backdrop-blur-sm">

      {/* Tabs — fused to the top edge of the card, no gap, no wrapper pill */}
      <div className="absolute bottom-full left-0 flex h-[52px] items-end gap-[3px]">
        {/* Title S: 14px, Medium, 143% */}
        <button
          onClick={() => setActiveTab("flights")}
          aria-pressed={activeTab === "flights"}
          className={`flex h-full items-center gap-[6px] rounded-tl-[24px] rounded-tr-[14px] px-[20px] font-sans text-[14px] font-medium leading-[1.43] transition-colors ${
            activeTab === "flights"
              ? "bg-white/90 text-black"
              : "bg-white/25 text-black/60 backdrop-blur-md"
          }`}
        >
          <Plane size={18} />
          Flights
        </button>
        {/* Title S: 14px, Medium, 143% */}
        <button
          onClick={() => setActiveTab("hotels")}
          aria-pressed={activeTab === "hotels"}
          className={`flex h-full items-center gap-[6px] rounded-tl-[14px] rounded-tr-[24px] px-[20px] font-sans text-[14px] font-medium leading-[1.43] transition-colors ${
            activeTab === "hotels"
              ? "bg-white/90 text-black"
              : "bg-white/25 text-black/60 backdrop-blur-md"
          }`}
        >
          <Building2 size={18} />
          Hotels
        </button>
      </div>

      {/* Fields Row */}
      <div className="relative flex items-center gap-[11px] px-[24px]">
        {desktopFields.map((field) => (
          <div
            key={field.key}
            className={`flex h-[75px] shrink-0 items-center rounded-[20px] border border-[#e6e6e6] bg-[#f9fbf5] pl-[15px] ${field.width}`}
          >
            <div className="flex items-center gap-[12px]">
              <div className="flex size-[29.6px] shrink-0 items-center justify-center rounded-[7.4px] bg-[#ffed91]">
                <field.icon size={16} className="text-black" />
              </div>
              <div className="flex flex-col gap-[2px] font-sans">
                {/* Title S: 14px, Medium, 143% */}
                <span className="whitespace-nowrap text-[14px] font-medium leading-[1.43] text-[#7d7d7d]">{field.label}</span>
                {/* Title S: 14px, Medium, 143% */}
                <span className="whitespace-nowrap text-[14px] font-medium leading-[1.43] text-black">{field.value}</span>
              </div>
            </div>
          </div>
        ))}

        <button className="flex h-[49px] w-[52px] shrink-0 items-center justify-center rounded-[12px] bg-[#fddb32] transition-transform hover:scale-105">
          <Search size={22} className="text-black" />
        </button>

        {/* Swap Icon — sits between Departure and To fields */}
        <button
          aria-label="Swap origin and destination"
          className="absolute left-[188px] top-1/2 flex size-[30px] -translate-y-[46px] items-center justify-center rounded-full bg-white shadow-[0_2px_8px_rgba(0,0,0,0.15)]"
        >
          <ArrowLeftRight size={14} className="text-black" />
        </button>
      </div>

      {/* Additional Options — aligned in two columns under Departure & To fields */}
      <div className="mt-[16px] flex gap-[11px] px-[24px]">
        <div className="flex w-[197px] flex-col gap-[10px] pl-[15px]">
          <DesktopCheckbox
            checked={nearbyDeparture}
            onChange={() => setNearbyDeparture((v) => !v)}
            label="Add Nearby Airports"
          />
          <DesktopCheckbox
            checked={directFlights}
            onChange={() => setDirectFlights((v) => !v)}
            label="Direct Flights"
          />
        </div>
        <div className="flex w-[198px] flex-col gap-[10px] pl-[15px]">
          <DesktopCheckbox
            checked={nearbyTo}
            onChange={() => setNearbyTo((v) => !v)}
            label="Add Nearby Airports"
          />
        </div>
      </div>
    </div>
  );
}

/* ----------------------------------------------------------------
   MOBILE
---------------------------------------------------------------- */

const mobileFields = [
  { key: "from", icon: Plane, label: "Departure", value: "Dublin (DUB)" },
  { key: "to", icon: Plane, label: "To", value: "Country, City or Airport" },
];

const mobileSplitFields = [
  { key: "depart", icon: Calendar, label: "Depart", value: "08 Nov" },
  { key: "return", icon: Calendar, label: "Return", value: "08 Jan" },
];

const mobileTravellersField = { key: "travellers", icon: Users, label: "Travellers", value: "01 Adult, 01 Child" };

function MobileFieldBox({ icon: Icon, label, value, className = "" }) {
  return (
    <div
      className={`flex h-[64px] w-full items-center gap-[12px] rounded-[18px] border border-[#e6e6e6] bg-[#f9fbf5] pl-[14px] pr-[14px] ${className}`}
    >
      <div className="flex size-[28px] shrink-0 items-center justify-center rounded-[8px] bg-[#ffed91]">
        <Icon size={14} className="text-black" />
      </div>
      <div className="flex min-w-0 flex-col font-sans">
        {/* Title XS: 12px, Medium, 133% */}
        <span className="truncate text-[12px] font-medium leading-[1.33] text-[#7d7d7d]">{label}</span>
        {/* Title S: 14px, Medium, 143% */}
        <span className="truncate text-[14px] font-medium leading-[1.43] text-black">{value}</span>
      </div>
    </div>
  );
}

function SearchWidgetMobile() {
  const [activeTab, setActiveTab] = useState("flights");

  return (
    <div className="w-full rounded-[28px] bg-white p-[16px] shadow-[0_20px_60px_rgba(0,0,0,0.18)]">

      {/* Tabs — pill style, inline at top of the card */}
      <div className="mb-[16px] flex items-center gap-[8px]">
        {/* Title S: 14px, Medium, 143% */}
        <button
          onClick={() => setActiveTab("flights")}
          aria-pressed={activeTab === "flights"}
          className={`flex h-[36px] items-center gap-[6px] rounded-full px-[14px] font-sans text-[14px] font-medium leading-[1.43] transition-colors ${
            activeTab === "flights" ? "bg-[#fddb32] text-black" : "text-[#7d7d7d]"
          }`}
        >
          <Plane size={16} />
          Flights
        </button>
        {/* Title S: 14px, Medium, 143% */}
        <button
          onClick={() => setActiveTab("hotels")}
          aria-pressed={activeTab === "hotels"}
          className={`flex h-[36px] items-center gap-[6px] rounded-full px-[14px] font-sans text-[14px] font-medium leading-[1.43] transition-colors ${
            activeTab === "hotels" ? "bg-[#fddb32] text-black" : "text-[#7d7d7d]"
          }`}
        >
          <Building2 size={16} />
          Hotels
        </button>
      </div>

      {/* Fields — stacked full width */}
      <div className="flex flex-col gap-[12px]">
        {mobileFields.map((f) => (
          <MobileFieldBox key={f.key} icon={f.icon} label={f.label} value={f.value} />
        ))}

        {/* Depart / Return — two-up grid */}
        <div className="grid grid-cols-2 gap-[12px]">
          {mobileSplitFields.map((f) => (
            <MobileFieldBox key={f.key} icon={f.icon} label={f.label} value={f.value} />
          ))}
        </div>

        <MobileFieldBox icon={mobileTravellersField.icon} label={mobileTravellersField.label} value={mobileTravellersField.value} />
      </div>

      {/* Search button — Title M: 16px, Medium, 150% */}
      <button className="relative mt-[16px] flex h-[56px] w-full items-center justify-center rounded-full bg-[#fddb32] font-sans text-[16px] font-medium leading-[1.5] text-black transition-transform active:scale-[0.98]">
        Search Flights
        <span className="absolute right-[6px] flex size-[36px] items-center justify-center rounded-full bg-white">
          <Search size={16} className="text-black" />
        </span>
      </button>
    </div>
  );
}

/* ----------------------------------------------------------------
   EXPORT — renders both, CSS breakpoint decides which shows
---------------------------------------------------------------- */

export default function SearchWidget() {
  return (
    <>
      <div className="lg:hidden">
        <SearchWidgetMobile />
      </div>
      <div className="hidden lg:block">
        <SearchWidgetDesktop />
      </div>
    </>
  );
}