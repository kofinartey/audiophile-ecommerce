import { combineReducers } from "redux";
import dataReducer from "./data/dataReducer";
import cartReducer from "./cart/cartReducer";
import ordersReducer from "./orders/ordersReducer";
import { modalReducer } from "./modal_display/modalReducer";

const allReducers = combineReducers({
  data: dataReducer,
  cart: cartReducer,
  orders: ordersReducer,
  modal: modalReducer,
});

export default allReducers;
