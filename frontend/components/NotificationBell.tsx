"use client";

export default function NotificationBell() {
  return (
    <button
      style={{
        border: "none",
        background: "white",
        fontSize: "22px",
        cursor: "pointer",
        position: "relative",
      }}
    >
      🔔

      <span
        style={{
          position: "absolute",
          top: "-5px",
          right: "-5px",
          background: "red",
          color: "white",
          borderRadius: "50%",
          width: "18px",
          height: "18px",
          fontSize: "12px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        3
      </span>
    </button>
  );
}
