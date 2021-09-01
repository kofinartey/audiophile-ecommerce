import { makeStyles } from "@material-ui/core";

const AboutStyles = makeStyles({
  about: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    padding: "4rem 0",
  },
  wrapper__about: {
    display: "flex",
    flexDirection: "column",
    width: "90%",
    "& img": {
      width: "100%",
      borderRadius: "0.5rem",
    },
  },
  about__text: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& h4": {
      margin: "2rem 0",
    },
    "& span": {
      color: "#D87D4A",
    },
    "& p": {
      color: "rgba(0,0,0,0.5)",
      lineHeight: "1.5rem",
    },
  },

  // ***** MEDIA QUERIES *****
  // ***** MEDIA QUERIES *****
  // ***** MEDIA QUERIES *****
  "@media(min-width: 48rem)": {
    about__text: {
      "& h4": {
        maxWidth: "40rem",
        fontSize: "2.5rem",
        lineHeight: "2.7rem",
      },
      "& p": {
        width: "87%",
      },
    },
  },

  "@media(min-width: 64rem)": {
    wrapper__about: {
      flexDirection: "row-reverse",
      justifyContent: "space-between",
      width: "77%",
    },
    about__img: {
      width: "50%",
    },
    about__text: {
      width: "50%",
      alignItems: "flex-start",
      justifyContent: "center",
      textAlign: "left",
      "& h4": {
        maxWidth: "30rem",
      },
    },
  },
});

export default AboutStyles;
