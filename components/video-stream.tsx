"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { VideoOff } from "lucide-react";

interface VideoStreamProps {
  stream: MediaStream | null;
  muted?: boolean;
  className?: string;
  isLocal?: boolean;
  isCameraOff?: boolean;
  label?: string;
}

export function VideoStream({
  stream,
  muted = false,
  className,
  isLocal = false,
  isCameraOff = false,
  label,
}: VideoStreamProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current && stream) {
      videoRef.current.srcObject = stream;
    }
  }, [stream]);

  return (
    <div className={cn("relative overflow-hidden bg-zinc-900", className)}>
      {stream && !isCameraOff ? (
        <video
          ref={videoRef}
          autoPlay
          playsInline
          muted={muted}
          className={cn(
            "h-full w-full object-cover",
            isLocal && "scale-x-[-1]"
          )}
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-zinc-800 to-zinc-900">
          <div className="flex flex-col items-center gap-2 text-zinc-500">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-zinc-800">
              <VideoOff className="h-7 w-7" />
            </div>
            <span className="text-xs font-medium">
              {isCameraOff ? "Camera off" : "No video"}
            </span>
          </div>
        </div>
      )}
      {label && (
        <div className="absolute bottom-2 left-2 rounded-lg bg-black/60 backdrop-blur-md px-2.5 py-1 text-xs font-medium text-white border border-white/10">
          {label}
        </div>
      )}
    </div>
  );
}
