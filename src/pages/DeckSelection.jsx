import React, { useState } from "react";
import DeckCard from "../components/DeckCard";
import deckData from "../data/decks";
import { motion, AnimatePresence } from "framer-motion";

const DeckSelection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const bgColors = [
    "from-yellow-200 via-yellow-300 to-yellow-400", // JS
    "from-green-200 via-green-300 to-green-400", // Python
    "from-pink-200 via-pink-300 to-pink-400", // HTML
    "from-blue-200 via-blue-300 to-blue-400", // CSS
    "from-purple-200 via-purple-300 to-purple-400", // React
    "from-red-200 via-red-300 to-red-400", // Data Structures
  ];

  return (
    <div className="relative min-h-screen w-full flex justify-center items-center p-8 bg-gray-50 overflow-hidden">
      {/* Gradient overlay */}
      <AnimatePresence>
        {hoveredIndex !== null && (
          <motion.div
            key="bg-gradient"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className={`pointer-events-none absolute inset-0 bg-gradient-to-r ${bgColors[hoveredIndex]}`}
            style={{ zIndex: 0 }}
          />
        )}
      </AnimatePresence>

      <div className="relative z-10 flex gap-6 max-w-7xl flex-wrap justify-center">
        {deckData.map((deck, idx) => {
          const isHovered = hoveredIndex === idx;

          return (
            <motion.div
              key={deck.id}
              onHoverStart={() => setHoveredIndex(idx)}
              onHoverEnd={() => setHoveredIndex(null)}
              animate={{ scale: isHovered ? 1.05 : 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="cursor-pointer"
            >
              <DeckCard {...deck} isActive={isHovered} />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default DeckSelection;
