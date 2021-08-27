import { ADD_TO_CART, REMOVE_ALL, CHECKOUT } from "./cartTypes";

const initialState = [
  { name: "HEADPHONES", id: "1", price: 300, qty: 2 },
  //   { name: "HEADPHONES", id: "2", price: 300, qty: 2 },
  //   { name: "HEADPHONES", id: "3", price: 30000, qty: 2 },
];

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case REMOVE_ALL:
      return initialState;

    default:
      return state;
  }
};

export default cartReducer;
