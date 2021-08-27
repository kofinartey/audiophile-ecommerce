import { makeStyles } from "@material-ui/core";

const ProductDetailsStyles = makeStyles({
  ProductDetails: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  header: {
    backgroundColor: "black",
    width: "100%",
    height: "5.625rem",
  },
  wrapper: {
    width: "90%",
    marginTop: "4rem",
  },
  go_back: {
    marginBottom: "3rem",
  },
  product__summary: {
    display: "flex",
    flexDirection: "column",
    "& img": {
      width: "100%",
      borderRadius: "0.5rem",
    },
  },
  product__picture: {
    width: "100%",
    "& img": {
      borderRadius: "0.5rem",
      verticalAlign: "middle",
    },
  },
  new_product: {
    color: "#D87D4A",
    fontSize: "0.875rem",
    textTransform: "uppercase",
    letterSpacing: "0.5rem",
    marginBottom: "1rem",
  },

  product__name: {
    marginBottom: "2rem",
  },
  description: {
    color: "rgba(0,0,0,0.5)",
    marginBottom: "2rem",
    lineHeight: "1.5rem",
  },
  product__price: {
    marginBottom: "2rem",
  },
  add_to_cart: {
    display: "flex",
  },
  input: {
    backgroundColor: "#f1f1f1",
    width: "7.5rem",
    marginRight: "1rem",
    padding: "0 0.5rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  btn: {
    height: "2rem",
    width: "2rem",
    borderRadius: "0.5rem",
    borderStyle: "none",
    backgroundColor: "transparent",
    color: "grey",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "rgba(0,0,0,0.02)",
      color: "#D87D4A",
    },
  },

  product__details: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    "& h4": {
      marginBottom: "2rem ",
    },
  },
  features: {
    marginTop: "6rem",
    "& p": {
      whiteSpace: "pre-line",
    },
  },
  accessories: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    marginTop: "6rem",
  },
  accessories__item: {
    width: "100%",
    display: "flex",
    marginBottom: "0.5rem",
    color: "rgba(0,0,0,0.5)",
    "& h6": {
      color: "#D87D4A",
      fontSize: "15px",
      marginRight: "1rem",
      "& span": {
        textTransform: "lowercase",
      },
    },
  },

  // ---- gallery section
  product__gallery: {
    marginTop: "6rem",
    width: "100%",
    display: "grid",
    gridGap: "1rem",
    "& img": {
      width: "100%",
      borderRadius: "0.5rem",
      verticalAlign: "middle",
    },
  },

  //----- suggested products section
  suggested: {
    width: "100%",
    marginTop: "6rem",
    "& h5:nth-of-type(1)": {
      textAlign: "center",
      marginBottom: "3rem",
    },
  },
  suggested__list: {
    display: "flex",
    flexDirection: "column",
  },

  suggested__item: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: "2rem",
    "& img": {
      width: "100%",
      borderRadius: "0.5rem",
      marginBottom: "1.5rem",
    },
    "& h5": {
      marginBottom: "1.5rem",
    },
  },

  // ****** MEDIA QUERIES *****
  // ****** MEDIA QUERIES *****
  // ****** MEDIA QUERIES *****
  "@media(min-width: 48rem)": {
    product__summary: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
    product__picture: {
      width: "40%",
      "& img": {
        borderRadius: "0.5rem",
        verticalAlign: "middle",
      },
    },

    product__summary__text: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      width: "50%",
    },
    accessories: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "flex-start",
      "& h4": {
        marginTop: "0",
      },
    },
    accessories__list: {
      width: "50%",
    },

    product__gallery: {
      gridTemplateColumns: "1fr 1fr",
      gridTemplateRows: "auto 1fr",
    },
    first_img: {
      gridColumn: "1/2",
      gridRow: "1/2",
    },
    second_img: {
      gridColumn: "1/2",
      gridRow: "2/3",
    },
    third_img: {
      gridColumn: "2/4",
      gridRow: "1/3",
    },

    suggested__list: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
    suggested__item: {
      width: "32.5%",
    },
  },

  "@media(min-width: 64rem)": {
    wrapper: {
      width: "77%",
    },
    header: {
      height: "6.0625rem",
    },
    product__picture: {
      width: "50%",
    },
    product__summary__text: {
      width: "40%",
    },
    product__details: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
    features: {
      width: "60%",
    },
    accessories: {
      display: "block",
      width: "30%",
    },
    accessories__list: {
      width: "100%",
    },
  },

  "@media(min-width: 70rem)": {
    product__picture: {
      width: "40%",
    },
    product__summary__text: {
      width: "50%",
    },
  },
});

export default ProductDetailsStyles;
