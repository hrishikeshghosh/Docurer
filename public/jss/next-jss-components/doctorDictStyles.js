import { container } from "../utilStyles";

const doctorDictStyles = {
  main: {
    marginTop: "6em",
  },
  filterBox: {
    width: "100%",
    background: "linear-gradient(to bottom,#eee,#fff 10%)",
  },
  topinteractivePortal: {
    padding: "5%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
  },
  title: {
    fontFamily: "'Roboto', sans-serif",
    color: "#212A3E",
  },
  subtitle: {
    fontFamily: "'Roboto', sans-serif",
    color: "#576CBC",
  },
  filterFieldHolder: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    width: "100%",
    padding: "2% 0",
  },
  coverImgHolder: {
    width: "100%",
  },
  docSearchButton: {
    background: "#03C988",
    padding: "2%",
    color: "#fff",
    "&:hover": {
      background: "#19A7CE",
    },
  },
  container: {
    ...container,
    padding: "3% 0",
  },
  h2Title: {
    fontFamily: "'Roboto', sans-serif",
    color: "#19A7CE",
    textAlign: "center",
  },
  cardHolder: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    margin: "3% 0",
    flexWrap: "wrap",
  },

  //doctor card styles
  cardMain: {
    width: "300px",
    height: "470px",
    borderRadius: "10px",
    background: "#fff",
    padding: "2%",
    marginBottom: "20px",
    boxShadow:
      "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
  },
  doctorImage: {
    width: "100%",
    borderRadius: "8px",
  },
  doctorDetailsContainer: {
    padding: "3% 0",
  },
  name: {
    fontFamily: "'Roboto Flex', sans-serif",
    fontSize: "1.2rem",
    fontWeight: "600",
    color: "#27374D",
    marginBottom: "2%",
  },
  degree: {
    fontFamily: "'Roboto', sans-serif",
    fontSize: "0.85rem",
    fontWeight: "500",
    color: "#526D82",
    marginBottom: "2%",
  },
  type: {
    fontFamily: "'Roboto Flex', sans-serif",
    fontSize: "1rem",
    fontWeight: "600",
    color: "#6DA9E4",
    marginBottom: "2%",
  },
  additionalDetailBox: {
    margin: "3% 0",
    width: "100%",
  },
  IconedDiv: {
    width: "100%",
    padding: "2% 0",
    display: "flex",
    alignItems: "center",
    gap: "5px",
    fontSize: "0.85rem",
    color: "#526D82",
    fontFamily: "'Roboto', sans-serif",
  },
  buttonHolder: {
    display: "flex",
    aligmItems: "center",
    gap: "10px",
    width: "100%",
  },
  button_left: {
    background: "#2F58CD",
    color: "#fff",
    width: "100%",
    marginRight: "5px",
  },
  button_right: {
    background: "#2F58CD",
    color: "#fff",
    width: "100%",
  },

  // appointment form
  appointmentCover: {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    height: "100vh",
    zIndex: "1700",
    background: "rgba(0,0,0,0.5)",
  },
};

export default doctorDictStyles;
