'use client';

import { useState } from "react";
import Image from "next/image";
import { Search, ArrowLeftRight } from "lucide-react";

const ICON_PATH = "/Homepage/Section 1/Header Icons/Icons";

/* ----------------------------------------------------------------
   DESKTOP
---------------------------------------------------------------- */

const desktopFields = [
  { key: "from", iconSrc: `${ICON_PATH}/plane - 02.png`, label: "Departure", value: "Dublin (DUB)", width: "w-[197px]" },
  { key: "to", iconSrc: `${ICON_PATH}/plane - 03.png`, label: "To", value: "Country, City or air...", width: "w-[198px]" },
  { key: "depart", iconSrc: `${ICON_PATH}/calendar - 02.png`, label: "Depart", value: "08 Nov 2025", width: "w-[193px]" },
  { key: "return", iconSrc: `${ICON_PATH}/calendar - 3.png`, label: "Return", value: "08 Jan 2026", width: "w-[193px]" },
  { key: "travellers", iconSrc: `${ICON_PATH}/join a group - 01.png`, label: "Travellers and Cabin Class", value: "01 Adult 01 Child", width: "w-[273px]" },
];

interface DesktopCheckboxProps {
  checked: boolean;
  onChange: () => void;
  label: string;
}

function DesktopCheckbox({ checked, onChange, label }: DesktopCheckboxProps) {
  return (
    <label className="flex cursor-pointer items-center gap-[8px]">
      <span
        className={`flex size-[16px] shrink-0 items-center justify-center rounded-[5px] border transition-colors ${
          checked ? "border-[#fddb32] bg-[#fddb32]" : "border-[#e6e6e6] bg-[#f9fbf5]"
        }`}
      >
        {checked && (
          <Image 
            src={`${ICON_PATH}/Check.png`} 
            alt="Check" 
            width={11} 
            height={11} 
            className="object-contain" 
          />
        )}
      </span>
      <input type="checkbox" checked={checked} onChange={onChange} className="hidden" />
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

      {/* Tabs */}
      <div className="absolute bottom-full left-0 flex h-[52px] items-end gap-[3px]">
        <button
          onClick={() => setActiveTab("flights")}
          aria-pressed={activeTab === "flights"}
          className={`flex h-full items-center gap-[6px] rounded-tl-[24px] rounded-tr-[14px] px-[20px] font-sans text-[14px] font-medium leading-[1.43] transition-colors ${
            activeTab === "flights"
              ? "bg-white/90 text-black"
              : "bg-white/25 text-black/60 backdrop-blur-md"
          }`}
        >
          <Image src={`${ICON_PATH}/plane - 01.png`} alt="Flights" width={18} height={18} />
          Flights
        </button>
        <button
          onClick={() => setActiveTab("hotels")}
          aria-pressed={activeTab === "hotels"}
          className={`flex h-full items-center gap-[6px] rounded-tl-[14px] rounded-tr-[24px] px-[20px] font-sans text-[14px] font-medium leading-[1.43] transition-colors ${
            activeTab === "hotels"
              ? "bg-white/90 text-black"
              : "bg-white/25 text-black/60 backdrop-blur-md"
          }`}
        >
          <Image src={`${ICON_PATH}/home - 04.png`} alt="Hotels" width={18} height={18} />
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
                <Image src={field.iconSrc} alt={field.label} width={16} height={16} className="object-contain" />
              </div>
              <div className="flex flex-col gap-[2px] font-sans">
                <span className="whitespace-nowrap text-[14px] font-medium leading-[1.43] text-[#7d7d7d]">{field.label}</span>
                <span className="whitespace-nowrap text-[14px] font-medium leading-[1.43] text-black">{field.value}</span>
              </div>
            </div>
          </div>
        ))}

        <button className="flex h-[49px] w-[52px] shrink-0 items-center justify-center rounded-[12px] bg-[#fddb32] transition-transform hover:scale-105">
          <Search size={22} className="text-black" />
        </button>

        {/* Swap Icon */}
        <button
          aria-label="Swap origin and destination"
          className="absolute left-[188px] top-1/2 flex size-[30px] -translate-y-[46px] items-center justify-center rounded-full bg-white shadow-[0_2px_8px_rgba(0,0,0,0.15)]"
        >
          <ArrowLeftRight size={14} className="text-black" />
        </button>
      </div>

      {/* Additional Options */}
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
  { key: "from", iconSrc: `${ICON_PATH}/plane - 02.png`, label: "Departure", value: "Dublin (DUB)" },
  { key: "to", iconSrc: `${ICON_PATH}/plane - 03.png`, label: "To", value: "Country, City or Airport" },
];

