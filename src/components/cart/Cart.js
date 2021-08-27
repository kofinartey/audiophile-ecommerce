import React, { useState } from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import Button from "../button/Button";
import formatAmount from "../../helper_functions/formatAmount";
import CartStyles from "./CartStyles";
import { IconButton } from "@material-ui/core";
import cartIcon from "../../assets/shared/desktop/icon-cart.svg";

function Cart() {
  const classes = CartStyles();
  const [open, setOpen] = useState(false);
  const cartData = useSelector((state) => state.cart);
  return (
    <div className={classes.Cart}>
      <IconButton
        onClick={() => {
          setOpen(!open);
        }}
      >
        <img src={cartIcon} alt="cart icon" />
        {cartData.length > 0 && (
          <div className={classes.cartCount}>
            <h6>{cartData.length}</h6>
          </div>
        )}
      </IconButton>
      {open && (
        <>
          <motion.div
            className={classes.overlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            onClick={() => {
              setOpen(!open);
            }}
          ></motion.div>

          <div className={classes.cart__content}>
            <div className={classes.cart__top}>
              <h6>cart ({cartData.length})</h6>
              <p>Remove all</p>
            </div>

            <div className={classes.cart__list}>
              {cartData.map((item) => (
                <div className={classes.cart__item}>
                  <div className={classes.item__image}></div>
                  <div className={classes.item__summary}>
                    <h6>{item.name}</h6>
                    <p>${formatAmount(item.price)}</p>
                  </div>
                  <div className={classes.input}>
                    <button
                      className={classes.btn}
                      //   onClick={() => {
                      //     removeItem();
                      //   }}
                    >
                      -
                    </button>
                    <h6>{item.qty}</h6>
                    <button
                      className={classes.btn}
                      //   onClick={() => {
                      //     addItem();
                      //   }}
                    >
                      +
                    </button>
                  </div>
                </div>
              ))}
              <div className={classes.total}>
                <p>TOTAL</p>
                <h6>$XX.00</h6>
              </div>
              <div className={classes.checkout}>
                <Button primary>CHECKOUT</Button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
