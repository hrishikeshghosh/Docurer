import React from "react";
import { Formik } from "formik";
import { makeStyles } from "@mui/styles";
import pathlabStyles from "@/public/jss/next-jss-components/pathlabStyles";
import { Button, TextField } from "@mui/material";
import axios from "axios";
import { AppContext } from "@/pages/AppContext";
import { useContext } from "react";
import { useRouter } from "next/router";
import { KidneyParameters, KidneyValidationSchema } from "./Parameters";

const useStyles = makeStyles(pathlabStyles);

const KidneyDisease = ({ setLoading }) => {
  const classes = useStyles();
  const router = useRouter();
  const { crossOriginData, setCrossOriginData } = useContext(AppContext);

  function RedirectToOutput(data) {
    setCrossOriginData({ data: 1, disease: "kidney disease" });
    router.push("/outcome");
  }

  return (
    <Formik
      initialValues={KidneyParameters}
      validationSchema={KidneyValidationSchema}
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
            .post("http://localhost:5000/kidney", values)
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
          <h2 className={classes.classifierTitle}>
            Chronic Kidney Disease Detector
          </h2>
          <TextField
            className={classes.textField}
            fullWidth
            label="Speciy Blood Pressure unit"
            type="text"
            name="Bp"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.Bp}
            error={touched.Bp && Boolean(errors.Bp)}
            helperText={touched.Bp && errors.Bp}
          />
          <TextField
            className={classes.textField}
            fullWidth
            label="Speciy Specific Gravity level"
            type="text"
            name="Sg"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.Sg}
            error={touched.Sg && Boolean(errors.Sg)}
            helperText={touched.Sg && errors.Sg}
          />
          <TextField
            className={classes.textField}
            fullWidth
            label="Speciy albumin level"
            type="text"
            name="Al"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.Al}
            error={touched.Al && Boolean(errors.Al)}
            helperText={touched.Al && errors.Al}
          />
          <TextField
            className={classes.textField}
            fullWidth
            label="Speciy sugar level"
            type="text"
            name="Su"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.Su}
            error={touched.Su && Boolean(errors.Su)}
            helperText={touched.Su && errors.Su}
          />
          <TextField
            className={classes.textField}
            fullWidth
            label="Speciy Red blood cell"
            type="text"
            name="Rbc"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.Rbc}
            error={touched.Rbc && Boolean(errors.Rbc)}
            helperText={touched.Rbc && errors.Rbc}
          />
          <TextField
            className={classes.textField}
            fullWidth
            label="Speciy blood urea"
            type="text"
            name="Bu"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.Bu}
            error={touched.Bu && Boolean(errors.Bu)}
            helperText={touched.Bu && errors.Bu}
          />
          <TextField
            className={classes.textField}
            fullWidth
            label="Speciy serum creatinine level"
            type="text"
            name="Sc"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.Sc}
            error={touched.Sc && Boolean(errors.Sc)}
            helperText={touched.Sc && errors.Sc}
          />
          <TextField
            className={classes.textField}
            fullWidth
            label="Speciy sodium level"
            type="tel"
            name="Sod"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.Sod}
            error={touched.Sod && Boolean(errors.Sod)}
            helperText={touched.Sod && errors.Sod}
          />
          <TextField
            className={classes.textField}
            fullWidth
            label="Speciy potassium level"
            type="text"
            name="Pot"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.Pot}
            error={touched.Pot && Boolean(errors.Pot)}
            helperText={touched.Pot && errors.Pot}
          />
          <TextField
            className={classes.textField}
            fullWidth
            label="Speciy haemoglobin level"
            type="text"
            name="Hemo"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.Hemo}
            error={touched.Hemo && Boolean(errors.Hemo)}
            helperText={touched.Hemo && errors.Hemo}
          />
          <TextField
            className={classes.textField}
            fullWidth
            label="Speciy white blood cell count"
            type="text"
            name="Wbcc"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.Wbcc}
            error={touched.Wbcc && Boolean(errors.Wbcc)}
            helperText={touched.Wbcc && errors.Wbcc}
          />
          <TextField
            className={classes.textField}
            fullWidth
            label="Speciy red blood cell count"
            type="text"
            name="Rbcc"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.Rbcc}
            error={touched.Rbcc && Boolean(errors.Rbcc)}
            helperText={touched.Rbcc && errors.Rbcc}
          />
          <TextField
            className={classes.textField}
            fullWidth
            label="Speciy hypertension"
            type="text"
            name="Htn"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.Htn}
            error={touched.Htn && Boolean(errors.Htn)}
            helperText={touched.Htn && errors.Htn}
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

export default KidneyDisease;
