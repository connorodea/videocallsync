import type { Metadata } from "next";
import { VideoCall } from "@/components/video-call";

export const metadata: Metadata = {
  title: "Start a Call | VideoCallSync",
  description: "Start a cross-platform video call with anyone",
};

export default function CallPage() {
  return <VideoCall />;
}
