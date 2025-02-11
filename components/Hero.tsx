"use client";

import React, { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { FaPinterestP } from "react-icons/fa";
import CyberAttackVisualization from "./CyberAttack";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const phrases = ["In Dubai & Beyond", "Solutions", "Intelligence Driven"];
  const period = 2000;
  const delta = 200;

  useEffect(() => {
    const ticker = setInterval(() => {
      tick();
    }, delta);

    return () => clearInterval(ticker);
  }, [displayText, isDeleting, loopNum]);

  const tick = () => {
    const i = loopNum % phrases.length;
    const fullText = phrases[i];
    const updatedText = isDeleting
      ? fullText.substring(0, displayText.length - 1)
      : fullText.substring(0, displayText.length + 1);

    setDisplayText(updatedText);

    if (!isDeleting && updatedText === fullText) {
      setTimeout(() => setIsDeleting(true), period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
    }
  };

  return (
    <div className="relative min-h-screen bg-slate-950 text-white overflow-hidden">
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

      <div className="fixed left-8 top-1/2 -translate-y-1/2 flex flex-col gap-6 z-10">
        {[Facebook, Instagram, Twitter, FaPinterestP].map((Icon, index) => (
          <a
            key={index}
            href="#"
            className="text-gray-400 hover:text-[#E2CBFF] transition-colors duration-300"
          >
            <Icon className="w-5 h-5" />
          </a>
        ))}
      </div>

      <div className="container mx-auto px-6 pt-32 flex flex-col lg:flex-row items-center gap-12 relative z-10">
        <div className="lg:w-1/2 ml-10">
          <CyberAttackVisualization />
        </div>

        <div className="lg:w-1/2 space-y-8">
          <div className="mb-5 animate-fadeIn">
            <p className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#E2CBFF] to-[#393BB2]">
              Def- &#10749;&#10748;
            </p>
          </div>

          <div className="space-y-6">
            <div className="relative inline-flex overflow-hidden rounded-full p-[2px]">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-2 text-xl md:text-2xl lg:text-3xl text-white backdrop-blur-3xl whitespace-nowrap">
                Revolutionizing Cybersecurity with
              </span>
            </div>

            <div className="min-h-[8rem]">
              <span className="block text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#E2CBFF] to-[#393BB2] typing-text h-[130px]">
                {displayText}
                <span className="typing-cursor">|</span>
              </span>
            </div>
          </div>

          <p className="text-gray-400 text-lg md:text-xl max-w-2xl animate-fadeIn delay-300">
            Comprehensive, proactive, and tailored cybersecurity solutions for
            businesses of all sizes. Protect your data, reputation, and
            operations today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-8 animate-fadeIn delay-500 pb-12">
            <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full items-center justify-center rounded-full bg-slate-950 px-6 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                Explore Our Services
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full items-center justify-center rounded-full bg-slate-950 px-6 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                Get Your Free Cybersecurity Starter Kit
              </span>
            </button>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .typing-cursor {
          animation: blink 1s step-end infinite;
        }

        @keyframes blink {
          from,
          to {
            opacity: 1;
          }
          50% {
            opacity: 0;
          }
        }

        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .delay-300 {
          animation-delay: 300ms;
        }

        .delay-500 {
          animation-delay: 500ms;
        }
      `}</style>
    </div>
  );
};

export default Hero;
