export default function ReportFilters() {
  return (
    <div
      style={{
        display: "flex",
        gap: "15px",
        margin: "25px 0",
      }}
    >
      <input type="date" />

      <input type="date" />

      <input
        placeholder="Search Report..."
        style={{
          flex: 1,
          padding: "10px",
        }}
      />

      <button
        style={{
          padding: "10px 20px",
          background: "#2563eb",
          color: "white",
          border: "none",
          borderRadius: "6px",
        }}
      >
        Filter
      </button>
    </div>
  );
}
