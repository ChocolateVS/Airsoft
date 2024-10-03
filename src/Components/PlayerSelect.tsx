import { useState } from "react";

interface PlayerSelectProps {
  players: string[];
  setPlayers: (players: string[]) => void;
  prev: () => void;
  next: () => void;
}

export default function PlayerSelect({
  players,
  setPlayers,
  prev,
  next,
}: PlayerSelectProps): JSX.Element {
  const [newPlayer, setNewPlayer] = useState("");
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "30px",
        padding: "20px",
        border: "2px solid black",
        borderRadius: "10px",
        cursor: "pointer",
        width: "400px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <h3>Players</h3>
        {players.map((player, index) => (
          <div key={index}>
            <button
              onClick={() => {
                setPlayers(players.filter((_, i) => i !== index));
              }}
              style={{
                width: "100%",
              }}
            >
              <div
                style={{
                  display: "flex",
                  gap: "20px",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <span>{player}</span>
                <span>X</span>
              </div>
            </button>
          </div>
        ))}
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <input
          type="text"
          placeholder="Enter Player Name"
          onChange={(e) => {
            setNewPlayer(e.currentTarget.value);
          }}
          value={newPlayer}
          style={{
            height: "35px",
            borderRadius: "5px",
            border: "1px solid black",
            padding: "5px",
            paddingLeft: "20px",
          }}
        />
        <button
          onClick={() => {
            if (newPlayer === "") return;
            setPlayers([...players, newPlayer]);
            setNewPlayer("");
          }}
        >
          Add Player
        </button>
      </div>
      <div
        style={{
          display: "flex",
          gap: "10px",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <button onClick={() => prev()}>Prev</button>
        <button onClick={() => next()}>Next</button>
      </div>
    </div>
  );
}
