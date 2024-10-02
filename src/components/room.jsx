import React from "react";
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
import InputFill from "./ui/input-fill";
import Avatar from "./ui/avatar";
import Message from "./ui/message";
const Room = () => {
  return (
    <div className={room}>
      <div className={roomHeader}>
        <h1 className="text-xl font-semibold"> ChatTEC </h1>
        <Avatar />
      </div>
      <div className={roomContentContainer}>
        <div className={roomContent} style={{ scrollbarWidth: "none" }}>
          <Message />
        </div>
      </div>
      <div className={inputArea}>
        <div className={inputContainer}>
          <input type="text" className={input} placeholder="Type a message" />
          <Document />
          <InputFill />
        </div>
      </div>
    </div>
  );
};

export default Room;
