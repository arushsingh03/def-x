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

      <div className="max-w-3xl mx-auto px-4 relative z-10">
        <div className="relative rounded-xl bg-gradient-to-r from-[#E2CBFF] to-[#393BB2] p-[2px]">
          <Card className="w-full border-0 rounded-xl bg-slate-950 text-white backdrop-blur-3xl">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <Activity className="w-6 h-6 mr-2 text-[#E2CBFF] animate-pulse" />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#E2CBFF] to-[#393BB2]">
                  Live Cyber Threats
                </span>
              </h2>

              <div className="space-y-4">
                {threats.map((threat, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between rounded-lg bg-slate-800 p-4 shadow-md"
                  >
                    <div className="flex items-center">
                      <threat.icon className="w-6 h-6 mr-4 text-[#E2CBFF]" />
                      <div>
                        <p className="text-lg font-semibold text-white">
                          {threat.type}
                        </p>
                        <p className="text-sm text-gray-400">
                          {threat.location}
                        </p>
                      </div>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        threat.severity === "High"
                          ? "bg-red-500/20 text-red-400"
                          : "bg-yellow-500/20 text-yellow-400"
                      }`}
                    >
                      {threat.severity}
                    </span>
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
