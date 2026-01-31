import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Video, User } from "lucide-react";
import { AppleIcon, AndroidIcon } from "@/components/icons/store-icons";
import { ShaderBackground } from "./shader-background";
import { GlowOrbs } from "./glow-orbs";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-32">
      {/* WebGL Shader Background */}
      <ShaderBackground />
      
      {/* Animated Glow Orbs */}
      <GlowOrbs />
      
      {/* White diffusion layer */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[800px] w-[1200px] rounded-full bg-white/80 blur-[180px]" />
        <div className="absolute top-1/4 left-1/4 h-[500px] w-[500px] rounded-full bg-white/60 blur-[120px]" />
        <div className="absolute top-1/3 right-1/4 h-[400px] w-[400px] rounded-full bg-white/50 blur-[100px]" />
      </div>
      
      {/* Mesh gradient overlay */}
      <div className="absolute inset-0 -z-10 mesh-gradient opacity-70" />
      
      {/* Noise texture for depth */}
      <div className="absolute inset-0 -z-10 noise-overlay pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-emerald-500/20 bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-emerald-500/10 px-5 py-2.5 text-sm animate-border-glow">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
            </span>
            <span className="font-semibold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">First of its kind</span>
            <span className="h-4 w-px bg-emerald-500/30" />
            <span className="text-muted-foreground">Cross-platform calling</span>
          </div>

          {/* Main headline */}
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl text-balance leading-[1.1]">
            Video calls between{" "}
            <span className="relative inline-block group">
              <span className="relative z-10 bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-500 bg-clip-text text-transparent animate-gradient-shift">
                iPhone
              </span>
              <span className="absolute bottom-1 sm:bottom-2 left-0 right-0 h-2 sm:h-3 bg-gradient-to-r from-emerald-500/30 to-teal-500/30 -z-0 rounded-sm group-hover:from-emerald-500/50 group-hover:to-teal-500/50 transition-colors" />
            </span>{" "}
            <span className="text-muted-foreground">&</span>{" "}
            <span className="relative inline-block group">
              <span className="relative z-10 bg-gradient-to-r from-teal-500 via-emerald-500 to-green-500 bg-clip-text text-transparent animate-gradient-shift" style={{ animationDelay: "-4s" }}>
                Android
              </span>
              <span className="absolute bottom-1 sm:bottom-2 left-0 right-0 h-2 sm:h-3 bg-gradient-to-r from-teal-500/30 to-emerald-500/30 -z-0 rounded-sm group-hover:from-teal-500/50 group-hover:to-emerald-500/50 transition-colors" />
            </span>
          </h1>

          <p className="mt-8 text-lg text-muted-foreground sm:text-xl leading-relaxed max-w-2xl mx-auto text-pretty">
            The first cross-platform video calling solution. Crystal clear quality, instant connection, no barriers between operating systems.
          </p>

          {/* CTA buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="group relative h-14 px-8 text-base gap-3 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 shadow-xl shadow-emerald-500/25 border-0 overflow-hidden transition-all duration-300 hover:shadow-emerald-500/40 hover:scale-105" asChild>
              <Link href="#download">
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
                <span className="relative">Download Free</span>
                <ArrowRight className="relative h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="group h-14 px-8 text-base bg-transparent border-2 border-emerald-500/30 hover:border-emerald-500/60 hover:bg-emerald-500/5 transition-all duration-300 hover:scale-105" asChild>
              <Link href="/call">
                <Video className="mr-2 h-4 w-4 group-hover:text-emerald-500 transition-colors" />
                <span className="group-hover:text-emerald-600 transition-colors">Try in Browser</span>
              </Link>
            </Button>
          </div>

          {/* Platform badges */}
          <div className="mt-8 flex items-center justify-center gap-6">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <AppleIcon className="h-5 w-5" />
              <span>iOS</span>
            </div>
            <div className="h-4 w-px bg-border" />
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <AndroidIcon className="h-5 w-5" />
              <span>Android</span>
            </div>
            <div className="h-4 w-px bg-border" />
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Video className="h-5 w-5" />
              <span>Web</span>
            </div>
          </div>
        </div>

        {/* Phone mockups */}
        <div className="mt-20 flex items-end justify-center gap-6 sm:gap-10 lg:gap-16 perspective-1000">
          {/* iPhone mockup */}
          <div className="relative -rotate-6 hover:rotate-0 transition-all duration-700 ease-out hover:scale-105 animate-float-slow" style={{ animationDelay: "0s" }}>
            {/* Glow effect behind phone */}
            <div className="absolute -inset-4 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 blur-2xl rounded-[3rem] opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <div className="relative w-40 sm:w-52 lg:w-60 aspect-[9/19] rounded-[2.5rem] bg-gradient-to-b from-zinc-600 via-zinc-800 to-zinc-900 p-1.5 shadow-2xl shadow-black/50 ring-1 ring-white/20 animate-glow-pulse" style={{ animationDelay: "0s" }}>
              {/* Phone frame highlight */}
              <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none" />
              
              <div className="h-full w-full rounded-[2.2rem] bg-zinc-950 overflow-hidden relative">
                {/* Dynamic Island */}
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-6 bg-black rounded-full shadow-inner flex items-center justify-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-zinc-800" />
                  <div className="w-3 h-3 rounded-full bg-zinc-800" />
                </div>
                {/* Screen content */}
                <div className="h-full w-full bg-gradient-to-br from-emerald-950 via-zinc-900 to-zinc-950 flex flex-col">
                  {/* Call header */}
                  <div className="pt-12 pb-4 text-center">
                    <p className="text-xs text-emerald-400 font-semibold tracking-wider animate-pulse">CONNECTED</p>
                    <p className="text-white/50 text-xs mt-1 font-mono">00:42</p>
                  </div>
                  {/* Remote video simulation */}
                  <div className="flex-1 flex items-center justify-center">
                    <div className="relative w-20 h-20 sm:w-24 sm:h-24">
                      {/* Animated rings */}
                      <div className="absolute inset-0 rounded-full ring-2 ring-emerald-500/20 animate-ping" style={{ animationDuration: "2s" }} />
                      <div className="absolute inset-2 rounded-full ring-2 ring-emerald-500/30 animate-ping" style={{ animationDuration: "2s", animationDelay: "0.5s" }} />
                      <div className="relative w-full h-full rounded-full bg-gradient-to-br from-emerald-500/30 to-teal-600/20 flex items-center justify-center ring-2 ring-emerald-400/40 shadow-lg shadow-emerald-500/20">
                        <User className="h-10 w-10 sm:h-12 sm:w-12 text-emerald-300" />
                      </div>
                    </div>
                  </div>
                  {/* Controls */}
                  <div className="pb-8 flex justify-center gap-3">
                    <div className="w-11 h-11 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center ring-1 ring-white/10">
                      <div className="w-4 h-4 border-2 border-white/60 rounded-sm" />
                    </div>
                    <div className="w-11 h-11 rounded-full bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center shadow-lg shadow-red-500/30">
                      <div className="w-4 h-1.5 bg-white rounded-full rotate-45" />
                    </div>
                    <div className="w-11 h-11 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center ring-1 ring-white/10">
                      <div className="w-5 h-3 border-2 border-white/60 rounded-sm" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Label */}
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-xl border border-white/50 shadow-lg">
              <AppleIcon className="h-4 w-4" />
              <span className="text-sm font-semibold">iPhone</span>
            </div>
          </div>

          {/* Connection indicator */}
          <div className="flex flex-col items-center gap-3 pb-12">
            <div className="relative flex items-center gap-2">
              {/* Left pulse */}
              <div className="relative">
                <div className="absolute inset-0 w-4 h-4 rounded-full bg-emerald-400/50 animate-ping" />
                <div className="relative w-4 h-4 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 shadow-lg shadow-emerald-500/50" />
              </div>
              
              {/* Animated connection line */}
              <div className="relative w-20 sm:w-28 h-1.5 rounded-full overflow-hidden bg-emerald-950/50">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-400 animate-shimmer" />
              </div>
              
              {/* Right pulse */}
              <div className="relative">
                <div className="absolute inset-0 w-4 h-4 rounded-full bg-emerald-400/50 animate-ping" style={{ animationDelay: "0.5s" }} />
                <div className="relative w-4 h-4 rounded-full bg-gradient-to-br from-teal-500 to-emerald-400 shadow-lg shadow-emerald-500/50" />
              </div>
            </div>
            <span className="text-xs font-semibold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent uppercase tracking-widest">
              Live Connection
            </span>
          </div>

          {/* Android mockup */}
          <div className="relative rotate-6 hover:rotate-0 transition-all duration-700 ease-out hover:scale-105 animate-float-slow" style={{ animationDelay: "-3s" }}>
            {/* Glow effect behind phone */}
            <div className="absolute -inset-4 bg-gradient-to-br from-teal-500/20 to-emerald-500/20 blur-2xl rounded-[3rem] opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <div className="relative w-40 sm:w-52 lg:w-60 aspect-[9/19] rounded-[2rem] bg-gradient-to-b from-zinc-600 via-zinc-800 to-zinc-900 p-1.5 shadow-2xl shadow-black/50 ring-1 ring-white/20 animate-glow-pulse" style={{ animationDelay: "-1.5s" }}>
              {/* Phone frame highlight */}
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none" />
              
              <div className="h-full w-full rounded-[1.7rem] bg-zinc-950 overflow-hidden relative">
                {/* Punch hole camera */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-3 h-3 bg-black rounded-full ring-2 ring-zinc-800 shadow-inner" />
                {/* Screen content */}
                <div className="h-full w-full bg-gradient-to-br from-emerald-950 via-zinc-900 to-zinc-950 flex flex-col">
                  {/* Call header */}
                  <div className="pt-10 pb-4 text-center">
                    <p className="text-xs text-emerald-400 font-semibold tracking-wider animate-pulse" style={{ animationDelay: "0.5s" }}>CONNECTED</p>
                    <p className="text-white/50 text-xs mt-1 font-mono">00:42</p>
                  </div>
                  {/* Remote video simulation */}
                  <div className="flex-1 flex items-center justify-center">
                    <div className="relative w-20 h-20 sm:w-24 sm:h-24">
                      {/* Animated rings */}
                      <div className="absolute inset-0 rounded-full ring-2 ring-teal-500/20 animate-ping" style={{ animationDuration: "2s", animationDelay: "0.3s" }} />
                      <div className="absolute inset-2 rounded-full ring-2 ring-teal-500/30 animate-ping" style={{ animationDuration: "2s", animationDelay: "0.8s" }} />
                      <div className="relative w-full h-full rounded-full bg-gradient-to-br from-teal-500/30 to-emerald-600/20 flex items-center justify-center ring-2 ring-teal-400/40 shadow-lg shadow-teal-500/20">
                        <User className="h-10 w-10 sm:h-12 sm:w-12 text-teal-300" />
                      </div>
                    </div>
                  </div>
                  {/* Controls */}
                  <div className="pb-6 flex justify-center gap-3">
                    <div className="w-11 h-11 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center ring-1 ring-white/10">
                      <div className="w-4 h-4 border-2 border-white/60 rounded-sm" />
                    </div>
                    <div className="w-11 h-11 rounded-full bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center shadow-lg shadow-red-500/30">
                      <div className="w-4 h-1.5 bg-white rounded-full rotate-45" />
                    </div>
                    <div className="w-11 h-11 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center ring-1 ring-white/10">
                      <div className="w-5 h-3 border-2 border-white/60 rounded-sm" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Label */}
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-xl border border-white/50 shadow-lg">
              <AndroidIcon className="h-4 w-4" />
              <span className="text-sm font-semibold">Android</span>
            </div>
          </div>
        </div>

        {/* Social proof */}
        <div className="mt-24 text-center">
          <div className="inline-flex flex-col items-center gap-6 px-8 py-6 rounded-3xl bg-white/70 backdrop-blur-xl border border-white/50 shadow-xl shadow-emerald-500/5">
            <p className="text-sm text-muted-foreground font-medium">Trusted by users worldwide</p>
            <div className="flex items-center justify-center gap-1">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="h-6 w-6 text-amber-400 fill-amber-400 drop-shadow-sm"
                  viewBox="0 0 20 20"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <div className="flex items-center gap-6 text-sm">
              <div className="flex flex-col items-center">
                <span className="text-2xl font-bold bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">4.8</span>
                <span className="text-muted-foreground">Rating</span>
              </div>
              <div className="h-8 w-px bg-border" />
              <div className="flex flex-col items-center">
                <span className="text-2xl font-bold bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">50K+</span>
                <span className="text-muted-foreground">Downloads</span>
              </div>
              <div className="h-8 w-px bg-border" />
              <div className="flex flex-col items-center">
                <span className="text-2xl font-bold bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">99.9%</span>
                <span className="text-muted-foreground">Uptime</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
