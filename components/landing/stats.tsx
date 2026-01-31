import { Users, Phone, Clock, Star } from "lucide-react";

const stats = [
  { value: "50K+", label: "Active Users", icon: Users },
  { value: "1M+", label: "Calls Made", icon: Phone },
  { value: "99.9%", label: "Uptime", icon: Clock },
  { value: "4.8", label: "App Rating", icon: Star },
];

export function Stats() {
  return (
    <section className="py-20 bg-gradient-to-r from-zinc-900 via-emerald-950 to-zinc-900 text-white relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 -z-10">
        {/* Mesh gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/30 via-transparent to-teal-900/30" />
        
        {/* Animated orbs */}
        <div className="absolute top-0 left-1/4 h-[300px] w-[300px] rounded-full bg-emerald-500/10 blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-0 right-1/4 h-[250px] w-[250px] rounded-full bg-teal-500/10 blur-3xl animate-pulse-glow" style={{ animationDelay: "-1.5s" }} />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%2310b981' fillOpacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={stat.label} className="text-center group">
              <div 
                className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500/20 to-teal-500/10 mb-4 group-hover:scale-110 group-hover:from-emerald-500/30 group-hover:to-teal-500/20 transition-all duration-300 ring-1 ring-emerald-500/20"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <stat.icon className="h-7 w-7 text-emerald-400" aria-hidden="true" />
              </div>
              <div className="text-4xl font-bold tracking-tight lg:text-5xl bg-gradient-to-r from-white to-emerald-200 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="mt-2 text-sm text-emerald-300/70 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
