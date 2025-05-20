import React, { useState } from "react";
import { User, Briefcase, Users, Check } from "lucide-react";

const plans = [
  {
    name: "Basic",
    Icon: User,
    monthly: 9999,
    yearly: 9999 * 12 * 0.8, // 20% off
    features: ["Kick‐off Call", "Market Analysis", "Membership Model"],
  },
  {
    name: "Pro",
    Icon: Briefcase,
    monthly: 19999,
    yearly: 19999 * 12 * 0.8,
    features: [
      "Everything in Basic",
      "Space Planning",
      "Compliance",
      "Projections",
    ],
    popular: true,
  },
  {
    name: "Advanced",
    Icon: Users,
    monthly: 29999,
    yearly: 29999 * 12 * 0.8,
    features: ["Everything in Pro", "Branding", "Community", "Tech & Support"],
  },
];

export default function PricingSection() {
  const [yearly, setYearly] = useState(false);

  return (
    <section className="py-16 bg-gray-50">
      <h2 className="text-3xl font-medium text- -600 mb-8 text-center">
        Choose Your Plan (Retainership)
      </h2>
      {/* Billing toggle */}
      <div className="flex justify-center items-center mb-12 space-x-4">
        <span className={!yearly ? "font-semibold" : "text-gray-500"}>
          Monthly 
        </span>
        <label className="relative inline-block w-10 h-6">
          <input
            type="checkbox"
            checked={yearly}
            onChange={() => setYearly((v) => !v)}
            className="opacity-0 w-0 h-0"
          />
          <span className="absolute cursor-pointer inset-0 bg-gray-300 rounded-full transition" />
          <span
            className={`absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform ${
              yearly ? "translate-x-4" : ""
            }`}
          />
        </label>
        <span className={yearly ? "font-semibold" : "text-gray-500"}>
          Yearly<span className="text-sm text-green-600"> (20% off)</span>
        </span>
      </div>

      {/* Plan cards */}
      <div className="max-w-6xl mx-auto grid gap-8 px-6 sm:grid-cols-1 md:grid-cols-3">
        {plans.map(({ name, Icon, monthly, yearly: yr, features, popular }) => {
          const price = yearly ? Math.round(yr) : monthly;
          return (
            <div
              key={name}
              className={`relative flex flex-col p-6 rounded-xl shadow-md transition hover:shadow-xl ${
                popular
                  ? "bg-gradient-to-br from-blue-500 to-blue-600 text-white"
                  : "bg-white text-gray-900"
              }`}
            >
              {popular && (
                <div className="absolute top-4 right-4 px-3 py-1 text-xs bg-yellow-400 font-semibold rounded-full">
                  Popular
                </div>
              )}
              <div
                className={`w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-full ${
                  popular ? "bg-white/20" : "bg-blue-50"
                }`}
              >
                <Icon
                  size={28}
                  className={popular ? "text-white" : "text-blue-600"}
                />
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">{name}</h3>
              <p className="text-4xl font-medium text-center mb-6">
                ₹{price.toLocaleString()}
                <span className="text-base font-medium">
                  {yearly ? "/yr" : "/mo"}
                </span>
              </p>
              <ul className="flex-1 space-y-2 mb-6">
                {features.map((f) => (
                  <li key={f} className="flex items-center">
                    <Check
                      size={16}
                      className={`${
                        popular ? "text-white" : "text-green-500"
                      } mr-2`}
                    />
                    <span className={popular ? "text-white" : "text-gray-700"}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>
              <button
                className={`mt-auto py-2 rounded-full font-medium text-sm transition ${
                  popular
                    ? "bg-white text-blue-600 hover:bg-gray-100"
                    : "bg-blue-500 text-white hover:bg-blue-700"
                }`}
              >
                Choose {name}
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
}
