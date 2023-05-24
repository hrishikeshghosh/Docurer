import React from "react";
import { makeStyles } from "@mui/styles";
import chatbotstyles from "@/public/jss/next-jss-components/chatbotstyles";
import Lottie from "react-lottie";
import animationData from "public/lotties/chat-bot.json";
import typingAnimationData from "../../public/lotties/typing-loading";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BsFillSendFill } from "react-icons/bs";
import { IconButton } from "@mui/material";
import MyPrompt from "./MyPrompt";
import BotPrompt from "./BotPrompt";
const axios = require("axios");

const useStyles = makeStyles(chatbotstyles);

const Chatbot = () => {
  const classes = useStyles(chatbotstyles);
  const [chatOpen, setChatOpen] = useState(false);
  const [chatData, setChatData] = useState([]);
  const [text, setText] = useState("");
  const [typeLoading, setTypeLoading] = useState(false);

  const animationOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const TypinhanimationOptions = {
    loop: true,
    autoplay: true,
    animationData: typingAnimationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  async function sendText() {
    setChatData((chatData) => [...chatData, { data: text, transmitter: "me" }]);
    setTypeLoading(true);
    try {
      const { data } = await axios.get(`/api/gpt?prompt=${text}`);
      setChatData((chatData) => [
        ...chatData,
        { data: data.chat, transmitter: "bot" },
      ]);
      setTypeLoading(false);
    } catch (error) {
      console.log(error);
      setTypeLoading(false);
    }
    setText("");
  }

  function handleCloseChat() {
    setChatOpen(false);
  }

  return (
    <div>
      <div className={classes.chatbotIcon}>
        {chatOpen ? (
          <div className={classes.chatSpace}>
            <div className={classes.header}>
              <p className={classes.headerText}>Health Advisory</p>
              <IconButton onClick={handleCloseChat}>
                <AiOutlineClose
                  style={{ fontSize: "1.3rem", margin: "0 3%", color: "#fff" }}
                />
              </IconButton>
            </div>
            <div className={classes.chatZone}>
              {chatData.map((chat) =>
                chat.transmitter === "me" ? (
                  <MyPrompt text={chat.data} />
                ) : (
                  <BotPrompt text={chat.data} />
                )
              )}
            </div>

            <div className={classes.promptSpace}>
              <input
                className={classes.messagetypeSpace}
                placeholder="Ask here..."
                value={text}
                onChange={(e) => setText(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") sendText();
                }}
              />
              <IconButton onClick={sendText}>
                <BsFillSendFill
                  style={{ fontSize: "1rem", color: "#f77f00" }}
                />
              </IconButton>
            </div>
          </div>
        ) : (
          <div style={{ cursor: "pointer" }} onClick={() => setChatOpen(true)}>
            <Lottie options={{ ...animationOptions }} height={150} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Chatbot;
