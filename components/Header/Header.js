import React from "react";
import HeaderStyles from "@/public/jss/next-jss-components/HeaderStyles";
import { makeStyles } from "@mui/styles";
import classNames from "classnames";
import { Button, Typography } from "@mui/material";
import favicon from "../../public/images/android-chrome-512x512.png";
import HeaderLinks from "./HeaderLinks";
import { useRouter } from "next/router";

const useStyles = makeStyles(HeaderStyles);

const Header = (props) => {
  const classes = useStyles();
  const router = useRouter();

  const appBarClasses = classNames({
    [classes.Appbar]: true,
    [classes.fixed]: true,
  });

  const { RightLinks } = props;

  function Branding() {
    return (
      <div className={classes.brandRoot} onClick={() => router.push("/")}>
        <img src={favicon} className={classes.brandIcon} />
        <h1 className={classes.brandTitle}>Docurer</h1>
      </div>
    );
  }

  return (
    <div className={appBarClasses}>
      {Branding()}
      <HeaderLinks />
    </div>
  );
};

export default Header;
