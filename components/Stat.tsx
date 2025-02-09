"use client";

import React, { useState, useEffect } from "react";
import { Shield, Users, CheckCircle, Zap } from "lucide-react";

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const stats = [
    { number: "82+", label: "Satisfied Clients", icon: Users },
    { number: "2+", label: "Years of Experience", icon: Shield },
    { number: "25+", label: "Professional Team", icon: CheckCircle },
    { number: "148+", label: "Projects Completed", icon: Zap },
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative bg-slate-950 py-24">
      <div className="absolute inset-0 bg-grid-white/10 bg-grid-pattern" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-950" />

      <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`text-center transform transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
            style={{ transitionDelay: `${index * 200}ms` }}
          >
            <div className="flex justify-center mb-4">
              <div className="relative inline-flex overflow-hidden rounded-full p-[2px]">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full items-center justify-center rounded-full bg-slate-950 px-4 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                  <stat.icon className="w-8 h-8 text-[#E2CBFF]" />
                </span>
              </div>
            </div>
            <h3 className="text-5xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-[#E2CBFF] to-[#393BB2]">
              {stat.number}
            </h3>
            <p className="text-gray-400 font-medium">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsSection;
