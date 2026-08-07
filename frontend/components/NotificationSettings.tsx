"use client";

import { useState } from "react";

export default function NotificationSettings() {
  const [emailNotifications, setEmailNotifications] = useState(true);

  return (
    <div
      style={{
        background: "white",
        padding: "25px",
        borderRadius: "10px",
      }}
    >
      <h2>Notifications</h2>

      <label>
        <input
          type="checkbox"
          checked={emailNotifications}
          onChange={() => setEmailNotifications(!emailNotifications)}
        />

        Email Notifications
      </label>
    </div>
  );
}
