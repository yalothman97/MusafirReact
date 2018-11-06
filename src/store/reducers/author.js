import * as actionTypes from "../actions/actionTypes";

const initialState = {
  author: {},
  loading: true
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_AUTHOR_DETAIL:
      return {
        ...state,
        author: action.payload,
        loading: false
      };

    case actionTypes.POST_BOOK:
      return {
        ...state,
        author: {
          ...state.author,
          books: state.author.books.concat(action.payload)
        }
      };

    case actionTypes.SET_AUTHOR_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};

export default reducer;
