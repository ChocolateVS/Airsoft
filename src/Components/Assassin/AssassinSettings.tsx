interface AssassinSettingsProps {
  players: string[];
  numberOfAssassins: number;
  setNumberOfAssassins: (numberOfAssassins: number) => void;
  scuffedMode: boolean;
  setScuffedMode: (scuffedMode: boolean) => void;
  suicideMode: boolean;
  setSuicideMode: (suicideMode: boolean) => void;
  prev: () => void;
  next: () => void;
}

export default function AssassinSettings({
  players,
  numberOfAssassins,
  setNumberOfAssassins,
  scuffedMode,
  setScuffedMode,
  suicideMode,
  setSuicideMode,
  prev,
  next,
}: AssassinSettingsProps) {
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
      className="noselect"
    >
      <div
        style={{
          display: "flex",
          gap: "10px",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h3>Settings</h3>
        <h4>Players {players.length}</h4>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "10px",
          alignItems: "center",
          backgroundColor: "#121212",
          color: "white",
          paddingLeft: "20px",
          justifyContent: "space-between",
        }}
      >
        Number of Assassins
        <button>{numberOfAssassins}</button>
        <div
          style={{
            display: "flex",
            gap: "5px",
            justifyContent: "space-between",
            padding: "5px",
          }}
        >
          <button
            onClick={() => {
              if (numberOfAssassins === 1) return;
              setNumberOfAssassins(numberOfAssassins - 1);
            }}
          >
            -
          </button>
          <button
            onClick={() => {
              if (numberOfAssassins >= players.length) return;
              setNumberOfAssassins(numberOfAssassins + 1);
            }}
          >
            +
          </button>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "10px",
          alignItems: "center",
          backgroundColor: "#121212",
          color: "white",
          paddingLeft: "20px",
          justifyContent: "space-between",
        }}
        onClick={() => {
          setScuffedMode(!scuffedMode);
        }}
      >
        Scuffed
        <div
          style={{
            height: "40px",
            width: "40px",
            borderRadius: "5px",
            border: "1px solid black",
          }}
        >
          <input
            type="checkbox"
            onChange={(e) => {
              setScuffedMode(e.currentTarget.checked);
              e.stopPropagation();
            }}
            checked={scuffedMode}
            style={{
              height: "100%",
              margin: "0",
            }}
          />
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "10px",
          alignItems: "center",
          backgroundColor: "#121212",
          color: "white",
          paddingLeft: "20px",
          justifyContent: "space-between",
        }}
        onClick={() => {
          setSuicideMode(!suicideMode);
        }}
      >
        Suicide
        <div
          style={{
            height: "40px",
            width: "40px",
            borderRadius: "5px",
            border: "1px solid black",
          }}
        >
          <input
            type="checkbox"
            onChange={(e) => {
              setSuicideMode(e.currentTarget.checked);
              e.stopPropagation();
            }}
            checked={suicideMode}
            style={{
              height: "100%",
              margin: "0",
            }}
          />
        </div>
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
