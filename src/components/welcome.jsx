import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

const Welcome = () => {
  let welcome =
    "flex flex-col  gap-5 items-center h-full text-white";
  let h1 = "font-bold text-4xl text-primary ";
  let h2 = "font-bold text-2xl text-primary ";
  return (
    <div className={welcome}>
      <h1>
        <Icon
          //   icon="arcticons:openai-chatgpt"
          icon="token-branded:hgpt"
          className="text-8xl text-primary"
        />
      </h1>
      <h1 className={h1}> Hi, I AM Chat-AI </h1>
      <h1 className={h2}> How can I help you ? </h1>
    </div>
  );
};

export default Welcome;
