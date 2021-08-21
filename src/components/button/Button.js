import React from "react";
import right_arrow from "../../assets/shared/desktop/icon-arrow-right.svg";
import { makeStyles } from "@material-ui/core";

function Button(props) {
  const { primary, secondary } = props;
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
      background: primary ? "#D87D4A" : "none",
      color: primary ? "white" : secondary ? "black" : "rgba(0,0,0,0.5)",
      border: secondary ? "2px solid black" : "none",
      cursor: "pointer",
      transition: "all 0.3s ease-in-out",
      "& img": {
        marginLeft: "1rem",
      },
      "&:hover": {
        background: primary ? "#FBAF85" : secondary ? "black" : null,
        color: primary ? "white" : secondary ? "white" : "#D87D4A",
      },
    },
  });

  const classes = styles();

  return (
    <button className={classes.Button}>
      {props.children}
      {!primary && !secondary && <img src={right_arrow} alt="" />}
    </button>
  );
}

export default Button;
