import { combineReducers } from "redux";

// Reducers
import packages from "./packages";
import cart from "./cart";
import authReducer from "./authentication";
import profileReducer from "./profile";

const rootReducer = combineReducers({
  travelPackageReducer: packages,
  cartReducer: cart,
  userReducer: authReducer,
  profileReducer: profileReducer
});

export default rootReducer;
