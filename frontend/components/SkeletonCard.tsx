export default function SkeletonCard() {
  return (
    <div
      style={{
        background: "#e5e7eb",
        height: "120px",
        borderRadius: "10px",
        animation: "pulse 1.5s infinite",
      }}
    >
      <style>
        {`
        @keyframes pulse{
            0%{opacity:1;}
            50%{opacity:.5;}
            100%{opacity:1;}
        }
        `}
      </style>
    </div>
  );
}
