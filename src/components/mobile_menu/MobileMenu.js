import React, { useState } from "react";
import { Link } from "react-router-dom";
import CloseSharpIcon from "@material-ui/icons/CloseSharp";
import { IconButton } from "@material-ui/core";
import hamburger from "../../assets/shared/tablet/icon-hamburger.svg";
import MobileMenuStyles from "./MobileMenuStyles";

function MobileMenu() {
  const classes = MobileMenuStyles();
  const [open, setOpen] = useState(false);

  const handleHamburger = () => {
    setOpen(!open);
  };
  return (
    <div className={classes.MobileMenu}>
      <div className={classes.menu__toggler}>
        <img src={hamburger} alt="" onClick={handleHamburger} />
      </div>
      <div
        className={classes.overlay}
        style={{ opacity: open && "1", pointerEvents: open && "all" }}
      ></div>
      <div className={classes.menu} style={{ left: open && "0" }}>
        <Link className={classes.mobile__Link}>HOME</Link>
        <Link className={classes.mobile__Link}>HEADPHONES</Link>
        <Link className={classes.mobile__Link}>SPEAKERS</Link>
        <Link className={classes.mobile__Link}>EARPHONES</Link>
      </div>
    </div>
  );
}

export default MobileMenu;
