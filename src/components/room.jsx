import React, { useState } from "react";
import {
  input,
  inputArea,
  inputContainer,
  room,
  roomContent,
  roomContentContainer,
  roomHeader,
} from "../styles/room";
import Document from "../icons/document";
import Submit from "./ui/input-fill";
import Avatar from "./ui/avatar";
import Message from "./ui/message";
import Welcome from "./welcome";

const Room = ({
  isWelcome,
  setIsWelcome,
  promptResponses,
  setpromptResponses,
  inputValue,
  setInputValue,
  message,
  setMessages,
  typingResponse,
  setTypingResponse,
  isTyping,
  setIsTyping,
}) => {
  const typeText = (text) => {
    setIsTyping(true);
    let index = 0;
    const typingSpeed = 10;

    const typingInterval = setInterval(() => {
      setTypingResponse((prev) => prev + text[index]);
      index++;

      if (index === text.length) {
        clearInterval(typingInterval);

        setpromptResponses([...promptResponses, text]);
      }
    }, typingSpeed);
  };

  const getResponseForGivenPrompt = async () => {
    try {
      const response = await fetch(
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyCxMQiEHJCQzxgnFXDYaLx6NjD52nWyr5M",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            contents: [{ role: "user", parts: [{ text: inputValue }] }],
            generationConfig: {},
            safetySettings: [],
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      const generatedText =
        (data.candidates && data.candidates[0]?.content?.parts[0]?.text) ||
        "No response";
      setMessages((prev) => [...prev, { text: generatedText, sender: "bot" }]);
    } catch (error) {
      console.error("Something went wrong:", error);
    }
  };

  const hanldeKeyPress = (e) => {
    if (e.key === "Enter") {
      onSubmit(e);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    setIsWelcome(false);
    setMessages((prev) => [...prev, { text: inputValue, sender: "user" }]);
    setInputValue("");
    getResponseForGivenPrompt();
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const inputArea = `absolute ${
    isWelcome ? "top-80" : "bottom-10"
  }   flex justify-center  w-[90%]`;

  return (
    <div className={room}>
      <div className={roomHeader}>
        <h1 className="text-2xl text-primary font-semibold"> Chat-AI </h1>
        <Avatar />
      </div>
      <div className={roomContentContainer}>
        <div className={roomContent} style={{ scrollbarWidth: "none" }}>
          {isWelcome ? <Welcome /> : <Message message={message} />}
        </div>
      </div>
      <div className={inputArea}>
        <div className={inputContainer}>
          <input
            type="text"
            className={input}
            placeholder="Type a message"
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={hanldeKeyPress}
          />
          <Document />
          <Submit onSubmit={onSubmit} />
        </div>
      </div>
    </div>
  );
};

export default Room;
