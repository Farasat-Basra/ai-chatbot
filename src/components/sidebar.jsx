import React, { useState } from "react";
import MenuClose from "../icons/menu-close";
import MenuEdit from "../icons/menu-edit";
import {
  action,
  chatbootheader,
  chatDay,
  chatList,
  chatListing,
  chatName,
  chatTechHeader,
  logout,
  sidebar,
  sidebarHeader,
} from "../styles/sidebar";
import Explore from "../icons/explore";
import { Icon } from "@iconify/react/dist/iconify.js";

const Sidebar = ({ setIsWelcome, setMessages }) => {
  const [chats, setChats] = useState([]);

  const handleAddChat = () => {
    const newChat = {
      day: "today",
      chats: [
        "Hey, have you finished the report yet?",
        "I’m almost done, just need to add the graphs.",
        "Let’s meet in 10 minutes to discuss the final points.",
      ],
    };
    setMessages([]);
    setIsWelcome(true);
    // setChats([...chats, newChat]);
  };

  const chatsArray = [
    {
      day: "today",
      chats: [
        "Hey, have you finished the report yet?",
        "I’m almost done, just need to add the graphs.",
        "Let’s meet in 10 minutes to discuss the final points.",
      ],
    },
    {
      day: "yesterday",
      chats: [
        "Did you catch the game last night?",
        "Yeah, it was intense! That last-minute goal was insane.",
        "I know, right? Can’t believe we pulled off a win!",
      ],
    },
    {
      day: "Previous Week",
      chats: [
        "Do you have the client’s feedback from the last meeting?",
        "Yes, they’re requesting a few design changes.",
        "Alright, let’s prioritize those for the next sprint.",
      ],
    },
    {
      day: "November",
      chats: [
        "Happy Thanksgiving! What’s your plan for the long weekend?",
        "Thanks! We’re just having a quiet family dinner. How about you?",
        "We’re heading out of town for a short trip. Should be relaxing!",
      ],
    },
    {
      day: "Last year",
      chats: [
        "Can’t believe it’s almost New Year’s already!",
        "I know, this year flew by. Any resolutions?",
        "Yeah, I’m aiming to learn more about machine learning.",
      ],
    },
  ];

  return (
    <div className={sidebar}>
      <div className={sidebarHeader}>
        <MenuClose />
        <Icon
          icon="basil:add-outline"
          className="text-primary text-3xl"
          onClick={handleAddChat}
        />
        {/* <MenuEdit /> */}
      </div>
      <div className={chatbootheader}>
        <Icon icon="token-branded:hgpt" className="text-3xl" />
        Chat-AI
      </div>
      <div className={chatTechHeader}>
        <Explore />
        Explore Chat Tech
      </div>
      <div
        className={chatListing}
        style={{ scrollbarWidth: "5px", scrollbarColor: "red" }}
      >
        {chats.map((item, index) => (
          <div className="mt-5" key={index}>
            <h4 className={chatDay}>
              {" "}
              <Icon
                icon="material-symbols-light:calendar-today-rounded"
                className="text-xl text-primary "
              />{" "}
              {item.day}
            </h4>
            {item.chats.map((item, index) => (
              <div key={index} className={chatList}>
                <h3 className={chatName}>{item}</h3>
                <Icon icon="bi:three-dots" className={action} />
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className={logout}>
        <Icon icon="solar:logout-2-outline" />
        <h3> Logout </h3>
      </div>
    </div>
  );
};

export default Sidebar;
