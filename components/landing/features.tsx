import { Smartphone, Zap, Shield, Globe, Users, Sparkles } from "lucide-react";

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
    <section id="features" className="relative py-24 lg:py-32 bg-gradient-to-b from-background to-muted/30 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-emerald-500/5 blur-3xl animate-pulse-glow" />
        <div className="absolute top-1/2 right-1/4 translate-x-1/2 -translate-y-1/2 h-[400px] w-[400px] rounded-full bg-teal-500/5 blur-3xl animate-pulse-glow" style={{ animationDelay: "-1.5s" }} />
      </div>
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
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
        </div>

        <div className="mx-auto mt-16 max-w-5xl">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={feature.name}
                className="group relative rounded-2xl border border-border/50 bg-card/80 backdrop-blur-sm p-6 hover:border-emerald-500/30 hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-500"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Hover glow effect */}
                <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-emerald-500/0 to-teal-500/0 group-hover:from-emerald-500/5 group-hover:to-teal-500/5 transition-all duration-500" />
                
                <div className={`relative inline-flex h-12 w-12 items-center justify-center rounded-xl ${feature.color} transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg`}>
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="mt-5 text-lg font-semibold group-hover:text-emerald-600 transition-colors">
                  {feature.name}
                </h3>
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
