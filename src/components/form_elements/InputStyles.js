import { makeStyles } from "@material-ui/core";

const InputStyles = makeStyles({
  form__control: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "1rem",
  },
  label: {
    fontWeight: "bold",
    fontSize: "0.75rem",
    marginBottom: "0.5rem",
  },
  input: {
    fontFamily: "Manrope",
    fontWeight: "bold",
    padding: "1rem",
    borderRadius: "0.5rem",
    border: "1px solid #CFCFCF",
    caretColor: "#d87d4a",
    "&:focus": {
      //   backgroundColor: "red",
      border: "1px solid #D87D4A",
      boxShadow: "0 0 10px rgba(0,0,0,0.05)",
      outline: "none",
    },
  },
});

export default InputStyles;
