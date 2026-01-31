const steps = [
  {
    number: "01",
    title: "Download the App",
    description:
      "Get VideoCallSync from the App Store or Google Play. It's completely free.",
  },
  {
    number: "02",
    title: "Generate a Room Code",
    description:
      "Tap the button to create a unique 6-character room code instantly.",
  },
  {
    number: "03",
    title: "Share with Anyone",
    description:
      "Send the code to your friend via text, email, or any messaging app.",
  },
  {
    number: "04",
    title: "Start Talking",
    description:
      "Once they join, you're connected. Crystal clear video, any platform.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium text-accent uppercase tracking-wide mb-3">
            How it Works
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-balance">
            Connect in four simple steps
          </h2>
          <p className="mt-6 text-lg text-muted-foreground text-pretty">
            No accounts, no complicated setup. Just download, share a code, and
            start talking.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-4xl">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            {steps.map((step, index) => (
              <div key={step.number} className="relative flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-xl font-bold">
                    {step.number}
                  </div>
                  {index < steps.length - 1 && index % 2 === 0 && (
                    <div className="hidden sm:block absolute top-14 left-7 w-0.5 h-[calc(100%+2rem)] bg-border" />
                  )}
                </div>
                <div className="pb-8">
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                  <p className="mt-2 text-muted-foreground leading-relaxed">
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
