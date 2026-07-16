'use client';

import { useState } from "react";
import { Plane, Building2, Calendar, Users, Search, ArrowLeftRight, Check } from "lucide-react";

const fields = [
  { key: "from", icon: Plane, label: "Departure", value: "Dublin (DUB)", width: "w-[197px]" },
  { key: "to", icon: Plane, label: "To", value: "Country, City or air...", width: "w-[198px]" },
  { key: "depart", icon: Calendar, label: "Depart", value: "08 Nov 2025", width: "w-[193px]" },
  { key: "return", icon: Calendar, label: "Return", value: "08 Jan 2026", width: "w-[193px]" },
  { key: "travellers", icon: Users, label: "Travellers and Cabin Class", value: "01 Adult 01 Child", width: "w-[273px]" },
];

export default function SearchWidget() {
  const [activeTab, setActiveTab] = useState("flights");
  const [nearbyAirports, setNearbyAirports] = useState(false);
  const [directFlights, setDirectFlights] = useState(true);

  return (
    <div className="relative rounded-[28px] bg-white/90 pb-[24px] pt-[44px] shadow-[0_20px_60px_rgba(0,0,0,0.12)] backdrop-blur-sm">

      {/* Tabs */}
      <div className="absolute left-[19px] top-[-18px] flex h-[52px] items-center gap-[4px] rounded-[19px] bg-white/40 px-[6px] backdrop-blur-md">
        <button
          onClick={() => setActiveTab("flights")}
          className={`flex h-[36px] items-center gap-[5px] rounded-[13px] px-[12px] text-[14px] font-medium leading-[20px] tracking-[-0.02em] text-black transition-colors ${activeTab === "flights" ? "bg-white shadow-sm" : ""}`}
        >
          <Plane size={18} />
          Flights
        </button>
        <button
          onClick={() => setActiveTab("hotels")}
          className={`flex h-[36px] items-center gap-[5px] rounded-[13px] px-[12px] text-[14px] font-medium leading-[20px] tracking-[-0.02em] text-black transition-colors ${activeTab === "hotels" ? "bg-white shadow-sm" : ""}`}
        >
          <Building2 size={18} />
          Hotels
        </button>
      </div>

      {/* Fields Row */}
      <div className="relative flex items-center gap-[11px] px-[24px]">
        {fields.map((field) => (
          <div
            key={field.key}
            className={`flex h-[75px] shrink-0 items-center rounded-[20px] border border-[#e6e6e6] bg-[#f9fbf5] pl-[15px] ${field.width}`}
          >
            <div className="flex items-center gap-[12px]">
              <div className="flex size-[29.6px] shrink-0 items-center justify-center rounded-[7.4px] bg-[#ffed91]">
                <field.icon size={16} className="text-black" />
              </div>
              <div className="flex flex-col gap-[2px] text-[14px] leading-[20px] tracking-[-0.02em]">
                <span className="font-medium text-[#7d7d7d]">{field.label}</span>
                <span className="whitespace-nowrap font-medium text-black">{field.value}</span>
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
      <div className="mt-[16px] flex gap-[16px] px-[24px]">
        <label className="flex cursor-pointer items-center gap-[8px]">
          <span className={`flex size-[16px] items-center justify-center rounded-[5px] border border-[#e6e6e6] bg-[#f9fbf5] ${nearbyAirports ? "border-[#fddb32] bg-[#fddb32]" : ""}`}>
            {nearbyAirports && <Check size={12} className="text-black" />}
          </span>
          <input
            type="checkbox"
            checked={nearbyAirports}
            onChange={() => setNearbyAirports(!nearbyAirports)}
            className="hidden"
          />
          <span className="text-[14px] font-medium leading-[20px] tracking-[-0.02em] text-black">Add Nearby Airports</span>
        </label>

        <label className="flex cursor-pointer items-center gap-[8px]">
          <span className={`flex size-[16px] items-center justify-center rounded-[5px] border border-[#e6e6e6] bg-[#f9fbf5] ${directFlights ? "border-[#fddb32] bg-[#fddb32]" : ""}`}>
            {directFlights && <Check size={12} className="text-black" />}
          </span>
          <input
            type="checkbox"
            checked={directFlights}
            onChange={() => setDirectFlights(!directFlights)}
            className="hidden"
          />
          <span className="text-[14px] font-medium leading-[20px] tracking-[-0.02em] text-black">Direct Flights</span>
        </label>
      </div>
    </div>
  );
}