import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  const navigate = useNavigate();
  const location = useLocation(); // 👈 get current route
  const title = "Spaced Flashed Cards";

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-500 to-indigo-700 flex justify-center items-center relative">
      {/* Blob background */}
      <div className="absolute inset-0 z-0 flex justify-center items-center">
        <svg
          key={location.pathname} // 👈 force re-render of SVG on route change
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[500px] h-[500px]"
        >
          <path
            key={location.pathname}
            fill="#22D3EE"
            transform="translate(100 100)"
          >
            <animate
              attributeName="d"
              dur="10000ms"
              repeatCount="indefinite"
              values="M37.8,-60.9C50.4,-58.1,63.2,-51,65.5,-40.1C67.8,-29.2,59.6,-14.6,59.4,-0.1C59.3,14.4,67.2,28.9,66,41.7C64.9,54.6,54.7,65.8,42.2,71.1C29.7,76.3,14.8,75.5,1,73.7C-12.8,71.9,-25.6,69.2,-37.9,63.9C-50.2,58.5,-62,50.6,-71.9,39.5C-81.8,28.4,-89.8,14.2,-88.7,0.6C-87.6,-13,-77.5,-25.9,-68.1,-37.9C-58.7,-49.8,-50,-60.7,-38.8,-64.4C-27.6,-68,-13.8,-64.3,-0.6,-63.3C12.6,-62.2,25.1,-63.7,37.8,-60.9Z;
              
              M28.1,-50.6C38.6,-42.6,50.8,-39.5,60.7,-31.9C70.6,-24.3,78.2,-12.1,81,1.6C83.8,15.4,81.9,30.7,70.9,36.5C59.9,42.2,39.9,38.3,26.6,44.2C13.3,50.1,6.6,65.7,-4.4,73.3C-15.4,80.9,-30.8,80.4,-39,71.6C-47.3,62.8,-48.4,45.7,-51.1,32.4C-53.9,19.1,-58.3,9.5,-64.3,-3.5C-70.4,-16.5,-78,-33,-73,-42.3C-67.9,-51.6,-50.1,-53.8,-35.8,-59.6C-21.5,-65.4,-10.8,-74.9,-1,-73.2C8.8,-71.5,17.6,-58.6,28.1,-50.6Z; 
              
              M34.6,-63.9C44.6,-54.1,52.3,-44.4,57.3,-33.7C62.3,-23.1,64.6,-11.6,68.3,2.2C72.1,15.9,77.3,31.8,73.4,44.4C69.6,57,56.6,66.3,42.9,72.3C29.1,78.3,14.6,81,3.5,75C-7.6,69,-15.3,54.4,-28.3,47.9C-41.3,41.5,-59.6,43.2,-71.6,36.6C-83.6,30,-89.3,15,-90.1,-0.5C-91,-16,-87,-31.9,-76.2,-40.7C-65.5,-49.5,-47.9,-51,-34.1,-58.6C-20.2,-66.1,-10.1,-79.6,1.1,-81.5C12.3,-83.3,24.6,-73.6,34.6,-63.9Z;
              
              M18.3,-31.9C25.7,-27.4,35,-26.5,48.1,-21.8C61.2,-17.1,78,-8.5,76.8,-0.7C75.5,7.1,56.1,14.1,42.8,18.5C29.5,22.9,22.3,24.6,16.2,31.1C10.1,37.6,5.1,49,-1.4,51.4C-7.9,53.9,-15.8,47.5,-24.8,42.6C-33.8,37.8,-43.9,34.5,-47.4,27.6C-51,20.8,-47.9,10.4,-47.6,0.2C-47.4,-10.1,-49.9,-20.2,-47.6,-29.1C-45.3,-38,-38,-45.7,-29.3,-49.4C-20.6,-53.1,-10.3,-52.9,-2.4,-48.7C5.4,-44.5,10.9,-36.4,18.3,-31.9Z;
              
              M36.3,-64.2C46.2,-57.1,52.9,-45.7,56.5,-34.3C60.1,-22.9,60.6,-11.5,63.3,1.6C66.1,14.6,71,29.2,63.9,34.6C56.8,39.9,37.6,35.8,24.9,43.8C12.2,51.8,6.1,71.9,-5.1,80.7C-16.3,89.5,-32.6,87.1,-44.9,78.9C-57.3,70.7,-65.6,56.7,-66.6,42.6C-67.5,28.5,-61.1,14.2,-62.1,-0.6C-63.1,-15.4,-71.5,-30.8,-70.1,-44.1C-68.6,-57.3,-57.3,-68.5,-44,-73.7C-30.6,-78.9,-15.3,-78.1,-1.1,-76.2C13.2,-74.3,26.3,-71.4,36.3,-64.2Z"
            ></animate>
          </path>
        </svg>
      </div>

      {/* Text and button on top */}
      <div className="relative z-10 text-center  max-w-xl">
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
          className="mt-10 bg-yellow-400 text-black px-6 py-3 text-xl rounded-full font-semibold shadow-lg transition transform duration-150 ease-in-out hover:scale-110 hover:bg-yellow-300 cursor-pointer"
        >
          Let’s Learn 🚀
        </motion.button>
      </div>
    </div>
  );
};

export default Home;
