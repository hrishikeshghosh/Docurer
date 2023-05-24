import React from "react";
import { makeStyles } from "@mui/styles";
import aboutUseStyles from "@/public/jss/next-jss-components/aboutUsStyles";
import team from "../public/images/team.jpg";
const useStyles = makeStyles(aboutUseStyles);

const aboutUs = () => {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <img src={team} className={classes.bannerImage} />
      <h1 className={classes.h1}>About us</h1>
    </div>
  );
};

export default aboutUs;
