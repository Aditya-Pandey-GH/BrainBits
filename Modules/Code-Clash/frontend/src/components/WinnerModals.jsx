export default function WinnerModal({ winner }) {
  if (!winner) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.7)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <div
        style={{
          background: "#020617",
          padding: 30,
          borderRadius: 10
        }}
      >
        <h1>🏆 Winner</h1>
        <h2>{winner.username}</h2>
      </div>
    </div>
  );
}
