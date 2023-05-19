const HomePageCardStyles = {
  main: {
    width: "300px",
    height: "350px",
    borderRadius: "20px",
    background: "#fff",
    boxShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px",
    padding: "4%",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "space-around",
    cursor: "pointer",
  },
  mainOrange: {
    background: "#F97B22",
  },
  cardNumberBG_WHITE: {
    fontSize: "5rem",
    fontFamily: "'Luckiest Guy', cursive",
    color: "transparent",
    textShadow: "0 10px 0 #ffe3d3",
    textStroke: "2px #f17732",
    transition: "all .5s",
  },
  cardNumberBG_ORANGE: {
    textShadow: "0 10px 0 #f17732",
    textStroke: "2px #fff",
  },
  actionContainer: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  title: {
    fontFamily: "'Montserrat', sans-serif",
    letterSpacing: "1.5px",
    color: "#f17732",
    textAlign: "center",
  },
  titleBG_ORANGE: {
    color: "#fff",
  },
  description: {
    fontFamily: "'Roboto', sans-serif",
    margin: "4% 0",
    textAlign: "center",
  },
  cardDescBG_ORANGE: {
    color: "#fff",
  },
  buttonStyles: {
    background: "rgba(25, 167, 206,0.3)",
    color: "#0C134F",
    minWidth: "180px",
    fontWeight: "600",
    borderRadius: "10px",
    padding: "4%",
    "&:hover": {
      background: "rgba(25, 167, 206,0.5)",
    },
  },
  buttonStylesBG_ORANGE: {
    background: "#fff",
    color: "#f17732",
    "&:hover": {
      background: "#fff",
    },
  },
  angleHolder: {
    width: "30px",
    height: "30px",
    background: "#fff",
    color: "#0C134F",
    borderRadius: "5px",
    margin: "0 3%",
    fontSize: "1rem",
    position: "relative",
  },
  angleHolderBG_ORANGE: {
    background: "#f17732",
    color: "#fff",
  },
  angle: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
  },
};

export default HomePageCardStyles;
