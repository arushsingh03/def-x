"use client";

import React, { useEffect, useState } from "react";
import {
  Shield,
  Lock,
  AlertTriangle,
  Activity,
  Globe,
  Server,
  Database,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import FAQSection from "./FAQSection";
import Footer from "./Footer";
import StatsSection from "./Stat";
import Navbar from "./Navbar";
import LiveThreatsWidget from "./LiveThreatWidget";

const CybersecurityWebsite = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [threatCount, setThreatCount] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setThreatCount((prev) => (prev + 1) % 1000);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />

      <div className="relative z-10 w-full min-h-screen flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-grid-white/10 bg-grid-pattern" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent" />

        <div className="max-w-6xl mx-auto px-4">
          <div
            className={`transition-all duration-1000 transform ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <h1 className="text-6xl font-bold mb-6 leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#E2CBFF] to-[#393BB2]">
                Cyber Threats Are Evolving.
              </span>
              <br />
              <span className="text-white text-5xl">Are You Prepared?</span>
            </h1>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl">
              Secure your digital future with next-generation cybersecurity
              solutions powered by AI and advanced threat intelligence.
            </p>

            <div className="mb-12">
              <div className="relative inline-flex overflow-hidden rounded-full p-[2px] focus:outline-none">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full items-center justify-center rounded-full bg-slate-950 px-4 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                  <Activity className="w-6 h-6 text-[#E2CBFF] animate-pulse mr-2" />
                  <span className="text-[#E2CBFF] font-mono">
                    Threats blocked today:{" "}
                    {threatCount.toString().padStart(3, "0")}
                  </span>
                </span>
              </div>
            </div>

            <div className="flex space-x-4 mb-12">
              {["Get Protected Now", "Watch Demo"].map((text, index) => (
                <button
                  key={index}
                  className="relative inline-flex h-12 overflow-hidden rounded-full p-[2px] focus:outline-none"
                >
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                  <span className="inline-flex h-full w-full items-center justify-center rounded-full bg-slate-950 px-4 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                    {text}
                  </span>
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              {[
                { icon: Globe, title: "Global Threat Intelligence" },
                { icon: Server, title: "Zero-Trust Architecture" },
                { icon: Database, title: "Advanced Data Protection" },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="relative inline-flex h-full overflow-hidden rounded-xl p-[2px] focus:outline-none"
                >
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                  <Card className="w-full border-0 inline-flex h-full items-center justify-center rounded-xl bg-slate-950 px-4 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                    <CardContent className="p-6">
                      <feature.icon className="w-12 h-12 mb-4 text-[#E2CBFF]" />
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-400">
                        Protecting your assets with advanced security measures
                        and real-time monitoring.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <LiveThreatsWidget />
      <StatsSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default CybersecurityWebsite;
