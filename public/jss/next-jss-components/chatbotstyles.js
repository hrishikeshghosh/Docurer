const chatbotstyles = {
  chatbotIcon: {
    position: "fixed",
    bottom: "0",
    right: "0",
    zIndex: "1500",
  },
  chatSpace: {
    width: "350px",
    height: "450px",
    background: "#ECF2FF",
    margin: "0 20px 2% 0",
    borderRadius: "10px",
    boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
    position: "relative",
  },
  header: {
    padding: "5%",
    width: "100%",
    borderTopLeftRadius: "8px",
    borderTopRightRadius: "8px",
    background: "#2F58CD",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerText: {
    fontFamily: "'Roboto', sans-serif",
    color: "#fff",
  },
  promptSpace: {
    width: "100%",
    padding: "2%",
    position: "absolute",
    bottom: "0",
    left: "0",
    background: "#fff",
    borderBottomLeftRadius: "8px",
    borderBottomRightRadius: "8px",
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  messagetypeSpace: {
    padding: "3%",
    width: "100%",
    border: "none",
    outline: "none",
    fontSize: "1rem",
    fontFamily: "'Roboto', sans-serif",
  },
};

export default chatbotstyles;
