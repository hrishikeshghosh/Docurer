import React from "react";
import HomePageCardStyles from "@/public/jss/next-jss-components/HomePageCardStyles";
import { makeStyles } from "@mui/styles";
import classNames from "classnames";
import { FaAngleRight } from "react-icons/fa";
import { Button } from "@mui/material";

const useStyles = makeStyles(HomePageCardStyles);

const HomePageCard = ({ color, lift, cardNum, title, subtitle }) => {
  const classes = useStyles();

  const mainStyles = classNames({
    [classes.main]: true,
    [classes.mainOrange]: color === "orange" && true,
  });
  const cardNumberStyles = classNames({
    [classes.cardNumberBG_WHITE]: true,
    [classes.cardNumberBG_ORANGE]: color === "orange" && true,
  });

  const titleStyles = classNames({
    [classes.title]: true,
    [classes.titleBG_ORANGE]: color === "orange" && true,
  });
  const descriptionStyles = classNames({
    [classes.description]: true,
    [classes.cardDescBG_ORANGE]: color === "orange" && true,
  });
  const buttonStyles = classNames({
    [classes.buttonStyles]: true,
    [classes.buttonStylesBG_ORANGE]: color === "orange" && true,
  });
  const angleHolderStyles = classNames({
    [classes.angleHolder]: true,
    [classes.angleHolderBG_ORANGE]: color === "orange" && true,
  });

  return (
    <div
      className={mainStyles}
      style={lift && { transform: "translateY(-10%)" }}
    >
      <p className={cardNumberStyles}>{cardNum}</p>
      <div className={classes.actionContainer}>
        <p className={titleStyles}>{title}</p>
        <p className={descriptionStyles}>{subtitle}</p>
        <Button className={buttonStyles}>
          View more{" "}
          <div className={angleHolderStyles}>
            <FaAngleRight className={classes.angle} />
          </div>
        </Button>
      </div>
    </div>
  );
};

export default HomePageCard;
