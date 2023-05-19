import { container, title } from "public/jss/utilStyles.js";
const pathlabStyles = {
  main: {
    width: "100%",
    position: "relative",
  },
  loadingScreen: {
    width: "100%",
    height: "100vh",
    position: "fixed",
    top: "0",
    left: "0",
    background: "rgba(0,0,0,0.8)",
    zIndex: "1600",
  },
  loaderBox: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    borderRadius: "8px",
    padding: "3%",
    background: "rgba(255,255,255,0.1)",
    backdropFilter:"blur(80px)"
  },
  quoter: {
    marginTop: "6em",
    padding: "2%",
    width: "100%",
    background: "#0C134F",
  },
  quoterHeading: {
    ...title,
    color: "#fff",
  },
  quote: {
    fontSize: "1rem",
    fontFamily: "'Roboto', sans-serif",
    width: "100%",
    wordSpacing: "5px",
    color: "#fff",
  },
  author: {
    fontSize: "1rem",
    fontFamily: "'kalam', cursive",
    textAlign: "right",
    color: "#eee",
  },
  container: {
    ...container,
    padding: "2% 0",
    position: "relative",
  },
  form: {
    width: "500px",
    boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px",
    borderRadius: "5px",
    border: "1.5px solid #1D267D",
    padding: "3%",
    background: "#fff",
    zIndex: "999",
  },
  formHolder: {
    width: "fit-content",
    border: "2.2px solid #F97B22",
    padding: "1%",
    borderRadius: "8px",
  },
  classifierTitle: {
    ...title,
    margin: "3% 2%",
    position: "relative",
  },
  textField: {
    marginBottom: "2%",
  },
  button: {
    width: "100%",
    background: "#2F58CD",
    color: "#fff",
    cursor: "pointer",
  },
};

export default pathlabStyles;
