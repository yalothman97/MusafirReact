import { ADD_TO_CART, REMOVE_ITEM, CHECK_OUT } from "../actions/actionTypes";

const initialState = {
  cart: []
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TO_CART:
      return { ...state, cart: state.cart.concat(payload) };
    case REMOVE_ITEM:
      let filteredItems = state.cart.filter(item => item !== payload);
      return {
        ...state,
        cart: filteredItems
      };
    case CHECK_OUT:
      return { ...state, cart: [] };
    default:
      return state;
  }
};
