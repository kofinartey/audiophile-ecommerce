import React from "react";
import { Link } from "react-router-dom";
import formatAmount from "../../helper_functions/formatAmount";
import { useDispatch } from "react-redux";
import { removeAll } from "../../redux/cart/cartAction";
import Button from "../button/Button";
import CheckIcon from "@material-ui/icons/Check";
import CompleteOrderStyles from "./CompleteOrderStyles";

function CompleteOrder({ orderDetails }) {
  const classes = CompleteOrderStyles();
  const dispatch = useDispatch();
  console.log(orderDetails);
  const { list, total } = orderDetails;
  return (
    <div className={classes.CompleteOrder}>
      <div className={classes.overlay}></div>
      <div className={classes.content}>
        <div className={classes.checkmark}>
          <CheckIcon />
        </div>
        <div className={classes.top}>
          <h5>thank you for your order</h5>
          <p>You will receive an email confirmation shortly.</p>
        </div>
        <div className={classes.order}>
          <div className={classes.list}>
            {list.map((item) => (
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
                  <h6>{item.name.substring(0, item.name.lastIndexOf(" "))}</h6>
                  <p>$ {formatAmount(item.price)}</p>
                </div>
                <div className={classes.item__qty}>
                  <p>x{item.qty}</p>
                </div>
              </div>
            ))}
            {/* {list.length > 1 && <p>and {list.length - 1} other item(s)</p>} */}
          </div>
          <div className={classes.total}>
            <p>GRAND TOTAL</p>
            <h6>$ {formatAmount(total)}</h6>
          </div>
        </div>
        <Link
          className={classes.back}
          to="/"
          onClick={() => {
            dispatch(removeAll());
          }}
        >
          <Button primary> Back to home</Button>
        </Link>
      </div>
    </div>
  );
}

export default CompleteOrder;
