'use client'

import { useEffect, useRef } from "react";

export default function HamsterTracker() {
  const videoRef = useRef(null);

  useEffect(() => {
    const v = videoRef.current;
    if (v) {
      v.muted = true;
      v.play().catch(() => {
      });
    }
  }, []);

  return (
    <div className="flex items-center justify-center">
      <video
        ref={videoRef}
        id="td-video"
        controls
        autoPlay
        loop
        muted
        playsInline
        style={{ maxWidth: "70%" }}
      >
        <source src="/media/td_hamster_1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