const mobileSplitFields = [
  { key: "depart", iconSrc: `${ICON_PATH}/calendar - 02.png`, label: "Depart", value: "08 Nov" },
  { key: "return", iconSrc: `${ICON_PATH}/calendar - 3.png`, label: "Return", value: "08 Jan" },
];

const mobileTravellersField = { key: "travellers", iconSrc: `${ICON_PATH}/join a group - 01.png`, label: "Travellers", value: "01 Adult, 01 Child" };

interface MobileFieldBoxProps {
  iconSrc: string;
  label: string;
  value: string;
  className?: string;
}

function MobileFieldBox({ iconSrc, label, value, className = "" }: MobileFieldBoxProps) {
  return (
    <div
      className={`flex h-[64px] w-full items-center gap-[12px] rounded-[18px] border border-[#e6e6e6] bg-[#f9fbf5] pl-[14px] pr-[14px] ${className}`}
    >
      <div className="flex size-[28px] shrink-0 items-center justify-center rounded-[8px] bg-[#ffed91]">
        <Image src={iconSrc} alt={label} width={14} height={14} className="object-contain" />
      </div>
      <div className="flex min-w-0 flex-col font-sans">
        <span className="truncate text-[12px] font-medium leading-[1.33] text-[#7d7d7d]">{label}</span>
        <span className="truncate text-[14px] font-medium leading-[1.43] text-black">{value}</span>
      </div>
    </div>
  );
}

function SearchWidgetMobile() {
  const [activeTab, setActiveTab] = useState("flights");

  return (
    <div className="w-full rounded-[28px] bg-white p-[16px] shadow-[0_20px_60px_rgba(0,0,0,0.18)]">

      {/* Tabs */}
      <div className="mb-[16px] flex items-center gap-[8px]">
        <button
          onClick={() => setActiveTab("flights")}
          aria-pressed={activeTab === "flights"}
          className={`flex h-[36px] items-center gap-[6px] rounded-full px-[14px] font-sans text-[14px] font-medium leading-[1.43] transition-colors ${
            activeTab === "flights" ? "bg-[#fddb32] text-black" : "text-[#7d7d7d]"
          }`}
        >
          <Image src={`${ICON_PATH}/plane - 01.png`} alt="Flights" width={16} height={16} />
          Flights
        </button>
        <button
          onClick={() => setActiveTab("hotels")}
          aria-pressed={activeTab === "hotels"}
          className={`flex h-[36px] items-center gap-[6px] rounded-full px-[14px] font-sans text-[14px] font-medium leading-[1.43] transition-colors ${
            activeTab === "hotels" ? "bg-[#fddb32] text-black" : "text-[#7d7d7d]"
          }`}
        >
          <Image src={`${ICON_PATH}/home - 04.png`} alt="Hotels" width={16} height={16} />
          Hotels
        </button>
      </div>

      {/* Fields */}
      <div className="flex flex-col gap-[12px]">
        {mobileFields.map((f) => (
          <MobileFieldBox key={f.key} iconSrc={f.iconSrc} label={f.label} value={f.value} />
        ))}

        {/* Depart / Return */}
        <div className="grid grid-cols-2 gap-[12px]">
          {mobileSplitFields.map((f) => (
            <MobileFieldBox key={f.key} iconSrc={f.iconSrc} label={f.label} value={f.value} />
          ))}
        </div>

        <MobileFieldBox iconSrc={mobileTravellersField.iconSrc} label={mobileTravellersField.label} value={mobileTravellersField.value} />
      </div>

      {/* Search button */}
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