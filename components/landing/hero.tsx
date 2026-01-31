import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Smartphone } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-32">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 h-[600px] w-[600px] rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-muted px-4 py-1.5 text-sm">
            <span className="font-medium">New:</span>
            <span className="text-muted-foreground">Cross-platform video calling</span>
            <ArrowRight className="h-3.5 w-3.5 text-muted-foreground" />
          </div>

          {/* Main headline */}
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl text-balance">
            Video calls between{" "}
            <span className="relative">
              iPhone
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                <path d="M2 10C50 2 150 2 198 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="text-accent" />
              </svg>
            </span>{" "}
            and{" "}
            <span className="relative">
              Android
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                <path d="M2 10C50 2 150 2 198 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="text-accent" />
              </svg>
            </span>
          </h1>

          <p className="mt-8 text-lg text-muted-foreground sm:text-xl leading-relaxed max-w-2xl mx-auto text-pretty">
            The first cross-platform video calling solution. Crystal clear quality, instant connection, no barriers between operating systems.
          </p>

          {/* CTA buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="h-12 px-8 text-base" asChild>
              <Link href="#download">
                Download Free
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="h-12 px-8 text-base bg-transparent" asChild>
              <Link href="/call">Try in Browser</Link>
            </Button>
          </div>

          {/* Social proof */}
          <p className="mt-8 text-sm text-muted-foreground">
            Trusted by <span className="font-semibold text-foreground">50,000+</span> users worldwide
          </p>
        </div>

        {/* Phone mockups */}
        <div className="mt-16 flex items-center justify-center gap-4 sm:gap-8">
          {/* iPhone mockup */}
          <div className="relative">
            <div className="w-44 sm:w-56 lg:w-64 aspect-[9/19] rounded-[2.5rem] bg-foreground p-2 shadow-2xl">
              <div className="h-full w-full rounded-[2rem] bg-card overflow-hidden relative">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-foreground rounded-b-xl" />
                {/* Screen content */}
                <div className="h-full w-full bg-gradient-to-br from-accent/20 to-accent/5 flex flex-col items-center justify-center p-4">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-muted flex items-center justify-center mb-3">
                    <Smartphone className="h-8 w-8 sm:h-10 sm:w-10 text-muted-foreground" />
                  </div>
                  <div className="text-xs sm:text-sm font-medium text-center">iPhone User</div>
                  <div className="text-xs text-muted-foreground">Connected</div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 text-xs sm:text-sm font-medium text-muted-foreground">
              iOS
            </div>
          </div>

          {/* Connection indicator */}
          <div className="flex flex-col items-center gap-2">
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <div className="w-8 sm:w-12 h-0.5 bg-accent" />
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            </div>
            <span className="text-xs text-muted-foreground">Live</span>
          </div>

          {/* Android mockup */}
          <div className="relative">
            <div className="w-44 sm:w-56 lg:w-64 aspect-[9/19] rounded-[2rem] bg-foreground p-2 shadow-2xl">
              <div className="h-full w-full rounded-[1.5rem] bg-card overflow-hidden relative">
                {/* Punch hole camera */}
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-3 h-3 bg-foreground rounded-full" />
                {/* Screen content */}
                <div className="h-full w-full bg-gradient-to-br from-accent/20 to-accent/5 flex flex-col items-center justify-center p-4">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-muted flex items-center justify-center mb-3">
                    <Smartphone className="h-8 w-8 sm:h-10 sm:w-10 text-muted-foreground" />
                  </div>
                  <div className="text-xs sm:text-sm font-medium text-center">Android User</div>
                  <div className="text-xs text-muted-foreground">Connected</div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 text-xs sm:text-sm font-medium text-muted-foreground">
              Android
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
