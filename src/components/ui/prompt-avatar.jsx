import React from "react";
import { img } from "../../styles/room";

const PromptAvatar = () => {
  let promptImg =
    "size-6 rounded-full object-cover object-center ring ring-primary";

  return (
    <img
      className={promptImg}
      src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      alt=""
    />
  );
};

export default PromptAvatar;
