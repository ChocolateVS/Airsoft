import { AssassinModes } from "Types/GameModes";

export default function AssassinMode({
  onModeSelected,
}: {
  onModeSelected: (mode: AssassinModes) => void;
}) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <div
        onClick={() => {
          alert("Doesn't work yet cause was made by a bot");
        }}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          padding: "20px",
          border: "2px solid black",
          borderRadius: "10px",
          cursor: "pointer",
          width: "400px",
        }}
      >
        <h3>Classic</h3>
        <span>Hosted by a bot</span>
      </div>
      <div
        onClick={() => {
          onModeSelected(AssassinModes.PassAround);
        }}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          width: "400px",
          padding: "20px",
          border: "2px solid black",
          borderRadius: "10px",
          cursor: "pointer",
        }}
      >
        <h3>Pass Around</h3>
        <span>Not hosted by a bot</span>
      </div>
      <div
        onClick={() => {
          alert("Why r u clicking me? I'm not a button silly bot");
        }}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          width: "400px",
          padding: "20px",
          border: "2px solid black",
          borderRadius: "10px",
          cursor: "pointer",
        }}
      >
        <h3>Network - LAN</h3>
        <span>Probably hosted by a bot</span>
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            alert(
              "Did you REALLY think i could be bothered to make this work?"
            );
          }}
        >
          Join
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            alert("I'm a bot, I can't host games");
          }}
        >
          Host
        </button>
      </div>
    </div>
  );
}
