import { combineReducers } from "redux";
import dataReducer from "./data/dataReducer";
import cartReducer from "./cart/cartReducer";

const allReducers = combineReducers({
  data: dataReducer,
  cart: cartReducer,
});

export default allReducers;
