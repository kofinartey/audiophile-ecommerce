import {
  ADD_TO_CART,
  INCREASE_QTY,
  DECREASE_QTY,
  REMOVE_ALL,
  // CHECKOUT,
} from "./cartTypes";

const initialState = [];

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const inCart = state.find((item) =>
        item.id === action.payload.id ? true : false
      );
      const newCart = state.map((item) =>
        item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item
      );
      return inCart ? newCart : [...state, action.payload];

    case INCREASE_QTY:
      const updatedList = state.map((item) =>
        item.id === action.payload ? { ...item, qty: item.qty + 1 } : item
      );
      return updatedList;

    case DECREASE_QTY:
      const newList = state.map((item) =>
        item.id === action.payload && item.qty !== 0
          ? { ...item, qty: item.qty - 1 }
          : item
      );
      return newList;

    case REMOVE_ALL:
      return initialState;

    default:
      return state;
  }
};

export default cartReducer;
