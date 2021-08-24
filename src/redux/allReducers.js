import { combineReducers } from "redux";
import dataReducer from "./data/dataReducer";

const allReducers = combineReducers({
  data: dataReducer,
});

export default allReducers;
