const customDropdownStyles = {
  button: {
    fontFamily: "'Roboto Mono' monospace",
    fontWeight: "900",
    color: "#1d3557",
    "&:hover": {
      color: "#f77f00",
      background: "transparent",
    },
  },
  popper: {
    zIndex: "999",
  },
  paper: {
    boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px",
    minWidth: "130px",
    background: "#fff",
  },
  menuItem: {
    padding: "12px",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
};

export default customDropdownStyles;
