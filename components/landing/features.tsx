"use client";

import { Smartphone, Zap, Shield, Globe, Users, Sparkles } from "lucide-react";
import { ScrollReveal, StaggerContainer } from "./scroll-reveal";

const features = [
  {
    name: "Cross-Platform",
    description:
      "Connect iPhone and Android users seamlessly. No more platform barriers.",
    icon: Smartphone,
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    name: "Instant Connection",
    description:
      "Share a simple room code and connect in seconds. No accounts required.",
    icon: Zap,
    color: "bg-amber-500/10 text-amber-600",
  },
  {
    name: "End-to-End Encrypted",
    description:
      "Your conversations are private. WebRTC peer-to-peer encryption keeps you safe.",
    icon: Shield,
    color: "bg-emerald-500/10 text-emerald-600",
  },
  {
    name: "Works Everywhere",
    description:
      "Mobile apps, web browser, desktop. Connect from any device you prefer.",
    icon: Globe,
    color: "bg-purple-500/10 text-purple-600",
  },
  {
    name: "1:1 Focused",
    description:
      "Designed for personal conversations. Clean, distraction-free interface.",
    icon: Users,
    color: "bg-rose-500/10 text-rose-600",
  },
  {
    name: "Crystal Clear",
    description:
      "HD video and audio quality. Adaptive bitrate for any connection speed.",
    icon: Sparkles,
    color: "bg-cyan-500/10 text-cyan-600",
  },
];

export function Features() {
  return (
    <section id="features" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Diffusion gradient background */}
      <div className="absolute inset-0 -z-10">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted/20" />
        
        {/* White diffusion orbs */}
        <div className="absolute top-0 left-1/3 h-[600px] w-[600px] rounded-full bg-white/60 blur-[120px] animate-pulse-glow" />
        <div className="absolute top-1/4 right-1/4 h-[500px] w-[500px] rounded-full bg-white/50 blur-[100px] animate-pulse-glow" style={{ animationDelay: "-2s" }} />
        
        {/* Emerald/teal diffusion */}
        <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-emerald-400/10 blur-[80px] animate-pulse-glow" />
        <div className="absolute top-1/2 right-1/4 translate-x-1/2 -translate-y-1/2 h-[400px] w-[400px] rounded-full bg-teal-400/10 blur-[80px] animate-pulse-glow" style={{ animationDelay: "-1.5s" }} />
        
        {/* Mesh overlay */}
        <div className="absolute inset-0 mesh-gradient opacity-60" />
      </div>
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <p className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-wide mb-4">
            <span className="h-px w-6 bg-gradient-to-r from-transparent to-emerald-500" />
            <span className="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">Features</span>
            <span className="h-px w-6 bg-gradient-to-r from-emerald-500 to-transparent" />
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-balance">
            Everything you need for{" "}
            <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">perfect video calls</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground text-pretty max-w-xl mx-auto">
            Built with WebRTC technology for the most reliable and secure video calling experience across all platforms.
          </p>
        </ScrollReveal>

        <div className="mx-auto mt-16 max-w-5xl">
          <StaggerContainer className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <ScrollReveal
                key={feature.name}
                variant="glass"
                delay={index * 100}
                className="group relative p-6 hover:border-emerald-500/40 hover:bg-white/80 hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-500"
              >
                {/* Inner glow */}
                <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-white/80 via-transparent to-emerald-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Subtle top highlight */}
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" />
                
                <div className={`relative inline-flex h-12 w-12 items-center justify-center rounded-xl ${feature.color} transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg ring-1 ring-white/50`}>
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="mt-5 text-lg font-semibold group-hover:text-emerald-600 transition-colors">
                  {feature.name}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </ScrollReveal>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
