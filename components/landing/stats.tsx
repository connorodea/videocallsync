import { Users, Phone, Clock, Star } from "lucide-react";

const stats = [
  { value: "50K+", label: "Active Users", icon: Users },
  { value: "1M+", label: "Calls Made", icon: Phone },
  { value: "99.9%", label: "Uptime", icon: Clock },
  { value: "4.8", label: "App Rating", icon: Star },
];

export function Stats() {
  return (
    <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center group">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-foreground/10 mb-4 group-hover:scale-110 transition-transform">
                <stat.icon className="h-7 w-7" aria-hidden="true" />
              </div>
              <div className="text-4xl font-bold tracking-tight lg:text-5xl">
                {stat.value}
              </div>
              <div className="mt-2 text-sm text-primary-foreground/70 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
