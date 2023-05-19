import React from "react";
import { makeStyles } from "@mui/styles";
import chatbotstyles from "@/public/jss/next-jss-components/chatbotstyles";
import Lottie from "react-lottie";
import animationData from "public/lotties/chat-bot";
import { useState } from "react";
import { MdHealthAndSafety } from "react-icons/md";
import { BsFillSendFill } from "react-icons/bs";
import botIcon from "public/images/botIcon.png";
import { IconButton } from "@mui/material";

const useStyles = makeStyles(chatbotstyles);

const Chatbot = () => {
  const classes = useStyles(chatbotstyles);
  const [chatOpen, setChatOpen] = useState(false);

  const animationOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,

    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div>
      <div className={classes.chatbotIcon}>
        {chatOpen && (
          <div className={classes.chatSpace}>
            <div className={classes.header}>
              <p className={classes.headerText}>Health Advisory</p>
              <MdHealthAndSafety
                style={{ fontSize: "1.3rem", margin: "0 3%", color: "#fff" }}
              />
            </div>

            <div className={classes.promptSpace}>
              <input
                className={classes.messagetypeSpace}
                placeholder="Ask here..."
              />
              <IconButton>
                <BsFillSendFill
                  style={{ fontSize: "1rem", color: "#f77f00" }}
                />
              </IconButton>
            </div>
          </div>
        )}

        {!chatOpen && (
          <div style={{ cursor: "pointer" }} onClick={() => setChatOpen(true)}>
            <Lottie options={{ ...animationOptions }} height={150} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Chatbot;
