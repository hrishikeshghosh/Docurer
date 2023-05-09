const HeaderStyles = {
  Appbar: {
    width: "100%",
    height: "100px",
    display: "flex",
    alignItems: "center",
    padding: "0 3%",
  },
  fixed: {
    position: "fixed",
    top: "0",
    left: "0",
    background: "transparent",
    zIndex: "1100",
  },
  absolute: {},
  brandRoot: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  brandTitle: {
    fontFamily: "'Braah One', sans-serif",
    margin: "0",
    color: "#3a86ff",
  },
  brandIcon: {
    height: "60px",
    width: "60px",
    objectFit: "contain",
  },

  //heading list
  list: {
    display: "flex",
    // flexWrap: "1",
    width: "100%",
    alignItems: "center",
    justifyContent: "right",
  },
  listItem: {
    width: "fit-content",
  },
  navButtons: {
    fontFamily: "'Roboto Mono' monospace",
    fontWeight: "600",
    fontWeight: "900",
    color: "#1d3557",
    "&:hover": {
      color: "#f77f00",
      background: "transparent",
    },
  },
  navIcons: {
    fontSize: "1rem",
    margin: "0 5px",
  },
  signInButton: {
    background: "#3a86ff",
    width: "120px",
    padding: "10%",
    color: "#fff",
    fontWeight: "550",
    "&:hover": {
      background: "#2b2d42",
    },
  },

  //header link styles
  links: {
    fontFamily: "'Roboto Mono' monospace",
    textDecoration: "none",
    fontSize: "0.9rem",
    fontWeight: "550",
  },

  //footer styles
  footer: {
    position: "fixed",
    bottom: "0",
    left: "0",
    background: "#eee",
    width: "100%",
    padding: "3%",
  },
  footerTitle: {
    width: "100%",
    textAlign: "center",
    fontSize: "0.85rem",
    color: "grey",
    fontFamily: "sans-serif",
  },
};

export default HeaderStyles;
