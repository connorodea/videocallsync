"use client";

import React from "react"

import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { cn } from "@/lib/utils";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "left" | "right" | "scale" | "glass";
  delay?: number;
  threshold?: number;
}

export function ScrollReveal({
  children,
  className,
  variant = "default",
  delay = 0,
  threshold = 0.1,
}: ScrollRevealProps) {
  const { ref, isInView } = useScrollAnimation({ threshold });

  const variantClasses = {
    default: "scroll-reveal",
    left: "scroll-reveal-left",
    right: "scroll-reveal-right",
    scale: "scroll-reveal-scale",
    glass: "glass-reveal border rounded-2xl",
  };

  return (
    <div
      ref={ref}
      className={cn(variantClasses[variant], isInView && "in-view", className)}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

interface StaggerContainerProps {
  children: React.ReactNode;
  className?: string;
  threshold?: number;
}

export function StaggerContainer({
  children,
  className,
  threshold = 0.1,
}: StaggerContainerProps) {
  const { ref, isInView } = useScrollAnimation({ threshold });

  return (
    <div
      ref={ref}
      className={cn("stagger-children", isInView && "in-view", className)}
    >
      {children}
    </div>
  );
}
