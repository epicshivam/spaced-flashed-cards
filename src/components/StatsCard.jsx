import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const StatsCard = ({ deckId, deckName, know, dontKnow, lastPlayed }) => {
  const total = know + dontKnow;
  const percentage = total ? Math.round((know / total) * 100) : 0;

  return (
    <motion.div
      className="bg-white rounded-2xl shadow-lg p-6 w-full sm:w-[360px] flex flex-col items-center"
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="text-xl font-semibold mb-2 text-center">{deckName}</h2>
      <div className="w-24 h-24 mb-4">
        <CircularProgressbar
          value={percentage}
          text={`${percentage}%`}
          styles={buildStyles({
            textColor: "#4f46e5",
            pathColor: "#4f46e5",
            trailColor: "#e5e7eb",
          })}
        />
      </div>
      <p className="text-sm text-gray-600">Last Played: {lastPlayed || "—"}</p>
      <div className="flex justify-between w-full text-sm mt-4">
        <span className="text-green-600">✅ Know: {know}</span>
        <span className="text-red-600">❌ Don't Know: {dontKnow}</span>
      </div>
      <Link
        to={`/play/${deckId}`}
        className="mt-4 px-4 py-2 bg-indigo-500 text-white rounded-full hover:bg-indigo-600 transition"
      >
        Play Again
      </Link>
    </motion.div>
  );
};

export default StatsCard;
