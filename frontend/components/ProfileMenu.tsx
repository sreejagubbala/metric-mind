"use client";

import { useState } from "react";

export default function ProfileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ position: "relative" }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          border: "none",
          background: "#2563eb",
          color: "white",
          padding: "10px 18px",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        👤 Admin
      </button>

      {open && (
        <div
          style={{
            position: "absolute",
            right: 0,
            top: "50px",
            background: "white",
            border: "1px solid #ddd",
            borderRadius: "8px",
            minWidth: "180px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
            zIndex: 100,
          }}
        >
          <button
            style={{
              width: "100%",
              padding: "12px",
              border: "none",
              background: "white",
              textAlign: "left",
              cursor: "pointer",
            }}
          >
            My Profile
          </button>

          <button
            style={{
              width: "100%",
              padding: "12px",
              border: "none",
              background: "white",
              textAlign: "left",
              cursor: "pointer",
            }}
          >
            Settings
          </button>

          <button
            style={{
              width: "100%",
              padding: "12px",
              border: "none",
              background: "#ef4444",
              color: "white",
              cursor: "pointer",
            }}
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
}
