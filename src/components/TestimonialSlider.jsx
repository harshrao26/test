import React, { useState, useEffect } from "react";
import { Quote } from "lucide-react";
import Modal from "react-modal";

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
Modal.setAppElement("#root");

export default function BlueTestimonialSlider() {
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [reviewText, setReviewText] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % testimonials.length);
        setFade(true);
      }, 300);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const { quote, name, title, company, image } = testimonials[current];

  const handleReviewSubmit = () => {
    console.log("User Review:", reviewText);
    setModalOpen(false);
    setReviewText("");
    alert("Thank you for your review!");
  };

  return (
    <section className="bg-zinc-100 py-20">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-semibold -900">
          Trusted By Those Who Trust the Law
        </h2>
        <p className="mt-4 text-zinc-600">
          Professionals across finance and compliance rely on us to stay
          accurate, audit-ready, and ahead.
        </p>
      </div>

      {/* Testimonial Card */}
      <div
        className={`max-w-5xl mx-auto px-6 py-10 bg-white shadow-xl rounded-xl flex flex-col md:flex-row items-center gap-10 transition-opacity duration-300 ${
          fade ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="flex-1 text-center md:text-left">
          <Quote className="text-[#26548A] w-10 h-10 mb-4 inline-block" />
          <p className="text-xl text-zinc-700 font-medium italic leading-relaxed mb-6">
            “{quote}”
          </p>
          <div className="font-semibold text-[#26548A] text-xl">{name}</div>
          <div className="text-sm">{title}</div>
          <div className="font-semibold mt-1 tracking-wide">{company}</div>
        </div>

        <div className="w-32 h-32 rounded-full border-4 border-[#26548A] overflow-hidden">
          <img src={image} alt={name} className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-8 gap-2">
        {testimonials.map((_, i) => (
          <span
            key={i}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              i === current ? "bg-[#26548A] scale-110" : "bg-blue-100"
            }`}
          />
        ))}
      </div>

      {/* Button */}
      <div className="mt-8 flex justify-center">
        <button
          onClick={() => setModalOpen(true)}
          className="bg-[#DDA853] hover:bg-[#DDA853] text-white font-semibold px-6 py-2 rounded-full shadow transition-all duration-300"
        >
          Write a Review
        </button>
      </div>

      {/* Modal */}
      <Modal
        isOpen={modalOpen}
        onRequestClose={() => setModalOpen(false)}
        contentLabel="Write a Review"
        className="relative w-full max-w-lg mx-auto mt-24 bg-white p-8 rounded-2xl shadow-2xl transition-all duration-500 ease-in-out outline-none"
        overlayClassName="fixed inset-0 bg-black/50    flex justify-center items-start z-50"
      >
        {/* Close Button */}
        <button
          onClick={() => setModalOpen(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition text-xl"
        >
          &times;
        </button>

        <h2 className="text-2xl font-bold text-[#27548A] mb-3">
          We’d Love Your Feedback
        </h2>
        <p className="text-sm text-gray-600 mb-6">
          Help others understand how our service impacted your workflow or team.
        </p>

        <textarea
          className="w-full h-40 p-4 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#26548A] resize-none shadow-sm"
          placeholder="Write your review here..."
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
        />

        {/* Submit Row */}
        <div className="flex justify-end gap-3 mt-6">
          <button
            onClick={() => setModalOpen(false)}
            className="px-4 py-2 rounded-full text-sm bg-gray-100 text-gray-600 hover:bg-gray-200"
          >
            Cancel
          </button>
          <button
            onClick={handleReviewSubmit}
            className="px-5 py-2 rounded-full text-sm font-medium bg-[#DDA853] text-white hover:bg-[#f4c983] transition-all"
          >
            Submit Review
          </button>
        </div>
      </Modal>
    </section>
  );
}
