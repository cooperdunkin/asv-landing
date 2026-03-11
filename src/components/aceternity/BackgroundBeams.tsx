"use client";
import { useEffect, useRef } from "react";
import { cn } from "../../lib/utils";

export function BackgroundBeams({ className }: { className?: string }) {
  const beamsRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = beamsRef.current;
    if (!svg) return;
    // Animate beam opacities subtly
    const paths = svg.querySelectorAll("path");
    paths.forEach((path, i) => {
      const delay = i * 0.3;
      path.style.animation = `beam-fade ${3 + (i % 3)}s ease-in-out ${delay}s infinite alternate`;
    });
  }, []);

  return (
    <div
      className={cn(
        "absolute inset-0 overflow-hidden pointer-events-none",
        className
      )}
    >
      <style>{`
        @keyframes beam-fade {
          from { opacity: 0.3; }
          to   { opacity: 0.7; }
        }
      `}</style>
      <svg
        ref={beamsRef}
        className="absolute w-full h-full"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="beam1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#e8d5b0" stopOpacity="0" />
            <stop offset="50%" stopColor="#e8d5b0" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#e8d5b0" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="beam2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#e8d5b0" stopOpacity="0" />
            <stop offset="50%" stopColor="#c4a97a" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#e8d5b0" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="beam3" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#e8d5b0" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#e8d5b0" stopOpacity="0" />
          </linearGradient>
        </defs>
        {/* Diagonal beam from top-left */}
        <path
          d="M -100 0 L 800 900 L 820 900 L -80 0 Z"
          fill="url(#beam1)"
          opacity="0.4"
        />
        {/* Diagonal beam from top-right */}
        <path
          d="M 1540 0 L 640 900 L 620 900 L 1520 0 Z"
          fill="url(#beam2)"
          opacity="0.3"
        />
        {/* Near-vertical beam center-right */}
        <path
          d="M 900 -50 L 960 900 L 940 900 L 880 -50 Z"
          fill="url(#beam3)"
          opacity="0.25"
        />
        {/* Thin beam upper area */}
        <path
          d="M 200 0 L 750 450 L 756 450 L 206 0 Z"
          fill="url(#beam1)"
          opacity="0.2"
        />
        {/* Wide sweep */}
        <path
          d="M 400 0 L 1200 900 L 1240 900 L 440 0 Z"
          fill="url(#beam2)"
          opacity="0.15"
        />
      </svg>
    </div>
  );
}
