'use client';

import { useEffect } from "react";

export default function SearchWidget() {
  useEffect(() => {
    // Check if the script already exists to avoid injecting it multiple times 
    // during React lifecycle re-renders or hot reloads
    const scriptId = "tp-white-label-script";
    
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.async = true;
      script.type = "module";
      script.src = "https://tpemb.com/wl_web/main.js?wl_id=19796";
      
      // Adding the specific attributes from your snippet
      script.setAttribute("data-noptimize", "1");
      script.setAttribute("data-cfasync", "false");
      script.setAttribute("data-wpfc-render", "false");
      script.setAttribute("seraph-accel-crit", "1");
      script.setAttribute("data-no-defer", "1");

      document.head.appendChild(script);
    }
  }, []);

  return (
    <div className="w-full relative z-20">
      {/* 
        Outer wrapper retaining some of your original styling (rounded corners, shadow, blur).
        Adjust padding or background colors as needed to match the injected widget's theme.
      */}
      <div className="w-full rounded-[28px] bg-white/90 p-[16px] md:p-[24px] shadow-[0_20px_60px_rgba(0,0,0,0.18)] backdrop-blur-sm lg:rounded-b-[28px] lg:rounded-tr-[28px]">
        
        {/* 2. Metasearch widget code (Search Form) */}
        <div id="tpwl-search"></div>
        
      </div>

      {/* 3. Search results code (Tickets) */}
      <div id="tpwl-tickets" className="mt-8 w-full"></div>
    </div>
  );
}