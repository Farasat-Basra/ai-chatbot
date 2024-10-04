import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";
import { inputFill } from "../../styles/room";

const Submit = ({ onSubmit }) => {
  return (
    <div className={inputFill} onClick={onSubmit}>
      <Icon icon="mingcute:arrow-up-line" className="text-white text-2xl" />
    </div>
  );
};

export default Submit;
