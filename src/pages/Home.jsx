import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  const navigate = useNavigate();
  const title = "Spaced Flashed Cards";
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-500 to-indigo-700 flex justify-center items-center"
    >
      <div className="text-center px-4">
        <div className="flex flex-wrap justify-center gap-1 text-4xl md:text-5xl font-bold text-white">
          {title.split("").map((char, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              whileHover={{
                scale: 1.2,
                color: "#FFD700",
                transition: {
                  duration: 0.05,
                  ease: "easeInOut",
                  type: "tween",
                },
              }}
              className="cursor-default transition-all duration-200"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </div>

        <motion.button
          onClick={() => navigate("/select")}
          className="mt-10 bg-yellow-400 text-black px-6 py-3 text-xl rounded-full font-semibold shadow-lg transition transform duration-150 ease-in-out hover:scale-110  hover:bg-yellow-300 cursor-pointer"
        >
          Let’s Learn 🚀
        </motion.button>
      </div>
    </motion.div>
  );
};

export default Home;
