"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Globe, ArrowRight, Sparkles } from "lucide-react";
import { AppleIcon, GooglePlayIcon } from "@/components/icons/store-icons";
import { ScrollReveal } from "./scroll-reveal";

export function Download() {
  return (
    <section id="download" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Diffusion gradient background */}
      <div className="absolute inset-0 -z-10">
        {/* White diffusion - creates soft, ethereal glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[800px] w-[1000px] rounded-full bg-white/70 blur-[150px]" />
        <div className="absolute top-1/4 left-1/4 h-[400px] w-[400px] rounded-full bg-white/60 blur-[100px] animate-float" style={{ animationDelay: "-5s" }} />
        <div className="absolute top-1/3 right-1/4 h-[350px] w-[350px] rounded-full bg-white/50 blur-[100px] animate-float" style={{ animationDelay: "-10s" }} />
        
        {/* Emerald/teal accents */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[600px] w-[800px] rounded-full bg-gradient-to-t from-emerald-400/15 to-teal-400/8 blur-[80px] animate-pulse-glow" />
        <div className="absolute top-1/2 left-1/3 h-[300px] w-[300px] rounded-full bg-emerald-400/10 blur-[60px]" />
        <div className="absolute top-1/2 right-1/3 h-[300px] w-[300px] rounded-full bg-teal-400/10 blur-[60px]" />
      </div>
      
      {/* Mesh gradient overlay */}
      <div className="absolute inset-0 -z-10 mesh-gradient opacity-50" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-4 py-2 text-sm mb-6">
            <Sparkles className="h-4 w-4 text-emerald-500 animate-pulse" />
            <span className="font-medium bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">Free Download</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-balance">
            Get VideoCallSync today
          </h2>
          <p className="mt-6 text-lg text-muted-foreground text-pretty max-w-xl mx-auto">
            Available on iOS, Android, and web. Download now and start connecting with anyone, anywhere.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={200} className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* App Store Button */}
          <Link
            href="https://apps.apple.com"
            className="group relative inline-flex items-center gap-4 rounded-2xl bg-zinc-900 px-8 py-4 text-white hover:bg-zinc-800 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/20 shadow-xl overflow-hidden ring-1 ring-white/10"
          >
            {/* Shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
            {/* Inner glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
            <AppleIcon className="h-10 w-10 relative" />
            <div className="text-left relative">
              <div className="text-xs text-white/60 font-medium uppercase tracking-wide">Download on the</div>
              <div className="text-xl font-bold -mt-0.5">App Store</div>
            </div>
            <ArrowRight className="h-5 w-5 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all relative" />
          </Link>

          {/* Google Play Button */}
          <Link
            href="https://play.google.com"
            className="group relative inline-flex items-center gap-4 rounded-2xl bg-zinc-900 px-8 py-4 text-white hover:bg-zinc-800 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/20 shadow-xl overflow-hidden ring-1 ring-white/10"
          >
            {/* Shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
            {/* Inner glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
            <GooglePlayIcon className="h-10 w-10 relative" />
            <div className="text-left relative">
              <div className="text-xs text-white/60 font-medium uppercase tracking-wide">Get it on</div>
              <div className="text-xl font-bold -mt-0.5">Google Play</div>
            </div>
            <ArrowRight className="h-5 w-5 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all relative" />
          </Link>
        </ScrollReveal>

        {/* Divider */}
        <ScrollReveal delay={300}>
          <div className="mt-10 flex items-center justify-center gap-4">
            <div className="h-px w-16 bg-border" />
            <span className="text-sm text-muted-foreground">or use instantly</span>
            <div className="h-px w-16 bg-border" />
          </div>

          <div className="mt-6 flex justify-center">
            <Button variant="outline" size="lg" className="h-14 px-8 text-base bg-transparent border-border/60 hover:bg-muted gap-3" asChild>
              <Link href="/call">
                <Globe className="h-5 w-5" />
                Open Web App
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </ScrollReveal>

        {/* Trust badges */}
        <ScrollReveal delay={400} className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <svg className="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span>Secure & Private</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span>Instant Setup</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>100% Free</span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
