import LoginForm from "../../components/LoginForm";

export default function LoginPage() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "#f5f7fb",
      }}
    >
      <LoginForm />
    </div>
  );
}
