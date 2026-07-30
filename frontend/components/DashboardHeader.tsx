export default function DashboardHeader() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "30px",
      }}
    >
      <div>
        <h1>Business Dashboard</h1>

        <p
          style={{
            color: "#666",
          }}
        >
          Welcome back! Here's today's business overview.
        </p>
      </div>

      <button
        style={{
          background: "#2563eb",
          color: "white",
          padding: "12px 20px",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        Export Report
      </button>
    </div>
  );
}
