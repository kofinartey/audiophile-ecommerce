import {
  ADD_TO_CART,
  INCREASE_QTY,
  DECREASE_QTY,
  REMOVE_ALL,
  CHECKOUT,
} from "./cartTypes";

export const addToCart = (itemData) => {
  return {
    type: ADD_TO_CART,
    payload: itemData,
  };
};

export const increaseQty = (id) => {
  return {
    type: INCREASE_QTY,
    payload: id,
  };
};
export const decreaseQty = (id) => {
  return {
    type: DECREASE_QTY,
    payload: id,
  };
};

export const removeAll = () => {
  return {
    type: REMOVE_ALL,
  };
};

export const checkout = () => {
  return {
    type: CHECKOUT,
  };
};
