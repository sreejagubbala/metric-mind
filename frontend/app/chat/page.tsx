import Navbar from "../../components/Navbar";
import ChatBox from "../../components/ChatBox";

export default function ChatPage() {
  return (
    <>
      <Navbar />

      <div
        style={{
          padding: "40px",
          maxWidth: "1200px",
          margin: "auto",
        }}
      >
        <h1
          style={{
            fontSize: "40px",
            marginBottom: "30px",
          }}
        >
          AI Business Assistant
        </h1>

        <ChatBox />
      </div>
    </>
  );
}
