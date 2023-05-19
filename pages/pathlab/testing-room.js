import React from "react";
import pathlabStyles from "@/public/jss/next-jss-components/pathlabStyles";
import { makeStyles } from "@mui/styles";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Lottie from "react-lottie";
import animationData from "../../public/lotties/test-tube-loader-animation";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { useFormik } from "formik";
import Typewriter from "typewriter-effect";
import { useRouter } from "next/router";
import {
  DiabetesParameters,
  DiabetesValidationSchema,
} from "../../components/pathlab/Parameters";
import { TextField } from "@mui/material";
import Diabetes from "@/components/pathlab/Diabetes";
import LeafSVG from "@/components/SVGS/LeafSVG";

const useStyles = makeStyles(pathlabStyles);

const testingRoom = () => {
  const classes = useStyles();
  const [phrase, setPhrase] = useState(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { test } = router.query;
  useEffect(() => {
    (async function () {
      await axios
        .get("https://api.api-ninjas.com/v1/quotes?category=health", {
          headers: {
            "X-Api-Key": "onKN7WRglRsx9wVuhl8Djw==zVQmuwoBqShpenzW",
          },
        })
        .then((response) => {
          if (response.status === 200) setPhrase(response.data[0]);
        })
        .catch((err) => console.log(err));
    })();
  }, []);

  function RenderForm() {
    switch (test) {
      case "diabetes":
        return <Diabetes setLoading={setLoading} />;
    }
  }

  const defaultLottieOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className={classes.main}>
      {loading && (
        <div className={classes.loadingScreen}>
          <div className={classes.loaderBox}>
            <Lottie options={defaultLottieOptions} width={400} height={400} />
            <div
              style={{
                fontSize: "1.3rem",
                fontFamily: "'Roboto', sans-serif",
                textAlign: "center",
                color: "#fff",
              }}
            >
              <Typewriter
                options={{
                  strings: ["Wait while we cook your report..."],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
          </div>
        </div>
      )}

      <LeafSVG />
      <div className={classes.quoter}>
        <h1 className={classes.quoterHeading}>
          Let's keep you light with the quote of the day
        </h1>
        {phrase && (
          <div style={{ maxWidth: "50%" }}>
            <p className={classes.quote}>
              <span>
                <FaQuoteLeft />
                &nbsp;
              </span>
              <em>{phrase.quote}</em>
              <span>
                &nbsp;
                <FaQuoteRight />
              </span>
            </p>

            <p className={classes.author}>
              <em>-{phrase.author}</em>
            </p>
          </div>
        )}
      </div>
      <div className={classes.container}>
        <div className={classes.splitter}>
          <div className={classes.ActionSpace}>
            <div className={classes.formHolder}>{RenderForm()}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default testingRoom;
