const stats = [
  { value: "50K+", label: "Active Users" },
  { value: "1M+", label: "Calls Made" },
  { value: "99.9%", label: "Uptime" },
  { value: "4.8", label: "App Store Rating" },
];

export function Stats() {
  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl font-bold tracking-tight lg:text-5xl">
                {stat.value}
              </div>
              <div className="mt-2 text-sm text-primary-foreground/70">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
