import { useState } from "react";
import "./App.css";
import Room from "./components/room";
import Sidebar from "./components/sidebar";
import { container, main } from "./styles/main";

function App() {
  const [isWelcome, setIsWelcome] = useState(true);
  const [inputValue, setInputValue] = useState("");
  const [message, setMessages] = useState([]);
  const [typingResponse, setTypingResponse] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  return (
    <main className={main}>
      <div className={container}>
        <Sidebar
          setIsWelcome={setIsWelcome}
          message={message}
          setMessages={setMessages}
        />
        <Room
          isWelcome={isWelcome}
          setIsWelcome={setIsWelcome}
          inputValue={inputValue}
          setInputValue={setInputValue}
          message={message}
          setMessages={setMessages}
          typingResponse={typingResponse}
          setTypingResponse={setTypingResponse}
          isTyping={isTyping}
          setIsTyping={setIsTyping}
        />
      </div>
    </main>
  );
}

export default App;
