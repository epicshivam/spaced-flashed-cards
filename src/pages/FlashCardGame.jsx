import React from "react";
import FlashCard from "../components/FlashCard";
import { useParams } from "react-router-dom";
import decksData from "../data/decks";

const FlashCardGame = () => {
  const { deckId } = useParams();
  const deck = decksData.find((d) => d.id === Number(deckId));

  if (!deck) return <div>Deck not found</div>;

  return (
    <div>
      <FlashCard flashcards={deck.flashcards} />
    </div>
  );
};

export default FlashCardGame;
