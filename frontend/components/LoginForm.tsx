"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Logo from "./Logo";

export default function LoginForm() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      const formData = new URLSearchParams();

      formData.append("username", email);
      formData.append("password", password);

      const response = await fetch("http://127.0.0.1:8000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formData.toString(),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.detail || "Invalid email or password");
        return;
      }

      // Save access token
      if (data.access_token) {
        localStorage.setItem("access_token", data.access_token);
      }

      // Redirect after successful login
      router.push("/dashboard");
    } catch (error) {
      console.error(error);

      setError(
        "Unable to connect to the backend. Please make sure the server is running."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div
      style={{
        width: "420px",
        background: "white",
        padding: "40px",
        borderRadius: "15px",
        boxShadow: "0 5px 15px rgba(0,0,0,0.15)",
      }}
    >
      <Logo />

      <p
        style={{
          textAlign: "center",
          color: "#666",
          marginBottom: "30px",
        }}
      >
        Enterprise Analytics Platform
      </p>

      <form onSubmit={handleLogin}>
        {/* Email */}
        <label>Email</label>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{
            width: "100%",
            padding: "12px",
            marginTop: "8px",
            marginBottom: "20px",
            boxSizing: "border-box",
            border: "1px solid #ccc",
            borderRadius: "6px",
          }}
        />

        {/* Password */}
        <label>Password</label>

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{
            width: "100%",
            padding: "12px",
            marginTop: "8px",
            marginBottom: "20px",
            boxSizing: "border-box",
            border: "1px solid #ccc",
            borderRadius: "6px",
          }}
        />

        {/* Error message */}
        {error && (
          <p
            style={{
              color: "#dc2626",
              background: "#fee2e2",
              padding: "10px",
              borderRadius: "6px",
              fontSize: "14px",
              marginBottom: "15px",
            }}
          >
            {error}
          </p>
        )}

        {/* Sign In */}
        <button
          type="submit"
          disabled={loading}
          style={{
            width: "100%",
            background: loading ? "#9ca3af" : "#2563eb",
            color: "white",
            border: "none",
            padding: "14px",
            borderRadius: "8px",
            cursor: loading ? "not-allowed" : "pointer",
            fontSize: "16px",
            fontWeight: "600",
          }}
        >
          {loading ? "Signing In..." : "Sign In"}
        </button>
      </form>

      <p
        style={{
          marginTop: "20px",
          textAlign: "center",
          color: "#777",
        }}
      >
        Forgot Password?
      </p>
    </div>
  );
}