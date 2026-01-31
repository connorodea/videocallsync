"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import { io, Socket } from "socket.io-client";

const SIGNALING_URL = "https://call.videocallsync.com";

const ICE_SERVERS = [
  { urls: ["stun:stun.l.google.com:19302"] },
  {
    urls: [
      "turn:call.videocallsync.com:3478?transport=udp",
      "turns:call.videocallsync.com:5349?transport=tcp",
    ],
    username: "webrtcuser",
    credential: "W3bRtc!Pr0d2026",
  },
];

const MEDIA_CONSTRAINTS = {
  audio: true,
  video: {
    facingMode: "user",
    frameRate: 30,
    width: 640,
    height: 480,
  },
};

export type CallState =
  | "idle"
  | "joining"
  | "waiting"
  | "connecting"
  | "connected"
  | "ended";

export interface VideoCallState {
  callState: CallState;
  localStream: MediaStream | null;
  remoteStream: MediaStream | null;
  roomId: string;
  isMuted: boolean;
  isCameraOff: boolean;
  error: string | null;
}

export interface VideoCallActions {
  joinRoom: (roomId: string) => Promise<void>;
  leaveRoom: () => void;
  toggleMute: () => void;
  toggleCamera: () => void;
}

export function useVideoCall(): VideoCallState & VideoCallActions {
  const [callState, setCallState] = useState<CallState>("idle");
  const [localStream, setLocalStream] = useState<MediaStream | null>(null);
  const [remoteStream, setRemoteStream] = useState<MediaStream | null>(null);
  const [roomId, setRoomId] = useState<string>("");
  const [isMuted, setIsMuted] = useState(false);
  const [isCameraOff, setIsCameraOff] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const socketRef = useRef<Socket | null>(null);
  const peerConnectionRef = useRef<RTCPeerConnection | null>(null);
  const localStreamRef = useRef<MediaStream | null>(null);
  const isCallerRef = useRef(false);

  const cleanup = useCallback(() => {
    if (peerConnectionRef.current) {
      peerConnectionRef.current.close();
      peerConnectionRef.current = null;
    }
    if (localStreamRef.current) {
      localStreamRef.current.getTracks().forEach((track) => track.stop());
      localStreamRef.current = null;
    }
    if (socketRef.current) {
      socketRef.current.disconnect();
      socketRef.current = null;
    }
    setLocalStream(null);
    setRemoteStream(null);
    setRoomId("");
    setIsMuted(false);
    setIsCameraOff(false);
    isCallerRef.current = false;
  }, []);

  const createPeerConnection = useCallback(() => {
    const pc = new RTCPeerConnection({ iceServers: ICE_SERVERS });

    pc.onicecandidate = (event) => {
      if (event.candidate && socketRef.current && roomId) {
        socketRef.current.emit("signal", {
          roomId,
          data: { type: "ice-candidate", candidate: event.candidate },
        });
      }
    };

    pc.ontrack = (event) => {
      setRemoteStream(event.streams[0]);
      setCallState("connected");
    };

    pc.onconnectionstatechange = () => {
      if (pc.connectionState === "disconnected" || pc.connectionState === "failed") {
        setCallState("ended");
      }
    };

    if (localStreamRef.current) {
      localStreamRef.current.getTracks().forEach((track) => {
        pc.addTrack(track, localStreamRef.current!);
      });
    }

    peerConnectionRef.current = pc;
    return pc;
  }, [roomId]);

  const handleSignal = useCallback(
    async (data: { roomId: string; data: RTCSessionDescriptionInit | { type: string; candidate: RTCIceCandidate } }) => {
      const signalData = data.data;

      if (signalData.type === "offer") {
        const pc = createPeerConnection();
        await pc.setRemoteDescription(new RTCSessionDescription(signalData as RTCSessionDescriptionInit));
        const answer = await pc.createAnswer();
        await pc.setLocalDescription(answer);
        socketRef.current?.emit("signal", {
          roomId: data.roomId,
          data: { type: "answer", sdp: answer.sdp },
        });
        setCallState("connecting");
      } else if (signalData.type === "answer") {
        if (peerConnectionRef.current) {
          await peerConnectionRef.current.setRemoteDescription(
            new RTCSessionDescription(signalData as RTCSessionDescriptionInit)
          );
        }
      } else if (signalData.type === "ice-candidate") {
        const candidateData = signalData as { type: string; candidate: RTCIceCandidate };
        if (peerConnectionRef.current && candidateData.candidate) {
          await peerConnectionRef.current.addIceCandidate(
            new RTCIceCandidate(candidateData.candidate)
          );
        }
      }
    },
    [createPeerConnection]
  );

  const joinRoom = useCallback(
    async (newRoomId: string) => {
      if (!newRoomId.trim()) {
        setError("Please enter a room code");
        return;
      }

      setError(null);
      setCallState("joining");

      try {
        const stream = await navigator.mediaDevices.getUserMedia(MEDIA_CONSTRAINTS);
        localStreamRef.current = stream;
        setLocalStream(stream);

        const socket = io(SIGNALING_URL, {
          transports: ["websocket"],
          path: "/socket.io/",
        });

        socketRef.current = socket;

        socket.on("connect", () => {
          socket.emit("join", { roomId: newRoomId });
        });

        socket.on("joined", (data: { roomId: string }) => {
          setRoomId(data.roomId);
          setCallState("waiting");
        });

        socket.on("peer_joined", async () => {
          isCallerRef.current = true;
          const pc = createPeerConnection();
          const offer = await pc.createOffer();
          await pc.setLocalDescription(offer);
          socket.emit("signal", {
            roomId: newRoomId,
            data: { type: "offer", sdp: offer.sdp },
          });
          setCallState("connecting");
        });

        socket.on("signal", handleSignal);

        socket.on("peer_left", () => {
          setCallState("ended");
          if (peerConnectionRef.current) {
            peerConnectionRef.current.close();
            peerConnectionRef.current = null;
          }
          setRemoteStream(null);
        });

        socket.on("room_full", () => {
          setError("Room is full. Please try a different room code.");
          cleanup();
          setCallState("idle");
        });

        socket.on("connect_error", () => {
          setError("Failed to connect to server. Please try again.");
          cleanup();
          setCallState("idle");
        });
      } catch (err) {
        console.error("Error joining room:", err);
        setError("Failed to access camera/microphone. Please check permissions.");
        cleanup();
        setCallState("idle");
      }
    },
    [cleanup, createPeerConnection, handleSignal]
  );

  const leaveRoom = useCallback(() => {
    if (socketRef.current && roomId) {
      socketRef.current.emit("leave", { roomId });
    }
    cleanup();
    setCallState("idle");
  }, [cleanup, roomId]);

  const toggleMute = useCallback(() => {
    if (localStreamRef.current) {
      const audioTrack = localStreamRef.current.getAudioTracks()[0];
      if (audioTrack) {
        audioTrack.enabled = !audioTrack.enabled;
        setIsMuted(!audioTrack.enabled);
      }
    }
  }, []);

  const toggleCamera = useCallback(() => {
    if (localStreamRef.current) {
      const videoTrack = localStreamRef.current.getVideoTracks()[0];
      if (videoTrack) {
        videoTrack.enabled = !videoTrack.enabled;
        setIsCameraOff(!videoTrack.enabled);
      }
    }
  }, []);

  useEffect(() => {
    return () => {
      cleanup();
    };
  }, [cleanup]);

  return {
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
  };
}
