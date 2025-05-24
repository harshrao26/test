import React, { useEffect, useState } from "react";
import { User, Briefcase, Users, Check } from "lucide-react";

const allPlans = [
  {
    name: "Service 1",
    Icon: User,
    monthly: 9999,
    yearly: 9999 * 12 * 0.8, // 20% off
    features: ["Kick‐off Call", "Market Analysis", "Membership Model","Kick‐off Call", "Market Analysis", "Membership Model"],
  },
  {
    name: "Service 2",
    Icon: Briefcase,
    monthly: 19999,
    yearly: 19999 * 12 * 0.8,
    features: [
      "Everything in Basic",
      "Space Planning",
      "Compliance",
      "Projections",
      "Kick‐off Call", "Market Analysis", "Membership Model"
    ],
    popular: true,
  },
  {
    name: "Service 3",
    Icon: Users,
    monthly: 29999,
    yearly: 29999 * 12 * 0.8,
    features: ["Everything in Pro", "Branding", "Community", "Tech & Support", "Kick‐off Call", "Market Analysis", "Membership Model"],
  },
  {
    name: "Service 4",
    Icon: User,
    monthly: 9999,
    yearly: 9999 * 12 * 0.8, // 20% off
    features: ["Kick‐off Call", "Market Analysis", "Membership Model", "Kick‐off Call", "Market Analysis", "Membership Model"],
  },
  {
    name: "Service 5",
    Icon: Briefcase,
    monthly: 19999,
    yearly: 19999 * 12 * 0.8,
    features: [
      "Everything in Basic",
      "Space Planning",
      "Compliance",
      "Projections",
      "Kick‐off Call", "Market Analysis", "Membership Model"
    ],
    popular: true,
  },
  {
    name: "Service 6",
    Icon: Users,
    monthly: 29999,
    yearly: 29999 * 12 * 0.8,
    features: ["Everything in Pro", "Branding", "Community", "Tech & Support","Kick‐off Call", "Market Analysis", "Membership Model"],
  },
];
 
export default function PricingSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [yearly, setYearly] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % allPlans.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const getVisiblePlans = () => {
    let plans = [];
    for (let i = -1; i <= 1; i++) {
      plans.push(allPlans[(activeIndex + i + allPlans.length) % allPlans.length]);
    }
    return plans;
  };

  const visiblePlans = getVisiblePlans();

  return (
    <section className="py-16 bg-gray-50">
      <h2 className="text-3xl font-medium text-center text-gray-900 mb-8">
        Choose Your Plan - Retainership
      </h2>

      {/* Toggle and plans */}
      {/* ... keep your billing toggle unchanged ... */}

      <div className="relative max-w-7xl mx-auto flex justify-center items-center gap-6 px-6">
        {visiblePlans.map((plan, i) => {
          const isCenter = i === 1;
          const price = yearly ? Math.round(plan.yearly) : plan.monthly;
          return (
            <div
              key={plan.name}
              className={`transition-  transition-all ease-in-out duration-500 rounded-xl p-6 shadow-md flex flex-col items-center justify-between ${
                isCenter
                  ? "scale-100 z-20 bg-[#27548A] text-white transition-all ease-in-out duration-500"
                  : "scale-90 z-10 bg-gray-50 opacity-50 transition-all ease-in-out duration-500"
              }`}
              style={{ width: "500px", transform: isCenter ? "scale(1)" : "scale(0.9)" }}
            >
              <plan.Icon size={28} className="mb-4 text-[#27548A]" />

              {isCenter ? (
                              <plan.Icon size={50} className="mb-4 text-[#27548A] p-2 bg-white  rounded-full" />

              ): (
                   <plan.Icon size={20} className="text-white" />
               )}
              <h3 className="text-2xl font-medium mb-2">{plan.name}</h3>
              <p className="text-3xl font-semibold mb-4">
                ₹{price.toLocaleString()}
                <span className="text-base font-medium">
                  {yearly ? "/yr" : "/mo"}
                </span>
              </p>
              <ul className="text-sm mb-4 flex flex-col items-start gap-2">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-4 ">
                    <Check size={18} className="text-[#27548A] bg-white mr-2" />
                    {f}
                  </li>
                ))}
              </ul>

              {isCenter ? (
                <button className="bg-white text-[#27548A] px-4 py-2 rounded-full">
                  Choose {plan.name}
                </button>
              ) : (
                <button className="bg-[#27548A] text-white px-4 py-2 rounded-full">
                  Choose {plan.name}
                </button>
              )}

              
              
            </div>
          );
        })}
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-6 gap-2">
        {allPlans.map((_, i) => (
          <span
            key={i}
            className={`w-3 h-3 rounded-full ${
              i === activeIndex ? "bg-[#27548A]" : "bg-gray-300"
            }`}
          ></span>
        ))}
      </div>
    </section>
  );
}