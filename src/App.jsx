import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import DeckSelection from "./pages/DeckSelection";
import FlashCardGame from "./pages/FlashCardGame";
import Stats from "./pages/Stats";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/select" element={<DeckSelection />} />
        <Route path="/play/:deckId" element={<FlashCardGame />} />
        <Route path="/stats" element={<Stats />} />
      </Routes>
    </Router>
  );
};

export default App;
