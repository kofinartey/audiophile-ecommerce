import React, { useState } from "react";
import { Link } from "react-router-dom";
import CloseSharpIcon from "@material-ui/icons/CloseSharp";
import { IconButton } from "@material-ui/core";
import hamburger from "../../assets/shared/tablet/icon-hamburger.svg";
import MobileMenuStyles from "./MobileMenuStyles";

function MobileMenu() {
  const classes = MobileMenuStyles();
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className={classes.MobileMenu}>
      <div className={classes.menu__toggler} onClick={handleClick}>
        <img src={hamburger} alt="" />
      </div>
      <div
        className={classes.overlay}
        style={{ opacity: open && "1", pointerEvents: open && "all" }}
        onClick={handleClick}
      ></div>
      <div className={classes.menu} style={{ left: open && "0" }}>
        <Link to="/" className={classes.mobile__Link} onClick={handleClick}>
          HOME
        </Link>
        <Link
          to="/headphones"
          className={classes.mobile__Link}
          onClick={handleClick}
        >
          HEADPHONES
        </Link>
        <Link
          to="/speakers"
          className={classes.mobile__Link}
          onClick={handleClick}
        >
          SPEAKERS
        </Link>
        <Link
          to="/earphones"
          className={classes.mobile__Link}
          onClick={handleClick}
        >
          EARPHONES
        </Link>
      </div>
    </div>
  );
}

export default MobileMenu;
