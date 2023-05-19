import React from "react";
import { makeStyles } from "@mui/styles";
import TopFraggerStyles from "@/public/jss/next-jss-components/topFraggerStyles";
import homePageIllus from "../../public/images/homepageIllus.png";
import { Button } from "@mui/material";

const useStyles = makeStyles(TopFraggerStyles);

function loadSVGS() {
  const classes = useStyles();
  return (
    <>
      <svg
        className={classes.svgStyle}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#fff"
          fillOpacity="1"
          d="M0,288L48,261.3C96,235,192,181,288,165.3C384,149,480,171,576,192C672,213,768,235,864,208C960,181,1056,107,1152,96C1248,85,1344,139,1392,165.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
      <svg
        className={classes.svgStyle2}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#19A7CE"
          fillOpacity="1"
          d="M0,288L48,261.3C96,235,192,181,288,165.3C384,149,480,171,576,192C672,213,768,235,864,208C960,181,1056,107,1152,96C1248,85,1344,139,1392,165.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
      <svg
        className={classes.svgStyle3}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#B6EAFA"
          fillOpacity="1"
          d="M0,288L48,261.3C96,235,192,181,288,165.3C384,149,480,171,576,192C672,213,768,235,864,208C960,181,1056,107,1152,96C1248,85,1344,139,1392,165.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </>
  );
}

const TopFragger = () => {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      {loadSVGS()}
      <div className={classes.container}>
        <div className={classes.headerTextContainer}>
          <div className={classes.preHeading}>
            We provide health care solutions
          </div>
          <h1 className={classes.headerText}>
            Protect your health with us in the most advanced way!
          </h1>
          <Button className={classes.homePageButton}>Make an appointment</Button>
        </div>
        <img src={homePageIllus} className="HomePageIllus" />
      </div>
    </div>
  );
};

export default TopFragger;
