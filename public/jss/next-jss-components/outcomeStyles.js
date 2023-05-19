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
  container: {
    ...container,
  },
};

export default outcomeStyles;
