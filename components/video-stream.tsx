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
    <div className={cn("relative overflow-hidden bg-secondary", className)}>
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
        <div className="flex h-full w-full items-center justify-center bg-secondary">
          <div className="flex flex-col items-center gap-2 text-muted-foreground">
            <VideoOff className="h-12 w-12" />
            <span className="text-sm">{isCameraOff ? "Camera off" : "No video"}</span>
          </div>
        </div>
      )}
      {label && (
        <div className="absolute bottom-3 left-3 rounded-md bg-background/80 px-2 py-1 text-xs font-medium text-foreground backdrop-blur-sm">
          {label}
        </div>
      )}
    </div>
  );
}
