export default function UserProfile() {
  return (
    <div
      style={{
        background: "white",
        padding: "25px",
        borderRadius: "10px",
        marginBottom: "20px",
      }}
    >
      <h2>User Profile</h2>

      <p>Name: Admin User</p>

      <p>Email: admin@metricmind.com</p>

      <button
        style={{
          background: "#2563eb",
          color: "white",
          border: "none",
          padding: "10px 20px",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        Edit Profile
      </button>
    </div>
  );
}
