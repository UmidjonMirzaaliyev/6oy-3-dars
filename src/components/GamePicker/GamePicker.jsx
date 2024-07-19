import { useState } from "react";

function GameNamePicker() {
  const [selectedGame, setSelectedGame] = useState("");

  const games = [
    "Chess",
    "GTA 5",
    "GTA San Andreas",
    "CS 1.6",
    "Call of Duty",
    "PUBG",
    "NEED FOR SPEED most wanted",
    "CS GO",
  ];

  const pickGame = () => {
    const randomIndex = Math.floor(Math.random() * games.length);
    setSelectedGame(games[randomIndex]);
  };

  return (
    <div style={{ textAlign: "center", margin: "20px" }}>
      <h2>Game Name Picker</h2>
      <button onClick={pickGame} style={{ margin: "10px" }}>
        Pick Game
      </button>
      {selectedGame && <p>Selected Game: {selectedGame}</p>}
    </div>
  );
}

export default GameNamePicker;
