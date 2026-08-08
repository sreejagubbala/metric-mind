"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#ffffff",
      }}
    >
      {/* Header */}
      <header
        style={{
          height: "70px",
          background: "#2563eb",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 40px",
          boxSizing: "border-box",
          width: "100%",
        }}
      >
        {/* Logo */}
        <h2
          style={{
            color: "white",
            margin: 0,
            fontSize: "25px",
            fontWeight: "700",
          }}
        >
          MetricMind
        </h2>

        {/* Login Button */}
        <button
          onClick={() => router.push("/login")}
          style={{
            padding: "10px 25px",
            background: "white",
            color: "#2563eb",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            fontSize: "16px",
            fontWeight: "600",
          }}
        >
          Login
        </button>
      </header>

      {/* Main Content */}
      <section
        style={{
          height: "calc(100vh - 70px)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "60px",
            marginBottom: "20px",
          }}
        >
          MetricMind
        </h1>

        <p
          style={{
            fontSize: "22px",
            margin: 0,
          }}
        >
          AI Powered Business Intelligence Platform
        </p>
      </section>
    </main>
  );
}
