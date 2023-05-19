import React from "react";
import { useFormik } from "formik";
import { DiabetesParameters, DiabetesValidationSchema } from "./Parameters";
import { makeStyles } from "@mui/styles";
import pathlabStyles from "@/public/jss/next-jss-components/pathlabStyles";
import { Button, TextField } from "@mui/material";
import { Formik } from "formik";
import axios from "axios";
import { AppContext } from "@/pages/AppContext";
import { useContext } from "react";
import { useRouter } from "next/router";

const useStyles = makeStyles(pathlabStyles);

const Diabetes = ({ setLoading }) => {
  const classes = useStyles();
  const router = useRouter();
  const { crossOriginData, setCrossOriginData } = useContext(AppContext);

  function RedirectToOutput(data) {
    setCrossOriginData({ data: 1, disease: "diabetes" });
    router.push("/outcome");
  }

  return (
    <Formik
      initialValues={DiabetesParameters}
      validationSchema={DiabetesValidationSchema}
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
            .post("http://localhost:5000/diabetes", values)
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
          <h2 className={classes.classifierTitle}>Diabetes Detector</h2>
          <TextField
            className={classes.textField}
            fullWidth
            label="Speciy number of Pregnancies"
            type="text"
            name="Pregnancies"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.Pregnancies}
            error={touched.Pregnancies && Boolean(errors.Pregnancies)}
            helperText={touched.Pregnancies && errors.Pregnancies}
          />
          <TextField
            className={classes.textField}
            fullWidth
            label="Speciy Glucose level"
            type="text"
            name="Glucose"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.Glucose}
            error={touched.Glucose && Boolean(errors.Glucose)}
            helperText={touched.Glucose && errors.Glucose}
          />
          <TextField
            className={classes.textField}
            fullWidth
            label="Speciy Blood Pressure"
            type="text"
            name="BloodPressure"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.BloodPressure}
            error={touched.BloodPressure && Boolean(errors.BloodPressure)}
            helperText={touched.BloodPressure && errors.BloodPressure}
          />
          <TextField
            className={classes.textField}
            fullWidth
            label="Speciy Your Skin Thickness"
            type="text"
            name="SkinThickness"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.SkinThickness}
            error={touched.SkinThickness && Boolean(errors.SkinThickness)}
            helperText={touched.SkinThickness && errors.SkinThickness}
          />
          <TextField
            className={classes.textField}
            fullWidth
            label="Speciy Insulin Level"
            type="text"
            name="Insulin"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.Insulin}
            error={touched.Insulin && Boolean(errors.Insulin)}
            helperText={touched.Insulin && errors.Insulin}
          />
          <TextField
            className={classes.textField}
            fullWidth
            label="Speciy Body Mass Index"
            type="text"
            name="BMI"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.BMI}
            error={touched.BMI && Boolean(errors.BMI)}
            helperText={touched.BMI && errors.BMI}
          />
          <TextField
            className={classes.textField}
            fullWidth
            label="Speciy Diabetes Pedigree Function"
            type="text"
            name="DiabetesPedigreeFunction"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.DiabetesPedigreeFunction}
            error={
              touched.DiabetesPedigreeFunction &&
              Boolean(errors.DiabetesPedigreeFunction)
            }
            helperText={
              touched.DiabetesPedigreeFunction &&
              errors.DiabetesPedigreeFunction
            }
          />
          <TextField
            className={classes.textField}
            fullWidth
            label="Speciy Age"
            type="tel"
            name="Age"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.Age}
            error={touched.Age && Boolean(errors.Age)}
            helperText={touched.Age && errors.Age}
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

export default Diabetes;
