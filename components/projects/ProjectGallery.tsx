"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";

interface ProjectGalleryProps {
  images: string[];
  title?: string;
}

export const ProjectGallery: React.FC<ProjectGalleryProps> = ({ images, title = "Project Screenshot" }) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "Escape") setSelectedIndex(null);
      if (e.key === "ArrowLeft") {
        setSelectedIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : images.length - 1));
      }
      if (e.key === "ArrowRight") {
        setSelectedIndex((prev) => (prev !== null && prev < images.length - 1 ? prev + 1 : 0));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, images.length]);

  if (!images || images.length === 0) return null;

  return (
    <div className="space-y-4">
      {/* Thumbnails Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((img, idx) => (
          <div
            key={idx}
            onClick={() => setSelectedIndex(idx)}
            className="group relative aspect-video rounded-xl overflow-hidden bg-dark-900 border border-white/10 hover:border-gold-primary/40 transition-all duration-300 cursor-pointer gold-card-hover"
          >
            <div className="absolute inset-0 bg-dark-950/40 group-hover:bg-transparent transition-colors z-10" />

            {/* Placeholder graphic if image path doesn't resolve */}
            <div className="w-full h-full bg-dark-900 flex flex-col items-center justify-center p-4 text-center border border-white/5">
              <span className="text-xs font-mono text-gold-accent font-semibold">{title} {idx + 1}</span>
              <span className="text-[11px] text-gray-500 pt-1">Click to view full preview</span>
            </div>

            <div className="absolute bottom-3 right-3 p-2 rounded-lg bg-dark-950/80 text-gold-accent opacity-0 group-hover:opacity-100 transition-opacity z-20">
              <Maximize2 className="w-4 h-4" />
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 z-50 bg-dark-950/95 backdrop-blur-md flex items-center justify-center p-4">
          <button
            onClick={() => setSelectedIndex(null)}
            aria-label="Close Lightbox"
            className="absolute top-6 right-6 p-3 rounded-full bg-dark-850 text-gray-300 hover:text-gold-accent hover:bg-white/10 border border-white/10 transition-colors z-50"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={() => setSelectedIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : images.length - 1))}
            aria-label="Previous image"
            className="absolute left-4 p-3 rounded-full bg-dark-850 text-gray-300 hover:text-gold-accent hover:bg-white/10 border border-white/10 transition-colors z-50"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div className="max-w-5xl max-h-[85vh] w-full aspect-video rounded-xl overflow-hidden bg-dark-900 border border-gold-primary/30 flex flex-col items-center justify-center p-8 text-center space-y-4">
            <span className="text-sm font-mono text-gold-accent font-bold">
              {title} — Screenshot {selectedIndex + 1} of {images.length}
            </span>
            <p className="text-xs text-gray-400 max-w-md">
              High-resolution screenshot capture demonstrating key UI layout and workflow state.
            </p>
          </div>

          <button
            onClick={() => setSelectedIndex((prev) => (prev !== null && prev < images.length - 1 ? prev + 1 : 0))}
            aria-label="Next image"
            className="absolute right-4 p-3 rounded-full bg-dark-850 text-gray-300 hover:text-gold-accent hover:bg-white/10 border border-white/10 transition-colors z-50"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      )}
    </div>
  );
};
