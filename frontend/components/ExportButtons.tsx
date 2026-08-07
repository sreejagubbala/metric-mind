export default function ExportButtons() {
  return (
    <div
      style={{
        display: "flex",
        gap: "15px",
        marginBottom: "20px",
      }}
    >
      <button
        style={{
          background: "green",
          color: "white",
          padding: "12px 20px",
          border: "none",
          borderRadius: "8px",
        }}
      >
        Export Excel
      </button>

      <button
        style={{
          background: "#dc2626",
          color: "white",
          padding: "12px 20px",
          border: "none",
          borderRadius: "8px",
        }}
      >
        Export PDF
      </button>
    </div>
  );
}
