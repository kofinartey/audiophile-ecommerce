import React from "react";
import right_arrow from "../../assets/shared/desktop/icon-arrow-right.svg";
import { makeStyles } from "@material-ui/core";

function Button(props) {
  const { primary, outlined, dark } = props;
  const styles = makeStyles({
    Button: {
      //   width: "auto",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "1rem 2rem",
      textTransform: "uppercase",
      fontWeight: "700",
      fontSize: "13px",
      letterSpacing: "0.1rem",
      background: primary ? "#D87D4A" : dark ? "black" : "none",
      color: primary || dark ? "white" : outlined ? "black" : "rgba(0,0,0,0.5)",
      border: outlined ? "2px solid black" : "none",
      cursor: "pointer",
      transition: "all 0.3s ease-in-out",
      "& img": {
        marginLeft: "1rem",
        height: "100%",
      },
      "&:hover": {
        background: primary
          ? "#FBAF85"
          : outlined
          ? "black"
          : dark
          ? "#4C4C4C"
          : null,
        color: primary || dark ? "white" : outlined ? "white" : "#D87D4A",
      },
    },
  });

  const classes = styles();

  return (
    <button className={classes.Button}>
      {props.children}
      {!primary && !outlined && !dark && <img src={right_arrow} alt="" />}
    </button>
  );
}

export default Button;
