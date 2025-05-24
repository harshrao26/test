import React from "react";

const ClientMarquee = () => {
  const logos = [
    "https://i.pinimg.com/736x/50/a3/30/50a3300a69a61a1af350f03922392c9f.jpg",
    "https://animationvisarts.com/wp-content/uploads/2016/10/tata-logo-design.jpg",
    "https://animationvisarts.com/wp-content/uploads/2016/10/sbi-logo-design.jpg",
    "https://animationvisarts.com/wp-content/uploads/2016/10/hdfc-bank-logo-design.jpg",
    "https://animationvisarts.com/wp-content/uploads/2016/10/airtel-logo-design.jpg",
    "https://animationvisarts.com/wp-content/uploads/2016/10/hindustan-unilever-logo-design.jpg",
    "https://animationvisarts.com/wp-content/uploads/2016/10/Dabur-logo-design.jpg",
    "https://animationvisarts.com/wp-content/uploads/2016/10/dlf-logo-design.jpg",
    "https://animationvisarts.com/wp-content/uploads/2016/10/bank-of-baroda-logo-design.jpg",
    "https://i.pinimg.com/736x/50/a3/30/50a3300a69a61a1af350f03922392c9f.jpg",
    "https://animationvisarts.com/wp-content/uploads/2016/10/tata-logo-design.jpg",
    "https://animationvisarts.com/wp-content/uploads/2016/10/sbi-logo-design.jpg",
    "https://animationvisarts.com/wp-content/uploads/2016/10/hdfc-bank-logo-design.jpg",
    "https://animationvisarts.com/wp-content/uploads/2016/10/airtel-logo-design.jpg",
    "https://animationvisarts.com/wp-content/uploads/2016/10/hindustan-unilever-logo-design.jpg",
    "https://animationvisarts.com/wp-content/uploads/2016/10/Dabur-logo-design.jpg",
    "https://animationvisarts.com/wp-content/uploads/2016/10/dlf-logo-design.jpg",
    "https://animationvisarts.com/wp-content/uploads/2016/10/bank-of-baroda-logo-design.jpg",
    "https://i.pinimg.com/736x/50/a3/30/50a3300a69a61a1af350f03922392c9f.jpg",
    "https://animationvisarts.com/wp-content/uploads/2016/10/tata-logo-design.jpg",
    "https://animationvisarts.com/wp-content/uploads/2016/10/sbi-logo-design.jpg",
    "https://animationvisarts.com/wp-content/uploads/2016/10/hdfc-bank-logo-design.jpg",
    "https://animationvisarts.com/wp-content/uploads/2016/10/airtel-logo-design.jpg",
    "https://animationvisarts.com/wp-content/uploads/2016/10/hindustan-unilever-logo-design.jpg",
    "https://animationvisarts.com/wp-content/uploads/2016/10/Dabur-logo-design.jpg",
    "https://animationvisarts.com/wp-content/uploads/2016/10/dlf-logo-design.jpg",
    "https://animationvisarts.com/wp-content/uploads/2016/10/bank-of-baroda-logo-design.jpg",
    "https://i.pinimg.com/736x/50/a3/30/50a3300a69a61a1af350f03922392c9f.jpg",
    "https://animationvisarts.com/wp-content/uploads/2016/10/tata-logo-design.jpg",
    "https://animationvisarts.com/wp-content/uploads/2016/10/sbi-logo-design.jpg",
    "https://animationvisarts.com/wp-content/uploads/2016/10/hdfc-bank-logo-design.jpg",
    "https://animationvisarts.com/wp-content/uploads/2016/10/airtel-logo-design.jpg",
    "https://animationvisarts.com/wp-content/uploads/2016/10/hindustan-unilever-logo-design.jpg",
    "https://animationvisarts.com/wp-content/uploads/2016/10/Dabur-logo-design.jpg",
    "https://animationvisarts.com/wp-content/uploads/2016/10/dlf-logo-design.jpg",
    "https://animationvisarts.com/wp-content/uploads/2016/10/bank-of-baroda-logo-design.jpg",
  ];

  return (
    <div className="bg-[#F3F3E0]">
      <div className=" py-20 overflow-hidden max-w-7xl mx-auto">
      <h2 className="text-4xl font-semibold  text-blue-00 mb-10 text-center  ">
        <span className="text-[#183B4E]  pb-2">        The People Behind Our Success
</span>
      </h2>

      {/* Marquee Row 1 */}
      <div className="overflow-hidden whitespace-nowrap mb-6">
        <div className="inline-block animate-marquee">
          {[...logos, ...logos].map((logo, index) => (
            <img
              key={`top-${index}`}
              src={` ${logo}`}
              alt="client"
              className="h-32 mx-6 inline   transition"
            />
          ))}
        </div>
      </div>

      {/* Marquee Row 2 (reverse direction) */}
      <div className="overflow-hidden whitespace-nowrap mb-6">
        <div className="inline-block animate-marquee-reverse ">
          {[...logos, ...logos].map((logo, index) => (
            <img
              key={`top-${index}`}
              src={` ${logo}`}
              alt="client"
              className="h-32 mx-6 inline   transition"
            />
          ))}
        </div>
      </div>
      {/* Marquee Row 1 */}
      <div className="overflow-hidden whitespace-nowrap mb-6">
        <div className="inline-block animate-marquee">
          {[...logos, ...logos].map((logo, index) => (
            <img
              key={`top-${index}`}
              src={` ${logo}`}
              alt="client"
              className="h-32 mx-6 inline   transition"
            />
          ))}
        </div>
      </div>

      {/* Marquee Row 2 (reverse direction) */}
      <div className="overflow-hidden whitespace-nowrap mb-6">
        <div className="inline-block animate-marquee-reverse ">
          {[...logos, ...logos].map((logo, index) => (
            <img
              key={`top-${index}`}
              src={` ${logo}`}
              alt="client"
              className="h-32 mx-6 inline   transition"
            />
          ))}
        </div>
      </div>
      

      {/* Inline CSS for animation */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }
        .animate-marquee {
          animation: marquee 90s linear infinite;
        }
        .animate-marquee-reverse {
          animation: marquee-reverse 90s linear infinite;
        }
      `}</style>
    </div>
    </div>
  );
};

export default ClientMarquee;
