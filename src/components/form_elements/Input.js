import React, { forwardRef } from "react";
import InputStyles from "./InputStyles";

const Input = forwardRef((props, ref) => {
  const classes = InputStyles();

  return (
    <div className={classes.form__control} style={props.style}>
      <label className={classes.label} htmlFor={props.inputId}>
        {props.label}
      </label>
      <input
        {...props}
        type={props.type}
        className={classes.input}
        id={props.inputId}
        // name={props.name}
        ref={ref}
        onClick={props.onClick}
        style={{ border: props.errors && "2px solid #CD2C2C" }}
        disabled={props.disabled}
      />
      <p className={classes.errors}>{props.errors}</p>
    </div>
  );
});

export default Input;
