import DashboardLayout from "../../components/DashboardLayout";
import DashboardHeader from "../../components/DashboardHeader";
import KPIGrid from "../../components/KPIGrid";
import RevenueChart from "../../components/RevenueChart";
import SalesByRegion from "../../components/SalesByRegion";
import RecentActivity from "../../components/RecentActivity";

export default function Dashboard() {
  return (
    <DashboardLayout>

      <DashboardHeader />

      <KPIGrid />

      <RevenueChart />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "20px",
          marginTop: "30px",
        }}
      >
        <SalesByRegion />

        <RecentActivity />
      </div>

    </DashboardLayout>
  );
}
