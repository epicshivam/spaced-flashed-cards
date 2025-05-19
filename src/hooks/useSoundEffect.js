// src/hooks/useSoundEffect.js
import { useCallback, useEffect, useRef } from "react";

export const useSoundEffect = (soundFile) => {
  const audioRef = useRef(new Audio(soundFile));

  useEffect(() => {
    const audio = audioRef.current;
    audio.preload = "auto";
    audio.load(); // Preload when hook initializes
  }, [soundFile]);

  const playSound = useCallback(() => {
    const audio = audioRef.current;
    audio.currentTime = 0; // Reset if already playing
    audio.play().catch((err) => {
      // Optional: ignore if autoplay blocked before interaction
      console.warn("Sound playback failed:", err);
    });
  }, []);

  return playSound;
};
