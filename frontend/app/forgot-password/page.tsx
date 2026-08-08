"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ForgotPasswordPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    alert("Password reset functionality will be connected to the backend.");
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f5f7fb",
      }}
    >
      <div
        style={{
          width: "420px",
          background: "white",
          padding: "40px",
          borderRadius: "15px",
          boxShadow: "0 5px 15px rgba(0,0,0,0.15)",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            color: "#2563eb",
          }}
        >
          Forgot Password
        </h1>

        <p
          style={{
            textAlign: "center",
            color: "#666",
            marginBottom: "30px",
          }}
        >
          Enter your Email ID to reset your password.
        </p>

        <form onSubmit={handleSubmit}>
          <label>Email ID</label>

          <input
            type="email"
            placeholder="Enter your Email ID"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              width: "100%",
              padding: "12px",
              marginTop: "8px",
              marginBottom: "20px",
              boxSizing: "border-box",
            }}
          />

          <button
            type="submit"
            style={{
              width: "100%",
              background: "#2563eb",
              color: "white",
              border: "none",
              padding: "14px",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            Reset Password
          </button>
        </form>

        <button
          onClick={() => router.push("/login")}
          style={{
            width: "100%",
            marginTop: "20px",
            padding: "10px",
            background: "none",
            border: "none",
            color: "#2563eb",
            cursor: "pointer",
          }}
        >
          Back to Login
        </button>
      </div>
    </main>
  );
}