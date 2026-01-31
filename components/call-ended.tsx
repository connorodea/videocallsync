"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PhoneOff, RotateCcw, Home } from "lucide-react";

interface CallEndedProps {
  onNewCall: () => void;
}

export function CallEnded({ onNewCall }: CallEndedProps) {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center px-4">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-red-500/5 blur-3xl" />
      </div>

      <div className="text-center space-y-8">
        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-red-500/10 ring-2 ring-red-500/20">
          <PhoneOff className="h-12 w-12 text-red-400" />
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-white">Call Ended</h2>
          <p className="mt-2 text-zinc-400">The call has been disconnected</p>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button
            onClick={onNewCall}
            className="gap-2 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white border-0 h-12 px-6"
          >
            <RotateCcw className="h-4 w-4" />
            Start New Call
          </Button>
          <Button
            variant="outline"
            asChild
            className="gap-2 bg-transparent border-white/10 text-white hover:bg-white/5 h-12 px-6"
          >
            <Link href="/">
              <Home className="h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
