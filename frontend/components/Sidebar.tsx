export default function Sidebar() {
  return (
    <aside
      style={{
        width: "250px",
        height: "100vh",
        background: "#1e293b",
        color: "white",
        padding: "20px",
      }}
    >
      <h2
        style={{
          marginBottom: "30px",
        }}
      >
        MetricMind
      </h2>

      <ul
        style={{
          listStyle: "none",
          padding: 0,
        }}
      >
        <li style={{ marginBottom: "20px" }}>
          <a href="/" style={{ color: "white", textDecoration: "none" }}>
             Home
          </a>
        </li>

        <li style={{ marginBottom: "20px" }}>
          <a href="/chat" style={{ color: "white", textDecoration: "none" }}>
             Chat
          </a>
        </li>

        <li style={{ marginBottom: "20px" }}>
          <a href="/dashboard" style={{ color: "white", textDecoration: "none" }}>
             Dashboard
          </a>
        </li>

        <li style={{ marginBottom: "20px" }}>
          <a href="/reports" style={{ color: "white", textDecoration: "none" }}>
             Reports
          </a>
        </li>

        <li style={{ marginBottom: "20px" }}>
          <a href="/settings" style={{ color: "white", textDecoration: "none" }}>
            ⚙️ Settings
          </a>
        </li>
      </ul>
    </aside>
  );
}
