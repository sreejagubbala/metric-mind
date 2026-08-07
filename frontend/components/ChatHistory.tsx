export default function ChatHistory() {
  return (
    <div
      style={{
        width: "250px",
        background: "#f5f5f5",
        padding: "20px",
        borderRight: "1px solid #ddd",
      }}
    >
      <h3>Recent Chats</h3>

      <ul style={{ listStyle: "none", padding: 0 }}>
        <li>Revenue Analysis</li>
        <li>Sales Dashboard</li>
        <li>Europe Report</li>
        <li>Profit Summary</li>
      </ul>
    </div>
  );
}
