import { makeStyles } from "@material-ui/core";

const CheckoutStyles = makeStyles({
  header: {
    backgroundColor: "black",
    width: "100%",
    height: "5.625rem",
  },
  Checkout: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#fafafa",
  },
  wrapper: {
    width: "90%",
  },
  go_back: {
    color: "rgba(0,0,0,0.5)",
    marginTop: "1rem",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "6rem",
    "& h4": {
      marginBottom: "2rem",
    },
  },
  form__section__title: {
    color: "#D87D4A",
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: "0.1rem",
    fontSize: "13px",
    margin: "2.5rem 0 1rem 0",
  },
  card: {
    backgroundColor: "white",
    borderRadius: "0.5rem",
    padding: "2rem 1.5rem",
    margin: "2rem 0",
  },

  cart__summary__title: {
    marginBottom: "2rem",
  },
  cart__item: {
    display: "flex",
    alignItems: "center",
    marginBottom: "1.5rem",
    position: "relative",
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
    marginTop: "2rem",
  },
  entry: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "0.5rem",
    "& p": {
      color: "rgba(0,0,0,0.5)",
    },
  },
  grandTotal: {
    marginTop: "2rem",
    "& h6": {
      color: "#D87D4A",
    },
  },
  pay__btn: {
    marginTop: "2rem",
    "& button": {
      width: "100%",
    },
  },
  "@media(min-width: 48rem)": {
    form__section: {
      display: "grid",
      gridGap: "1rem",
      flexWrap: "wrap",
      "&:nth-of-type(1)": {
        gridTemplateColumns: "1fr 1fr",
        gridTemplateRows: "1fr 1fr",
      },
      "&:nth-of-type(2)": {
        gridTemplateColumns: "1fr 1fr",
        gridTemplateRows: "1fr 1fr 1fr",
        "& div:nth-of-type(1)": {
          gridColumn: "1/3",
        },
      },
      "&:nth-of-type(3)": {
        gridTemplateColumns: "1fr 1fr",
        gridTemplateRows: "1fr 1fr",
      },
    },
  },
  "@media(min-width: 64rem)": {
    wrapper: {
      width: "77%",
    },
    header: {
      height: "6.0625rem",
    },
    form: {
      width: "100%",
      flexDirection: "row",
      alignItems: "flex-start",
      justifyContent: "space-between",
    },
    input__section: {
      width: "63%",
    },
    cart__summary: {
      width: "35%",
    },
  },

  "@media(min-width: 70rem)": {
    input__section: {
      width: "69%",
    },
    cart__summary: {
      width: "29%",
    },
  },
});

export default CheckoutStyles;
