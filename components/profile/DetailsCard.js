import React, { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import profileStyles from "@/public/jss/next-jss-components/profileStyles";
import { Avatar } from "@mui/material";
import axios from "axios";

const useStyles = makeStyles(profileStyles);

const DetailsCard = ({ id, firstName, lastName, email }) => {
  const classes = useStyles();

  return (
    <div className={classes.detailsCardMain}>
      <Avatar style={{ width: "300px", height: "300px" }} />
      <div>
        <p className={classes.staticText}>
          {firstName?.length >= 6 ? firstName?.charAt(0) : firstName} {lastName}
        </p>
        <p className={classes.staticText}>{email}</p>
      </div>
    </div>
  );
};

export default DetailsCard;
