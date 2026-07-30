export default function ChatHeader() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "18px 25px",
        background: "#ffffff",
        borderBottom: "1px solid #ddd",
      }}
    >
      <div>
        <h2
          style={{
            margin: 0,
          }}
        >
          MetricMind AI
        </h2>

        <p
          style={{
            marginTop: "5px",
            color: "green",
            fontSize: "14px",
          }}
        >
          ● Connected
        </p>
      </div>

      <button
        style={{
          background: "#2563eb",
          color: "white",
          border: "none",
          padding: "10px 20px",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        + New Chat
      </button>
    </div>
  );
}
