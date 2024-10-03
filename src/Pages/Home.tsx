export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        width: "100%",
      }}
    >
      <a
        href="/mafia"
        target="_blank"
        style={{
          maxWidth: "500px",
        }}
      >
        <img
          src="/mafia.png"
          className="logo mafia"
          alt="Mafia"
          style={{
            height: "100%",
            width: "100%",
          }}
        />
      </a>

      <a
        href="/assassin"
        target="_blank"
        style={{
          maxWidth: "500px",
        }}
      >
        <img
          src="/assassin.png"
          className="logo assassin"
          alt="Assassin"
          style={{
            height: "100%",
            width: "100%",
          }}
        />
      </a>

      <a
        href="https://www.google.com/search?sca_esv=673610017e259797&rlz=1C1ONGR_enNZ1069NZ1069&sxsrf=ADLYWIKGX2SfDVGLy31X0SCJvZmrBxzYpg:1727956619220&q=hot+furries&udm=2&fbs=AEQNm0Bqzy2A7JdsZg3J6bXbexmPYRAnmocz_wSkO9o2d70T0heh0g9PP-lN5PtKwO3uHaElUXXU1c91d54ABW-Z31cLQibE9V2AZXvGJRS_15EFhxq5hH5pUi9MEYuTIxe5dX11BFqdQG2uejtRhlTJe_ytdCqt-JKSu64ZQyL-vQthtWmZsvn3hXb_VELDwjLW1452OInYZ1qPs_nsUoEyjtmsAqEPdg&sa=X&ved=2ahUKEwjQ9eaDlPKIAxUAk1YBHR_mLyAQtKgLegQIFxAB&biw=1920&bih=993&dpr=1"
        target="_blank"
        rel="noreferrer"
        style={{
          maxWidth: "500px",
        }}
      >
        <img
          src="/furry.png"
          className="logo furry"
          alt="Something"
          style={{
            height: "100%",
            width: "100%",
          }}
        />
      </a>
    </div>
  );
}
