import { makeStyles } from "@material-ui/core";

const PageLinkStyles = makeStyles({
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
      color: "black",
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

  "@media(min-width: 48rem)": {
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
  },

  "@media(min-width: 64rem)": {
    wrapper_page_links: {
      width: "77%",
    },
    link_container: {
      width: "32%",
    },
  },
});

export default PageLinkStyles;
