import { makeStyles } from "@material-ui/core";

const MobileMenuStyles = makeStyles({
  MobileMenu: {},

  overlay: {
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.5)",
    position: "fixed",
    left: "0",
    top: "5.625rem",
    opacity: "0",
    pointerEvents: "none",
    transition: "all .3s ease-in-out",
  },
  menu__toggler: {
    cursor: "pointer",
  },
  menu: {
    backgroundColor: "#101010",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "absolute",
    top: "5.625rem",
    left: "-1000rem",
    transition: "all .3s ease-in-out",
  },

  mobile__Link: {
    color: "white",
    padding: "2rem",
    transition: "all .3s ease-in-out",
    "&:hover": {
      color: "#D87D4A",
    },
  },
});

export default MobileMenuStyles;
