export default function Loading() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "300px",
      }}
    >
      <div
        style={{
          width: "60px",
          height: "60px",
          border: "6px solid #ddd",
          borderTop: "6px solid #2563eb",
          borderRadius: "50%",
          animation: "spin 1s linear infinite",
        }}
      />

      <p
        style={{
          marginTop: "20px",
          fontSize: "18px",
          color: "#555",
        }}
      >
        Loading data...
      </p>

      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
}
