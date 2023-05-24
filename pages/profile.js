import React, { useState, useEffect } from "react";
import { makeStyles } from "@mui/styles";
import profileStyles from "@/public/jss/next-jss-components/profileStyles";
import DetailsCard from "@/components/profile/detailsCard";

const useStyles = makeStyles(profileStyles);

const profile = () => {
  const classes = useStyles();
  const [details, setDetails] = useState({});
  useEffect(() => {
    async function getUser() {
      const { id } = JSON.parse(localStorage.getItem("profile"));
      const { data } = await axios.get(`/api/get-user?id=${1}`);
      if (data.flag) {
        setDetails(data.details);
      }
    }
    getUser();
  }, []);
  return (
    <div className={classes.main}>
      <div className={classes.header}>
        <DetailsCard {...details} />
      </div>
    </div>
  );
};

export default profile;
