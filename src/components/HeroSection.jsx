import { useEffect, useState } from "react";
import { User, Phone, Mail, FileText, Search, MapPin } from "lucide-react";
import wh from "../assets/wh.png";
import { Star } from "lucide-react";
import google from "../assets/google.png";
import { AvatarCircles } from "./magicui/avatar-circles";



const images = [
  "http://plus.unsplash.com/premium_photo-1661274151793-173c09ced789?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1589216532372-1c2a367900d9?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1589994284978-c98238e44443?q=80&w=3029&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with your actual image paths
];
const rotatingWords = ["Compliance", "Registration", "Business", "Advisory"];

export default function HeroSection() {
  const [bgIndex, setBgIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const [wordIndex, setWordIndex] = useState(0);
  const avatars = [
    {
      imageUrl: "https://avatars.githubusercontent.com/u/16860528",
      profileUrl: "https://github.com/dillionverma",
    },
    {
      imageUrl: "https://avatars.githubusercontent.com/u/20110627",
      profileUrl: "https://github.com/tomonarifeehan",
    },
    {
      imageUrl: "https://avatars.githubusercontent.com/u/106103625",
      profileUrl: "https://github.com/BankkRoll",
    },
    {
      imageUrl: "https://avatars.githubusercontent.com/u/59228569",
      profileUrl: "https://github.com/safethecode",
    },
    {
      imageUrl: "https://avatars.githubusercontent.com/u/59442788",
      profileUrl: "https://github.com/sanjay-mali",
    },
    {
      imageUrl: "https://avatars.githubusercontent.com/u/89768406",
      profileUrl: "https://github.com/itsarghyadas",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // trigger fade out
      setTimeout(() => {
        setWordIndex((prev) => (prev + 1) % rotatingWords.length);
        setFade(true); // trigger fade in
      }, 300); // fade-out duration
    }, 3000); // word change every 1 sec

    return () => clearInterval(interval);
  }, []);
  return (
    <div
      className="w-full relative h-screen bg-cover bg-center transition-all duration-700 flex items-center justify-center"
      style={
        {
          // backgroundImage: `url(${images[bgIndex]})`,
        }
      }
    >
      <div className="absolute w-full h-full "></div>

      <img
        src="http://propques.com/assets/heroimg-CgmdUht_.webp"
        className="absolute  h-82 bottom-0 rotate-10 left-72"
        alt=""
      />
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between ">
        {/* Left Content */}
        <div className="text-black bg-white/90 md:w-1/2 bg-black/0 p-6 rounded-xl">
          <div className="bg-white text-black px-4 py-1 capit rounded-full text-sm w-fit mb-4 font-medium">
            The Market Leader For Delivering
          </div>
          <h1 className="text-4xl md:text-5xl font-medium capitalize pl-8 leading-tight border-l-4 border-blue-500">
            All Legal{" "}
            <p
              className={`inline-block transition-opacity duration-300 ${
                fade ? "opacity-100" : "opacity-0"
              }`}
            >
              <span className="bg-[#F93827] text-white px-4 rounded-full">
                {" "}
                {rotatingWords[wordIndex]}
              </span>
              <br />
            </p>{" "}
            <br />
            <p>Services At Single Platform</p>
          </h1>

          <p className="mt-4 text-sm md:text-base max-w-xl">
            From registrations to filings, discover legal experts who simplify
            compliance and keep your business risk-free.
          </p>

          <div className="mt-6">
            <div className="flex items-center gap-6">
              {/* Request a Demo Button */}
              <button className="bg-blue-500 text-white px-6 py-3 rounded-xl text-sm font-medium flex items-center gap-2 hover:bg-blue-600 transition">
                Enquiry Now
                <span className="text-lg">→</span>
              </button>

              {/* Play Demo Link */}
              <button className="text-gray-800   underline-offset-2 text-sm font-medium flex items-center gap-2 hover:text-black transition">
                See All Services <span className="text-lg">→</span>
              </button>
            </div>
          </div>
          <div className="flex items-center space-x-2 text-sm mt-6">
            {/* 5 Stars */}
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
            {/* Text */}
            <span className="text-gray-600 font-medium flex items-center justify-center capitalize gap-1">
              Rated 5 star by satisfied client on <img src={google} alt="" className="h-5   flex" /> <AvatarCircles numPeople={99} avatarUrls={avatars}  />

            </span>
          </div>
        </div>

        {/* Right Form Panel */}
        <div className="bg-white shadow-[#0379ff3e] shadow-xl rounded-2xl p-8 w-full md:w-[500px] mt-10 md:mt-0">
          <h2 className="text-xl font-semibold text-center mb-6">
            Quickly Get Legal & Compliance Advisors
          </h2>

          {/* Full Name */}
          <div className="flex items-center gap-2 border rounded-full px-4 py-2 mb-4">
            <User size={18} className="text-gray-500" />
            <input
              type="text"
              placeholder="Full Name"
              className="w-full outline-none text-sm"
            />
          </div>

          {/* Phone Number */}
          <div className="flex items-center gap-2 border rounded-full px-4 py-2 mb-4">
            <Phone size={18} className="text-gray-500" />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full outline-none text-sm"
            />
          </div>

          {/* Email */}
          <div className="flex items-center gap-2 border rounded-full px-4 py-2 mb-4">
            <Mail size={18} className="text-gray-500" />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full outline-none text-sm"
            />
          </div>

          {/* Description */}
          <div className="flex items-start gap-2 border rounded-xl px-4 py-3 mb-4">
            <FileText size={18} className="text-gray-500 mt-1" />
            <textarea
              placeholder="Describe your legal requirement"
              className="w-full outline-none text-sm resize-none h-24"
            />
          </div>

          {/* WhatsApp Consent */}
          <div className="flex items-start gap-2 mb-6">
            <input
              type="checkbox"
              id="whatsappConsent"
              className="mt-1 accent-blue-500"
            />
            <label
              htmlFor="whatsappConsent"
              className="text-medium flex text-gray-600"
            >
              I agree to receive communication on{" "}
              <img src={wh} alt="" className="h-6   flex" /> WhatsApp
            </label>
          </div>

          <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 rounded-full transition">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
