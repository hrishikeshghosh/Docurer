import React from "react";
import { makeStyles } from "@mui/styles";
import doctorDictStyles from "@/public/jss/next-jss-components/doctorDictStyles";
import { Button, Grid, Rating } from "@mui/material";
import { BiCurrentLocation, BiCalendarWeek } from "react-icons/bi";
import { CiMoneyBill } from "react-icons/ci";
import { useRouter } from "next/router";

const useStyles = makeStyles(doctorDictStyles);

const DoctorCard = ({
  id,
  firstName,
  lastName,
  Specialist_type,
  fees,
  verified,
  description,
  rating,
  location,
}) => {
  const classes = useStyles();
  const router = useRouter();

  function BookDoc() {
    router.push(`/appointment/book?docId=${id}`);
  }

  return (
    <div className={classes.cardMain}>
      <img
        className={classes.doctorImage}
        src="https://plus.unsplash.com/premium_photo-1658506671316-0b293df7c72b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZG9jdG9yJTVDfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60"
      />
      <div className={classes.doctorDetailsContainer}>
        <p className={classes.name}>
          Dr. {firstName.length >= 6 ? firstName.charAt(0) : firstName}{" "}
          {lastName}
        </p>
        <p className={classes.degree}>{description}</p>
        <p className={classes.type}>{Specialist_type}</p>
        <Rating precision={0.5} defaultValue={rating} />

        <div className={classes.additionalDetailBox}>
          <div className={classes.IconedDiv}>
            <BiCurrentLocation />
            <p>{location}</p>
          </div>
          <div className={classes.IconedDiv}>
            <BiCalendarWeek />
            <p>Available now</p>
          </div>
          <div className={classes.IconedDiv}>
            <CiMoneyBill />
            <p>
              <span>&#8377;</span>
              {fees}
            </p>
          </div>
        </div>
        <Grid container gap={1}>
          <Grid item xs={12} sm={5} md={5}>
            <Button className={classes.button_left}>Schedule</Button>
          </Grid>
          <Grid item xs={12} sm={5} md={5}>
            <Button className={classes.button_right} onClick={BookDoc}>
              Book now
            </Button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default DoctorCard;
