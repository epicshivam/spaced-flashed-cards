import React, { useState } from "react";
import DeckCard from "../components/DeckCard";
import deckData from "../data/decks";
import { motion, AnimatePresence } from "framer-motion";

const DeckSelection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  const nextCard = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % deckData.length);
  };

  const prevCard = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + deckData.length) % deckData.length);
  };

  const currentDeck = deckData[currentIndex];

  const variants = {
    enter: (dir) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir) => ({
      x: dir > 0 ? -300 : 300,
      opacity: 0,
    }),
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-amber-100 relative">
      <div className="flex items-center justify-center relative w-full max-w-xl">
        <button
          onClick={prevCard}
          className="text-3xl font-bold absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100 z-10"
        >
          &lt;
        </button>

        <div className="w-full flex items-center justify-center">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={currentDeck.id}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4 }}
            >
              <DeckCard {...currentDeck} isActive={true} />
            </motion.div>
          </AnimatePresence>
        </div>

        <button
          onClick={nextCard}
          className="text-3xl font-bold absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100 z-10"
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default DeckSelection;
