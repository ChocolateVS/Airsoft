export default function Mafia() {
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
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          width: "400px",
          padding: "20px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            width: "100%",
            maxWidth: "400px",
            padding: "20px",
            border: "1px solid black",
            borderRadius: "10px",
            cursor: "pointer",
          }}
        >
          <h3>Classic</h3>
          <span>Hosted by a bot</span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            width: "100%",
            maxWidth: "400px",
            padding: "20px",
            border: "1px solid black",
            borderRadius: "10px",
            cursor: "pointer",
          }}
        >
          <h3>Pass Around</h3>
          <span>Not hosted by a bot</span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            width: "100%",
            maxWidth: "400px",
            padding: "20px",
            border: "1px solid black",
            borderRadius: "10px",
            cursor: "pointer",
          }}
        >
          <h3>Network - LAN</h3>
          <span>Probably hosted by a bot</span>
          <button>Join</button>
          <button>Host</button>
        </div>
      </div>
    </div>
  );
}
