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
    <section id="how-it-works" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="inline-flex items-center gap-2 text-sm font-medium text-accent uppercase tracking-wide mb-4">
            <span className="h-px w-6 bg-accent" />
            How it Works
            <span className="h-px w-6 bg-accent" />
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-balance">
            Connect in four simple steps
          </h2>
          <p className="mt-6 text-lg text-muted-foreground text-pretty max-w-xl mx-auto">
            No accounts, no complicated setup. Just download, share a code, and start talking.
          </p>
        </div>

        <div className="mx-auto mt-20 max-w-5xl">
          {/* Desktop layout */}
          <div className="hidden lg:block relative">
            {/* Connection line */}
            <div className="absolute top-12 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-border via-accent/30 to-border" />
            
            <div className="grid grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <div key={step.number} className="relative text-center group">
                  {/* Step circle */}
                  <div className="relative mx-auto mb-6">
                    <div className="flex h-24 w-24 items-center justify-center rounded-full bg-card border-2 border-border group-hover:border-accent transition-colors shadow-lg">
                      <step.icon className="h-10 w-10 text-muted-foreground group-hover:text-accent transition-colors" />
                    </div>
                    {/* Number badge */}
                    <div className="absolute -top-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold shadow-md">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
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
