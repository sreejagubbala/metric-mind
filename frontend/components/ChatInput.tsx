"use client";

import { useState } from "react";

export default function ChatInput() {
  const [message, setMessage] = useState("");

  function handleSend() {
    if (message.trim() === "") return;

    alert("Message Sent: " + message);

    setMessage("");
  }

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        padding: "20px",
        background: "#ffffff",
        borderTop: "1px solid #ddd",
      }}
    >
      {/* File Upload Button */}

      <button
        style={{
          padding: "10px 14px",
          borderRadius: "8px",
          border: "1px solid #ccc",
          cursor: "pointer",
        }}
      >
        📎
      </button>

      {/* Voice Button */}

      <button
        style={{
          padding: "10px 14px",
          borderRadius: "8px",
          border: "1px solid #ccc",
          cursor: "pointer",
        }}
      >
        🎤
      </button>

      {/* Input */}

      <input
        type="text"
        placeholder="Ask a business question..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        style={{
          flex: 1,
          padding: "14px",
          borderRadius: "10px",
          border: "1px solid #ccc",
          fontSize: "16px",
        }}
      />

      {/* Send */}

      <button
        onClick={handleSend}
        style={{
          background: "#2563eb",
          color: "white",
          border: "none",
          padding: "14px 25px",
          borderRadius: "10px",
          cursor: "pointer",
        }}
      >
        Send
      </button>
    </div>
  );
}
