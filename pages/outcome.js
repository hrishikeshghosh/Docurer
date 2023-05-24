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
import DoctorCard from "@/components/DoctorCards/DoctorCard";
import { useEffect } from "react";
import axios from "axios";
import { Button } from "@mui/material";
import { useRouter } from "next/router";

const useStyles = makeStyles(outcomeStyles);

const outcome = () => {
  const classes = useStyles();
  const { crossOriginData } = useContext(AppContext);
  const router = useRouter();
  const [isPositive, setIsPositive] = useState(
    crossOriginData && crossOriginData.data === 1 ? true : false
  );
  const [otherDiseases, setOtherDiseases] = useState([]);
  const [doctorData, setDoctorData] = useState([]);

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

  useEffect(() => {
    (async function () {
      let type;
      if (crossOriginData?.disease === "diabetes") {
        setOtherDiseases([
          ...otherDiseases,
          { name: "Heart Failure", route: "heart-disease" },
          { name: "Chronic Kidney Disease", route: "kidney-disease" },
        ]);
        type = "diabetologist";
      } else if (crossOriginData?.disease === "heart disease") {
        setOtherDiseases([
          ...otherDiseases,
          { name: "Diabetes", route: "diabetes" },
          { name: "Chronic Kidney Disease", route: "kidney-disease" },
        ]);
        type = "cardiologist";
      } else if (crossOriginData?.disease === "kidney disease") {
        setOtherDiseases([
          ...otherDiseases,
          { name: "Heart Failure", route: "heart-disease" },
          { name: "Diabetes", route: "diabetes" },
        ]);
        type = "nephrologist";
      }

      try {
        const { data } = await axios.post(
          "/api/doctor/recommendation",
          {
            type,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (data.flag) setDoctorData(data.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  function rerouteToPage(queryString) {
    router.push(`/pathlab/testing-room?test=${queryString}`);
  }

  return (
    <div className={classes.main}>
      <div className={outcomeBandClass}>
        <div style={{ width: "50%" }}>
          <h1 className={classes.outcomeTitle}>
            {!isPositive
              ? "Congratulations! You are healthy."
              : `We have predicted ${crossOriginData?.disease} in your body!`}
          </h1>
          <p className={classes.outcomeSubtitle}>
            {!isPositive
              ? `If you still want have some health-care advices against ${crossOriginData?.disease}, browse through the below articles or ask Dr. Robo`
              : `We have shortlisted below some of the finest doctors who can help you diagnose and provide proper treatment for the disease`}
          </p>
          <div className={classes.disclaimery}>
            <Button
              className={classes.ButtonLeft}
              onClick={() => rerouteToPage(otherDiseases[0].route)}
            >
              Test for {otherDiseases[0].name}
            </Button>
            <Button
              className={classes.ButtonRight}
              onClick={() => rerouteToPage(otherDiseases[1].route)}
            >
              Test for {otherDiseases[1].name}
            </Button>
            <p className={classes.disclaimeryText}>
              *If it is {crossOriginData?.disease}, there maybe be chances that
              you would be having more, Better check the other two and be sure!
            </p>
          </div>
        </div>
        <div style={{ width: "50%" }}>
          <Lottie
            options={!isPositive ? heatlthyOptions : unheatlthyOptions}
            width={300}
            height={300}
          />
        </div>
      </div>
      <div className={classes.container}>
        <h1 className={classes.containerTitle}>
          We have recommended some doctors for you!
        </h1>
        <div className={classes.cardContainer}>
          {doctorData.map((doctor) => (
            <DoctorCard key={doctor.id} {...doctor} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default outcome;
