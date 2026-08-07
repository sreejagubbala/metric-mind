export default function ReportTable() {
  const reports = [
    {
      id: 1,
      title: "Revenue Analysis",
      date: "28 Jul 2026",
      status: "Completed",
    },
    {
      id: 2,
      title: "Sales Report",
      date: "27 Jul 2026",
      status: "Completed",
    },
    {
      id: 3,
      title: "Profit Analysis",
      date: "25 Jul 2026",
      status: "Processing",
    },
  ];

  return (
    <table
      style={{
        width: "100%",
        borderCollapse: "collapse",
        background: "white",
      }}
    >
      <thead>
        <tr>
          <th>ID</th>
          <th>Report</th>
          <th>Date</th>
          <th>Status</th>
        </tr>
      </thead>

      <tbody>
        {reports.map((report) => (
          <tr key={report.id}>
            <td>{report.id}</td>
            <td>{report.title}</td>
            <td>{report.date}</td>
            <td>{report.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
