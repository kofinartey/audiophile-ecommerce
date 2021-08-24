import { makeStyles } from "@material-ui/core";
import Headphones from "./Category";

const CategoryStyles = makeStyles({
  page_header: {
    height: "12rem",
    width: "100%",
    backgroundColor: "black",
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
    padding: "1.5rem",
  },
  product: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    margin: "8rem 0",
  },
  wrapper: {
    width: "90%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  product__image: {
    width: "100%",
    "& img": {
      width: "100%",
      borderRadius: "0.5rem",
      marginBottom: "1.5rem",
    },
  },
  product__text: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",

    "& h4": {
      maxWidth: "15rem",
      marginBottom: "1.5rem",
    },
    "& p": {
      color: "rgba(0,0,0,0.5)",
      marginBottom: "1.5rem",
      lineHeight: "1.8rem",
    },
    "& $new_product": {
      color: "#D87D4A",
      fontSize: "0.875rem",
      textTransform: "uppercase",
      letterSpacing: "0.4rem",
    },
  },
  new_product: {},

  "@media(min-width: 48rem)": {
    wrapper: {
      "& h4": {
        fontSize: "2.5rem",
        maxWidth: "30rem",
      },
    },
  },

  "@media(min-width: 64rem)": {
    wrapper: {
      width: "80%",
      flexDirection: "row",
    },
    product__text: {
      alignItems: "flex-start",
      textAlign: "left",
      marginLeft: "5%",
    },
    // product: {
    //   backgroundColor: "red",
    //   "&:nth-of-type(2n)": {
    //     backgroundColor: "white",
    //   },
    // },
  },
});

export default CategoryStyles;
