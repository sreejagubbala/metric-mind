import ChatHeader from "../../components/ChatHeader";
import ChatBox from "../../components/ChatBox";
import ChatInput from "../../components/ChatInput";


export default function ChatPage() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      <ChatHeader />

      <div
        style={{
          flex: 1,
          overflowY: "auto",
          padding: "20px",
        }}
      >
        <ChatBox />
      </div>

      <ChatInput />
    </div>
  );
}
