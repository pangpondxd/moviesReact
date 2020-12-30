import { combineReducers } from "redux";
import { cartReducer } from "./cartReducer";
import { searchReducer } from './searchReducer'

const rootReducer = combineReducers({
  cart: cartReducer,
  search: searchReducer,
});

export default rootReducer;