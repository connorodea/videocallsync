import { Users, Phone, Clock, Star } from "lucide-react";

const stats = [
  { value: "50K+", label: "Active Users", icon: Users },
  { value: "1M+", label: "Calls Made", icon: Phone },
  { value: "99.9%", label: "Uptime", icon: Clock },
  { value: "4.8", label: "App Rating", icon: Star },
];

export function Stats() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Dark gradient base */}
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-emerald-950/90 to-zinc-900" />
      
      {/* Animated diffusion background */}
      <div className="absolute inset-0 -z-10">
        {/* White diffusion glow - creates the ethereal effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[800px] rounded-full bg-white/[0.07] blur-[100px] animate-pulse-glow" />
        <div className="absolute top-0 left-1/4 h-[400px] w-[400px] rounded-full bg-white/[0.05] blur-[80px] animate-pulse-glow" style={{ animationDelay: "-1s" }} />
        <div className="absolute bottom-0 right-1/4 h-[350px] w-[350px] rounded-full bg-white/[0.05] blur-[80px] animate-pulse-glow" style={{ animationDelay: "-2s" }} />
        
        {/* Emerald/teal accents */}
        <div className="absolute top-0 left-1/4 h-[300px] w-[300px] rounded-full bg-emerald-400/15 blur-[60px] animate-pulse-glow" />
        <div className="absolute bottom-0 right-1/4 h-[250px] w-[250px] rounded-full bg-teal-400/15 blur-[60px] animate-pulse-glow" style={{ animationDelay: "-1.5s" }} />
        
        {/* Grid pattern with enhanced visibility */}
        <div className="absolute inset-0 opacity-[0.07]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.5'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={stat.label} className="text-center group">
              <div 
                className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm mb-4 group-hover:scale-110 group-hover:bg-white/15 transition-all duration-300 ring-1 ring-white/20 shadow-lg shadow-emerald-500/10"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <stat.icon className="h-7 w-7 text-white" aria-hidden="true" />
              </div>
              <div className="text-4xl font-bold tracking-tight lg:text-5xl text-white">
                {stat.value}
              </div>
              <div className="mt-2 text-sm text-white/60 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
