import React, { Fragment } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { promptSinppet } from "../../styles/room";
import PromptAvatar from "./prompt-avatar";

const Message = ({ prompt, response, message }) => {
  return (
    <Fragment>
      {message.map((prompts) => (
        <div
          className={`flex ${
            prompts.sender === "user" ? "justify-end" : "justify-start"
          } items-center gap-2 me-2 mb-10  `}
        >
          {prompts.sender === "bot" && (
            <Icon icon="token-branded:hgpt" className="text-3xl" />
          )}
          <div className={promptSinppet}>
            <p>{prompts?.text}</p>
          </div>
          {prompts.sender === "user" && <PromptAvatar />}
        </div>
      ))}
    </Fragment>
  );
};

export default Message;
