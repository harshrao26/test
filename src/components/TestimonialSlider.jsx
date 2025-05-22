import React, { useState, useEffect } from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote:
      "Partnering with them helped us streamline GST filings across multiple entities. Zero delays, zero errors.",
    name: "Ravi Mehta",
    title: "CFO at LexCorp Advisors",
    company: "LEXCORP",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    quote:
      "Their automated systems ensure complete compliance with evolving tax regulations. A must-have for any legal firm.",
    name: "Priya Shetty",
    title: "Partner at Shetty & Co.",
    company: "SHETTY & CO.",
    image: "https://randomuser.me/api/portraits/women/58.jpg",
  },
  {
    quote:
      "Reliable support, timely filings, and audit-ready records—makes our job as CAs 10x easier.",
    name: "Amit Jain",
    title: "Chartered Accountant",
    company: "JAIN & ASSOCIATES",
    image: "https://randomuser.me/api/portraits/men/47.jpg",
  },
];

export default function BlueTestimonialSlider() {
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % testimonials.length);
        setFade(true);
      }, 300); // fade duration
    }, 4000); // total time per slide
    return () => clearInterval(interval);
  }, []);

  const { quote, name, title, company, image } = testimonials[current];

  return (
    <section className="bg-zinc-100 py-20">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-semibold -900">
          Trusted By Those Who Trust the Law
        </h2>
        <p className="mt-4 text-">
          Professionals across finance and compliance rely on us to stay accurate, audit-ready, and ahead.
        </p>
      </div>

      {/* Testimonial Card */}
      <div
        className={`max-w-5xl mx-auto px-6 py-10 bg-white shadow-xl rounded-xl flex flex-col md:flex-row items-center gap-10 transition-opacity duration-300 ${
          fade ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {/* Text Content */}
        <div className="flex-1 text-center md:text-left">
          <Quote className="text-[#F93827] w-10 h-10 mb-4 inline-block" />
          <p className="text-xl text-zinc-700 font-medium italic leading-relaxed mb-6">“{quote}”</p>
          <div className="font-semibold text-[#FF9D23] text-xl">{name}</div>
          <div className="  text-sm">{title}</div>
          <div className="  font-semibold mt-1 tracking-wide">{company}</div>
        </div>

        {/* Image */}
        <div className="w-32 h-32 rounded-full border-4 border-[#16C47F] overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
      </div>


      {/* Pagination Dots */}
      <div className="flex justify-center mt-8 gap-2">
        {testimonials.map((_, i) => (
          <span
            key={i}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              i === current ? 'bg-[#F93827] scale-110' : 'bg-red-100'
            }`}
          />
        ))}
      </div>

      <div className="mt-8 flex justify-center">
  <button
    onClick={() => alert('Redirect to review form or open modal')}
    className="bg-[#16C47F] hover:bg-[#16C47F] text-white font-semibold px-6 py-2 rounded-full shadow transition-all duration-300"
  >
    Write a Review
  </button>
</div>
    </section>
  );
}
