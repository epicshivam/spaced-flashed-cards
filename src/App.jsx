import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import DeckSelection from "./pages/DeckSelection";
import FlashCardGame from "./pages/FlashCardGame";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/select" element={<DeckSelection />} />
        <Route path="/play/:deckId" element={<FlashCardGame />} />
      </Routes>
    </Router>
  );
};

export default App;
