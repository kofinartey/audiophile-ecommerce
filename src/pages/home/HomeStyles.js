import { makeStyles } from "@material-ui/core";
import pattern from "../../assets/home/desktop/pattern-circles.svg";

import speaker_zx7_mobile from "../../assets/home/mobile/image-speaker-zx7.jpg";
import speaker_zx7_tablet from "../../assets/home/tablet/image-speaker-zx7.jpg";
import speaker_zx7_desktop from "../../assets/home/desktop/image-speaker-zx7.jpg";
const HomeStyles = makeStyles({
  Home: {
    width: "100%",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
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

  // -----page links section
  section_page_links: {
    width: "100%",
    margin: "1rem 0",
    display: "flex",
    justifyContent: "center",
  },
  wrapper_page_links: {
    width: "90%",
    display: "flex",
    flexDirection: "column",
  },
  link_container: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
  page_link: {
    width: "100%",
    // backgroundColor: "red",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "2rem 0",
    position: "relative",
    "& img": {
      width: "40%",
    },
    "& h6": {
      fontSize: "15px",
    },
  },
  link_bkg: {
    height: "80%",
    width: "100%",
    backgroundColor: "#F1F1F1",
    borderRadius: "0.5rem",
    position: "absolute",
    bottom: "-0.8rem",
    zIndex: "-1",
  },

  // ----- featured products section -----
  featured: {
    width: "90%",

    display: "flex",
    justifyContent: "center",
  },
  wrapper_featured: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  featured__item: {
    width: "100%",
    borderRadius: "0.5rem",
    marginBottom: "1rem",
  },
  speaker_zx9: {
    backgroundImage: `url(${pattern})`,
    background: "#D87D4A",
    backgroundRepeat: "no-repeat",
    backgroundSize: "150%",
    backgroundPosition: "50% 150%",
    color: "white",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "3rem 2rem",
    textAlign: "center",
    overflowY: "hidden",
    "& img": {
      width: "50%",
      margin: "1rem 0",
    },
  },
  zx9__text: {
    maxWidth: "19rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "0 1rem",
    "& h2": {
      fontSize: "2.25rem",
      margin: "2rem 0",
    },
    "& p": {
      marginBottom: "2rem",
      fontSize: "15px",
    },
  },

  //------
  speaker_zx7: {
    overflow: "hidden",
    position: "relative",
    "& img": {
      width: "100%",
      borderRadius: "0.5rem",
    },
  },
  zx7__content: {
    position: "absolute",
    top: "0",
    height: "100%",
    width: "100%",
    display: "flex",
    alignItems: "center",
  },
  zx7__text: {
    margin: "0 7%",
    "& h4": {
      marginBottom: "1rem",
    },
  },
  //-----
  earphones_yx1: {
    width: "100%",
    height: "auto",
    display: "flex",
    flexDirection: "column",
    "& img": {
      width: "100%",
      borderRadius: "0.5rem",
    },
  },
  yx1_half: {
    overflow: "hidden",
    borderRadius: "0.5rem",
    marginBottom: "1rem",
    height: "50%",
  },
  yx1_two: {
    backgroundColor: "#f1f1f1",
    padding: "10% 7%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    "& h4": {
      marginBottom: "1rem",
    },
  },

  //----- about section-----

  // ****** MEDIA QUERIES ******
  // ****** MEDIA QUERIES ******
  // ****** MEDIA QUERIES ******
  "@media(min-width: 48rem)": {
    hero__wrapper: {
      width: "55%",
      "& h2": {
        fontSize: "3.5rem",
        lineHeight: "3.5rem",
      },
    },
    hero__content: {
      width: "90%",
    },
    section_page_links: {
      margin: "2rem 0 4rem 0",
    },
    wrapper_page_links: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
    link_container: {
      width: "32.5%",
    },

    featured__item: {
      marginBottom: "2rem",
    },

    zx9__text: {
      width: "50%",
      maxWidth: "22rem",
      "& h2": {
        fontSize: "3.5rem",
        lineHeight: "3.5rem",
      },
    },
    earphones_yx1: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
    yx1_half: {
      height: "100%",
      width: "49%",
      "& img": {
        height: "100%",
      },
    },
    yx1_two: {
      padding: "0 5%",
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
    wrapper_page_links: {
      width: "80%",
    },
    link_container: {
      width: "32%",
    },
    wrapper_featured: {
      width: "90%",
    },
    speaker_zx9: {
      backgroundPosition: "center",
      backgroundSize: "80%",
      flexDirection: "row",
      alignItems: "flex-start",
      padding: "5rem 0 0 0",
    },
    zx9_picture: {
      width: "60%",
      "& img": {
        width: "70%",
        marginBottom: "0",
        position: "relative",
        top: "1rem",
      },
    },
    zx9__text: {
      width: "50%",
      marginTop: "1rem",
      alignItems: "flex-start",
      textAlign: "left",
      "& h2": {},
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
    zx9_picture: {
      "& img": {
        width: "60%",
      },
    },
  },
});

export default HomeStyles;
