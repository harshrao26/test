// import { useEffect, useState } from "react";
// import { Star } from "lucide-react";
// import google from "../assets/google.png";
// import wh from "../assets/wh.png";
// import { AvatarCircles } from "./magicui/avatar-circles";
// import { User, Phone, Mail, FileText, Search, MapPin } from "lucide-react";
// import { X, Settings } from "lucide-react";

// const images = [
//     "http://plus.unsplash.com/premium_photo-1661274151793-173c09ced789?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     "https://images.unsplash.com/photo-1589216532372-1c2a367900d9?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     "https://images.unsplash.com/photo-1589994284978-c98238e44443?q=80&w=3029&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with your actual image paths
//   ];
//   const avatars = [
//     {
//       imageUrl: "https://avatars.githubusercontent.com/u/16860528",
//       profileUrl: "https://github.com/dillionverma",
//     },
//     {
//       imageUrl: "https://avatars.githubusercontent.com/u/20110627",
//       profileUrl: "https://github.com/tomonarifeehan",
//     },
//     {
//       imageUrl: "https://avatars.githubusercontent.com/u/106103625",
//       profileUrl: "https://github.com/BankkRoll",
//     },
//     {
//       imageUrl: "https://avatars.githubusercontent.com/u/59228569",
//       profileUrl: "https://github.com/safethecode",
//     },
//     {
//       imageUrl: "https://avatars.githubusercontent.com/u/59442788",
//       profileUrl: "https://github.com/sanjay-mali",
//     },
//     {
//       imageUrl: "https://avatars.githubusercontent.com/u/89768406",
//       profileUrl: "https://github.com/itsarghyadas",
//     },
//   ];
// const rotatingWords = ["Compliance", "Registration", "Business", "Advisory"];
// const [query, setQuery] = useState("");

// export default function HeroSection() {
//   const [fade, setFade] = useState(true);
//   const [wordIndex, setWordIndex] = useState(0);

//   useEffect(() => {
//     const iv = setInterval(() => {
//       setFade(false);
//       setTimeout(() => {
//         setWordIndex((i) => (i + 1) % rotatingWords.length);
//         setFade(true);
//       }, 300);
//     }, 3000);
//     return () => clearInterval(iv);
//   }, []);

//   return (
//     <div
//       className="w-full h-screen bg-cover bg-center relative flex items-center"
//     //   style={{ backgroundImage: `url(${images[0]})` }}
//     >
//       {/* Optional overlay */}
//       {/* <div className="absolute inset-0 bg-black/40" /> */}

//       <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
//         {/* Left text */}
//         <div className="bg-white/90 p-6 rounded-xl md:w-1/2">
//           <div className="inline-block bg-white text-black px-4 py-1 rounded-full text-sm mb-4">
//             The Market Leader For Delivering
//           </div>
//           <h1 className="text-4xl md:text-5xl font-medium capitalize border-l-4 border-yellow-500 pl-6 leading-tight mb-4">
//             All Legal{" "}
//             <span
//               className={`inline-block transition-opacity duration-300 ${
//                 fade ? "opacity-100" : "opacity-0"
//               }`}
//             >
//               <span className="bg-yellow-500 text-white px-3 rounded-full">
//                 {rotatingWords[wordIndex]}
//               </span>
//             </span>{" "}
//             Services At Single Platform
//           </h1>
//           <p className="text-sm md:text-base mb-6">
//             From registrations to filings, discover legal experts who simplify
//             compliance and keep your business risk-free.
//           </p>
//           <div className="mt-4 w-full max-w-2xl flex items-center gap-4 mb-4">
//         {/* Search input */}
//         <div className="relative flex-1 text-gray-600 focus-within:text-gray-900">
//           <Search
//             size={20}
//             className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
//           />
//           <input
//             type="text"
//             value={query}
//             onChange={(e) => setQuery(e.target.value)}
//             placeholder="Search services…"
//             className="w-full pl-10 pr-16 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
//           />

//           {query && (
//             <X
//               size={18}
//               onClick={() => setQuery("")}
//               className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500 hover:text-gray-700"
//             />
//           )}
//         </div>

