import { makeStyles } from "@material-ui/core";

const HeaderStyles = makeStyles({
  Header: {
    height: "5.625rem",
    // backgroundColor: "#101010",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  mobile__menu: {
    zIndex: "1000",
  },
  underline: {
    backgroundColor: "#979797",
    opacity: "0.5",
    height: "1px",
    width: "100%",
    position: "absolute",
    top: "5.625rem",
  },
  wrapper: {
    width: "90%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  desktop__Links: {
    display: "none",
  },
  nav__Link: {
    color: "white",
    marginRight: "2rem",
    fontSize: "0.8125rem",
    transition: "all .2s ease-in-out",
    "&:hover": {
      color: "#D87D4A",
    },
  },

  //   ****** MEDIA QUERIES ******

  "@media(min-width: 45rem)": {
    underline: {
      width: "90%",
    },
    wrapper: {
      width: "90%",
      display: "grid",
      gridTemplateColumns: "100px 1fr 1fr",
      gridTemplateRows: "1fr",
    },
    mobile__menu: {
      gridColumn: "1/2",
      gridRow: "1/2",
    },
    logo: {
      gridColumn: "2/3",
      gridRow: "1/2",
      justifySelf: "start",
    },
    cart: {
      gridRow: "1/2",
      gridColumn: "5/6",
      justifySelf: "end",
    },
  },

  "@media(min-width: 64rem)": {
    Header: {
      height: "6.0625rem",
    },
    underline: {
      width: "77%",
      top: "6.0625rem",
    },
    wrapper: {
      width: "77%",
      display: "flex",
    },
    desktop__Links: {
      display: "block",
    },
    mobile__menu: {
      display: "none",
    },
  },
});

export default HeaderStyles;
