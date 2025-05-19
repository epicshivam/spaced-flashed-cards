import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import DeckSelection from "./pages/DeckSelection";
import FlashCardGame from "./pages/FlashCardGame";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      {/* Full-height flex layout */}
      <div className="flex flex-col min-h-screen">
        {/* Main content takes up available vertical space */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/select" element={<DeckSelection />} />
            <Route path="/play/:deckId" element={<FlashCardGame />} />
          </Routes>
        </main>

        {/* Footer sticks to bottom with no extra margin */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
