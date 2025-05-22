import React, { useState, useEffect } from 'react';

const galleryItems = [
  {
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caption: 'Bangalore FinTech Summit',
    date: 'April 2024',
  },
  {
    image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caption: 'Startup Pitch Night',
    date: 'February 2024',
  },
  {
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2969&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caption: 'Legal Compliance Workshop',
    date: 'December 2023',
  },
  {
    image: 'https://images.unsplash.com/photo-1712971404080-87271ce2e473?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caption: 'Coworking Space Launch',
    date: 'October 2023',
  },
];

export default function EventGalleryCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % galleryItems.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const getStyle = (index) => {
    if (index === activeIndex) return 'z-20 scale-100 opacity-100';
    if (
      index === (activeIndex + 1) % galleryItems.length ||
      index === (activeIndex - 1 + galleryItems.length) % galleryItems.length
    ) {
      return 'z-10 scale-95 opacity-70';
    }
    return 'hidden md:block opacity-0 scale-90';
  };

  const getPosition = (index) => {
    if (index === activeIndex) return 'left-1/2 -translate-x-1/2';
    if (index === (activeIndex + 1) % galleryItems.length) return 'left-2/3 -translate-x-1/2';
    if (index === (activeIndex - 1 + galleryItems.length) % galleryItems.length) return 'left-1/3 -translate-x-1/2';
    return 'left-1/2 -translate-x-1/2'; // fallback
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 pt-20 text-center">
      {/* Heading */}
      <h2 className="text-4xl font-semibold text-gray-800 mb-12">Event Highlights</h2>

      {/* Carousel */}
      <div className="relative h-[430px] md:h-[460px]">
        {galleryItems.map((item, index) => (
          <div
            key={index}
            className={`absolute top-0 transition-all duration-500 transform ${getPosition(index)} ${getStyle(index)}`}
          >
            <div className="w-80 md:w-[550px] overflow-hidden rounded-xl shadow-2xl bg-white hover:shadow-blue-200 transition-shadow">
              <img
                src={item.image}
                alt={item.caption}
                className="w-full h-80 object-cover"
              />
              <div className="p-4">
                <p className="text-base font-semibold text-gray-800">{item.caption}</p>
                <p className="text-sm text-gray-500">{item.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      

      {/* Pagination Dots */}
      <div className=" flex justify-center gap-2">
        {galleryItems.map((_, i) => (
          <span
            key={i}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              i === activeIndex ? 'bg-blue-600 scale-110' : 'bg-blue-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
