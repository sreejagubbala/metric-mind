import Navbar from "../../components/Navbar";
import MetricCard from "../../components/MetricCard";

export default function Dashboard() {
  return (
    <>
      <Navbar />

      <div
        style={{
          padding: "40px",
        }}
      >
        <h1
          style={{
            fontSize: "36px",
            marginBottom: "30px",
          }}
        >
          Dashboard
        </h1>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
            gap: "20px",
          }}
        >
          <MetricCard title="Revenue" value="₹ 12.5M" />

          <MetricCard title="Profit" value="₹ 4.2M" />

          <MetricCard title="Orders" value="21,560" />

          <MetricCard title="Margin" value="35%" />
        </div>
      </div>
    </>
  );
}
