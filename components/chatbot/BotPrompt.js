import React from "react";
import chatbotstyles from "@/public/jss/next-jss-components/chatbotstyles";
import { makeStyles } from "@mui/styles";
import botIcon from "../../public/images/botIcon.png";
const useStyles = makeStyles(chatbotstyles);

const BotPrompt = ({ text }) => {
  const classes = useStyles();
  return (
    <div className={classes.botTextBubbleWrapper}>
      <img src={botIcon} style={{ width: "30px" }} />
      <p className={classes.botTextBubble}>{text}</p>
    </div>
  );
};

export default BotPrompt;
