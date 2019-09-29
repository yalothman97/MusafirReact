import { combineReducers } from "redux";

// Reducers
import authorsReducer from "./authors";
import booksReducer from "./books";
import authReducer from "./authentication";

const rootReducer = combineReducers({
  rootAuthors: authorsReducer,
  rootBooks: booksReducer,
  user: authReducer
});

export default rootReducer;
