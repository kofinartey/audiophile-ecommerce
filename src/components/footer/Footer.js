import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/shared/desktop/logo.svg";
import facebook from "../../assets/shared/desktop/icon-facebook.svg";
import instagram from "../../assets/shared/desktop/icon-instagram.svg";
import twitter from "../../assets/shared/desktop/icon-twitter.svg";
import FooterStyles from "./FooterStyles";

function Footer() {
  const classes = FooterStyles();
  return (
    <footer className={classes.footer}>
      <div className={classes.wrapper}>
        <div className={classes.overline}></div>
        <Link to="/" className={classes.logo}>
          <img src={logo} alt="Link to home" />
        </Link>

        <div className={classes.nav__links}>
          <Link to="/">HOME</Link>
          <Link to="/headphones">HEADPHONES</Link>
          <Link to="/speakers">SPEAKERS</Link>
          <Link to="/earphones">EARPHONES</Link>
        </div>

        <div className={classes.footer__text}>
          <p>
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we’re open 7 days a week.
          </p>
        </div>
        <div className={classes.copyright}>
          <p>Copyright 2021. All Rights Reserved</p>
        </div>
        <div className={classes.social}>
          <Link to="#">
            <img src={facebook} alt="facebook link" />
          </Link>
          <Link to="#">
            <img src={twitter} alt="twitter link" />
          </Link>
          <Link to="#">
            <img src={instagram} alt="instagram link" />
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
