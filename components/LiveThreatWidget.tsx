"use client";

import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Activity, AlertTriangle, Cloud, Lock } from "lucide-react";

const LiveThreatsWidget = () => {
  const [threats] = useState([
    { type: "Ransomware", location: "UAE", severity: "High", icon: Lock },
    {
      type: "DDoS Attack",
      location: "Saudi Arabia",
      severity: "Medium",
      icon: Cloud,
    },
    {
      type: "Phishing Campaign",
      location: "Qatar",
      severity: "High",
      icon: AlertTriangle,
    },
  ]);

  return (
    <div className="relative z-10 py-16">
      <div className="absolute inset-0 bg-grid-white/10 bg-grid-pattern" />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="relative inline-flex h-full w-full overflow-hidden rounded-xl p-[2px] focus:outline-none">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <Card className="w-full border-0 inline-flex h-full items-center justify-center rounded-xl bg-slate-950 px-4 py-1 text-sm font-medium text-white backdrop-blur-3xl">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <Activity className="w-6 h-6 mr-2 text-[#E2CBFF] animate-pulse" />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#E2CBFF] to-[#393BB2]">
                  Live Cyber Threats
                </span>
              </h2>
              <div className="space-y-4">
                {threats.map((threat, index) => (
                  <div
                    key={index}
                    className="relative inline-flex w-full overflow-hidden rounded-full p-[2px]"
                  >
                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                    <div className="inline-flex h-full w-full items-center justify-center rounded-full bg-slate-950 px-4 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                      <div className="flex items-center">
                        <threat.icon className="w-5 h-5 mr-3 text-[#E2CBFF]" />
                        <div>
                          <p className="text-white font-semibold">
                            {threat.type}
                          </p>
                          <p className="text-gray-400 text-sm">
                            {threat.location}
                          </p>
                        </div>
                      </div>
                      <span
                        className={`px-3 py-1 rounded-full ${
                          threat.severity === "High"
                            ? "bg-red-500/20 text-red-400"
                            : "bg-yellow-500/20 text-yellow-400"
                        } text-sm font-medium`}
                      >
                        {threat.severity}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default LiveThreatsWidget;
