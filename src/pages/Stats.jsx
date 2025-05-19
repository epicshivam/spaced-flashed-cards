import React, { useEffect, useState } from "react";
import StatsCard from "../components/StatsCard"; // adjust path as needed

const Stats = () => {
  const [deckStats, setDeckStats] = useState([]);

  useEffect(() => {
    const raw = localStorage.getItem("flashcardDeckStats");
    if (!raw) return;

    const parsed = JSON.parse(raw);
    const entries = Object.entries(parsed).map(([deckId, stats]) => ({
      deckId,
      deckName: stats.name || `Deck ${deckId}`,
      know: stats.know || 0,
      dontKnow: stats.dontKnow || 0,
      lastPlayed: stats.lastPlayed || "",
    }));

    setDeckStats(entries);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-tr from-indigo-100 via-purple-100 to-pink-100 p-8">
      <h1 className="text-3xl font-bold text-center mb-8">Your Deck Stats</h1>
      <div className="flex flex-wrap justify-center gap-6">
        {deckStats.length > 0 ? (
          deckStats.map((deck) => <StatsCard key={deck.deckId} {...deck} />)
        ) : (
          <p className="text-gray-600 text-center mt-10">
            No stats yet. Play some decks!
          </p>
        )}
      </div>
    </div>
  );
};

export default Stats;
