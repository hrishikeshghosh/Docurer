import React from "react";
import homePageStyles from "@/public/jss/next-jss-components/homepageStyles";
import { makeStyles } from "@mui/styles";
import { Button, TextField } from "@mui/material";

const useStyles = makeStyles(homePageStyles);

const HomepageAppointmentForm = () => {
  const classes = useStyles();
  return (
    <div className={classes.appointmentFormMain}>
      <h3 className={classes.appointTitle}>Look for a doctor</h3>
      <TextField
        classes={{ root: classes.textFieldClass }}
        variant="outlined"
        placeholder="Select Specialist"
      />
      <TextField
        classes={{ root: classes.textFieldClass }}
        variant="outlined"
        placeholder="Select location"
      />
      <div className={classes.textFieldSplitter}>
        <TextField
          classes={{ root: classes.textFieldClass_isSplitted }}
          variant="outlined"
          placeholder="Select State"
        />
        <TextField
          classes={{ root: classes.textFieldClass_isSplitted }}
          variant="outlined"
          placeholder="Select City"
        />
      </div>
      <TextField
        classes={{ root: classes.textFieldClass }}
        variant="outlined"
        type="date"
      />
      <Button className={classes.appointmentButton}>Search Doctor</Button>
    </div>
  );
};

export default HomepageAppointmentForm;
