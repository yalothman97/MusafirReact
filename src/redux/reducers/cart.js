import * as actionTypes from "../actions/actionTypes";
const initialState = {
  items: [],
  bookings: []
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_ITEM:
      const newitem = action.payload;

      console.log(state.items);
      let item = state.items.find(item => item.id === newitem.id);
      if (item) {
        item.quantity += newitem.quantity;
        return {
          ...state,
          items: [...state.items]
        };
      } else {
        return {
          ...state,
          items: state.items.concat([newitem])
        };
      }


    case actionTypes.REMOVE_ITEM:
      return {
        ...state,

        items: state.items.filter(item => {
          return item !== action.payload;
        })

        items: state.items.filter(item => item.id !== action.payload.id)
      };
    case actionTypes.BOOKINGS:
      return {
        ...state,
        bookings: action.payload

      };
    case actionTypes.CHECKOUT:
      return {
        ...state,
        items: []
      };
    default:
      return state;
  }
};

export default cartReducer;
