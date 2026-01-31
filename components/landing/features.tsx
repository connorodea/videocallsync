import { Smartphone, Zap, Shield, Globe, Users, Sparkles } from "lucide-react";

const features = [
  {
    name: "Cross-Platform",
    description:
      "Connect iPhone and Android users seamlessly. No more platform barriers.",
    icon: Smartphone,
  },
  {
    name: "Instant Connection",
    description:
      "Share a simple room code and connect in seconds. No accounts required.",
    icon: Zap,
  },
  {
    name: "End-to-End Encrypted",
    description:
      "Your conversations are private. WebRTC peer-to-peer encryption keeps you safe.",
    icon: Shield,
  },
  {
    name: "Works Everywhere",
    description:
      "Mobile apps, web browser, desktop. Connect from any device you prefer.",
    icon: Globe,
  },
  {
    name: "1:1 Focused",
    description:
      "Designed for personal conversations. Clean, distraction-free interface.",
    icon: Users,
  },
  {
    name: "Crystal Clear",
    description:
      "HD video and audio quality. Adaptive bitrate for any connection speed.",
    icon: Sparkles,
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 lg:py-32 bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium text-accent uppercase tracking-wide mb-3">
            Features
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-balance">
            Everything you need for perfect video calls
          </h2>
          <p className="mt-6 text-lg text-muted-foreground text-pretty">
            Built with WebRTC technology for the most reliable and secure video
            calling experience across all platforms.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-5xl">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.name}
                className="group relative rounded-2xl border border-border bg-card p-6 hover:border-foreground/20 transition-colors"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-muted group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <feature.icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="mt-4 text-lg font-semibold">{feature.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
