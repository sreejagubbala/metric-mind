import LogoutButton from "./LogoutButton";
import ProfileMenu from "./ProfileMenu";
export default function TopBar() {
  return (
    <header
      style={{
        height: "70px",
        background: "white",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 30px",
        borderBottom: "1px solid #ddd",
      }}
    >
      <h2>MetricMind Dashboard</h2>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
        }}
        >
 

  

        <span
          style={{
            marginLeft: "30px",
          }}
        >
           <NotificationBell />
          <ProfileMenu />
          <LogoutButton />
        </span>
      </div>
    </header>
  );
}
