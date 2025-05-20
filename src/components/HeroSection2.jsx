import { useState, useEffect } from "react";

const slides = [
  {
    img: "https://plus.unsplash.com/premium_photo-1661670061124-928b22ddde05?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with actual image paths
    heading: "Empowering Your Business with",
    subheading: "Expert Consultancy Services",
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1683121855240-5d3f67a5fdec?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    heading: "Simplifying Legal Compliance for",
    subheading: "Startups and Enterprises",
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1682097415158-1e193c69791c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    heading: "End-to-End Support for",
    subheading: "Registrations, Filings & More",
  },
];

const HeroSlider = () => {
    const [current, setCurrent] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrent((prev) => (prev + 1) % slides.length);
      }, 4000);
      return () => clearInterval(interval);
    }, []);
  
    return (
      <div className="relative h-[80vh] w-full overflow-hidden">
        {/* Slides */}
        {slides.map((slide, i) => (
          <div
            key={i}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
              i === current ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
            style={{ backgroundImage: `url(${slide.img})` }}
          />
        ))}
  
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 z-20" />
  
        {/* Text */}
        <div className="relative z-30 flex flex-col justify-center items-center h-full text-center px-4">
          <h1 className="text-3xl md:text-5xl capitalize font-medium text-white mb-4 drop-shadow-lg">
            {slides[current].heading}
          </h1>
          <p className="text-3xl md:text-5xl text-white mb-6  capitalizefont-medium drop-shadow">
            {slides[current].subheading}
          </p>
          <div className="flex gap-4">
            <button className="bg-white text-blue-500 font-medium px-6 py-2 rounded shadow hover:bg-gray-100 transition">
              MORE ABOUT US
            </button>
            <button className="border border-white text-white px-6 py-2 rounded hover:bg-white hover:text-blue-900 transition">
              CONTACT US
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default HeroSlider;
  