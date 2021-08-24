import React from "react";
import AboutStyles from "./AboutStyles";
import man_mobile from "../../assets/shared/mobile/image-best-gear.jpg";
import man_tablet from "../../assets/shared/tablet/image-best-gear.jpg";
import man_desktop from "../../assets/shared/desktop/image-best-gear.jpg";

function About() {
  const classes = AboutStyles();
  return (
    <section className={classes.about}>
      <div className={classes.wrapper__about}>
        <picture className={classes.about__img}>
          <source srcSet={man_desktop} media="(min-width: 64rem)" />
          <source srcSet={man_tablet} media="(min-width: 48rem)" />
          <img src={man_mobile} alt="man listening to music" />
        </picture>
        <div className={classes.about__text}>
          <h4>
            Bringing you the <span>best</span> audio gear
          </h4>
          <p>
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
