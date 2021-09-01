import React from "react";
import { useHistory } from "react-router";
import { makeStyles } from "@material-ui/core";

function GoBack() {
  const history = useHistory();
  const styles = makeStyles({
    goBack: {
      cursor: "pointer",
      color: "rgba(0,0,0,0.5)",
      " &:hover": {
        color: "#D87D4A",
        textDecoration: "underline",
      },
    },
  });
  const classes = styles();
  return (
    <div>
      <p
        className={classes.goBack}
        onClick={() => {
          history.goBack();
        }}
      >
        Go back
      </p>
    </div>
  );
}

export default GoBack;
