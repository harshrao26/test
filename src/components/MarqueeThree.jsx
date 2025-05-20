import React from 'react';

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
    <div className="relative overflow-hidden mb-3 py-3 bg-]]]-500 text-black mt-0">
      <div className=" whitespace-nowrap animate-marquee flex gap-4 text-xs  items-center">
        {marqueeItems.map((item, i) => (
          <span className="inline-block border-1 rounded-full py-1 px-4" key={i}>{item}</span>
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
