import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/shared/desktop/logo.svg";
import MobileMenu from "../mobile_menu/MobileMenu";
import Cart from "../cart/Cart";
import HeaderStyles from "./HeaderStyles";

function Header() {
  // const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  // window.addEventListener("resize", () => {
  //   setWindowWidth(window.innerWidth);
  // });
  const classes = HeaderStyles();
  return (
    <nav className={classes.Header}>
      <div className={classes.wrapper}>
        <div className={classes.mobile__menu}>
          <MobileMenu />
        </div>
        <Link to="/" className={classes.logo}>
          <img src={logo} alt="audiophile logo" />
        </Link>
        <div className={classes.desktop__Links}>
          <Link to="/" className={classes.nav__Link}>
            HOME
          </Link>
          <Link to="/headphones" className={classes.nav__Link}>
            HEADPHONES
          </Link>
          <Link to="/speakers" className={classes.nav__Link}>
            SPEAKERS
          </Link>
          <Link to="/earphones" className={classes.nav__Link}>
            EARPHONES
          </Link>
        </div>
        <div className={classes.cart}>
          <Cart />
        </div>
      </div>
      <div className={classes.underline}></div>
    </nav>
  );
}

export default Header;
