import React from "react";
import { makeStyles } from "@mui/styles";
import chatbotstyles from "@/public/jss/next-jss-components/chatbotstyles";

const useStyles = makeStyles(chatbotstyles);

const MyPrompt = ({ text }) => {
  const classes = useStyles();
  return (
    <div className={classes.myTextBubbleWrapper}>
      <p className={classes.myTextBubble}>{text}</p>
    </div>
  );
};

export default MyPrompt;
