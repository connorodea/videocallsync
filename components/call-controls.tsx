"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Mic, MicOff, Video, VideoOff, PhoneOff } from "lucide-react";

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
        "flex items-center justify-center gap-3 rounded-2xl bg-black/40 backdrop-blur-xl px-5 py-4 border border-white/10",
        className
      )}
    >
      <Button
        size="lg"
        className={cn(
          "h-14 w-14 rounded-full transition-all border-0",
          isMuted
            ? "bg-red-500 text-white hover:bg-red-600"
            : "bg-white/10 text-white hover:bg-white/20"
        )}
        onClick={onToggleMute}
      >
        {isMuted ? <MicOff className="h-6 w-6" /> : <Mic className="h-6 w-6" />}
        <span className="sr-only">{isMuted ? "Unmute" : "Mute"}</span>
      </Button>

      <Button
        size="lg"
        className={cn(
          "h-14 w-14 rounded-full transition-all border-0",
          isCameraOff
            ? "bg-red-500 text-white hover:bg-red-600"
            : "bg-white/10 text-white hover:bg-white/20"
        )}
        onClick={onToggleCamera}
      >
        {isCameraOff ? (
          <VideoOff className="h-6 w-6" />
        ) : (
          <Video className="h-6 w-6" />
        )}
        <span className="sr-only">
          {isCameraOff ? "Turn camera on" : "Turn camera off"}
        </span>
      </Button>

      <Button
        size="lg"
        className="h-14 w-14 rounded-full bg-red-500 hover:bg-red-600 text-white border-0 ml-2"
        onClick={onHangUp}
      >
        <PhoneOff className="h-6 w-6" />
        <span className="sr-only">End call</span>
      </Button>
    </div>
  );
}
