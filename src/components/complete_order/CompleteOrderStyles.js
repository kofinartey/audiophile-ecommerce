import { makeStyles } from "@material-ui/core";

const CompleteOrderStyles = makeStyles({
  CompleteOrder: {
    // height: "100vh",
    position: "fixed",
    top: "0",
    zIndex: "1000",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  overlay: {
    postion: "fixed",
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  content: {
    width: "90%",
    backgroundColor: "white",
    borderRadius: "0.5rem",
    position: "fixed",
    display: "flex",
    flexDirection: "column",
    padding: "2rem",
  },
  checkmark: {
    width: "4rem",
    height: "4rem",
    borderRadius: "50%",
    backgroundColor: "#D87D4A",
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "2rem",
  },
  top: {
    "& h5": {
      marginBottom: "1rem",
      maxWidth: "15rem",
    },
  },
  order: {
    borderRadius: "0.5rem",
    margin: "2rem 0",
  },
  list: {
    backgroundColor: "#F1F1F1",
    padding: "2rem",
    borderRadius: " 0.5rem 0.5rem 0 0",
    maxHeight: "15rem",
    overflowY: "scroll",
    "&::-webkit-scrollbar": {
      width: "0.5rem",
    },
    "&::-webkit-scrollbar-thumb": {
      width: "0.5rem",
      borderRadius: "0.5rem",
      backgroundColor: "#D87D4A",
    },
  },
  cart__item: {
    display: "flex",
    alignItems: "center",
    marginBottom: "1.5rem",
    position: "relative",
    borderBottom: "1px solid #979797",
  },
  item__image: {
    width: "4rem",
    height: "4rem",
    marginRight: "1rem",

    "& img": {
      width: "100%",
      borderRadius: "0.5rem",
    },
  },
  item__summary: {
    "& h6": {
      fontSize: "15px",
    },
    "& p": {
      fontWeight: "bold",
      color: "rgba(0,0,0,0.5)",
    },
  },
  item__qty: {
    fontWeight: "bold",
    color: "rgba(0,0,0,0.5)",
    position: "absolute",
    right: "0",
  },
  total: {
    backgroundColor: "black",
    color: "white",
    padding: "1rem 2rem",
    borderRadius: "0 0 0.5rem 0.5rem",
    "& p": {
      color: "rgba(255,255,255,0.5)",
      marginBottom: "0.5rem",
    },
  },
  back: {
    "& button": {
      width: "100%",
    },
  },

  // ****** MEDIA QUERIES ******
  // ****** MEDIA QUERIES ******
  // ****** MEDIA QUERIES ******

  "@media(min-width: 48rem)": {
    content: {
      width: "70%",
    },
    order: {
      display: "flex",
      width: "100%",
    },
    list: {
      width: "60%",
      borderRadius: " 0.5rem 0 0 0.5rem ",
    },
    total: {
      width: "40%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      borderRadius: "0 0.5rem  0.5rem 0",
    },
  },

  "@media(min-width: 64rem)": {
    content: {
      width: "50%",
    },
  },
});

export default CompleteOrderStyles;
