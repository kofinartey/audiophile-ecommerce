import { ADD_TO_CART, REMOVE_ALL, CHECKOUT } from "./cartTypes";

export const addToCart = () => {
  return {
    type: REMOVE_ALL,
  };
};

export const checkout = () => {
  return {
    type: CHECKOUT,
  };
};
