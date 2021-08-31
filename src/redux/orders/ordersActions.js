import { ADD_ORDER } from "./ordersTypes";

export const addOrder = (data) => {
  return {
    type: ADD_ORDER,
    payload: data,
  };
};
