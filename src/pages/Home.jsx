import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  const navigate = useNavigate();
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-500 to-indigo-700 flex justify-center items-center"
    >
      <div className="flex justify-center items-center h-screen">
        <div className="text-center">
          <motion.h3
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold mb-6"
          >
            😎 Spaced Flashed Cards
          </motion.h3>
          <motion.button
            whileHover={{ scale: 1.1, backgroundColor: "#2563EB" }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-500 text-white text-xl m-4 cursor-pointer border-2 px-6 py-3 rounded-full"
            onClick={() => navigate("/select")}
            aria-label="Start learning flashcards"
          >
            Lets Learn
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
