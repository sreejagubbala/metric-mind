"use client";

import { useState } from "react";

export default function LoginForm() {

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  function handleLogin() {

    alert("Backend login will be connected later.");

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

      import Logo from "./Logo";
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

      <label>Email</label>

      <input
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{
          width: "100%",
          padding: "12px",
          marginTop: "8px",
          marginBottom: "20px",
        }}
      />

      <label>Password</label>

      <input
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{
          width: "100%",
          padding: "12px",
          marginTop: "8px",
          marginBottom: "20px",
        }}
      />

      <button
        onClick={handleLogin}
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
        Sign In
      </button>

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
