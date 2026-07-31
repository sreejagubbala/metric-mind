"use client";

import { useState } from "react";

interface Chat {
  id: number;
  title: string;
  date: string;
}

export default function ChatHistory() {
  const [chats] = useState<Chat[]>([
    {
      id: 1,
      title: "European Sales Analysis",
      date: "Today",
    },
    {
      id: 2,
      title: "Revenue Dashboard",
      date: "Today",
    },
    {
      id: 3,
      title: "Profit Margin Report",
      date: "Yesterday",
    },
    {
      id: 4,
      title: "Customer Churn Analysis",
      date: "Yesterday",
    },
    {
      id: 5,
      title: "Inventory Forecast",
      date: "2 Days Ago",
    },
  ]);

  return (
    <aside
      style={{
        width: "280px",
        height: "100vh",
        background: "#111827",
        color: "white",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Header */}

      <div
        style={{
          padding: "20px",
          borderBottom: "1px solid #374151",
        }}
      >
        <h2>MetricMind</h2>

        <button
          style={{
            width: "100%",
            marginTop: "15px",
            padding: "12px",
            background: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          + New Chat
        </button>
      </div>

      {/* Search */}

      <div
        style={{
          padding: "15px",
        }}
      >
        <input
          type="text"
          placeholder="Search Chats..."
          style={{
            width: "100%",
            padding: "10px",
            borderRadius: "8px",
            border: "none",
          }}
        />
      </div>

      {/* Chat List */}

      <div
        style={{
          flex: 1,
          overflowY: "auto",
          padding: "10px",
        }}
      >
        {chats.map((chat) => (
          <div
            key={chat.id}
            style={{
              background: "#1f2937",
              padding: "15px",
              borderRadius: "10px",
              marginBottom: "12px",
              cursor: "pointer",
            }}
          >
            <h4
              style={{
                marginBottom: "5px",
              }}
            >
              {chat.title}
            </h4>

            <small
              style={{
                color: "#9ca3af",
              }}
            >
              {chat.date}
            </small>
          </div>
        ))}
      </div>

      {/* Footer */}

      <div
        style={{
          padding: "20px",
          borderTop: "1px solid #374151",
        }}
      >
        <strong>Logged in as</strong>

        <p>Admin User</p>
      </div>
    </aside>
  );
}
