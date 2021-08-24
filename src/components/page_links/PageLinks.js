import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Button from "../button/Button";
import link_speakers from "../../assets/shared/desktop/image-speakers.png";
import link_headphones from "../../assets/shared/desktop/image-headphones.png";
import link_earphones from "../../assets/shared/desktop/image-earphones.png";
import PageLinkStyles from "./PageLinksStyles";

const linkData = [
  { link: "headphones", imgsrc: link_headphones },
  { link: "speakers", imgsrc: link_speakers },
  { link: "earphones", imgsrc: link_earphones },
];

function PageLinks() {
  const classes = PageLinkStyles();
  return (
    <section className={classes.section_page_links}>
      <div className={classes.wrapper_page_links}>
        {linkData.map((data) => (
          <motion.div
            className={classes.link_container}
            key={data.link}
            whileHover={{ y: -10, opacity: 0.5 }}
          >
            <Link to={`/${data.link}`} className={classes.page_link}>
              <img src={data.imgsrc} alt="" />
              <h6>{data.link}</h6>

              <Button>shop</Button>

              <div className={classes.link_bkg}></div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default PageLinks;
