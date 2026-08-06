type Props = {
  title: string;
  value: string;
};

export default function MetricCard({
  title,
  value,
}: Props) {
  return (
    <div
      style={{
        background: "white",
        padding: "25px",
        borderRadius: "10px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
      }}
    >
      <h3>{title}</h3>

      <h1
        style={{
          marginTop: "10px",
          fontSize: "30px",
        }}
      >
        {value}
      </h1>
    </div>
  );
}
