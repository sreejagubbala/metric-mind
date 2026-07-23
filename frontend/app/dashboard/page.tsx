import DashboardLayout from "../../components/DashboardLayout";
import MetricCard from "../../components/MetricCard";

export default function Dashboard() {
  return (
    <DashboardLayout>
      <h1
        style={{
          marginBottom: "30px",
        }}
      >
        Business Overview
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gap: "20px",
        }}
      >
        <MetricCard title="Revenue" value="₹12.5M" />
        <MetricCard title="Profit" value="₹4.2M" />
        <MetricCard title="Orders" value="21,560" />
        <MetricCard title="Margin" value="35%" />
      </div>
    </DashboardLayout>
  );
}
