import React from "react";

const DeckCard = ({ title, description, image }) => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-amber-200">
      <div className="bg-white border border-gray-200 rounded-xl shadow-md max-w-sm w-full mx-auto transition-transform hover:scale-105 hover:shadow-lg duration-200">
        <div className="bg-amber-100 w-full h-40 flex justify-center items-center rounded-t-xl overflow-hidden">
          <img src={image} alt={title} className="object-contain h-28 w-28" />
        </div>
        <div className="p-6 flex flex-col items-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">{title}</h2>
          <p className="text-base text-gray-700 mb-4 text-center">
            {description}
          </p>
          <button className="px-6 py-2 bg-yellow-400 text-black font-semibold rounded-full shadow hover:bg-yellow-500 transition-colors duration-150">
            ▶ Play
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeckCard;
