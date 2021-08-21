import { makeStyles } from "@material-ui/core";

const HomeStyles = makeStyles({
  Home: {
    width: "100%",
    position: "relative",
  },
  hero: {
    width: "100%",
    display: "flex",
    textAlign: "center",
    color: "white",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    "& img": {
      width: "100%",
    },
  },
  hero__wrapper: {
    width: "90%",
    height: "85%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: "5.625rem",
  },

  hero__content: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    "& h3": {
      color: "rgba(255,255,255, 0.5)",
      fontWeight: "500",
      fontSize: "0.875rem",
      letterSpacing: "0.3rem",
    },
    "& h2": {
      textTransform: "uppercase",
      fontWeight: "800",
      fontSize: "2.25rem",
      letterSpacing: "0.2rem",

      margin: "1rem 0",
    },
    "& p": {
      lineHeight: "1.5rem",
      marginBottom: "2rem",
    },
  },
  // ****** MEDIA QUERIES ******
  "@media(min-width: 48rem)": {
    hero__wrapper: {
      width: "55%",
      "& h2": {
        fontSize: "3.5rem",
        lineHeight: "3.5rem",
      },
    },
  },

  "@media(min-width: 64rem)": {
    hero__wrapper: {
      width: "80%",
      alignItems: "flex-start",
    },
    hero__content: {
      width: "40%",
      textAlign: "left",
      alignItems: "flex-start",
      "& h3": {
        letterSpacing: "0.5rem",
      },
      "& h2": {
        fontSize: "3rem",
        lineHeight: "3rem",
        margin: "1rem 0",
      },
    },
  },
  "@media(min-width: 70rem)": {
    hero__wrapper: {
      width: "80%",
      alignItems: "flex-start",
    },
    hero__content: {
      width: "35%",
      "& h2": {
        margin: "2rem 0",
      },
    },
  },
});

export default HomeStyles;
