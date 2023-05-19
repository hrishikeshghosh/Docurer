const TopFraggerStyles = {
  main: {
    width: "100%",
    height: "120vh",
    backgroundImage:
      "url(https://meditro.themetrades.com/react/static/media/bg1.c53c8971.jpg)",
    position: "relative",
    zIndex: "1",
    overflow: "hidden",
  },
  svgStyle: {
    position: "absolute",
    bottom: "0",
    zIndex: "2",
  },
  svgStyle2: {
    position: "absolute",
    bottom: "2%",
    zIndex: "1",
  },
  svgStyle3: {
    position: "absolute",
    bottom: "4%",
    zIndex: "0",
  },
  container: {
    width: "100%",
    marginTop: "6em",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 3%",
  },
  headerTextContainer: {
    width: "50%",
    position: "relative",
  },
  preHeading: {
    padding: "2% 4%",
    width: "fit-content",
    color: "#362FD9",
    fontFamily: "'Roboto', sans-serif",
    fontWeight: "600",
    background:
      "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAASBAMAAABlZ9nIAAAAFVBMVEUAAABWWs9WWs9WWs9WWs9WWs9WWs/1NWIvAAAAB3RSTlMAJR0IGRQP8idXOgAAAEdJREFUCNdjYBB0YGBgFmRgYGASAhKMYkAiUIABIs4AFDcAEQoMQHEBIGQVYHBgYBQAihqCFCmCVSYwMLAKgjSDTDAUhogDALC/BAIr+ncLAAAAAElFTkSuQmCC)",
  },
  headerText: {
    width: "100%",
    fontSize: "2.8rem",
    fontFamily: "'Montserrat', sans-serif",
    color: "#060047",
  },
  homePageButton: {
    padding: "3%",
    marginTop: "5%",
    background: "#F97B22",
    color: "#fff",
    cursor: "pointer",
    fontWeight: "550",
    zIndex: "2",
    "&:hover": {
      background: "#F79540",
    },
  },
};

export default TopFraggerStyles;
