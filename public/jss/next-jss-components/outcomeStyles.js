import { container, title } from "public/jss/utilStyles.js";
const outcomeStyles = {
  main: {
    width: "100%",
  },
  outcomeBand_positive: {
    width: "100%",
    marginTop: "6em",
    padding: "4%",
    background: "linear-gradient(45deg, #11998e, #38ef7d)",
    display: "flex",
    alignItems: "center",
    position: "relative",
  },
  outcomeBand_negative: {
    background: "linear-gradient(45deg, #cb2d3e, #ef473a)",
  },
  outcomeTitle: {
    color: "#fff",
    fontFamily: "'Montserrat', sans-serif",
  },
  outcomeSubtitle: {
    width: "80%",
    margin: "2% 0",
    fontFamily: "'Roboto', sans-serif",
    color: "#eee",
    fontSize: "1.085rem",
  },
  ButtonLeft: {
    padding: "2%",
    border: "3px solid #fff",
    color: "#fff",
    fontWeight: "600",
    "&:hover": {
      background: "#fff",
      color: "#27374D",
    },
  },
  ButtonRight: {
    padding: "2%",
    background: "#fff",
    color: "#27374D",
    fontWeight: "600",
    border: "3px solid #fff",
    marginLeft: "2%",
    "&:hover": {
      background: "transparent",
      color: "#fff",
    },
  },
  disclaimery: {
    padding: "2% 0",
  },
  disclaimeryText: {
    fontSize: "0.75rem",
    fontFamily: "'Roboto', sans-serif",
    color: "#fff",
    margin: "2% 0",
  },
  container: {
    padding: "3%",
  },
  containerTitle: {
    fontFamily: "'Montserrat', sans-serif",
    color: "#212A3E",
  },
  cardContainer: {
    ...container,
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    flexWrap: "wrap",
    margin: "2% 0",
  },
};

export default outcomeStyles;
