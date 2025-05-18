import React from "react";
import { useNavigate } from "react-router-dom";

const DeckCard = ({ id, title, description, image, isActive }) => {
  const navigate = useNavigate();

  return (
    <div
      className={`bg-white border-4 ${
        isActive ? "border-yellow-500" : "border-transparent"
      } rounded-xl shadow-md w-80 transition-transform duration-300`}
    >
      <div className="bg-amber-100 w-full h-40 flex justify-center items-center rounded-t-xl overflow-hidden">
        <img src={image} alt={title} className="object-contain h-28 w-28" />
      </div>
      <div className="p-6 flex flex-col items-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">{title}</h2>
        <p className="text-base text-gray-700 mb-4 text-center">
          {description}
        </p>
        <button
          onClick={() => navigate(`/play/${id}`)}
          className="px-6 py-2 bg-yellow-400 text-black font-semibold rounded-full shadow hover:bg-yellow-500 transition-colors duration-150 cursor-pointer"
        >
          ▶ Play
        </button>
      </div>
    </div>
  );
};

export default DeckCard;
