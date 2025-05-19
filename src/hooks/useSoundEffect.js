// hooks/useSoundEffect.js
import { useCallback, useRef } from "react";

export const useSoundEffect = (soundFile) => {
  const audioRef = useRef(new Audio(soundFile));

  const playSound = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }
  }, []);

  return playSound;
};
