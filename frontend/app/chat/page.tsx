import ChatHeader from "../../components/ChatHeader";
import ChatHistory from "../../components/ChatHistory";
import ChatBox from "../../components/ChatBox";
import ChatInput from "../../components/ChatInput";

export default function ChatPage() {
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
      }}
    >
      <ChatHistory />

      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
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
    </div>
  );
}
