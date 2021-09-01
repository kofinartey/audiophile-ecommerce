import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { v4 } from "uuid";

import { yupResolver } from "@hookform/resolvers/yup";
import schema from "./schema";
import Input from "../../components/form_elements/Input";
import RadioInput from "../../components/form_elements/RadioInput";
import Button from "../../components/button/Button";
import CompleteOrder from "../../components/complete_order/CompleteOrder";
import { addOrder } from "../../redux/orders/ordersActions";
import formatAmount from "../../helper_functions/formatAmount";
import CheckoutStyles from "./CheckoutStyles";

function Checkout() {
  const classes = CheckoutStyles();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schema),
  });
  const [checkedStatus, setCheckedStatus] = useState({
    e_money: true,
    cash: false,
  });
  const cartData = useSelector((state) => state.cart);
  // const [cartCount, setCartCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [complete, setComplete] = useState(false);
  const shipping = 50;
  const grandTotal = shipping + totalPrice;
  const orderId = v4();

  //calculate cart items and total price from cart quantity
  useEffect(() => {
    let total = 0;
    cartData.forEach((item) => {
      total += item.qty * item.price;
    });
    setTotalPrice(total);
  }, [cartData]);

  const handleCheck = (e) => {
    setCheckedStatus({
      e_money: false,
      cash: false,
      [e.target.id]: true,
    });
  };
  const handleFormSubmit = (data) => {
    const orderDetails = {
      userDetails: data,
      itemDetails: cartData,
      totalAmount: grandTotal,
      id: orderId,
    };
    dispatch(addOrder(orderDetails));
    setComplete(!complete);
  };
  return (
    // PAGE LAYOUT
    // FORM
    //   Two main cards
    //     -Form entries
    //     -summary

    <div className={classes.Checkout}>
      <div className={classes.header}></div>
      {complete && (
        <CompleteOrder
          orderDetails={{ list: cartData, total: grandTotal }}
          setComplete={setComplete}
        />
      )}
      <div className={classes.wrapper}>
        <p className={classes.go_back}>Go Back</p>
        <form
          className={classes.form}
          onSubmit={handleSubmit(handleFormSubmit)}
        >
          <div className={`${classes.input__section} ${classes.card}`}>
            <h4>Checkout</h4>
            <p className={classes.form__section__title}>Billing Details</p>
            <div className={classes.form__section}>
              <Input
                type="text"
                label="Name"
                inputid="name"
                {...register("name", { required: true })}
                errors={errors.name?.message}
              />
              <Input
                type="email"
                label="Email Address"
                inputid="email"
                {...register("email", { required: true })}
                errors={errors.email?.message}
              />
              <Input
                type="tel"
                label="Phone Number"
                inputid="phone"
                {...register("phone", { required: true })}
                errors={errors.phone?.message}
              />
            </div>
            <p className={classes.form__section__title}>Shipping info</p>
            <div className={classes.form__section}>
              <Input
                type="text"
                label="Your Address"
                inputid="address"
                {...register("address", { required: true })}
                errors={errors.address?.message}
              />
              <Input
                type="text"
                label="ZIP Code"
                inputid="zipcode"
                {...register("zip", { required: true })}
                errors={errors.zip?.message}
              />
              <Input
                type="text"
                label="City"
                inputid="city"
                {...register("city", { required: true })}
                errors={errors.city?.message}
              />
              <Input
                type="text"
                label="Country"
                inputid="country"
                {...register("country", { required: true })}
                errors={errors.country?.message}
              />
            </div>
            <p className={classes.form__section__title}>Payment Details</p>
            <div className={classes.form__section}>
              <p>Payment Method</p>
              <div>
                <RadioInput
                  label="e-Money"
                  name="payment_method"
                  inputid="e_money"
                  checked={checkedStatus.e_money}
                  onChange={handleCheck}
                />
                <RadioInput
                  label="Cash on Delivery"
                  name="payment_method"
                  inputid="cash"
                  checked={checkedStatus.cash}
                  onChange={handleCheck}
                />
              </div>
              <>
                <Input
                  type="text"
                  label="e-Money Number"
                  inputid="e-money-number"
                  style={{ opacity: checkedStatus.cash && "0.3" }}
                  {...register("e_money_number", {
                    required: checkedStatus.e_money && true,
                  })}
                  disabled={checkedStatus.cash}
                  errors={errors.e_money_number?.message}
                />
                <Input
                  type="password"
                  label="e-Money PIN"
                  inputid="e-money-pin"
                  style={{ opacity: checkedStatus.cash && "0.3" }}
                  {...register("e_money_pin", {
                    required: checkedStatus.e_money && true,
                  })}
                  disabled={checkedStatus.cash}
                  errors={errors.e_money_pin?.message}
                />
              </>
            </div>
          </div>

          <div className={`${classes.cart__summary} ${classes.card}`}>
            <h6 className={classes.cart__summary__title}>summary</h6>
            <div className={classes.itemList}>
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
                    <p>$ {formatAmount(item.price)}</p>
                  </div>
                  <div className={classes.item__qty}>
                    <p>x{item.qty}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className={classes.total}>
              <div className={classes.entry}>
                <p>TOTAL</p>
                <h6>$ {formatAmount(totalPrice)}</h6>
              </div>
              <div className={classes.entry}>
                <p>SHIPPING</p>
                <h6>$ {shipping}</h6>
              </div>
              <div className={classes.entry}>
                <p>VAT (INCLUDED)</p>
                <h6>$ 1,079</h6>
              </div>
              <div className={`${classes.grandTotal} ${classes.entry}`}>
                <p>GRAND TOTAL</p>
                <h6>$ {formatAmount(grandTotal)}</h6>
              </div>
            </div>
            <div className={classes.pay__btn}>
              <Button primary>continue & pay</Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Checkout;
