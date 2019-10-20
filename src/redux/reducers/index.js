import { combineReducers } from "redux";

// Reducers
import packages from "./packages";
import cart from "./cart";
import authReducer from "./authentication";

const rootReducer = combineReducers({
  rootPackages: packages,
  cart: cart,
  user: authReducer
});

export default rootReducer;
