"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Mic,
  MicOff,
  Video,
  VideoOff,
  PhoneOff,
} from "lucide-react";

interface CallControlsProps {
  isMuted: boolean;
  isCameraOff: boolean;
  onToggleMute: () => void;
  onToggleCamera: () => void;
  onHangUp: () => void;
  className?: string;
}

export function CallControls({
  isMuted,
  isCameraOff,
  onToggleMute,
  onToggleCamera,
  onHangUp,
  className,
}: CallControlsProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-center gap-4 rounded-2xl bg-card/90 px-6 py-4 backdrop-blur-md",
        className
      )}
    >
      <Button
        variant="secondary"
        size="lg"
        className={cn(
          "h-14 w-14 rounded-full transition-all",
          isMuted && "bg-destructive text-destructive-foreground hover:bg-destructive/90"
        )}
        onClick={onToggleMute}
      >
        {isMuted ? <MicOff className="h-6 w-6" /> : <Mic className="h-6 w-6" />}
        <span className="sr-only">{isMuted ? "Unmute" : "Mute"}</span>
      </Button>

      <Button
        variant="secondary"
        size="lg"
        className={cn(
          "h-14 w-14 rounded-full transition-all",
          isCameraOff && "bg-destructive text-destructive-foreground hover:bg-destructive/90"
        )}
        onClick={onToggleCamera}
      >
        {isCameraOff ? (
          <VideoOff className="h-6 w-6" />
        ) : (
          <Video className="h-6 w-6" />
        )}
        <span className="sr-only">{isCameraOff ? "Turn camera on" : "Turn camera off"}</span>
      </Button>

      <Button
        variant="destructive"
        size="lg"
        className="h-14 w-14 rounded-full"
        onClick={onHangUp}
      >
        <PhoneOff className="h-6 w-6" />
        <span className="sr-only">End call</span>
      </Button>
    </div>
  );
}
