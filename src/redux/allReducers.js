import { combineReducers } from "redux";
import dataReducer from "./data/dataReducer";
import cartReducer from "./cart/cartReducer";
import ordersReducer from "./orders/ordersReducer";

const allReducers = combineReducers({
  data: dataReducer,
  cart: cartReducer,
  orders: ordersReducer,
});

export default allReducers;
