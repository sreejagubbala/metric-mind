"use client";

import { useState } from "react";

export default function ThemeSettings() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      style={{
        background: "white",
        padding: "25px",
        borderRadius: "10px",
        marginBottom: "20px",
      }}
    >
      <h2>Appearance</h2>

      <label>
        <input
          type="checkbox"
          checked={darkMode}
          onChange={() => setDarkMode(!darkMode)}
        />

        Enable Dark Mode
      </label>
    </div>
  );
}
