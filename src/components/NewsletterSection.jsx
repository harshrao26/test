import React from 'react';

export default function NewsletterSection() {
  return (
    <section className="bg-[#F3F3E0] py-20  text-center">
    <div className='bg-amber-00'>
        {/* Heading */}
      <h2 className="text-4xl font-semibold text-[#183B4E] mb-4 ">
        Subscribe to Our Newsletter
      </h2>

      {/* Subtext */}
      <p className="text-gray-600 max-w-xl mx-auto mb-6">
        Stay updated with the latest trends in coworking, asset monetization, and legal compliance insights delivered straight to your inbox.
      </p>

      {/* Email Form */}
      <form className="mt-6 flex flex-col sm:flex-row justify-center items-center gap-4 max-w-xl mx-auto">
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full sm:w-2/3 px-5 py-3 border bg-white border-[#DDA853] rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#DDA853]"
        />
        <button
          type="submit"
          className="bg-[#DDA853] hover:bg-[#ba975e] text-white font-medium px-6 py-3 rounded-md shadow transition"
        >
          Subscribe
        </button>
      </form>
    </div>
    </section>
  );
}
