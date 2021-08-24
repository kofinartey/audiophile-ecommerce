import { ImageSearch } from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import Button from "../button/Button";
import ProductSummaryStyles from "./ProductSummaryStyles";

function ProductSummary(props) {
  const classes = ProductSummaryStyles();
  const { product } = props;
  return (
    <div className={classes.product}>
      <div className={classes.wrapper}>
        <picture className={classes.product__image}>
          <source
            srcSet={product.category_images.desktop}
            media="(min-width: 64rem)"
          />
          <source
            srcSet={product.category_images.tablet}
            media="(min-width: 48rem)"
          />
          <img src={product.image.mobile} alt={`&${product.name}`} />
        </picture>
        <div className={classes.product__text}>
          {product.new && <p className={classes.new_product}>new product</p>}
          <h4>{product.name}</h4>
          <p>{product.description}</p>
          <Link to="">
            <Button primary> see product</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductSummary;
