import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Globe, ArrowRight, Sparkles } from "lucide-react";
import { AppleIcon, GooglePlayIcon } from "@/components/icons/store-icons";

export function Download() {
  return (
    <section id="download" className="py-24 lg:py-32 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[600px] w-[800px] rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-2 text-sm mb-6">
            <Sparkles className="h-4 w-4 text-accent" />
            <span className="font-medium text-accent">Free Download</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-balance">
            Get VideoCallSync today
          </h2>
          <p className="mt-6 text-lg text-muted-foreground text-pretty max-w-xl mx-auto">
            Available on iOS, Android, and web. Download now and start connecting with anyone, anywhere.
          </p>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* App Store Button */}
          <Link
            href="https://apps.apple.com"
            className="group relative inline-flex items-center gap-4 rounded-2xl bg-primary px-8 py-4 text-primary-foreground hover:bg-primary/90 transition-all hover:scale-105 hover:shadow-xl shadow-lg"
          >
            <AppleIcon className="h-10 w-10" />
            <div className="text-left">
              <div className="text-xs opacity-70 font-medium uppercase tracking-wide">Download on the</div>
              <div className="text-xl font-bold -mt-0.5">App Store</div>
            </div>
            <ArrowRight className="h-5 w-5 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all" />
          </Link>

          {/* Google Play Button */}
          <Link
            href="https://play.google.com"
            className="group relative inline-flex items-center gap-4 rounded-2xl bg-primary px-8 py-4 text-primary-foreground hover:bg-primary/90 transition-all hover:scale-105 hover:shadow-xl shadow-lg"
          >
            <GooglePlayIcon className="h-10 w-10" />
            <div className="text-left">
              <div className="text-xs opacity-70 font-medium uppercase tracking-wide">Get it on</div>
              <div className="text-xl font-bold -mt-0.5">Google Play</div>
            </div>
            <ArrowRight className="h-5 w-5 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all" />
          </Link>
        </div>

        {/* Divider */}
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

        {/* Trust badges */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
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
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>100% Free</span>
          </div>
        </div>
      </div>
    </section>
  );
}
