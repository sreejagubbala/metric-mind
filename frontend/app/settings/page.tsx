import Sidebar from "../../components/Sidebar";

export default function Settings() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <main
        style={{
          padding: "40px",
          flex: 1,
        }}
      >
        <h1>Settings</h1>

        <p>User preferences will be managed here.</p>
      </main>
    </div>
  );
}
