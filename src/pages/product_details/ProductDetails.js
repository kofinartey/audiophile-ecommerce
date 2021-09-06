import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { addToCart } from "../../redux/cart/cartAction";

import formatAmount from "../../helper_functions/formatAmount";
import GoBack from "../../components/form_elements/GoBack";
import Button from "../../components/button/Button";
import About from "../../components/about/About";
import PageLinks from "../../components/page_links/PageLinks";
import ProductDetailsStyles from "./ProductDetailsStyles";

function ProductDetails(props) {
  const classes = ProductDetailsStyles();
  const [purchaseQty, setPurchaseQty] = useState(1);
  const allData = useSelector((state) => state.data);
  const dispatch = useDispatch();
  const productName = props.routeprops.match.params.product;
  const product = allData.find((item) => item.slug === productName);

  const addItem = () => {
    setPurchaseQty((curState) => curState + 1);
  };
  const removeItem = () => {
    setPurchaseQty((curState) => (curState !== 1 ? curState - 1 : 1));
  };
  const dataToAdd = {
    name: product.name,
    slug: product.slug,
    id: product.id,
    price: product.price,
    qty: purchaseQty,
  };

  const resetQty = () => {
    setPurchaseQty(1);
  };

  const handleAddToCart = () => {
    dispatch(addToCart(dataToAdd));
    resetQty();
  };

  return (
    //  PAGE LAYOUT
    //     *product  summary
    //           - -image
    //            --summary text
    //     *product details
    <div className={classes.ProductDetails}>
      <div className={classes.header}></div>
      <div className={classes.wrapper}>
        <div className={classes.go_back}>
          <GoBack />
        </div>

        <div className={classes.product__summary}>
          <picture className={classes.product__picture}>
            <source
              srcSet={process.env.PUBLIC_URL + `${product.image.desktop}`}
              media="(min-width: 64rem)"
            />
            <source
              srcSet={process.env.PUBLIC_URL + `${product.image.tablet}`}
              media="(min-width: 48rem)"
            />

            <img
              src={process.env.PUBLIC_URL + `${product.image.mobile}`}
              alt={`${product.name}`}
            />
          </picture>
          <motion.div
            className={classes.product__summary__text}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {product.new && <p className={classes.new_product}>new product</p>}
            <h4 className={classes.product__name}>{product.name}</h4>
            <p className={classes.description}>{product.description}</p>
            <h6 className={classes.product__price}>
              $ {formatAmount(product.price)}
            </h6>
            <div className={classes.add_to_cart}>
              <div className={classes.input}>
                <button
                  className={classes.btn}
                  onClick={() => {
                    removeItem();
                  }}
                >
                  -
                </button>
                <h6>{purchaseQty}</h6>
                <button
                  className={classes.btn}
                  onClick={() => {
                    addItem();
                  }}
                >
                  +
                </button>
              </div>
              <Button primary onClick={handleAddToCart}>
                Add to cart
              </Button>
            </div>
          </motion.div>
        </div>

        {/* ----- Product Details ----- */}
        <div className={classes.product__details}>
          <div className={classes.features}>
            <h5>features</h5>
            <p className={classes.description}>{product.features}</p>
          </div>

          <div className={classes.accessories}>
            <h5>in the box</h5>
            <div className={classes.accessories__list}>
              {product.includes.map((accessory) => (
                <div className={classes.accessories__item} key={accessory.item}>
                  <h6>
                    {accessory.quantity}
                    <span>x</span>
                  </h6>
                  <p>{accessory.item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ----- Product gallery ----- */}
        <section className={classes.product__gallery}>
          {/* first picture */}
          <picture className={classes.first_img}>
            <source
              srcSet={
                process.env.PUBLIC_URL + `${product.gallery.first.desktop}`
              }
              media="(min-width: 64rem)"
            />
            <source
              srcSet={
                process.env.PUBLIC_URL + `${product.gallery.first.tablet}`
              }
              media="(min-width: 64rem)"
            />
            <img
              src={process.env.PUBLIC_URL + `${product.gallery.first.mobile}`}
              alt=""
            />
          </picture>

          {/* second picture */}
          <picture className={classes.second_img}>
            <source
              srcSet={
                process.env.PUBLIC_URL + `${product.gallery.second.desktop}`
              }
              media="(min-width: 64rem)"
            />
            <source
              srcSet={
                process.env.PUBLIC_URL + `${product.gallery.second.tablet}`
              }
              media="(min-width: 64rem)"
            />
            <img
              src={process.env.PUBLIC_URL + `${product.gallery.second.mobile}`}
              alt=""
            />
          </picture>

          {/* third picture */}
          <picture className={classes.third_img}>
            <source
              srcSet={
                process.env.PUBLIC_URL + `${product.gallery.third.desktop}`
              }
              media="(min-width: 64rem)"
            />
            <source
              srcSet={
                process.env.PUBLIC_URL + `${product.gallery.third.tablet}`
              }
              media="(min-width: 64rem)"
            />
            <img
              src={process.env.PUBLIC_URL + `${product.gallery.third.mobile}`}
              alt=""
            />
          </picture>
        </section>

        {/* ----- suggested products ----- */}
        <section className={classes.suggested}>
          <h5 className={classes.suggested__heading}>you may also like</h5>
          <div className={classes.suggested__list}>
            {product.others.map((item) => (
              <div className={classes.suggested__item} key={item.name}>
                <picture>
                  <source
                    srcSet={process.env.PUBLIC_URL + `${item.image.desktop}`}
                    media="(min-width:64rem)"
                  />
                  <source
                    srcSet={process.env.PUBLIC_URL + `${item.image.tablet}`}
                    media="(min-width:48rem)"
                  />
                  <img
                    src={process.env.PUBLIC_URL + `${item.image.mobile}`}
                    alt=""
                  />
                </picture>
                <h5>{item.name}</h5>
                <Link
                  to={`/${product.category}/${item.slug}`}
                  onClick={() => {
                    resetQty();
                  }}
                >
                  <Button primary>see product</Button>
                </Link>
              </div>
            ))}
          </div>
        </section>
      </div>
      <PageLinks />
      <About />
    </div>
  );
}

export default ProductDetails;
