import { useEffect, useState } from "react";
import { User, Phone, Mail, FileText, Search, MapPin } from "lucide-react";
import { X, Settings } from "lucide-react";

const HeroSection3 = () => {
  const [bgIndex, setBgIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const [wordIndex, setWordIndex] = useState(0);
  const [query, setQuery] = useState("");

  const rotatingWords = ["Compliance", "Registration", "Business", "Advisory"];

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
      className="h-screen  pt-40  flex flex-col items-center justify-end bg-cover bg-center bg-no-repeat"
      style={
        {
          // backgroundImage: `url('http://propques.com/assets/heroimg-CgmdUht_.webp')`,
        }
      }
    >
      <h1 className="text-4xl md:text-4xl  font-medium capitalize   leading-tight transition-all ease-in-out  text-center">
        All Legal{" "}
        <p
          className={`inline-block transition-all ease-in-out transition-opacity duration-300 ${
            fade ? "opacity-100" : "opacity-0"
          }`}
        >
          <span className="bg-blue-500 transition-all ease-in-out text-white px-4 rounded-full">
            {" "}
            {rotatingWords[wordIndex]}
          </span>
          <br />
        </p>{" "}
        <br />
        <p>Services At Single Platform</p>
      </h1>{" "}
      <p className="mt-2 text-sm md:text-base max-w-xl text-center">
        From registrations to filings, discover legal experts who simplify
        compliance and keep your business risk-free.
      </p>
      <div className="mt-4 w-full max-w-2xl flex items-center gap-4 mb- py-4">
        {/* Search input */}
        <div className="relative flex-1 text-gray-600 focus-within:text-gray-900">
          <Search
            size={20}
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
          />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search services…"
            className="w-full pl-10 pr-16 py-2 rounded-full border border-gray-800 shadow-2xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {query && (
            <X
              size={18}
              onClick={() => setQuery("")}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500 hover:text-gray-700"
            />
          )}
        </div>

        {/* Submit button */}
        <button
          type="button"
          className="flex-shrink-0 flex items-center px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-full focus:outline-none transition"
          onClick={() => console.log("Search for:", query)}
        >
          <Search size={18} className="mr-2" />
          Search
        </button>
      </div>
      <div className="flex items-centr justify-cnter gap-4 mb-4 -ml-52">
      <button className="border-1 rounded px-4 text-sm">GST Registration</button>
      <button className="border-1 rounded px-4 text-sm">PVT Registration</button>
      <button className="border-1 rounded px-4 text-sm">LLP Registration</button>
      <button className="border-1 rounded px-4 text-sm">LLP Registration</button>

      </div>
      <div className="h-[400px] w-full max-w-7xl ">
        <iframe
          className="h-full w-full"
          src="https://www.youtube.com/embed/FfSnJdpFBb8"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default HeroSection3;
