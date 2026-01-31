import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Video, User } from "lucide-react";
import { AppleIcon, AndroidIcon } from "@/components/icons/store-icons";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-32">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[800px] w-[1200px] rounded-full bg-gradient-to-b from-accent/8 to-transparent blur-3xl" />
        <div className="absolute top-1/3 left-0 h-[400px] w-[400px] rounded-full bg-accent/5 blur-3xl" />
        <div className="absolute top-1/3 right-0 h-[400px] w-[400px] rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-2 text-sm">
            <span className="flex h-2 w-2 rounded-full bg-accent animate-pulse" />
            <span className="font-medium text-accent">First of its kind</span>
            <span className="text-muted-foreground">Cross-platform calling</span>
          </div>

          {/* Main headline */}
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl text-balance leading-[1.1]">
            Video calls between{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-foreground">iPhone</span>
              <span className="absolute bottom-2 left-0 right-0 h-3 bg-accent/20 -z-0 rounded-sm" />
            </span>{" "}
            <span className="text-muted-foreground">&</span>{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-foreground">Android</span>
              <span className="absolute bottom-2 left-0 right-0 h-3 bg-accent/20 -z-0 rounded-sm" />
            </span>
          </h1>

          <p className="mt-8 text-lg text-muted-foreground sm:text-xl leading-relaxed max-w-2xl mx-auto text-pretty">
            The first cross-platform video calling solution. Crystal clear quality, instant connection, no barriers between operating systems.
          </p>

          {/* CTA buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="h-14 px-8 text-base gap-3 shadow-lg shadow-primary/20" asChild>
              <Link href="#download">
                Download Free
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-8 text-base bg-transparent border-border/60 hover:bg-muted" asChild>
              <Link href="/call">
                <Video className="mr-2 h-4 w-4" />
                Try in Browser
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
        <div className="mt-20 flex items-end justify-center gap-6 sm:gap-10 lg:gap-16">
          {/* iPhone mockup */}
          <div className="relative -rotate-6 hover:rotate-0 transition-transform duration-500">
            <div className="w-40 sm:w-52 lg:w-60 aspect-[9/19] rounded-[2.5rem] bg-gradient-to-b from-zinc-700 to-zinc-900 p-1.5 shadow-2xl shadow-black/30 ring-1 ring-white/10">
              <div className="h-full w-full rounded-[2.2rem] bg-zinc-900 overflow-hidden relative">
                {/* Dynamic Island */}
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-6 bg-black rounded-full" />
                {/* Screen content */}
                <div className="h-full w-full bg-gradient-to-br from-emerald-950 to-zinc-900 flex flex-col">
                  {/* Call header */}
                  <div className="pt-12 pb-4 text-center">
                    <p className="text-xs text-emerald-400/80 font-medium tracking-wide">CONNECTED</p>
                    <p className="text-white/60 text-xs mt-1">00:42</p>
                  </div>
                  {/* Remote video simulation */}
                  <div className="flex-1 flex items-center justify-center">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-emerald-500/20 to-emerald-600/10 flex items-center justify-center ring-2 ring-emerald-500/30">
                      <User className="h-10 w-10 sm:h-12 sm:w-12 text-emerald-400/60" />
                    </div>
                  </div>
                  {/* Controls */}
                  <div className="pb-8 flex justify-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur" />
                    <div className="w-10 h-10 rounded-full bg-red-500" />
                    <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur" />
                  </div>
                </div>
              </div>
            </div>
            {/* Label */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted border border-border">
              <AppleIcon className="h-4 w-4" />
              <span className="text-sm font-medium">iPhone</span>
            </div>
          </div>

          {/* Connection indicator */}
          <div className="flex flex-col items-center gap-3 pb-12">
            <div className="relative flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-accent shadow-lg shadow-accent/50 animate-pulse" />
              <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-accent via-accent/50 to-accent rounded-full" />
              <div className="w-3 h-3 rounded-full bg-accent shadow-lg shadow-accent/50 animate-pulse" />
            </div>
            <span className="text-xs font-medium text-accent uppercase tracking-wider">Live Connection</span>
          </div>

          {/* Android mockup */}
          <div className="relative rotate-6 hover:rotate-0 transition-transform duration-500">
            <div className="w-40 sm:w-52 lg:w-60 aspect-[9/19] rounded-[2rem] bg-gradient-to-b from-zinc-700 to-zinc-900 p-1.5 shadow-2xl shadow-black/30 ring-1 ring-white/10">
              <div className="h-full w-full rounded-[1.7rem] bg-zinc-900 overflow-hidden relative">
                {/* Punch hole camera */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-3 h-3 bg-black rounded-full ring-1 ring-zinc-800" />
                {/* Screen content */}
                <div className="h-full w-full bg-gradient-to-br from-emerald-950 to-zinc-900 flex flex-col">
                  {/* Call header */}
                  <div className="pt-10 pb-4 text-center">
                    <p className="text-xs text-emerald-400/80 font-medium tracking-wide">CONNECTED</p>
                    <p className="text-white/60 text-xs mt-1">00:42</p>
                  </div>
                  {/* Remote video simulation */}
                  <div className="flex-1 flex items-center justify-center">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-emerald-500/20 to-emerald-600/10 flex items-center justify-center ring-2 ring-emerald-500/30">
                      <User className="h-10 w-10 sm:h-12 sm:w-12 text-emerald-400/60" />
                    </div>
                  </div>
                  {/* Controls */}
                  <div className="pb-6 flex justify-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur" />
                    <div className="w-10 h-10 rounded-full bg-red-500" />
                    <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur" />
                  </div>
                </div>
              </div>
            </div>
            {/* Label */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted border border-border">
              <AndroidIcon className="h-4 w-4" />
              <span className="text-sm font-medium">Android</span>
            </div>
          </div>
        </div>

        {/* Social proof */}
        <div className="mt-20 text-center">
          <p className="text-sm text-muted-foreground mb-4">Trusted by users worldwide</p>
          <div className="flex items-center justify-center gap-1">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="h-5 w-5 text-amber-400 fill-amber-400" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span className="ml-2 text-sm font-medium">4.8 rating</span>
            <span className="mx-2 text-muted-foreground">|</span>
            <span className="text-sm text-muted-foreground">50,000+ downloads</span>
          </div>
        </div>
      </div>
    </section>
  );
}
