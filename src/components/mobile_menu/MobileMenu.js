import React, { useState } from "react";
import PageLinks from "../page_links/PageLinks";
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
      <div
        className={classes.menu}
        onClick={handleClick}
        style={{ left: open && "0" }}
      >
        <PageLinks />
      </div>
    </div>
  );
}

export default MobileMenu;
