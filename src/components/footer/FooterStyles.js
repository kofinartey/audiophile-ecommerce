import { makeStyles } from "@material-ui/core";

const FooterStyles = makeStyles({
  footer: {
    backgroundColor: "#101010",
    color: "white",
    padding: "2rem 0",
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    position: "relative",
  },
  wrapper: {
    width: "90%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  overline: {
    height: "4px",
    width: "101px",
    backgroundColor: "#D87D4A",
    position: "absolute",
    top: "0",
  },
  logo: {
    marginTop: "2rem",
  },

  nav__links: {
    display: "flex",
    flexDirection: "column",
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    marginTop: "2rem",
    "& a": {
      fontSize: "0.8125rem",
      color: "white",
      padding: "0.5rem",
      cursor: "pointer",
      transition: "all 0.3s ease-in-out",
      "&:hover": {
        color: "#D87D4A",
      },
    },
  },

  footer__text: {
    margin: "2rem 0",
    "& p": {
      color: "rgba(255,255,255, 0.5)",
    },
  },
  copyright: {
    fontSize: "15px",
    color: "rgba(255,255,255, 0.5)",
  },
  social: {
    width: "6.5rem",
    display: "flex",
    justifyContent: "space-between",
    marginTop: "2rem",
  },

  "@media(min-width: 45rem)": {
    footer: {
      padding: "0",
    },
    overline: {
      justifySelf: "start",
    },
    wrapper: {
      padding: "3rem 0",
      alignItems: "flex-start",
      textAlign: "left",
      position: "relative",
    },
    nav__links: {
      flexDirection: "row",
      "& a": {
        padding: "0",
        paddingRight: "2rem",
      },
    },
    copyright: {
      marginTop: "3rem",
    },
    social: {
      position: "absolute",
      bottom: "3rem",
      right: "0",
    },
  },

  "@media(min-width: 64rem)": {
    wrapper: {
      width: "77%",
    },
    nav__links: {
      position: "absolute",
      right: "0",
      "& a:nth-of-type(4)": {
        paddingRight: "0",
      },
    },
    footer__text: {
      width: "50%",
    },
    social: {
      bottom: "8rem",
    },
  },
});

export default FooterStyles;
