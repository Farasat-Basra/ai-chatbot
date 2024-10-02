import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";
import { inputFill } from "../../styles/room";

const InputFill = () => {
  return (
    <div className={inputFill}>
      <Icon icon="mingcute:arrow-up-line" className="text-white text-2xl" />
    </div>
  );
};

export default InputFill;
