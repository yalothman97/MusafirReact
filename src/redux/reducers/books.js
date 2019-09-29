import { SET_BOOKS, ADD_BOOK } from "../actions/actionTypes";

const initialState = {
  books: [],
  loading: true
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BOOKS:
      const books = action.payload;
      return {
        ...state,
        books,
        loading: false
      };

    case ADD_BOOK:
      const newBook = action.payload;
      return {
        ...state,
        books: [newBook, ...state.books]
      };

    default:
      return state;
  }
};

export default reducer;
