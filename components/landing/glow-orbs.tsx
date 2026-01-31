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
}

export function GlowOrbs() {
  const [orbs, setOrbs] = useState<Orb[]>([]);

  useEffect(() => {
    const colors = [
      "from-emerald-500/20 to-teal-500/10",
      "from-teal-400/15 to-cyan-500/10",
      "from-emerald-400/20 to-emerald-600/10",
      "from-cyan-400/15 to-teal-400/10",
    ];

    const generated: Orb[] = Array.from({ length: 6 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 300 + Math.random() * 400,
      duration: 20 + Math.random() * 15,
      delay: Math.random() * -20,
      color: colors[i % colors.length],
    }));

    setOrbs(generated);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden -z-10 pointer-events-none">
      {orbs.map((orb) => (
        <div
          key={orb.id}
          className={`absolute rounded-full bg-gradient-to-br ${orb.color} blur-3xl animate-float`}
          style={{
            left: `${orb.x}%`,
            top: `${orb.y}%`,
            width: orb.size,
            height: orb.size,
            transform: "translate(-50%, -50%)",
            animationDuration: `${orb.duration}s`,
            animationDelay: `${orb.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
