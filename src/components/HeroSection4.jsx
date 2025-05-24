import { useEffect, useState } from "react";
import { Star, Search, X } from "lucide-react";
import google from "../assets/google.png";
import { AvatarCircles } from "./magicui/avatar-circles";
import MarqueeTwo from "./MarqueeTwo";
import { Mic } from "lucide-react";

const images = [
  "http://plus.unsplash.com/premium_photo-1661274151793-173c09ced789?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1589216532372-1c2a367900d9?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1589994284978-c98238e44443?q=80&w=3029&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with your actual image paths
];
const avatars = [
  /* your avatar objects */
];
const rotatingWords = [
  "Compliance",
  "Registration",
  "Business Reg",
  "Advisory Reg",
];

const typingTexts = [
  "Search compliance services...",
  "Find expert legal advice...",
  "Explore business registrations...",
  "Start your coworking journey...",
];

export default function HeroSection() {
  const [fade, setFade] = useState(true);
  const [wordIndex, setWordIndex] = useState(0);
  const [query, setQuery] = useState(""); // ← moved here
  const [typingIndex, setTypingIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const iv = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setWordIndex((i) => (i + 1) % rotatingWords.length);
        setFade(true);
      }, 300);
    }, 3000);
    return () => clearInterval(iv);
  }, []);

  useEffect(() => {
    if (!isTyping) return;

    const currentText = typingTexts[typingIndex];
    const typingTimeout = setTimeout(() => {
      if (charIndex < currentText.length) {
        setQuery(currentText.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else {
        setIsTyping(false);
        setTimeout(() => {
          setTypingIndex((prev) => (prev + 1) % typingTexts.length);
          setCharIndex(0);
          setIsTyping(true);
        }, 3000); // 3 sec pause before next word
      }
    }, 100); // typing speed

    return () => clearTimeout(typingTimeout);
  }, [charIndex, isTyping, typingIndex]);

  const handleSearch = () => {
    if (query) {
      // Perform search action here
      console.log("Searching for:", query);
    }
  };
  const handleAudioInput = () => {
    // Implement audio input functionality here
    console.log("Audio input activated");
  };

  return (
    <div
      className="w-full h-screen   bg-cover bg-center relative flex items-center"
      style={{ backgroundImage: `url(${images[0]})` }} // set your bg
    >
      <div className="absolute inset-0 bg-white/50" />

      <div className="flex flex-col items-center justify-center w-full h-full pt-20">
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between  gap-4">
          {/* Left text + search */}
          <div className="bg-white/90 p-6 rounded-xl md:w-1/2 py-">
            <div className="inline-block bg-white text-black px-4 py-1 rounded-full text-sm mb-4">
              The Market Leader For Delivering
            </div>
            <h1 className="text-4xl md:text-4xl font-medium capitalize border-l-4 border-[#27548A] pl-6 mb-4 leading-tight">
              All{" "}
              <span
                className={`inline-block transition-opacity duration-300 ${
                  fade ? "opacity-100" : "opacity-0"
                }`}
              >
                <span className="bg-[#27548A] text-white px-3 rounded-full">
                  {rotatingWords[wordIndex]}
                </span>
                <br />
              </span>{" "}
              Services At Single Platform
            </h1>
            <p className="text-sm md:text-sm mb-6">
              From registrations to filings, discover legal experts who simplify
              compliance and keep your business risk-free.
            </p>

            {/* Search + button */}
            <div className="flex items-center gap-4 mb-6">
              <div className="relative flex-1 text-gray-600 focus-within:text-gray-900">
                <button
                  onClick={handleSearch}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  <Search size={20} />
                </button>
                <input
                  type="text"
                  value={query}
                  onChange={(e) => {
                    setQuery(e.target.value);
                    setIsTyping(false); // stops auto-typing if user starts typing
                  }}
                  placeholder="Search services…"
                  className="w-full pl-10 pr-12 py-2 bg-white rounded-full  border-[#27548A] border-3 focus:outline-none focus:ring-2 focus:ring-[#27548A]"
                />
                {query && (
                  <X
                    size={18}
                    onClick={() => setQuery("")}
                    className="absolute right-10 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500 hover:text-gray-700"
                  />
                )}
                <button
                  onClick={handleAudioInput}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  <Mic size={18} />
                </button>
              </div>
            </div>

            {/* Rating */}
            <div className="flex items-center mt-6 space-x-2 text-sm">
              <div className="flex space-x-1 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    fill="currentColor"
                    stroke="currentColor"
                  />
                ))}
              </div>
              <span className="text-gray-600 flex items-center gap-1">
                Rated 5-star by satisfied clients on
                <img
                  src={google}
                  alt="Google"
                  className="h-5 mx-1 rounded-full"
                />
                <AvatarCircles numPeople={99} avatarUrls={avatars} />
              </span>
            </div>
          </div>

          {/* Right video */}
          <div className="mt-10 md:mt-0 md:w-1/2">
            <div className="aspect-video w-full rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.youtube.com/embed/FfSnJdpFBb8"
                title="Intro Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>
        </div>

        <div>
          <MarqueeTwo />
        </div>
      </div>
    </div>
  );
}
