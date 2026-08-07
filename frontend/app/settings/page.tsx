import DashboardLayout from "../../components/DashboardLayout";
import UserProfile from "../../components/UserProfile";
import ThemeSettings from "../../components/ThemeSettings";
import NotificationSettings from "../../components/NotificationSettings";

export default function SettingsPage() {
  return (
    <DashboardLayout>
      <h1>Settings</h1>

      <UserProfile />

      <ThemeSettings />

      <NotificationSettings />
    </DashboardLayout>
  );
}
