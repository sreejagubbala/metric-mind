"use client";

import { useState } from "react";

export default function ChatBox() {
  const [question, setQuestion] = useState("");

  const [messages, setMessages] = useState([
    {
      sender: "AI",
      text: "Hello! Ask me any business question.",
    },
  ]);

  function sendMessage() {
    if (question.trim() === "") return;

    setMessages([
      ...messages,
      {
        sender: "You",
        text: question,
      },
      {
        sender: "AI",
        text: "Backend connection will be added later.",
      },
    ]);

    setQuestion("");
  }

  return (
    <div>

      <div
        style={{
          border: "1px solid #ddd",
          height: "400px",
          overflowY: "scroll",
          padding: "20px",
          borderRadius: "8px",
          background: "#ffffff",
        }}
      >
        {messages.map((msg, index) => (
          <div
            key={index}
            style={{
              marginBottom: "20px",
            }}
          >
            <strong>{msg.sender}:</strong>

            <p>{msg.text}</p>
          </div>
        ))}
      </div>

      <div
        style={{
          display: "flex",
          marginTop: "20px",
        }}
      >
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Ask your question..."
          style={{
            flex: 1,
            padding: "12px",
          }}
        />

        <button
          onClick={sendMessage}
          style={{
            marginLeft: "10px",
            padding: "12px 25px",
            background: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "6px",
          }}
        >
          Send
        </button>
      </div>

    </div>
  );
}
