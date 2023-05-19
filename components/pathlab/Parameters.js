import * as yup from "yup";

const DiabetesParameters = {
  Pregnancies: "",
  Glucose: "",
  BloodPressure: "",
  SkinThickness: "",
  Insulin: "",
  BMI: "",
  DiabetesPedigreeFunction: "",
  Age: "",
};

const DiabetesValidationSchema = yup.object({
  Pregnancies: yup.number().required("This is a required field"),
  Glucose: yup.number().required("This is a required field"),
  BloodPressure: yup.number().required("This is a required field"),
  SkinThickness: yup.number().required("This is a required field"),
  Insulin: yup.number().required("This is a required field"),
  BMI: yup.number().required("This is a required field"),
  DiabetesPedigreeFunction: yup.number().required("This is a required field"),
  Age: yup.number().required("This is a required field"),
});

export { DiabetesParameters, DiabetesValidationSchema };
