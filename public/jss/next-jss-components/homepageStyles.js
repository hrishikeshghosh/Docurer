import title from "../utilStyles";
const homePageStyles = {
  section2Root: {
    display: "flex",
    alignItems: "center",
    padding: "5%",
  },
  section2descCenter: {
    padding: "0 3%",
    width: "50%",
  },
  section2h4: {
    padding: "3%",
    width: "fit-content",
    fontSize: "2.5rem",
    fontFamily: "'Roboto', sans-serif",
    color: "#FC4F00",
    backgroundImage:
      "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAASBAMAAABlZ9nIAAAAGFBMVEUAAADxdzLxdzLxdzLxdzLxdzLxdzLxdzKwbUUiAAAACHRSTlMAJQghGR0UD71uIrEAAABJSURBVAjXJcjBDYAgFATRQSPn/WriVTqgBOxAS7AD+j+xCZlkDg+iwRLAdnjp8n4xHfuN/cUul0UjyVoEfNWLDjmA9fTK7j2VAcLzBK44KxdZAAAAAElFTkSuQmCC)",
  },
  section2h1: {
    color: "#1D267D",
    fontFamily: "'Montserrat', sans-serif",
    margin: "3% 0",
  },
  serviceButtonSpace: {
    display: "flex",
    alignItems: "centers",
    justifyContent: "space-between",
    padding: "2% 0",
  },
  serviceButton: {
    width: "48%",
    display: "flex",
    alignItems: "center",
    borderRadius: "5px",
    transition: "all 0.3s ease-in-out",
    cursor: "pointer",
  },
  buttonText: {
    fontFamily: "'Roboto' ,sans-serif",
    fontSize: "1rem",
    padding: "0 2.5%",
    fontWeight: "600",
  },
  serviceButtonBlue: {
    border: "1.5px solid #DAF5FF",
    color: "#1D267D",
    boxShadow:
      "rgba(176 ,218,255, 0.25) 0px 2px 5px -1px, rgba(0, 51, 124,0.8) 0px 1px 3px -1px",
    "&:hover": {
      background: "#1D267D",
      color: "#fff",
    },
  },

  blueIcon: {
    width: "30%",
    padding: "7%",
    borderTopRightRadius: "50px",
    borderBottomRightRadius: "50px",
    background: "#DAF5FF",
    color: "#1D267D",
    fontSize: "1.5rem",
    textAlign: "center",
    transition: "all 0.5s ease-in-out",
    boxShadow: "rgba(0, 51, 124,0.3) 0px 2px 8px 0px",
    "&:hover": {
      background: "#fff",
    },
  },
  greenIcon: {
    width: "30%",
    padding: "7%",
    borderTopRightRadius: "50px",
    borderBottomRightRadius: "50px",
    background: "#DDFFBB",
    color: "#03C988",
    fontSize: "1.5rem",
    textAlign: "center",
    transition: "all 0.5s ease-in-out",
    boxShadow: "rgba(0, 226, 161,0.3) 0px 2px 8px 0px",
    "&:hover": {
      background: "#fff",
    },
  },
  serviceButtonGreen: {
    border: "1.5px solid #B6E2A1",
    color: "#03C988",
    boxShadow:
      "rgba(182, 226, 161,0.25) 0px 2px 5px -1px, rgba(182, 226, 161,0.8) 0px 1px 3px -1px",
    "&:hover": {
      background: "#B6E2A1",
      color: "#fff",
    },
  },

  // SECTION 3
  section3Root: {
    padding: "5%",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    background:
      "url(data:image/png;base64,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)",
  },
  section3Titleholder: {
    width: "100%",
    textAlign: "center",
  },
  section3title: {
    background:
      "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAASBAMAAABlZ9nIAAAAFVBMVEUAAABWWs9WWs9WWs9WWs9WWs9WWs/1NWIvAAAAB3RSTlMAJR0IGRQP8idXOgAAAEdJREFUCNdjYBB0YGBgFmRgYGASAhKMYkAiUIABIs4AFDcAEQoMQHEBIGQVYHBgYBQAihqCFCmCVSYwMLAKgjSDTDAUhogDALC/BAIr+ncLAAAAAElFTkSuQmCC)",
    width: "100%",
    padding: "1%",
    color: "#1D267D",
    fontFamily: "'Roboto', sans-serif",
    fontSize: "1.2rem",
  },
  section3subtitle: {
    color: "#FC4F00",
    fontFamily: "'Montserrat', sans-serif",
    margin: "3% 0 5% 0",
  },
  cardHolder: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
  },

  // Section 4
  section4root: {
    backgroundImage:
      "url(data:image/png;base64,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)",
    padding: "3%",
  },
  section4Bg: {
    width: "100%",
    padding: "3%",
    borderRadius: "20px",
    background: "rgba(170, 119, 255,0.1)",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  //Appointment Form main
  appointmentFormMain: {
    width: "400px",
    borderRadius: "10px",
    padding: "2%",
    background: "#fff",
    boxShadow: "0 0 0 2px rgba(218,102,123,1), 8px 8px 0 0 rgba(218,102,123,1)",
  },
  appointTitle: {
    color: "#1D267D",
    fontFamily: "'Montserrat', sans-serif",
    fontWeight: "700",
    textAlign: "center",
    marginBottom: "3%",
  },
  textFieldClass: {
    width: "100%",
    borderRadius: "8px",
    margin: "2% 0",
    outline: "none",
    border: "none",
  },
  textFieldClass_isSplitted: {
    width: "48%",
    borderRadius: "8px",
    margin: "2% 0",
    outline: "none",
    border: "none",
  },
  textFieldSplitter: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  appointmentButton: {
    width: "100%",
    margin: "3% 0",
    background: "#FC4F00",
    borderRadius: "8px",
    padding: "4% 0",
    color: "#fff",
    "&:hover": {
      background: "grey",
    },
  },
  phoneImage: {
    height: "450px",
  },
  mapIconImage: {
    width: "100px",
    position: "absolute",
    top: "30%",
    left: "-10%",
    transition: "ease 0.2s",
    animation: `$leftRight 1s infinite alternate`,
  },
  settingsIconImage: {
    width: "100px",
    position: "absolute",
    top: "70%",
    left: "35%",
    animation: `$topDown 1s infinite alternate`,
  },
  womanIllusImage: {
    height: "400px",
    transition: "ease 0.2s",
    animation: `$leftRight 1s infinite alternate`,
  },

  //section 5 root
  section5root: {
    padding: "5% 3%",
  },
  section5InnerMain: {
    background: "#eee",
    display: "flex",
    alignItems: "center",
    position: "relative",
  },
  section5descBox: {
    padding: "3%",
    background: "#fff",
    width: "40%",
  },
  pathSerTitle: {
    fontFamily: "'Roboto', sans-serif",
    color: "#1D267D",
    padding: "3%",
    width: "fit-content",
    background:
      "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAASBAMAAABlZ9nIAAAAFVBMVEUAAABWWs9WWs9WWs9WWs9WWs9WWs/1NWIvAAAAB3RSTlMAJR0IGRQP8idXOgAAAEdJREFUCNdjYBB0YGBgFmRgYGASAhKMYkAiUIABIs4AFDcAEQoMQHEBIGQVYHBgYBQAihqCFCmCVSYwMLAKgjSDTDAUhogDALC/BAIr+ncLAAAAAElFTkSuQmCC)",
  },
  section5BigText: {
    fontFamily: "'Montserrat', sans-serif",
    color: "#FC4F00",
    margin: "2% 0",
  },
  section5subtitle: {
    fontFamily: "'Roboto', sans-serif",
    fontWeight: "200",
  },
  section5MainButton: {
    background: "#1D267D",
    color: "#fff",
    fontSize: "1rem",
    minWidth: "40%",
    padding: "2% 4%",
    marginTop: "8%",
    boxShadow: "rgba(11, 21, 99, 0.2) 0px 2px 8px 0px",
    "&:hover": {
      background: "rgba(11, 21, 99, 0.7)",
    },
  },
  section5staticBox: {
    width: "450px",
    height: "400px",
    background: "#000",
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    right: "0",
    borderRadius: "50px",
    background: "#576CBC",
  },

  "@keyframes leftRight": {
    "0%": {
      transform: "translateX(0%)",
    },
    "100%": {
      transform: "translateX(-10%)",
    },
  },
  "@keyframes topDown": {
    "0%": {
      transform: "translateY(0%)",
    },
    "100%": {
      transform: "translateY(-10%)",
    },
  },
};

export default homePageStyles;
