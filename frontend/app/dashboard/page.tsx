import Sidebar from "../../components/Sidebar";
import MetricCard from "../../components/MetricCard";

export default function Dashboard() {
  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <Sidebar />

      <main
        style={{
          flex: 1,
          padding: "40px",
        }}
      >
        <h1>Business Dashboard</h1>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
            gap: "20px",
            marginTop: "30px",
          }}
        >
          <MetricCard title="Revenue" value="₹12.5M" />
          <MetricCard title="Profit" value="₹4.2M" />
          <MetricCard title="Orders" value="21,560" />
          <MetricCard title="Margin" value="35%" />
        </div>
      </main>
    </div>
  );
}
