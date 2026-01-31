"use client";

import { Button } from "@/components/ui/button";
import { PhoneOff, RotateCcw } from "lucide-react";

interface CallEndedProps {
  onNewCall: () => void;
}

export function CallEnded({ onNewCall }: CallEndedProps) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4">
      <div className="text-center space-y-6">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-destructive/20">
          <PhoneOff className="h-10 w-10 text-destructive" />
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-foreground">
            Call Ended
          </h2>
          <p className="mt-2 text-muted-foreground">
            The call has been disconnected
          </p>
        </div>
        <Button onClick={onNewCall} className="gap-2">
          <RotateCcw className="h-4 w-4" />
          Start New Call
        </Button>
      </div>
    </div>
  );
}
