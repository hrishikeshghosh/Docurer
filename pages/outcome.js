import React from "react";
import { useContext } from "react";
import { AppContext } from "./AppContext";
import { makeStyles } from "@mui/styles";
import outcomeStyles from "@/public/jss/next-jss-components/outcomeStyles";
import classNames from "classnames";
import { useState } from "react";
import Lottie from "react-lottie";
import healthyAnimationData from "public/lotties/healthy-animation.json";
import unhealthyAnimationData from "public/lotties/unhealthy-animation.json";

const useStyles = makeStyles(outcomeStyles);

const outcome = () => {
  const classes = useStyles();
  const { crossOriginData } = useContext(AppContext);
  console.log(crossOriginData)
  const [isPositive, setIsPositive] = useState(
    crossOriginData && crossOriginData.data === 1 ? true : false
  );

  const outcomeBandClass = classNames({
    [classes.outcomeBand_positive]: true,
    [classes.outcomeBand_negative]: isPositive && true,
  });

  const heatlthyOptions = {
    loop: true,
    autoplay: true,
    animationData: healthyAnimationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
    const unheatlthyOptions = {
    loop: true,
    autoplay: true,
    animationData: unhealthyAnimationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className={classes.main}>
      <div className={outcomeBandClass}>
        <div style={{ width: "50%" }}>
          <h1 className={classes.outcomeTitle}>
            {!isPositive
              ? "Congratulations! You are healthy."
              : `We have predicted ${crossOriginData.disease} in your body!`}
          </h1>
          <p className={classes.outcomeSubtitle}>
            {!isPositive
              ? "If you still want have some health-care advices against diabetes, browse through the below articles or ask Dr. Robo"
              : `We have shortlisted below some of the finest doctors who can help you diagnose and provide proper treatment for the disease`}
          </p>
        </div>
        <div style={{ width: "50%" }}>
          <Lottie
            options={!isPositive ? heatlthyOptions : unheatlthyOptions}
            width={300}
            height={300}
          />
        </div>
      </div>
    </div>
  );
};

export default outcome;
