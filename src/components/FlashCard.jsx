import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate, useParams } from "react-router-dom";

import clickSound from "../assets/sounds/click.mp3";
import knowSound from "../assets/sounds/know.mp3";
import dontKnowSound from "../assets/sounds/dontknow.mp3";
import flipSound from "../assets/sounds/flip.mp3";

import { useSoundEffect } from "../hooks/useSoundEffect";

const FlashCard = ({ flashcards }) => {
  const { id: deckId } = useParams();
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [finished, setFinished] = useState(false);
  const [stats, setStats] = useState(() => {
    const saved = localStorage.getItem("flashcardStats");
    return saved ? JSON.parse(saved) : {};
  });

  const playClick = useSoundEffect(clickSound);
  const playKnow = useSoundEffect(knowSound);
  const playDontKnow = useSoundEffect(dontKnowSound);
  const playFlip = useSoundEffect(flipSound);

  useEffect(() => {
    localStorage.setItem("flashcardStats", JSON.stringify(stats));
  }, [stats]);

  const updateStats = (type) => {
    setStats((prev) => ({
      ...prev,
      [deckId]: {
        know: (prev[deckId]?.know || 0) + (type === "know" ? 1 : 0),
        dontKnow: (prev[deckId]?.dontKnow || 0) + (type === "dontKnow" ? 1 : 0),
      },
    }));
  };

  const handleKnow = () => {
    playKnow();
    updateStats("know");
    nextCard();
  };

  const handleDontKnow = () => {
    playDontKnow();
    updateStats("dontKnow");
    nextCard();
  };

  const nextCard = () => {
    playClick();
    setDirection(1);
    setFlipped(false);
    if (index < flashcards.length - 1) {
      setIndex((prev) => prev + 1);
    } else {
      setFinished(true);
    }
  };

  const prevCard = () => {
    playClick();
    setDirection(-1);
    setFlipped(false);
    if (index > 0) {
      setIndex((prev) => prev - 1);
    }
  };

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95,
      position: "absolute",
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      position: "relative",
    },
    exit: (dir) => ({
      x: dir > 0 ? -300 : 300,
      opacity: 0,
      scale: 0.95,
      position: "absolute",
    }),
  };

  const currentCard = flashcards[index];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-tr from-indigo-200 via-purple-200 to-pink-200 p-6 relative">
      {!finished && (
        <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white shadow flex items-center justify-center font-semibold text-lg select-none z-20">
          {index + 1} / {flashcards.length}
        </div>
      )}

      <div className="flex items-center space-x-6 relative max-w-3xl w-full justify-center mb-6">
        {!finished && (
          <button
            onClick={prevCard}
            className="text-4xl font-bold bg-white rounded-full shadow p-3 hover:bg-gray-200 transition duration-300 transform hover:scale-110"
            disabled={index === 0}
          >
            &lt;
          </button>
        )}

        <div className="w-[460px] h-[340px] relative">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={finished ? "thankyou" : index}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ type: "tween", duration: 0.4, ease: "easeInOut" }}
              className="absolute w-full h-full"
            >
              {finished ? (
                <div className="w-full h-full flex flex-col items-center justify-center bg-white rounded-xl shadow-xl p-8 text-center text-indigo-700">
                  <div className="text-2xl font-semibold mb-6">
                    Thanks for playing!
                  </div>
                  <button
                    onClick={() => navigate("/select")}
                    className="px-8 py-3 text-white bg-indigo-500 rounded-full shadow hover:bg-indigo-600 transform hover:scale-105 transition duration-200 text-lg font-semibold"
                  >
                    Go Back
                  </button>
                </div>
              ) : (
                <FlipCard
                  question={currentCard.question}
                  answer={currentCard.answer}
                  flipped={flipped}
                  setFlipped={(val) => {
                    playFlip();
                    setFlipped(val);
                  }}
                />
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {!finished && (
          <button
            onClick={nextCard}
            className="text-4xl font-bold bg-white rounded-full shadow p-3 hover:bg-gray-200 transition duration-300 transform hover:scale-110"
            disabled={finished}
          >
            &gt;
          </button>
        )}
      </div>

      {/* Know / Don't Know Buttons */}
      {!finished && (
        <div className="flex space-x-6 mt-4">
          <button
            onClick={handleKnow}
            className="px-8 py-3 text-white bg-green-500 rounded-full shadow hover:bg-green-600 transform hover:scale-105 transition duration-200 text-lg font-semibold"
          >
            I Know
          </button>
          <button
            onClick={handleDontKnow}
            className="px-8 py-3 text-white bg-red-500 rounded-full shadow hover:bg-red-600 transform hover:scale-105 transition duration-200 text-lg font-semibold"
          >
            I Don't Know
          </button>
        </div>
      )}
    </div>
  );
};

const FlipCard = ({ question, answer, flipped, setFlipped }) => {
  const flipVariants = {
    front: { rotateY: 0 },
    back: { rotateY: 180 },
  };

  return (
    <motion.div
      className="relative w-full h-full"
      style={{ transformStyle: "preserve-3d", perspective: 1000 }}
    >
      <motion.div
        variants={flipVariants}
        animate={flipped ? "back" : "front"}
        transition={{ duration: 0.6 }}
        className="absolute w-full h-full rounded-xl shadow-xl bg-white"
        style={{ transformStyle: "preserve-3d" }}
        onClick={() => setFlipped(!flipped)}
      >
        {/* Front */}
        <div
          className="absolute w-full h-full p-8 flex flex-col justify-center items-center"
          style={{ backfaceVisibility: "hidden" }}
        >
          <h2 className="text-3xl font-bold text-center mb-6">{question}</h2>
          <button className="px-6 py-2 text-lg font-semibold bg-indigo-500 text-white rounded-full shadow hover:bg-indigo-600 transition-transform transform hover:scale-105 duration-200">
            Show Answer
          </button>
        </div>

        {/* Back */}
        <div
          className="absolute w-full h-full p-8 flex justify-center items-center text-indigo-800 text-lg bg-indigo-100 rounded-xl"
          style={{ transform: "rotateY(180deg)", backfaceVisibility: "hidden" }}
        >
          <p className="text-2xl font-medium text-center">{answer}</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default FlashCard;
