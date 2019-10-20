import { combineReducers } from "redux";

// Reducers
import packages from "./packages";
import cart from "./cart";
import authReducer from "./authentication";
import profileReducer from "./profile";

const rootReducer = combineReducers({
  rootPackages: packages,
  cart: cart,
  user: authReducer,
  profile: profileReducer
});

export default rootReducer;
