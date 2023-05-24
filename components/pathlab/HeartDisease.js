import React from "react";
import { Formik } from "formik";
import { makeStyles } from "@mui/styles";
import pathlabStyles from "@/public/jss/next-jss-components/pathlabStyles";
import { Button, TextField } from "@mui/material";
import axios from "axios";
import { AppContext } from "@/pages/AppContext";
import { useContext } from "react";
import { useRouter } from "next/router";
import {
  HeartDiseaseParameters,
  HeartDiseaseValidationSchema,
} from "./Parameters";

const useStyles = makeStyles(pathlabStyles);

const HeartDisease = ({ setLoading }) => {
  const classes = useStyles();
  const router = useRouter();
  const { crossOriginData, setCrossOriginData } = useContext(AppContext);

  function RedirectToOutput(data) {
    setCrossOriginData({ data: 1, disease: "heart disease" });
    router.push("/outcome");
  }

  return (
    <Formik
      initialValues={HeartDiseaseParameters}
      validationSchema={HeartDiseaseValidationSchema}
      onSubmit={(values, { setSubmitting }) => {
        setLoading(true);
        setTimeout(async () => {
          function convertStringValuesToIntegers(values) {
            for (var key in values) {
              if (typeof values[key] === "string") {
                var parseVal = parseFloat(values[key]);
                if (!isNaN(parseVal)) {
                  values[key] = parseVal;
                }
              } else if (typeof values[key] === "object") {
                convertStringValuesToIntegers(values[key]);
              }
            }
          }
          convertStringValuesToIntegers(values);

          await axios
            .post("http://localhost:5000/heart", values)
            .then((data) => {
              RedirectToOutput(data.data);
            })
            .catch((err) => console.log(err));

          setLoading(false);
        }, 5000);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <form className={classes.form} onSubmit={handleSubmit}>
          <h2 className={classes.classifierTitle}>Heart Disease Detector</h2>
          <TextField
            className={classes.textField}
            fullWidth
            label="Speciy your age"
            type="text"
            name="age"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.age}
            error={touched.age && Boolean(errors.age)}
            helperText={touched.age && errors.age}
          />
          <TextField
            className={classes.textField}
            fullWidth
            label="Speciy anaemia unit"
            type="text"
            name="anaemia"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.anaemia}
            error={touched.anaemia && Boolean(errors.anaemia)}
            helperText={touched.anaemia && errors.anaemia}
          />
          <TextField
            className={classes.textField}
            fullWidth
            label="Speciy Creatine level"
            type="text"
            name="creatinine_phosphokinase"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.creatinine_phosphokinase}
            error={
              touched.creatinine_phosphokinase &&
              Boolean(errors.creatinine_phosphokinase)
            }
            helperText={
              touched.creatinine_phosphokinase &&
              errors.creatinine_phosphokinase
            }
          />
          <TextField
            className={classes.textField}
            fullWidth
            label="Speciy diabetes unit"
            type="text"
            name="diabetes"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.diabetes}
            error={touched.diabetes && Boolean(errors.diabetes)}
            helperText={touched.diabetes && errors.diabetes}
          />
          <TextField
            className={classes.textField}
            fullWidth
            label="Speciy ejection fraction"
            type="text"
            name="ejection_fraction"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.ejection_fraction}
            error={
              touched.ejection_fraction && Boolean(errors.ejection_fraction)
            }
            helperText={touched.ejection_fraction && errors.ejection_fraction}
          />
          <TextField
            className={classes.textField}
            fullWidth
            label="Speciy blood pressure"
            type="text"
            name="high_blood_pressure"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.high_blood_pressure}
            error={
              touched.high_blood_pressure && Boolean(errors.high_blood_pressure)
            }
            helperText={
              touched.high_blood_pressure && errors.high_blood_pressure
            }
          />
          <TextField
            className={classes.textField}
            fullWidth
            label="Speciy platelets units"
            type="text"
            name="platelets"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.platelets}
            error={touched.platelets && Boolean(errors.platelets)}
            helperText={touched.platelets && errors.platelets}
          />
          <TextField
            className={classes.textField}
            fullWidth
            label="Speciy serum creatinine level"
            type="tel"
            name="serum_creatinine"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.serum_creatinine}
            error={touched.serum_creatinine && Boolean(errors.serum_creatinine)}
            helperText={touched.serum_creatinine && errors.serum_creatinine}
          />
          <TextField
            className={classes.textField}
            fullWidth
            label="Speciy serum sodium level"
            type="text"
            name="serum_sodium"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.serum_sodium}
            error={touched.serum_sodium && Boolean(errors.serum_sodium)}
            helperText={touched.serum_sodium && errors.serum_sodium}
          />
          <TextField
            className={classes.textField}
            fullWidth
            label="Speciy sex"
            type="text"
            name="sex"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.sex}
            error={touched.sex && Boolean(errors.sex)}
            helperText={touched.sex && errors.sex}
          />
          <TextField
            className={classes.textField}
            fullWidth
            label="Speciy smoking"
            type="text"
            name="smoking"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.smoking}
            error={touched.smoking && Boolean(errors.smoking)}
            helperText={touched.smoking && errors.smoking}
          />
          <TextField
            className={classes.textField}
            fullWidth
            label="Speciy time"
            type="text"
            name="time"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.time}
            error={touched.time && Boolean(errors.time)}
            helperText={touched.time && errors.time}
          />
          <Button
            className={classes.button}
            type="submit"
            disabled={isSubmitting}
          >
            Predict Disease
          </Button>
        </form>
      )}
    </Formik>
  );
};

export default HeartDisease;
