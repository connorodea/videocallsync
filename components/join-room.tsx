"use client";

import React from "react"

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Video, ArrowRight, Loader2, ArrowLeft } from "lucide-react";

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
    const code = Math.random().toString(36).substring(2, 8);
    setRoomCode(code);
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4">
      {/* Back link */}
      <div className="absolute top-6 left-6">
        <Button variant="ghost" size="sm" asChild className="gap-2 text-muted-foreground hover:text-foreground">
          <Link href="/">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </Button>
      </div>

      <div className="w-full max-w-md space-y-8">
        {/* Logo and Header */}
        <div className="text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-accent">
            <Video className="h-8 w-8 text-accent-foreground" />
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            VideoCallSync
          </h1>
          <p className="mt-2 text-muted-foreground">
            Crystal clear 1:1 video calls, anywhere
          </p>
        </div>

        {/* Join Form */}
        <div className="rounded-2xl border border-border bg-card p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label
                htmlFor="roomCode"
                className="text-sm font-medium text-foreground"
              >
                Room Code
              </label>
              <div className="flex gap-2">
                <Input
                  id="roomCode"
                  type="text"
                  placeholder="Enter room code"
                  value={roomCode}
                  onChange={(e) => setRoomCode(e.target.value)}
                  className="h-12 bg-input text-foreground placeholder:text-muted-foreground"
                  disabled={isLoading}
                />
                <Button
                  type="button"
                  variant="secondary"
                  onClick={generateRoomCode}
                  className="h-12 whitespace-nowrap"
                  disabled={isLoading}
                >
                  Generate
                </Button>
              </div>
            </div>

            {error && (
              <div className="rounded-lg bg-destructive/10 p-3 text-sm text-destructive">
                {error}
              </div>
            )}

            <Button
              type="submit"
              className="h-12 w-full gap-2"
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

          <div className="mt-6 border-t border-border pt-4">
            <p className="text-center text-xs text-muted-foreground">
              Share the room code with the person you want to call.
              <br />
              Both participants need to enter the same code.
            </p>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-3 gap-4 text-center">
          <div className="space-y-1">
            <div className="text-2xl font-semibold text-foreground">HD</div>
            <div className="text-xs text-muted-foreground">Video Quality</div>
          </div>
          <div className="space-y-1">
            <div className="text-2xl font-semibold text-foreground">E2E</div>
            <div className="text-xs text-muted-foreground">Encrypted</div>
          </div>
          <div className="space-y-1">
            <div className="text-2xl font-semibold text-foreground">Free</div>
            <div className="text-xs text-muted-foreground">Forever</div>
          </div>
        </div>
      </div>
    </div>
  );
}
