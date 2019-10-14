import { combineReducers } from "redux";

// Reducers
import packages from "./packages";
// import booksReducer from "./books";
import authReducer from "./authentication";

const rootReducer = combineReducers({
  rootPackages: packages,
  // rootBooks: booksReducer,
  user: authReducer
});

export default rootReducer;