//         {/* Submit button */}
//         <button
//           type="button"
//           className="flex-shrink-0 flex items-center px-6 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-full focus:outline-none transition"
//           onClick={() => console.log("Search for:", query)}
//         >
//           <Search size={18} className="mr-2" />
//           Search
//         </button>
//       </div>
//           <div className="flex items-center mt-6 space-x-2 text-sm">
//             <div className="flex text-yellow-400 space-x-1">
//               {[...Array(5)].map((_, i) => (
//                 <Star key={i} size={18} fill="currentColor" stroke="currentColor" />
//               ))}
//             </div>
//             <span className="text-gray-600 flex items-center space-x-1">
//               <span>Rated 5 star by satisfied clients on</span>
//               <img src={google} alt="Google" className="h-5" />
//               <AvatarCircles numPeople={99} avatarUrls={avatars} />
//             </span>
//           </div>
//         </div>

//         {/* Right video */}
//         <div className="mt-10 md:mt-0 md:w-1/2">
//           <div className="aspect-video w-full rounded-xl overflow-hidden shadow-lg">
//             <iframe
//               src="https://www.youtube.com/embed/FfSnJdpFBb8"
//               title="Intro Video"
//               frameBorder="0"
//               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//               allowFullScreen
//               className="w-full h-full"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
import { useEffect, useState } from "react";
import { Star, Search, X } from "lucide-react";
import google from "../assets/google.png";
import { AvatarCircles } from "./magicui/avatar-circles";
import MarqueeTwo from "./MarqueeTwo";
import MarqueeThree from "./MarqueeThree";

const images = [
  "http://plus.unsplash.com/premium_photo-1661274151793-173c09ced789?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1589216532372-1c2a367900d9?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1589994284978-c98238e44443?q=80&w=3029&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with your actual image paths
];
const avatars = [
  /* your avatar objects */
];
const rotatingWords = ["Compliance", "Registration", "Business", "Advisory"];

export default function HeroSection() {
  const [fade, setFade] = useState(true);
  const [wordIndex, setWordIndex] = useState(0);
  const [query, setQuery] = useState(""); // ← moved here

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

  return (
    <div
      className="w-full h-screen bg-cover bg-center relative flex items-center"
      style={{ backgroundImage: `url(${images[0]})` }} // set your bg
    >
      <div className="absolute inset-0 bg-white/50" />

      <div className="flex flex-col items-center justify-center w-full h-full">
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between  gap-4">
          {/* Left text + search */}
          <div className="bg-white/90 p-6 rounded-xl md:w-1/2 py-">
            <div className="inline-block bg-white text-black px-4 py-1 rounded-full text-sm mb-4">
              The Market Leader For Delivering
            </div>
            <h1 className="text-4xl md:text-4xl font-medium capitalize border-l-4 border-yellow-500 pl-6 mb-4 leading-tight">
              All Legal{" "}
              <span
                className={`inline-block transition-opacity duration-300 ${
                  fade ? "opacity-100" : "opacity-0"
                }`}
              >
                <span className="bg-yellow-500 text-white px-3 rounded-full">
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
                <Search
                  size={20}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search services…"
                  className="w-full pl-10 pr-4 py-2 rounded-full border border-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
                {query && (
                  <X
                    size={18}
                    onClick={() => setQuery("")}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500 hover:text-gray-700"
                  />
                )}
              </div>
              {/* <button
              className="flex-shrink-0 flex items-center px-6 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-full transition"
              onClick={() => console.log("Search for:", query)}
            >
              <Search size={18} className="mr-2" />
              Search

            </button> */}
            </div>
            <div className="flex items-centr justify-cnter gap-4  ">
              {/* <button className="border-1 rounded-full px-4 py-1 text-xs">GST Registration</button>
      <button className="border-1 rounded-full px-4 py-1 text-xs">PVT Registration</button>
      <button className="border-1 rounded-full px-4 py-1 text-xs">LLP Registration</button>
      <button className="border-1 rounded-full px-4 py-1 text-xs"> Business Registration</button> */}
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
