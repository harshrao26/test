import React from 'react';
import {
  Heart,
  Radiation,
  Brain,
  Globe,
  Headphones,
  Plane,
  Calculator,
  User,
  Users,
  Landmark,
  Building2,
  Banknote,
  Factory,
  Scale,
  ShieldCheck,
  Group,
} from "lucide-react";
const marqueeItems = [
  "Service 1",
  "Service 2",
  "Service 3",
  "Service 4",
  "Service 5",
  "Service 6",
    "Service 7",
    "Service 8",
  "Service 9",
  "Service 10",
  "Service 1",
  "Service 2",
  "Service 3",
  "Service 4",
  "Service 5",
  "Service 6",
    "Service 7",
    "Service 8",
  "Service 9",
  "Service 10",
  "Service 1",
  "Service 2",
  "Service 3",
  "Service 4",
  "Service 5",
  "Service 6",
    "Service 7",
    "Service 8",
  "Service 9",
  "Service 10",
 ];

const Marquee = () => (
  <>
    <div className="relative overflow-hidden mb-3 py-3 bg-white text-gray-500 mt-10">
      <div className=" whitespace-nowrap animate-marquee flex gap-20 text-xl items-center">
        {marqueeItems.map((item, i) => (
          <span className="  flex items-center gap-2" key={i}><Globe size={20} /> {item}</span>
        ))}
      </div>
    </div>

    <style>{`
      @keyframes marquee {
        0%   { transform: translateX(100%); }
        100% { transform: translateX(-100%); }
      }
      .animate-marquee {
        animation: marquee 30s linear infinite;
      }
    `}</style>
  </>
);

export default Marquee;
