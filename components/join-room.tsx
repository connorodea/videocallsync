"use client";

import React from "react";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Video, ArrowRight, Loader2, ArrowLeft, Sparkles, Shield, Zap } from "lucide-react";

interface JoinRoomProps {
  onJoin: (roomId: string) => void;
  isLoading?: boolean;
  error?: string | null;
}

export function JoinRoom({ onJoin, isLoading, error }: JoinRoomProps) {
  const [roomCode, setRoomCode] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (roomCode.trim()) {
      onJoin(roomCode.trim());
    }
  };

  const generateRoomCode = () => {
    const code = Math.random().toString(36).substring(2, 8).toUpperCase();
    setRoomCode(code);
  };

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center px-4">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 h-[600px] w-[600px] rounded-full bg-emerald-500/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[300px] w-[300px] rounded-full bg-emerald-500/5 blur-3xl" />
        <div className="absolute top-0 right-0 h-[300px] w-[300px] rounded-full bg-emerald-500/5 blur-3xl" />
      </div>

      {/* Back link */}
      <div className="absolute top-6 left-6">
        <Button
          variant="ghost"
          size="sm"
          asChild
          className="gap-2 text-zinc-400 hover:text-white hover:bg-white/5"
        >
          <Link href="/">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </Button>
      </div>

      <div className="w-full max-w-md space-y-8">
        {/* Logo and Header */}
        <div className="text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-600 shadow-lg shadow-emerald-500/25">
            <Video className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-white">
            VideoCallSync
          </h1>
          <p className="mt-2 text-zinc-400">
            Crystal clear 1:1 video calls, anywhere
          </p>
        </div>

        {/* Join Form */}
        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label
                htmlFor="roomCode"
                className="text-sm font-medium text-zinc-300"
              >
                Room Code
              </label>
              <div className="flex gap-3">
                <Input
                  id="roomCode"
                  type="text"
                  placeholder="Enter room code"
                  value={roomCode}
                  onChange={(e) => setRoomCode(e.target.value.toUpperCase())}
                  className="h-12 bg-white/5 border-white/10 text-white placeholder:text-zinc-500 font-mono text-lg tracking-wider focus:border-emerald-500/50 focus:ring-emerald-500/20"
                  disabled={isLoading}
                />
                <Button
                  type="button"
                  variant="secondary"
                  onClick={generateRoomCode}
                  className="h-12 whitespace-nowrap bg-white/10 hover:bg-white/15 text-white border-0"
                  disabled={isLoading}
                >
                  <Sparkles className="h-4 w-4 mr-2" />
                  Generate
                </Button>
              </div>
            </div>

            {error && (
              <div className="rounded-xl bg-red-500/10 border border-red-500/20 p-3 text-sm text-red-400">
                {error}
              </div>
            )}

            <Button
              type="submit"
              className="h-12 w-full gap-2 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white shadow-lg shadow-emerald-500/25 border-0"
              disabled={!roomCode.trim() || isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  Connecting...
                </>
              ) : (
                <>
                  Join Call
                  <ArrowRight className="h-5 w-5" />
                </>
              )}
            </Button>
          </form>

          <div className="mt-6 border-t border-white/10 pt-4">
            <p className="text-center text-xs text-zinc-500">
              Share the room code with the person you want to call.
              <br />
              Both participants need to enter the same code.
            </p>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-3 gap-4">
          <div className="flex flex-col items-center gap-2 p-4 rounded-xl bg-white/5 border border-white/5">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10">
              <Zap className="h-5 w-5 text-emerald-400" />
            </div>
            <div className="text-sm font-semibold text-white">HD</div>
            <div className="text-xs text-zinc-500">Video Quality</div>
          </div>
          <div className="flex flex-col items-center gap-2 p-4 rounded-xl bg-white/5 border border-white/5">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10">
              <Shield className="h-5 w-5 text-emerald-400" />
            </div>
            <div className="text-sm font-semibold text-white">E2E</div>
            <div className="text-xs text-zinc-500">Encrypted</div>
          </div>
          <div className="flex flex-col items-center gap-2 p-4 rounded-xl bg-white/5 border border-white/5">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10">
              <Sparkles className="h-5 w-5 text-emerald-400" />
            </div>
            <div className="text-sm font-semibold text-white">Free</div>
            <div className="text-xs text-zinc-500">Forever</div>
          </div>
        </div>
      </div>
    </div>
  );
}
