import React from 'react';
import {
  Globe,
  Heart,
  Brain,
  Factory,
  Building2,
  Banknote,
  Scale,
  ShieldCheck,
  Landmark,
  Users,
} from "lucide-react";

const icons = [
  Globe,
  Heart,
  Brain,
  Factory,
  Building2,
  Banknote,
  Scale,
  ShieldCheck,
  Landmark,
  Users,
];

const marqueeItems = Array.from({ length: 30 }, (_, i) => `Service ${i + 1}`);

const Marquee = () => (
  <div className="relative max-w-7xl mx-auto mt-10 mb-4 rounded-xl overflow-hidden">
    {/* Gradient edges */}
    <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-white z-10 pointer-events-none" />
    <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-white z-10 pointer-events-none" />

    {/* Marquee container */}
    <div className="overflow-hidden bg-white rounded-xl border border-gray-200 shadow-sm py-3">
      <div className="animate-marquee whitespace-nowrap flex items-center gap-12 px-4 text-gray-700 text-base sm:text-lg font-medium">
        {marqueeItems.map((item, i) => {
          const Icon = icons[i % icons.length];
          return (
            <span className="flex items-center gap-2 min-w-max" key={i}>
              <Icon size={18} className="text-[#27548A]" /> {item}
            </span>
          );
        })}
      </div>
    </div>

    {/* Animation styles */}
    <style>{`
      @keyframes marquee {
        0%   { transform: translateX(100%); }
        100% { transform: translateX(-100%); }
      }
      .animate-marquee {
        animation: marquee 40s linear infinite;
      }
    `}</style>
  </div>
);

export default Marquee;
