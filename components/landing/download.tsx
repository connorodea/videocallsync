import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Download() {
  return (
    <section id="download" className="py-24 lg:py-32 bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium text-accent uppercase tracking-wide mb-3">
            Download
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-balance">
            Get VideoCallSync today
          </h2>
          <p className="mt-6 text-lg text-muted-foreground text-pretty">
            Available on iOS, Android, and web. Download now and start
            connecting with anyone, anywhere.
          </p>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* App Store Button */}
          <Link
            href="https://apps.apple.com"
            className="inline-flex items-center gap-3 rounded-xl bg-primary px-6 py-3 text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            <div className="text-left">
              <div className="text-xs opacity-80">Download on the</div>
              <div className="text-lg font-semibold -mt-1">App Store</div>
            </div>
          </Link>

          {/* Google Play Button */}
          <Link
            href="https://play.google.com"
            className="inline-flex items-center gap-3 rounded-xl bg-primary px-6 py-3 text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 20.5v-17c0-.59.34-1.11.84-1.35L13.69 12l-9.85 9.85c-.5-.24-.84-.76-.84-1.35m13.81-5.38L6.05 21.34l8.49-8.49 2.27 2.27m3.35-4.31c.34.27.59.69.59 1.19s-.22.9-.57 1.18l-2.29 1.32-2.5-2.5 2.5-2.5 2.27 1.31M6.05 2.66l10.76 6.22-2.27 2.27L6.05 2.66z" />
            </svg>
            <div className="text-left">
              <div className="text-xs opacity-80">Get it on</div>
              <div className="text-lg font-semibold -mt-1">Google Play</div>
            </div>
          </Link>
        </div>

        <div className="mt-8 text-center">
          <span className="text-muted-foreground">or</span>
        </div>

        <div className="mt-4 flex justify-center">
          <Button variant="outline" size="lg" className="h-12 px-8 bg-transparent" asChild>
            <Link href="/call">Use Web Version</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
