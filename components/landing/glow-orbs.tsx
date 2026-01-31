"use client";

import { useEffect, useState } from "react";

interface Orb {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  color: string;
  morph: boolean;
}

export function GlowOrbs() {
  const [orbs, setOrbs] = useState<Orb[]>([]);

  useEffect(() => {
    const colors = [
      "from-emerald-500/25 to-teal-500/15",
      "from-teal-400/20 to-cyan-500/12",
      "from-emerald-400/22 to-emerald-600/12",
      "from-cyan-400/18 to-teal-400/12",
      "from-green-500/20 to-emerald-400/10",
      "from-teal-500/22 to-emerald-500/15",
    ];

    const generated: Orb[] = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      x: 10 + Math.random() * 80,
      y: 10 + Math.random() * 80,
      size: 350 + Math.random() * 500,
      duration: 18 + Math.random() * 12,
      delay: Math.random() * -15,
      color: colors[i % colors.length],
      morph: i % 3 === 0,
    }));

    setOrbs(generated);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden -z-10 pointer-events-none">
      {orbs.map((orb) => (
        <div
          key={orb.id}
          className={`absolute bg-gradient-to-br ${orb.color} blur-3xl animate-float ${orb.morph ? "animate-morph" : "rounded-full"}`}
          style={{
            left: `${orb.x}%`,
            top: `${orb.y}%`,
            width: orb.size,
            height: orb.size,
            transform: "translate(-50%, -50%)",
            animationDuration: `${orb.duration}s`,
            animationDelay: `${orb.delay}s`,
            borderRadius: orb.morph ? undefined : "50%",
          }}
        />
      ))}
      
      {/* Additional rotating gradient rings */}
      <div 
        className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full border border-emerald-500/10 animate-rotate-slow"
        style={{ animationDuration: "30s" }}
      />
      <div 
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full border border-teal-500/10 animate-rotate-slow"
        style={{ animationDuration: "25s", animationDirection: "reverse" }}
      />
    </div>
  );
}
