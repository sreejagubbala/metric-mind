import DashboardLayout from "../../components/DashboardLayout";
import ReportFilters from "../../components/ReportFilters";
import ReportTable from "../../components/ReportTable";
import ExportButtons from "../../components/ExportButtons";

export default function ReportsPage() {
  return (
    <DashboardLayout>
      <h1>Reports Center</h1>

      <ReportFilters />

      <ExportButtons />

      <ReportTable />
    </DashboardLayout>
  );
}
