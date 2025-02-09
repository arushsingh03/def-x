"use client";

import React, { useEffect, useState, useRef } from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";

const Carousel = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const partners = [
    { name: "Bright", logo: "/assets/partners/P-7.png" },
    { name: "Brant", logo: "/assets/partners/P-8.png" },
    { name: "Boost", logo: "/assets/partners/P-9.png" },
    { name: "Quaro", logo: "/assets/partners/P-10.png" },
    { name: "Beekeeper", logo: "/assets/partners/P-11.png" },
    { name: "Bro", logo: "/assets/partners/P-12.png" },
  ];

  const triplePartners = [...partners, ...partners, ...partners];

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setScrollPosition((prev) => {
        const newPosition = prev + 0.5;
        if (newPosition >= 100) {
          return 0;
        }
        return newPosition;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [isPaused]);

  const handleManualScroll = (direction: "prev" | "next") => {
    setIsPaused(true);
    if (direction === "next") {
      setScrollPosition((prev) => (prev + 10) % 100);
    } else {
      setScrollPosition((prev) => (prev - 10 + 100) % 100);
    }
    setTimeout(() => setIsPaused(false), 3000);
  };

  return (
    <div className="bg-slate-950 text-white py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/10 bg-grid-pattern">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-transparent" />
        <div className="grid grid-cols-8 gap-4 absolute inset-0 opacity-10">
          {Array(64)
            .fill(null)
            .map((_, i) => (
              <div
                key={i}
                className="aspect-square border border-white/10 backdrop-blur-sm"
              />
            ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mb-32 relative z-10">
        <div className="text-center mb-12">
          <div className="relative inline-flex overflow-hidden rounded-full p-[2px] mb-6">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-2 text-xl font-bold backdrop-blur-3xl">
              Trusted by <span className="text-[#E2CBFF] ml-2">100+ </span> {" "}
              Companies worldwide
            </span>
          </div>
        </div>

        <div
          className="relative overflow-hidden group"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <button
            onClick={() => handleManualScroll("prev")}
            className={`absolute left-0 top-1/2 -translate-y-1/2 bg-slate-950 bg-opacity-50 text-white p-2 rounded-full z-10 hover:bg-opacity-70 transition-all duration-300 ${
              isHovered
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-full"
            }`}
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <button
            onClick={() => handleManualScroll("next")}
            className={`absolute right-0 top-1/2 -translate-y-1/2 bg-slate-950 bg-opacity-50 text-white p-2 rounded-full z-10 hover:bg-opacity-70 transition-all duration-300 ${
              isHovered
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-full"
            }`}
          >
            <ArrowRight className="w-6 h-6" />
          </button>

          <div
            ref={containerRef}
            className="flex gap-16 items-center"
            style={{
              transform: `translateX(-${scrollPosition}%)`,
              transition: "transform 1s linear",
            }}
          >
            {triplePartners.map((partner, index) => (
              <div
                key={index}
                className="flex-shrink-0 opacity-50 hover:opacity-100 transition-all duration-300 transform hover:scale-110"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4">
        <div className="relative text-center space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-[#E2CBFF] to-[#393BB2]">
            Get Started with Cybersecurity
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-300 mb-8">
            Free Resources to Secure Your Digital Future
          </h3>

          <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full items-center justify-center rounded-full bg-slate-950 px-6 py-1 text-sm font-medium text-white backdrop-blur-3xl">
              Download our Free Cybersecurity Starter Kit
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>

          <p className="text-gray-400 italic mt-6">
            Includes top tips for threat detection, security checklists, and
            best practices for UAE businesses
          </p>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
