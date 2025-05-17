import React from "react";
import DeckCard from "../components/DeckCard";
import deckData from "../data/decks";

const DeckSelection = () => {
  return (
    <div>
      {deckData.map((deck) => (
        <DeckCard
          key={deck.id}
          title={deck.title}
          description={deck.description}
          image={deck.image}
        />
      ))}
    </div>
  );
};

export default DeckSelection;
