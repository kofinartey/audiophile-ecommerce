import { ADD_ORDER } from "./ordersTypes";

const initialState = [];

const ordersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ORDER:
      return [...state, action.payload];

    default:
      return state;
  }
};

export default ordersReducer;
