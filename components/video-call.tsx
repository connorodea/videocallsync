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
      <JoinRoom
        onJoin={joinRoom}
        isLoading={false}
        error={error}
      />
    );
  }

  if (callState === "ended") {
    return <CallEnded onNewCall={leaveRoom} />;
  }

  return (
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
  );
}
