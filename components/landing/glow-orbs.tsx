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
    // Mixed palette with white, emerald, and teal
    const colors = [
      "from-white/70 to-white/30",
      "from-emerald-400/25 to-teal-400/15",
      "from-white/60 to-emerald-100/30",
      "from-teal-400/20 to-cyan-400/12",
      "from-white/50 to-teal-100/25",
      "from-emerald-400/22 to-emerald-500/12",
      "from-white/55 to-white/20",
      "from-cyan-400/18 to-teal-400/12",
    ];

    const generated: Orb[] = Array.from({ length: 10 }, (_, i) => ({
      id: i,
      x: 5 + Math.random() * 90,
      y: 5 + Math.random() * 90,
      size: 400 + Math.random() * 600,
      duration: 20 + Math.random() * 15,
      delay: Math.random() * -18,
      color: colors[i % colors.length],
      morph: i % 4 === 0,
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
      
      {/* White diffusion orbs - static, large, soft */}
      <div className="absolute top-0 left-1/3 w-[700px] h-[700px] rounded-full bg-white/50 blur-[150px]" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-white/40 blur-[120px]" />
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] rounded-full bg-white/35 blur-[100px]" />
      
      {/* Rotating gradient rings with white */}
      <div 
        className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full border border-white/20 animate-rotate-slow"
        style={{ animationDuration: "35s" }}
      />
      <div 
        className="absolute top-1/3 right-1/3 w-[500px] h-[500px] rounded-full border border-emerald-400/15 animate-rotate-slow"
        style={{ animationDuration: "30s" }}
      />
      <div 
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full border border-teal-400/15 animate-rotate-slow"
        style={{ animationDuration: "25s", animationDirection: "reverse" }}
      />
    </div>
  );
}
