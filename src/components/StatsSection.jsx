import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import {
  TrendingUp,
  Users,
  MapPin,
  Share2,
} from "lucide-react";

const stats = [
  { Icon: TrendingUp, value: 7100, suffix: "+", label: "Projects Completed" },
  { Icon: Users,      value: 22,   suffix: "+", label: "Experienced Team" },
  { Icon: MapPin,     value: 190,  suffix: "+", label: "Cities Served" },
  { Icon: Share2,     value: 300,  suffix: "+", label: "Professional Network" },
];

const StatsSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-500 py-16 text-white">
      <div
        ref={ref}
        className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8"
      >
        {stats.map(({ Icon, value, suffix, label }, i) => (
          <div
            key={i}
            className="p-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-center
                       transform transition hover:scale-105"
          >
            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-white/20 rounded-full">
              <Icon size={32} className="text-white" />
            </div>
            <div className="text-3xl font-semibold">
              {inView && <CountUp end={value} duration={2} suffix={suffix} />}
            </div>
            <p className="mt-2 text-sm text-white/80">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
