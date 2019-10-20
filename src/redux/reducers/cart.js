import * as actionTypes from "../actions/actionTypes";
const initialState = {
  items: []
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_ITEM:
      const newitem = action.payload;
      return {
        items: state.items.concat([newitem])
      };

    case actionTypes.REMOVE_ITEM:
      return {
        items: state.items.filter(item => {
          return item !== action.payload;
        })
      };
    case actionTypes.CHECKOUT:
      return {
        items: []
      };
    default:
      return state;
  }
};

export default cartReducer;
