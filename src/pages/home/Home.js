import React from "react";
import Button from "../../components/button/Button";
import hero_mobile from "../../assets/home/mobile/image-header.jpg";
import hero_tablet from "../../assets/home/tablet/image-header.jpg";
import hero_desktop from "../../assets/home/desktop/image-hero.jpg";
import HomeStyles from "./HomeStyles";

function Home() {
  const classes = HomeStyles();
  return (
    <div className={classes.Home}>
      {/* ----- home hero ------ */}
      <section className={classes.hero}>
        <picture>
          <source srcset={hero_desktop} media="(min-width: 64rem)" />
          <source srcset={hero_tablet} media="(min-width: 45rem)" />
          <img src={hero_mobile} alt="" />
        </picture>
        <div className={classes.hero__wrapper}>
          <div className={classes.hero__content}>
            <h3>NEW PRODUCT</h3>
            <h2>XX99 Mark II Headphones</h2>
            <p>
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
            <div className={classes.hero__btn}>
              <Button primary>See Product</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
