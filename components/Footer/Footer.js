import React from "react";
import HeaderStyles from "@/public/jss/next-jss-components/HeaderStyles";
import { makeStyles } from "@mui/styles";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import { BsDot } from "react-icons/bs";
import { Typography } from "@mui/material";

const useStyles = makeStyles(HeaderStyles);
const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.footer}>
      <p className={classes.footerTitle}>
        Copyright &nbsp;
        <span>
          <AiOutlineCopyrightCircle />
        </span>
        &nbsp; 2023
        <span>
          <BsDot />
        </span>
        Designed and Developed by Hrishikesh and team.
      </p>
    </div>
  );
};

export default Footer;
