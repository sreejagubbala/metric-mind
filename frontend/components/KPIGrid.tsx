import MetricCard from "./MetricCard";

export default function KPIGrid() {
  return (
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
  );
}
