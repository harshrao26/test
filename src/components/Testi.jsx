import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import TestimonialRotator from './TestimonialRotator';
import st from '../assets/st.png';

const Testi = () => (
  <section className="relative  py-20">
    <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-start lg:items-center gap-12">
      
      {/* Text Block */}
      <div className="lg:w-1/2 relative">
        <h2 className="text-3xl md:text-4xl font-semibold  text-gray-900 mb-6 relative">
          <img
            src={st}
            alt="star accent"
            className="absolute -top-4 -left-6 h-10 transform rotate-12 opacity-80 capitalized"
          />
          Trusted By Experts & <br /> Businesses
        </h2>
        <p className="text-gray-700 text-sm">
          We’re one of India’s highest-rated providers for business incorporations and compliance services—delivered in record time. Don’t take our word for it; see what our clients say below.
        </p>
      </div>

      {/* Rotator Card */}
      <div className="lg:w-1/2 relative">
        <div className="bg-white p-8 rounded-2xl shadow-xl">
          <TestimonialRotator />
        </div>
        <button className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-white rounded-full shadow hover:bg-gray-100 transition">
          <ChevronLeft size={20} />
        </button>
        <button className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-white rounded-full shadow hover:bg-gray-100 transition">
          <ChevronRight size={20} />
        </button>
      </div>

    </div>
  </section>
);

export default Testi;
