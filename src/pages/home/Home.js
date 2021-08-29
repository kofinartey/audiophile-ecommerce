import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import About from "../../components/about/About";
import Button from "../../components/button/Button";
import hero_mobile from "../../assets/home/mobile/image-header.jpg";
import hero_tablet from "../../assets/home/tablet/image-header.jpg";
import hero_desktop from "../../assets/home/desktop/image-hero.jpg";
import speaker_zx9_mobile from "../../assets/home/mobile/image-speaker-zx9.png";
import speaker_zx9_tablet from "../../assets/home/tablet/image-speaker-zx9.png";
import speaker_zx9_desktop from "../../assets/home/desktop/image-speaker-zx9.png";
import speaker_zx7_mobile from "../../assets/home/mobile/image-speaker-zx7.jpg";
import speaker_zx7_tablet from "../../assets/home/tablet/image-speaker-zx7.jpg";
import speaker_zx7_desktop from "../../assets/home/desktop/image-speaker-zx7.jpg";
import earphones_yx1_mobile from "../../assets/home/mobile/image-earphones-yx1.jpg";
import earphones_yx1_tablet from "../../assets/home/tablet/image-earphones-yx1.jpg";
import earphones_yx1_desktop from "../../assets/home/desktop/image-earphones-yx1.jpg";

import HomeStyles from "./HomeStyles";
import PageLinks from "../../components/page_links/PageLinks";

const heroVariant = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};
const heroItemVariant = {
  hidden: { x: 200, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      stiffness: 500,
    },
  },
};

function Home() {
  const classes = HomeStyles();
  return (
    <div className={classes.Home}>
      {/* ----- home hero ------ */}
      <section className={classes.hero}>
        <picture>
          <source srcSet={hero_desktop} media="(min-width: 64rem)" />
          <source srcSet={hero_tablet} media="(min-width: 45rem)" />
          <img src={hero_mobile} alt="" />
        </picture>
        <div className={classes.hero__wrapper}>
          <motion.div
            className={classes.hero__content}
            variants={heroVariant}
            initial="hidden"
            animate="show"
          >
            <motion.h3>NEW PRODUCT</motion.h3>
            <motion.h2 variants={heroItemVariant}>
              XX99 Mark II Headphones
            </motion.h2>
            <motion.p variants={heroItemVariant}>
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </motion.p>
            <motion.div
              className={classes.hero__btn}
              variants={heroItemVariant}
            >
              <Link to="/headphones/xx99-mark-two-headphones">
                <Button primary>See Product</Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ------ image links to other pages ------- */}
      <PageLinks />

      {/* ------ section for featured products on homepage ------ */}
      <section className={classes.featured}>
        <div className={classes.wrapper_featured}>
          {/* speaker zx9 */}
          <div className={`${classes.speaker_zx9} ${classes.featured__item}`}>
            <picture className={classes.zx9_picture}>
              <source srcSet={speaker_zx9_desktop} media="(min-width: 64rem)" />
              <source srcSet={speaker_zx9_tablet} media="(min-width: 48rem)" />
              <img src={speaker_zx9_mobile} alt="speaker zx9" />
            </picture>
            <div className={classes.zx9__text}>
              <h2>zx9 speaker</h2>
              <p>
                Upgrade to premium speakers that are phenomenally built to
                deliver truly remarkable sound.
              </p>
              <Link to="/speakers/zx9-speaker">
                <Button dark>See product</Button>
              </Link>
            </div>
          </div>

          {/* speaker zx7 */}
          <div className={`${classes.speaker_zx7} ${classes.featured__item}`}>
            <picture>
              <source srcSet={speaker_zx7_desktop} media="(min-width: 64rem)" />
              <source srcSet={speaker_zx7_tablet} media="(min-width: 48rem)" />
              <img src={speaker_zx7_mobile} alt="zx7 speaker" />
            </picture>
            <div className={classes.zx7__content}>
              <div className={classes.zx7__text}>
                <h4>zx7 speaker</h4>
                <Link to="/speakers/zx7-speaker">
                  <Button outlined>See product</Button>
                </Link>
              </div>
            </div>
          </div>

          {/* earphones yx1 */}
          <div className={`${classes.earphones_yx1} ${classes.featured__item}`}>
            <div className={`${classes.yx1_one} ${classes.yx1_half}`}>
              <picture>
                <source
                  srcSet={earphones_yx1_desktop}
                  media="(min-width: 64rem)"
                />
                <source
                  srcSet={earphones_yx1_tablet}
                  media="(min-width: 48rem)"
                />
                <img src={earphones_yx1_mobile} alt="yx1 earphones" />
              </picture>
            </div>
            <div className={`${classes.yx1_two} ${classes.yx1_half}`}>
              <h4> yx1 earphones</h4>
              <Link to="/earphones/yx1-earphones">
                <Button outlined>see product</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ----- section for ABOUT ------ */}
      <About />
    </div>
  );
}

export default Home;
