import React, { useState, useEffect } from "react";
import { Globe } from "lucide-react";

type Attack = {
  id: number;
  startX: number;
  startY: number;
  endX: number;
  endY: number;
};

const CyberAttackVisualization = () => {
  const [attackCount, setAttackCount] = useState(0);
  const [attacks, setAttacks] = useState<Attack[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setAttackCount((prev) => prev + Math.floor(Math.random() * 50 + 50));

      setAttacks((prev) => {
        const newAttack: Attack = {
          id: Date.now(),
          startX: Math.random() * 80 + 10,
          startY: Math.random() * 80 + 10,
          endX: Math.random() * 80 + 10,
          endY: Math.random() * 80 + 10,
        };

        const updatedAttacks = [...prev, newAttack].slice(-5);
        return updatedAttacks;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center">
      {/* Attack Count Display */}
      <div className="mb-4 bg-black/50 px-6 py-2 rounded-full shadow-lg">
        <div className="flex items-center gap-2">
          <Globe className="w-5 h-5 text-[#E2CBFF] animate-pulse" />
          <span className="text-xl font-mono text-white">
            {attackCount.toLocaleString()} ATTACKS TODAY
          </span>
        </div>
      </div>

      {/* Visualization Container */}
      <div className="relative w-full h-96 bg-transparent rounded-lg overflow-hidden shadow-xl">
        {/* Visualization Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(57,59,178,0.1),rgba(17,17,17,0.7))]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(226,203,255,0.05),rgba(57,59,178,0.05))]" />
        </div>

        {/* SVG Visualization */}
        <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full">
          {attacks.map((attack) => (
            <g key={attack.id}>
              <line
                x1={attack.startX}
                y1={attack.startY}
                x2={attack.endX}
                y2={attack.endY}
                stroke="#E2CBFF"
                strokeWidth="0.5"
                className="animate-pulse"
                strokeDasharray="5"
              >
                <animate
                  attributeName="stroke-dashoffset"
                  from="50"
                  to="0"
                  dur="4s"
                  repeatCount="1"
                  fill="freeze"
                />
              </line>

              <circle
                cx={attack.startX}
                cy={attack.startY}
                r="2"
                fill="#E2CBFF"
                className="animate-pulse"
              >
                <animate
                  attributeName="opacity"
                  values="1;0.5;1"
                  dur="2s"
                  repeatCount="indefinite"
                />
              </circle>

              <circle
                cx={attack.endX}
                cy={attack.endY}
                r="2"
                fill="#E2CBFF"
                className="animate-pulse"
              >
                <animate
                  attributeName="opacity"
                  values="1;0.5;1"
                  dur="2s"
                  repeatCount="indefinite"
                />
              </circle>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
};

export default CyberAttackVisualization;
