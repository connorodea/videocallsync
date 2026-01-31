"use client";

import { useVideoCall } from "@/hooks/use-video-call";
import { JoinRoom } from "@/components/join-room";
import { CallView } from "@/components/call-view";
import { CallEnded } from "@/components/call-ended";

export function VideoCall() {
  const {
    callState,
    localStream,
    remoteStream,
    roomId,
    isMuted,
    isCameraOff,
    error,
    joinRoom,
    leaveRoom,
    toggleMute,
    toggleCamera,
  } = useVideoCall();

  if (callState === "idle") {
    return (
      <div className="dark min-h-screen bg-[#0a0a0a] text-white">
        <JoinRoom onJoin={joinRoom} isLoading={false} error={error} />
      </div>
    );
  }

  if (callState === "ended") {
    return (
      <div className="dark min-h-screen bg-[#0a0a0a] text-white">
        <CallEnded onNewCall={leaveRoom} />
      </div>
    );
  }

  return (
    <div className="dark min-h-screen bg-[#0a0a0a] text-white">
      <CallView
        callState={callState}
        localStream={localStream}
        remoteStream={remoteStream}
        roomId={roomId}
        isMuted={isMuted}
        isCameraOff={isCameraOff}
        onToggleMute={toggleMute}
        onToggleCamera={toggleCamera}
        onHangUp={leaveRoom}
      />
    </div>
  );
}
