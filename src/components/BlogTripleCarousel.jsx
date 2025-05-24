import React, { useState, useEffect } from 'react';

const blogs = [
  {
    image: 'https://plus.unsplash.com/premium_photo-1661775522763-451d7783b453?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Designing Agile Coworking Floors',
    excerpt: 'How flexible layouts add 23% more seat-yield per ft².Lorem ipsum dolor sit',
    date: '08 May 2024',
  },
  {
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Community-Led Growth Hacks',
    excerpt: 'Turn members into brand advocates in three steps.Lorem ipsum dolor sit',
    date: '21 Apr 2024',
  },
  {
    image: 'https://images.unsplash.com/39/lIZrwvbeRuuzqOoWJUEn_Photoaday_CSD%20%281%20of%201%29-5.jpg?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Café Revenue Math',
    excerpt: 'Simple tweaks that lift F&B spend by loremipsum 17%. Lorem ipsum dolor sit',
    date: '14 Mar 2024',
  },
  {
    image: 'https://plus.unsplash.com/premium_photo-1683133974170-762dc561d292?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Monetising Meeting Rooms',
    excerpt: 'Dynamic pricing tactics that work in India. Lorem ipsum dolor sit amet.',
    date: '28 Feb 2024',
  },
  {
    image: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=2969&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Lease-to-License Conversions',
    excerpt: 'Legal fine-print every operator should nail. orem ipsum',
    date: '09 Jan 2024',
  },
  {
    image: 'https://plus.unsplash.com/premium_photo-1683134479351-134d66fda33a?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Running Profitable Events',
    excerpt: 'A checklist to hit lorem ipsum breakeven before doors open. ',
    date: '19 Dec 2023',
  },
];


export default function BlogTripleCarousel() {
  const [index, setIndex] = useState(0);
  const visibleCount = 3;

  const maxIndex = blogs.length - visibleCount;

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1 > maxIndex ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, [maxIndex]);

  return (
    <section className="max-w-7xl mx-auto   pt-20 overflow-hidden">
      <h2 className="text-3xl font-medium text-gray-800 mb-10">
        Latest From The Blog
      </h2>

      <div className="overflow-hidde">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${(100 / visibleCount) * index}%)`,
            width: ` `,
          }}
        >
          {blogs.map((b, i) => (
            <div
              key={i}
              className="w-1/3 px-2 box-border shrink-0"
            >
              <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition">
                <img src={b.image} alt={b.title} className="h-48 w-full object-cover" />
                <div className="p-5">
                  <span className="text-xs uppercase tracking-wide text-[#27548A]">
                    {b.date}
                  </span>
                  <h3 className="mt-2 font-semibold text-lg text-gray-900">{b.title}</h3>
                  <p className="mt-1 text-sm text-gray-600">{b.excerpt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="my-8 flex justify-center gap-2">
        {Array.from({ length: blogs.length - visibleCount + 1 }).map((_, i) => (
          <span
            key={i}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              i === index ? 'bg-[#26548A] scale-110' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </section>
  );
}