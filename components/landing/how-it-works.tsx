import { Download, Hash, Share2, Video } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Download the App",
    description:
      "Get VideoCallSync from the App Store or Google Play. It's completely free.",
    icon: Download,
  },
  {
    number: "02",
    title: "Generate a Room Code",
    description:
      "Tap the button to create a unique 6-character room code instantly.",
    icon: Hash,
  },
  {
    number: "03",
    title: "Share with Anyone",
    description:
      "Send the code to your friend via text, email, or any messaging app.",
    icon: Share2,
  },
  {
    number: "04",
    title: "Start Talking",
    description:
      "Once they join, you're connected. Crystal clear video, any platform.",
    icon: Video,
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Diffusion gradient background */}
      <div className="absolute inset-0 -z-10">
        {/* White diffusion orbs */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 h-[700px] w-[700px] rounded-full bg-white/70 blur-[120px]" />
        <div className="absolute bottom-0 left-1/4 h-[400px] w-[400px] rounded-full bg-white/50 blur-[100px]" />
        <div className="absolute top-1/3 right-0 h-[500px] w-[500px] rounded-full bg-white/40 blur-[100px]" />
        
        {/* Emerald/teal accents */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-emerald-400/8 blur-[80px]" />
        <div className="absolute bottom-1/4 right-1/4 h-[400px] w-[400px] rounded-full bg-teal-400/8 blur-[80px]" />
        
        {/* Mesh gradient overlay */}
        <div className="absolute inset-0 mesh-gradient opacity-40" />
      </div>
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-widest mb-6">
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-emerald-500" />
            <span className="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">How it Works</span>
            <span className="h-px w-8 bg-gradient-to-r from-emerald-500 to-transparent" />
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-balance">
            Connect in{" "}
            <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">four simple steps</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground text-pretty max-w-xl mx-auto">
            No accounts, no complicated setup. Just download, share a code, and start talking.
          </p>
        </div>

        <div className="mx-auto mt-20 max-w-5xl">
          {/* Desktop layout */}
          <div className="hidden lg:block relative">
            {/* Animated connection line */}
            <div className="absolute top-14 left-[12.5%] right-[12.5%] h-1 rounded-full overflow-hidden bg-border/50">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-500 animate-shimmer" />
            </div>
            
            <div className="grid grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <div
                  key={step.number}
                  className="relative text-center group"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {/* Step circle */}
                  <div className="relative mx-auto mb-8">
                    {/* Glow effect */}
                    <div className="absolute inset-0 rounded-full bg-white/50 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-150" />
                    <div className="absolute inset-0 rounded-full bg-emerald-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-125" />
                    
                    <div className="relative flex h-28 w-28 items-center justify-center rounded-full bg-white/80 backdrop-blur-sm border-2 border-white/60 group-hover:border-emerald-400/50 transition-all duration-500 shadow-xl shadow-emerald-500/10 group-hover:shadow-emerald-500/20 group-hover:bg-white/90">
                      <step.icon className="h-11 w-11 text-muted-foreground group-hover:text-emerald-500 transition-all duration-300 group-hover:scale-110" />
                    </div>
                    {/* Number badge */}
                    <div className="absolute -top-1 -right-1 flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 text-white text-sm font-bold shadow-lg shadow-emerald-500/30 group-hover:scale-110 transition-transform ring-2 ring-white/50">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-emerald-600 transition-colors">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile layout */}
          <div className="lg:hidden space-y-8">
            {steps.map((step, index) => (
              <div key={step.number} className="relative flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="relative">
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-card border-2 border-border shadow-lg">
                      <step.icon className="h-7 w-7 text-muted-foreground" />
                    </div>
                    <div className="absolute -top-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold">
                      {index + 1}
                    </div>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="w-0.5 flex-1 bg-border mt-4" />
                  )}
                </div>
                <div className="pb-8 pt-2">
                  <h3 className="text-lg font-semibold">{step.title}</h3>
                  <p className="mt-1 text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
