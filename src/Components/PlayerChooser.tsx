import { useState } from "react";

interface PlayerChooserProps {
  players: string[];
  reveal: React.ReactNode;
  trailing: React.ReactNode;
  chosenPlayer: string;
  setChosenPlayer: (chosenPlayer: string) => void;
}

enum PlayerChooserState {
  Choose,
  Confirm,
  Reveal,
}

export default function PlayerChooser({
  players,
  reveal,
  trailing,
  chosenPlayer,
  setChosenPlayer,
}: PlayerChooserProps): JSX.Element {
  const [chooseState, setChooseState] = useState<PlayerChooserState>(
    PlayerChooserState.Choose
  );

  return (
    <>
      {chooseState === PlayerChooserState.Choose && (
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
            <h3>Who are you?</h3>
            {players.map((player, index) => (
              <div key={index}>
                <button
                  onClick={() => {
                    setChosenPlayer(player);
                    setChooseState(PlayerChooserState.Confirm);
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
                  </div>
                </button>
              </div>
            ))}
          </div>
          {trailing}
        </div>
      )}

      {chooseState === PlayerChooserState.Confirm && (
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
          <h3>Are you sure you are {chosenPlayer}, u r sus....</h3>
          <button
            onClick={() => {
              setChooseState(PlayerChooserState.Reveal);
            }}
            style={{
              width: "100%",
            }}
          >
            Yes
          </button>
          <button
            onClick={() => {
              setChooseState(PlayerChooserState.Choose);
            }}
            style={{
              width: "100%",
            }}
          >
            No, I am sus
          </button>
        </div>
      )}

      {chooseState === PlayerChooserState.Reveal && (
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
          {reveal}

          <button
            onClick={() => {
              setChooseState(PlayerChooserState.Choose);
            }}
            style={{
              width: "100%",
            }}
          >
            Ok... 👀
          </button>
        </div>
      )}
    </>
  );
}
