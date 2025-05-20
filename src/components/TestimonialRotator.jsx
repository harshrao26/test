import React, { useEffect, useState } from "react";
import google from '../assets/google.png'
const testimonials = [
  {
    name: "Nalin Kumar",
    review:
    "Kanoon Kart has been a game-changer for our startup. Their legal guidance was spot-on, and the team ensured everything from incorporation to GST was handled seamlessly. Highly recommended!",
    platform: "Google",
    avatar: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fkkhan4420007968%2Findian-passport-size-photos%2F&psig=AOvVaw1DzO8C-XrfZTHTt93aY1lt&ust=1747664059691000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPCCzo2arY0DFQAAAAAdAAAAABAE", // Replace with actual image paths
  },
  {
    name: "Arvind Verma",
    review:
    "Professional, prompt, and proactive — that’s how I’d describe Kanoon Kart. I was able to register my business and get all licenses without any hassle. Great support system for entrepreneurs.",
    platform: "Google",
    avatar: "https://i.pinimg.com/474x/f5/3e/c6/f53ec61db2e49c82b057554cb4a0cb91.jpg",
  },
  {
    name: "Ravi Sharma",
    review:
    "Legal compliance always felt complex until I worked with Kanoon Kart. Their advisors are clear, responsive, and extremely helpful. I’ll be coming back for all future filings and legal needs.",
    platform: "Google",
    avatar: "https://i.pinimg.com/originals/c3/33/27/c333273fcfc3198e93df380c0cfc0437.jpg",
  },
];

const TestimonialRotator = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 4000); // Change every 1 second

    return () => clearInterval(timer); // Cleanup
  }, []);

  const { name, review, platform, avatar } = testimonials[current];

  return (
    <div className="bg-white   transition-all duration-500 ease-in-out rounded-2xl p-10 w-full max-w-2xl mx-auto transition-all duration-500 ease-in-out">
      <div className="text-sm text-gray-500  mb-2">Posted on</div>
      <div className="flex items-center gap-2 mb-4">
        <img src={google} alt="Google" className="w-5 h-5" />
        <span className="text-xl font-semibold text-blue-600">{platform}</span>
      </div>
      <p className="text-gray-800 text-medium mb-6 leading-relaxed">“{review}”</p>
      <div className="flex items-center gap-3">
        <img
          src={avatar}
          alt={name}
          className="w-16 h-16 rounded-full border-2 border-orange-500"
        />
        <span className="font-medium text-xl text-gray-800">{name}</span>
      </div>
    </div>
  );
};

export default TestimonialRotator;
