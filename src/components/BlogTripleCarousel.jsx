import React, { useState, useEffect } from 'react';

const blogs = [
  {
    image: 'https://plus.unsplash.com/premium_photo-1661775522763-451d7783b453?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Designing Agile Coworking Floors',
    excerpt: 'How flexible layouts add 23% more seat-yield per ft².',
    date: '08 May 2024',
  },
  {
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Community-Led Growth Hacks',
    excerpt: 'Turn members into brand advocates in three steps.',
    date: '21 Apr 2024',
  },
  {
    image: 'https://images.unsplash.com/39/lIZrwvbeRuuzqOoWJUEn_Photoaday_CSD%20%281%20of%201%29-5.jpg?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Café Revenue Math',
    excerpt: 'Simple tweaks that lift F&B spend by loremipsum 17%.',
    date: '14 Mar 2024',
  },
  {
    image: 'https://plus.unsplash.com/premium_photo-1683133974170-762dc561d292?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Monetising Meeting Rooms',
    excerpt: 'Dynamic pricing tactics that work in India.',
    date: '28 Feb 2024',
  },
  {
    image: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=2969&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Lease-to-License Conversions',
    excerpt: 'Legal fine-print every operator should nail.',
    date: '09 Jan 2024',
  },
  {
    image: 'https://plus.unsplash.com/premium_photo-1683134479351-134d66fda33a?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Running Profitable Events',
    excerpt: 'A checklist to hit lorem ipsum breakeven before doors open.',
    date: '19 Dec 2023',
  },
];

export default function BlogTripleCarousel() {
  const [chunk, setChunk] = useState(0);
  const [fade, setFade] = useState(true);
  const pages = Math.ceil(blogs.length / 3);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setChunk((prev) => (prev + 1) % pages);
        setFade(true);
      }, 300); // match fade duration
    }, 2500); // total interval
    return () => clearInterval(interval);
  }, [pages]);

  const start = chunk * 3;
  const visible = blogs.slice(start, start + 3);

  return (
    <section className="max-w-7xl mx-auto px-4 pt-20">
      <h2 className="text-3xl font-medium text-gray-800 mb-10">
        Latest From The Blog
      </h2>

      {/* blog cards */}
      <div
        className={`grid grid-cols-1 md:grid-cols-3 gap-8 
          transition-opacity duration-500 ease-in-out 
          ${fade ? 'opacity-100' : 'opacity-0'}`}
      >
        {visible.map((b, i) => (
          <article
            key={i}
            className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition"
          >
            <img src={b.image} alt={b.title} className="h-48 w-full object-cover" />
            <div className="p-5">
              <span className="text-xs uppercase tracking-wide text-green-500">
                {b.date}
              </span>
              <h3 className="mt-2 font-semibold text-lg text-gray-900">{b.title}</h3>
              <p className="mt-1 text-sm text-gray-600">{b.excerpt}</p>
            </div>
          </article>
        ))}
      </div>

      {/* dots */}
      <div className="my-8 flex justify-center gap-2">
        {Array.from({ length: pages }).map((_, i) => (
          <span
            key={i}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              i === chunk ? 'bg-green-500 scale-110' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
