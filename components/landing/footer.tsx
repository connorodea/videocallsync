"use client";

import Link from "next/link";
import { Video } from "lucide-react";
import { AppleIcon, AndroidIcon } from "@/components/icons/store-icons";
import { ScrollReveal } from "./scroll-reveal";

const footerLinks = {
  product: [
    { name: "Features", href: "#features" },
    { name: "How it Works", href: "#how-it-works" },
    { name: "Download", href: "#download" },
    { name: "Web App", href: "/call" },
  ],
  company: [
    { name: "About", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Contact", href: "#" },
  ],
  legal: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Cookie Policy", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="relative border-t border-white/20 overflow-hidden">
      {/* Diffusion gradient background */}
      <div className="absolute inset-0 -z-10">
        {/* White diffusion */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[400px] w-[800px] rounded-full bg-white/60 blur-[120px]" />
        <div className="absolute bottom-0 left-1/4 h-[300px] w-[300px] rounded-full bg-white/40 blur-[80px]" />
        <div className="absolute bottom-0 right-1/4 h-[250px] w-[250px] rounded-full bg-white/40 blur-[80px]" />
        
        {/* Subtle color accents */}
        <div className="absolute bottom-0 left-1/3 h-[200px] w-[200px] rounded-full bg-emerald-400/8 blur-[60px]" />
        <div className="absolute bottom-0 right-1/3 h-[200px] w-[200px] rounded-full bg-teal-400/8 blur-[60px]" />
      </div>
      
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
        <ScrollReveal>
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-5">
            {/* Brand */}
            <div className="col-span-2">
              <Link href="/" className="flex items-center gap-3 group">
                <div className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 shadow-lg shadow-emerald-500/25 group-hover:shadow-emerald-500/40 transition-all duration-300 group-hover:scale-105">
                  <Video className="h-5 w-5 text-white" />
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/20 to-transparent" />
                </div>
                <span className="text-xl font-bold tracking-tight">
                  VideoCallSync
                </span>
              </Link>
              <p className="mt-4 text-sm text-muted-foreground max-w-xs leading-relaxed">
                The first cross-platform video calling solution. Connect iPhone
                and Android users seamlessly.
              </p>
              {/* App badges */}
              <div className="mt-6 flex items-center gap-3">
                <Link
                  href="https://apps.apple.com"
                  className="group flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-xs font-medium hover:from-emerald-600 hover:to-teal-600 transition-all shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30"
                >
                  <AppleIcon className="h-4 w-4" />
                  App Store
                </Link>
                <Link
                  href="https://play.google.com"
                  className="group flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-500 text-white text-xs font-medium hover:from-teal-600 hover:to-emerald-600 transition-all shadow-lg shadow-teal-500/20 hover:shadow-teal-500/30"
                >
                  <AndroidIcon className="h-4 w-4" />
                  Google Play
                </Link>
              </div>
            </div>

            {/* Product links */}
            <div>
              <h3 className="text-sm font-semibold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text">Product</h3>
              <ul className="mt-4 space-y-3">
                {footerLinks.product.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-emerald-500 transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company links */}
            <div>
              <h3 className="text-sm font-semibold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text">Company</h3>
              <ul className="mt-4 space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-emerald-500 transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal links */}
            <div>
              <h3 className="text-sm font-semibold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text">Legal</h3>
              <ul className="mt-4 space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-emerald-500 transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </ScrollReveal>

        <div className="mt-12 border-t border-border/50 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} VideoCallSync. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-xs text-muted-foreground">Available on</span>
            <div className="flex items-center gap-3 text-muted-foreground">
              <AppleIcon className="h-5 w-5 hover:text-emerald-500 transition-colors cursor-pointer" />
              <AndroidIcon className="h-5 w-5 hover:text-emerald-500 transition-colors cursor-pointer" />
              <Video className="h-5 w-5 hover:text-emerald-500 transition-colors cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
