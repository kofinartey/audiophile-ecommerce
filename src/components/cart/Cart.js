import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import {
  removeAll,
  increaseQty,
  decreaseQty,
} from "../../redux/cart/cartAction";
import formatAmount from "../../helper_functions/formatAmount";
import Button from "../button/Button";
import CartStyles from "./CartStyles";
import { IconButton } from "@material-ui/core";
import cartIcon from "../../assets/shared/desktop/icon-cart.svg";

function Cart() {
  const classes = CartStyles();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const cartData = useSelector((state) => state.cart);
  const [cartCount, setCartCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  //calculate cart items and total price from cart quantity
  useEffect(() => {
    let count = 0;
    let total = 0;
    cartData.forEach((item) => {
      count += item.qty;
      total += item.qty * item.price;
    });
    setCartCount(count);
    setTotalPrice(total);
  }, [cartData]);

  const handleRemove = () => {
    dispatch(removeAll());
  };

  return (
    <div className={classes.Cart}>
      <div
        className={classes.cartIcon}
        onClick={() => {
          setOpen(!open);
        }}
      >
        <img src={cartIcon} alt="cart icon" />
        {cartCount > 0 && (
          <div className={classes.cartCount}>
            <h6>{cartCount}</h6>
          </div>
        )}
      </div>

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
              <p onClick={handleRemove}>Remove all</p>
            </div>

            <div className={classes.cart__list}>
              {cartData.map((item) => (
                <div className={classes.cart__item} key={item.id}>
                  <div className={classes.item__image}>
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        `/assets/cart/image-${item.slug}.jpg`
                      }
                      alt=""
                    />
                  </div>
                  <div className={classes.item__summary}>
                    <h6>
                      {item.name.substring(0, item.name.lastIndexOf(" "))}
                    </h6>
                    <p>${formatAmount(item.price)}</p>
                    {/* <p>${formatAmount(item.price)}</p> */}
                  </div>
                  <div className={classes.input}>
                    <button
                      className={classes.btn}
                      onClick={() => {
                        dispatch(decreaseQty(item.id));
                      }}
                    >
                      -
                    </button>
                    <h6>{item.qty}</h6>
                    <button
                      className={classes.btn}
                      onClick={() => {
                        dispatch(increaseQty(item.id));
                      }}
                    >
                      +
                    </button>
                  </div>
                </div>
              ))}
              <div className={classes.total}>
                <p>TOTAL</p>
                <h6>$ {formatAmount(totalPrice)}</h6>
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
