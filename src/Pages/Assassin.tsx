import AssassinMode from "Components/Assassin/AssassinMode";
import AssassinSettings from "Components/Assassin/AssassinSettings";
import PlayerChooser from "Components/PlayerChooser";
import PlayerSelect from "Components/PlayerSelect";
import { useEffect, useState } from "react";
import { AssassinModes } from "Types/GameModes";
import { shuffleArray } from "Util/ShuffleArray";

enum SetupState {
  Mode,
  Players,
  Settings,
  PreStart,
  Game,
}

interface AssassinGame {
  players: AssassinProps[];
}

interface AssassinProps {
  name: string;
  target: string;
}

export default function Assassin() {
  const [state, setState] = useState<SetupState>(SetupState.Mode);
  const [players, setPlayers] = useState<string[]>(
    JSON.parse(localStorage.getItem("players") || "[]")
  );

  const [mode, setMode] = useState<AssassinModes | null>(null);

  const [numberOfAssassins, setNumberOfAssassins] = useState<number>(1);
  const [suicideMode, setSuicideMode] = useState<boolean>(false);
  const [scuffedMode, setScuffedMode] = useState<boolean>(false);

  const [chosenPlayer, setChosenPlayer] = useState<string>("");

  const [game, setGame] = useState<AssassinGame>();

  const createGame = () => {
    const AssassinPlayers: AssassinProps[] = [];

    const shuffledPlayers = shuffleArray([...players]) as string[];

    for (let i = 0; i < shuffledPlayers.length; i++) {
      let target = "";

      if (i < numberOfAssassins) {
        const availablePlayers = shuffledPlayers.filter((p) =>
          suicideMode ? p !== shuffledPlayers[i] : true
        ) as string[];

        target =
          availablePlayers[Math.floor(Math.random() * availablePlayers.length)];
      }

      AssassinPlayers.push({
        name: shuffledPlayers[i],
        target,
      });
    }

    // Create game
    setGame({
      players: AssassinPlayers,
    });

    console.log("");
    console.log("Game created");
    console.log("Number of Assassins", numberOfAssassins);
    console.log("Suicide Enabled", suicideMode);
    console.log("Scuffed", scuffedMode);
    console.log(AssassinPlayers);
  };

  const next = () => {
    setState(state + 1);
  };

  const prev = () => {
    setState(state - 1);
  };

  useEffect(() => {
    localStorage.setItem("players", JSON.stringify(players));
  }, [players]);

  useEffect(() => {
    setPlayers(JSON.parse(localStorage.getItem("players") || "[]"));
  }, []);

  return (
    <div
      style={{
        display: "flex",
        height: "100%",
        width: "100%",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <img
        src="/assassin.png"
        className="assassin"
        alt="Assassin"
        width="200px"
        style={{
          objectFit: "contain",
          padding: "20px",
        }}
      />
      <h1>Assassin</h1>

      {state === SetupState.Mode && (
        <AssassinMode
          onModeSelected={(mode) => {
            console.log(mode);
            setMode(mode);
            setState(SetupState.Players);
          }}
        />
      )}
      {state === SetupState.Players && (
        <PlayerSelect
          players={players}
          setPlayers={setPlayers}
          next={next}
          prev={prev}
        />
      )}

      {state === SetupState.Settings && (
        <AssassinSettings
          players={players}
          numberOfAssassins={numberOfAssassins}
          setNumberOfAssassins={setNumberOfAssassins}
          scuffedMode={scuffedMode}
          setScuffedMode={setScuffedMode}
          suicideMode={suicideMode}
          setSuicideMode={setSuicideMode}
          next={next}
          prev={prev}
        />
      )}

      {state === SetupState.PreStart && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            padding: "20px",
            cursor: "pointer",
          }}
        >
          <h1>Ready to start?</h1>
          <button
            style={{
              width: "100%",
            }}
            onClick={() => {
              createGame();
              setState(SetupState.Game);
            }}
          >
            Start
          </button>
          <button
            style={{
              width: "100%",
            }}
            onClick={() => {
              createGame();
              setState(SetupState.Settings);
            }}
          >
            Cancel
          </button>
        </div>
      )}

      {state === SetupState.Game && (
        <PlayerChooser
          players={players.sort()}
          chosenPlayer={chosenPlayer}
          setChosenPlayer={setChosenPlayer}
          reveal={
            <>
              {game?.players.find((p) => p.name === chosenPlayer)?.target !=
              "" ? (
                <>
                  Your are an assassin . Eliminate{" "}
                  {game?.players.find((p) => p.name === chosenPlayer)?.target}
                </>
              ) : (
                <>You are a useless civilian</>
              )}
            </>
          }
          trailing={
            <button
              style={{
                width: "100%",
              }}
              onClick={() => {
                const reset = confirm("Are you sure you want to reset?");
                if (reset) setState(SetupState.PreStart);
              }}
            >
              Reset
            </button>
          }
        />
      )}
    </div>
  );
}
