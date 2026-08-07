export default function NotificationPanel() {
  return (
    <div
      style={{
        background: "white",
        padding: "20px",
        borderRadius: "10px",
        marginTop: "30px",
      }}
    >
      <h2>Notifications</h2>

      <ul>
        <li> Dashboard updated successfully</li>
        <li> New monthly report available</li>
        <li> AI completed sales analysis</li>
        <li> Warehouse data synchronized</li>
      </ul>
    </div>
  );
}
