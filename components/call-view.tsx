"use client";

import { VideoStream } from "@/components/video-stream";
import { CallControls } from "@/components/call-controls";
import { CallState } from "@/hooks/use-video-call";
import { Loader2, Users, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface CallViewProps {
  callState: CallState;
  localStream: MediaStream | null;
  remoteStream: MediaStream | null;
  roomId: string;
  isMuted: boolean;
  isCameraOff: boolean;
  onToggleMute: () => void;
  onToggleCamera: () => void;
  onHangUp: () => void;
}

export function CallView({
  callState,
  localStream,
  remoteStream,
  roomId,
  isMuted,
  isCameraOff,
  onToggleMute,
  onToggleCamera,
  onHangUp,
}: CallViewProps) {
  const [copied, setCopied] = useState(false);

  const copyRoomCode = async () => {
    await navigator.clipboard.writeText(roomId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const isWaiting = callState === "waiting" || callState === "joining";
  const isConnecting = callState === "connecting";
  const isConnected = callState === "connected";

  return (
    <div className="relative flex h-screen flex-col bg-background">
      {/* Main Video Area */}
      <div className="relative flex-1">
        {isConnected && remoteStream ? (
          <VideoStream
            stream={remoteStream}
            className="h-full w-full rounded-none"
            label="Remote"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-6 bg-secondary">
            {isWaiting && (
              <>
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-card">
                  <Users className="h-12 w-12 text-muted-foreground" />
                </div>
                <div className="text-center">
                  <h2 className="text-xl font-semibold text-foreground">
                    Waiting for peer to join
                  </h2>
                  <p className="mt-1 text-muted-foreground">
                    Share this room code with your peer
                  </p>
                </div>
                <div className="flex items-center gap-2 rounded-xl bg-card px-4 py-3">
                  <span className="font-mono text-2xl font-bold tracking-widest text-foreground">
                    {roomId}
                  </span>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={copyRoomCode}
                    className="h-8 w-8"
                  >
                    {copied ? (
                      <Check className="h-4 w-4 text-success" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </>
            )}
            {isConnecting && (
              <>
                <Loader2 className="h-16 w-16 animate-spin text-accent" />
                <div className="text-center">
                  <h2 className="text-xl font-semibold text-foreground">
                    Connecting...
                  </h2>
                  <p className="mt-1 text-muted-foreground">
                    Establishing secure connection
                  </p>
                </div>
              </>
            )}
          </div>
        )}

        {/* Local Video PiP */}
        <div className="absolute bottom-24 right-4 md:bottom-28 md:right-6">
          <VideoStream
            stream={localStream}
            muted
            isLocal
            isCameraOff={isCameraOff}
            className="h-32 w-24 rounded-xl border-2 border-border shadow-lg md:h-48 md:w-36"
            label="You"
          />
        </div>

        {/* Room ID Badge */}
        <div className="absolute left-4 top-4 flex items-center gap-2 rounded-lg bg-card/90 px-3 py-2 backdrop-blur-sm">
          <div className="h-2 w-2 rounded-full bg-success animate-pulse" />
          <span className="font-mono text-sm font-medium text-foreground">
            {roomId}
          </span>
        </div>

        {/* Call Duration / Status */}
        <div className="absolute right-4 top-4 rounded-lg bg-card/90 px-3 py-2 backdrop-blur-sm">
          <span className="text-sm text-foreground">
            {isConnected ? "Connected" : isConnecting ? "Connecting..." : "Waiting..."}
          </span>
        </div>
      </div>

      {/* Call Controls */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
        <CallControls
          isMuted={isMuted}
          isCameraOff={isCameraOff}
          onToggleMute={onToggleMute}
          onToggleCamera={onToggleCamera}
          onHangUp={onHangUp}
        />
      </div>
    </div>
  );
}
