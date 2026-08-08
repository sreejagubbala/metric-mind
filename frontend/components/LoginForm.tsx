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

  async function handleLogin(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      // FastAPI OAuth2 expects form data
      const formData = new URLSearchParams();

      formData.append("username", email);
      formData.append("password", password);

      const response = await fetch(
        "http://127.0.0.1:8000/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/x-www-form-urlencoded",
          },
          body: formData.toString(),
        }
      );

      const data = await response.json();

      // Wrong credentials
      if (!response.ok) {
        setError(
          data.detail ||
            "Invalid Email ID or Password"
        );
        return;
      }

      // Save JWT token
      if (data.access_token) {
        localStorage.setItem(
          "access_token",
          data.access_token
        );
      }

      // Successful login
      router.push("/dashboard");
    } catch (error) {
      console.error("Login error:", error);

      setError(
        "Unable to connect to the backend. Please make sure the backend is running."
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
        boxShadow:
          "0 5px 15px rgba(0,0,0,0.15)",
        boxSizing: "border-box",
      }}
    >
      {/* Logo */}
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
        {/* Email ID */}
        <label
          style={{
            display: "block",
            fontWeight: "600",
            marginBottom: "8px",
          }}
        >
          Email ID
        </label>

        <input
          type="email"
          placeholder="Enter your Email ID"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          required
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "20px",
            border: "1px solid #ccc",
            borderRadius: "7px",
            boxSizing: "border-box",
            fontSize: "15px",
          }}
        />

        {/* Password */}
        <label
          style={{
            display: "block",
            fontWeight: "600",
            marginBottom: "8px",
          }}
        >
          Password
        </label>

        <input
          type="password"
          placeholder="Enter your Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
          required
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "10px",
            border: "1px solid #ccc",
            borderRadius: "7px",
            boxSizing: "border-box",
            fontSize: "15px",
          }}
        />

        {/* Forgot Password */}
        <div
          style={{
            textAlign: "right",
            marginBottom: "20px",
          }}
        >
          <button
            type="button"
            onClick={() =>
              router.push("/forgot-password")
            }
            style={{
              background: "none",
              border: "none",
              color: "#2563eb",
              cursor: "pointer",
              padding: 0,
              fontSize: "14px",
            }}
          >
            Forgot Password?
          </button>
        </div>

        {/* Error Message */}
        {error && (
          <div
            style={{
              background: "#fee2e2",
              color: "#dc2626",
              padding: "10px",
              borderRadius: "6px",
              marginBottom: "15px",
              fontSize: "14px",
            }}
          >
            {error}
          </div>
        )}

        {/* Sign In */}
        <button
          type="submit"
          disabled={loading}
          style={{
            width: "100%",
            background: loading
              ? "#9ca3af"
              : "#2563eb",
            color: "white",
            border: "none",
            padding: "14px",
            borderRadius: "8px",
            cursor: loading
              ? "not-allowed"
              : "pointer",
            fontSize: "16px",
            fontWeight: "600",
          }}
        >
          {loading
            ? "Signing In..."
            : "Sign In"}
        </button>
      </form>

      {/* New User */}
      <div
        style={{
          textAlign: "center",
          marginTop: "25px",
          paddingTop: "20px",
          borderTop: "1px solid #eee",
        }}
      >
        <span
          style={{
            color: "#666",
            fontSize: "14px",
          }}
        >
          New User?{" "}
        </span>

        <button
          type="button"
          onClick={() =>
            router.push("/register")
          }
          style={{
            background: "none",
            border: "none",
            color: "#2563eb",
            cursor: "pointer",
            fontWeight: "600",
            fontSize: "14px",
          }}
        >
          Create Account
        </button>
      </div>
    </div>
  );
}