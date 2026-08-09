"use client";

import React, { useRef, useState } from "react";
import { Play, Pause, Volume2, VolumeX, Maximize, Film } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProjectVideoProps {
  src?: string;
  poster?: string;
  title?: string;
  className?: string;
}

export const ProjectVideo: React.FC<ProjectVideoProps> = ({
  src,
  poster,
  title = "Project Demo Video",
  className,
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [hasError, setHasError] = useState(false);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setHasError(true));
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const toggleFullscreen = () => {
    if (!videoRef.current) return;
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  // Handle missing video src or error gracefully
  if (!src || hasError) {
    return (
      <div
        className={cn(
          "relative w-full aspect-video rounded-xl bg-dark-900 border border-white/10 flex flex-col items-center justify-center p-6 text-center space-y-3 overflow-hidden bg-grid-pattern",
          className
        )}
      >
        <div className="p-4 rounded-full bg-gold-primary/10 border border-gold-primary/30 text-gold-accent shadow-gold-glow-sm">
          <Film className="w-8 h-8" />
        </div>
        <div className="space-y-1">
          <h4 className="text-base font-bold text-white">{title}</h4>
          <p className="text-xs text-gray-400 max-w-sm">
            Recorded video demo walkthrough available upon request for private code reviews.
          </p>
        </div>
        <div className="px-3 py-1 rounded text-[11px] font-mono bg-dark-950 text-gold-muted border border-white/10">
          Status: Demo Recording Reserved
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "group relative w-full aspect-video rounded-xl overflow-hidden bg-dark-950 border border-white/10 shadow-gold-glow-sm",
        className
      )}
    >
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        onError={() => setHasError(true)}
        onEnded={() => setIsPlaying(false)}
        className="w-full h-full object-cover"
        playsInline
      />

      {/* Play/Pause Center Overlay */}
      {!isPlaying && (
        <div className="absolute inset-0 bg-dark-950/60 backdrop-blur-xs flex items-center justify-center transition-opacity">
          <button
            onClick={togglePlay}
            aria-label="Play video demo"
            className="p-5 rounded-full bg-gold-primary text-dark-950 hover:bg-gold-hover hover:scale-105 shadow-gold-glow transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gold-primary"
          >
            <Play className="w-8 h-8 fill-current ml-1" />
          </button>
        </div>
      )}

      {/* Control Bar Overlay on Hover */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-dark-950 via-dark-950/80 to-transparent flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        <button
          onClick={togglePlay}
          aria-label={isPlaying ? "Pause video" : "Play video"}
          className="p-2 rounded text-white hover:text-gold-accent transition-colors"
        >
          {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
        </button>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleMute}
            aria-label={isMuted ? "Unmute video" : "Mute video"}
            className="p-2 rounded text-white hover:text-gold-accent transition-colors"
          >
            {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
          </button>
          <button
            onClick={toggleFullscreen}
            aria-label="Enter fullscreen"
            className="p-2 rounded text-white hover:text-gold-accent transition-colors"
          >
            <Maximize className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};
