import { makeStyles } from "@material-ui/core";

const CartStyles = makeStyles({
  Cart: {
    position: "relative",
  },
  cartIcon: {
    position: "relative",
    cursor: "pointer",
  },
  cartCount: {
    width: "1.5rem",
    height: "1.5rem",
    backgroundColor: "#D87D4A",
    color: "white",
    borderRadius: "50%",
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    left: "1rem",
    top: "-0.8rem",
    "& h6": {
      fontSize: "0.8rem",
    },
  },
  overlay: {
    width: "100vw",
    height: "100vh",
    position: "fixed",
    left: "0",
    top: "5.625rem",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  cart__content: {
    minWidth: "21rem",
    width: "24rem",
    backgroundColor: "white",
    borderRadius: "0.5rem",
    padding: "2rem 1rem",
    position: "absolute",
    top: "6rem",
    right: "0",
    zIndex: "5",
    "& p": {
      color: "rgba(0,0,0,0.5)",
    },
  },
  cart__top: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "2rem",
    cursor: "pointer",
    "& p": {
      "&:hover": {
        color: "#D87D4A",
        textDecoration: "underline",
      },
    },
  },
  cart__item: {
    display: "flex",
    alignItems: "center",
    marginBottom: "1rem",
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
  },
  input: {
    backgroundColor: "#f1f1f1",
    width: "6rem",
    padding: "0 0.5rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    justifySelf: "end",
    position: "absolute",
    right: "0",
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

  total: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "2rem",
  },

  checkout: {
    marginTop: "2rem",
    "& button": {
      width: "100%",
    },
  },

  "@media(min-width: 48rem)": {
    cart__content: {
      padding: "2rem",
    },
  },

  "@media(min-width: 64rem)": {
    overlay: {
      top: "6.0625rem",
    },
  },
});

export default CartStyles;
