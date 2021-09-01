import React from "react";
import { makeStyles } from "@material-ui/core";

function RadioInput(props) {
  const styles = makeStyles({
    RadioInput: {
      padding: "1rem",
      border: props.checked ? "1px solid #D87D4A" : "1px solid #cfcfcf",
      borderRadius: "0.5rem",
      marginBottom: "1rem",
    },
    input: {
      display: "none",
      backgroundColor: "red",
    },
    label: {
      fontWeight: "bold",
      display: "flex",
      alignItems: "center",
    },
    outer__circle: {
      width: "1rem",
      height: "1rem",
      border: "1px solid gray",
      borderRadius: "50%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginRight: "1rem",
    },
    inner__circle: {
      width: "0.5rem",
      height: "0.5rem",
      borderRadius: "50%",
      backgroundColor: props.checked && "#D87D4A",
      transition: "all .3s ease-in-out",
    },
  });
  const classes = styles();
  return (
    <div className={classes.RadioInput}>
      <input
        type="radio"
        className={classes.input}
        name={props.name}
        id={props.inputid}
        value={props.inputid}
        checked={props.checked}
        onChange={props.onChange}
      />
      <label htmlFor={props.inputid} className={classes.label}>
        <div className={classes.outer__circle}>
          <div className={classes.inner__circle}></div>
        </div>
        {props.label}
      </label>
    </div>
  );
}

export default RadioInput;
