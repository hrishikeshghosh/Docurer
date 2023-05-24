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

const HeartDiseaseParameters = {
  age: "",
  anaemia: "",
  creatinine_phosphokinase: "",
  diabetes: "",
  ejection_fraction: "",
  high_blood_pressure: "",
  platelets: "",
  serum_creatinine: "",
  serum_sodium: "",
  sex: "",
  smoking: "",
  time: "",
};

const HeartDiseaseValidationSchema = yup.object({
  age: yup.number().required("This is a required field"),
  anaemia: yup.number().required("This is a required field"),
  creatinine_phosphokinase: yup.number().required("This is a required field"),
  diabetes: yup.number().required("This is a required field"),
  ejection_fraction: yup.number().required("This is a required field"),
  high_blood_pressure: yup.number().required("This is a required field"),
  platelets: yup.number().required("This is a required field"),
  serum_creatinine: yup.number().required("This is a required field"),
  serum_sodium: yup.number().required("This is a required field"),
  sex: yup.number().required("This is a required field"),
  smoking: yup.number().required("This is a required field"),
  time: yup.number().required("This is a required field"),
});

const KidneyParameters = {
  Bp: "",
  Sg: "",
  Al: "",
  Su: "",
  Rbc: "",
  Bu: "",
  Sc: "",
  Sod: "",
  Pot: "",
  Hemo: "",
  Wbcc: "",
  Rbcc: "",
  Htn: "",
};

const KidneyValidationSchema = yup.object({
  Bp: yup.number().required("This is a required field"),
  Sg: yup.number().required("This is a required field"),
  Al: yup.number().required("This is a required field"),
  Su: yup.number().required("This is a required field"),
  Rbc: yup.number().required("This is a required field"),
  Bu: yup.number().required("This is a required field"),
  Sc: yup.number().required("This is a required field"),
  Sod: yup.number().required("This is a required field"),
  Pot: yup.number().required("This is a required field"),
  Hemo: yup.number().required("This is a required field"),
  Wbcc: yup.number().required("This is a required field"),
  Rbcc: yup.number().required("This is a required field"),
  Htn: yup.number().required("This is a required field"),
});

export {
  DiabetesParameters,
  DiabetesValidationSchema,
  HeartDiseaseParameters,
  HeartDiseaseValidationSchema,
  KidneyParameters,
  KidneyValidationSchema,
};
