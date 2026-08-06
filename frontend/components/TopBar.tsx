export default function TopBar() {
  return (
    <header
      style={{
        height: "70px",
        background: "white",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 30px",
        borderBottom: "1px solid #ddd",
      }}
    >
      <h2>MetricMind Dashboard</h2>

      <div>
        🔔 Notifications

        <span
          style={{
            marginLeft: "30px",
          }}
        >
          👤 Admin
        </span>
      </div>
    </header>
  );
}
