import background from "../../images/authPageBg.jpg";

const authStyles = {
  main: {
    width: "100%",
    height: "100vh",
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
    position: "fixed",
    top: "0",
    left: "0",
    zIndex: "1300",
  },
  authBoxMain: {
    width: "60%",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    background: "#F1F6F9",
    borderRadius: "10px",
    maxHeight: "600px",
    overflowY: "auto",
  },
  rightBox: {
    padding: "4%",
    background: "#fff",
    borderTopRightRadius: "10px",
    borderBottomRightRadius: "10px",
  },
  title: {
    fontFamily: "'Montserrat', sans-serif",
    color: "#374259",
  },
  textFieldHolder: {
    margin: "4% 0",
  },
  textField: {
    marginBottom: "2%",
  },
  mainButton: {
    padding: "3% 0",
    width: "100%",
    background: "#537FE7",
    color: "#fff",
    "&:hover": {
      background: "#27E1C1",
    },
  },
  frontierText: {
    padding: "2% 0",
    fontFamily: "'Roboto', sans-serif",
    color: "#526D82",
  },
  lottieHolder1: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
  },
};

export default authStyles;
