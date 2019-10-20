import axios from "axios";
import * as actionTypes from "./types";

// export const getOrders = () => {
//   return async dispatch => {
//     dispatch(setCoffeeShopsLoading());
//     try {
//       const res = await axios.get("http://178.128.114.232/api/?format=json");
//       const orders = res.data;
//       dispatch({
//         type: GET_ORDERS,
//         payload: orders
//       });
//     } catch (err) {
//       console.error("Error while fetching shops", err);
//     }
//   };
// };

export const setLoading = () => ({
  type: ORDERS_LOADING
});

export const addItemToCart = item => {
  return {
    type: ADD_ITEM,
    payload: item
  };
};

export const removeItemFromCart = item => ({
  type: actionTypes.REMOVE_ITEM,
  payload: item
});

export const checkoutCart = () => ({
  type: actionTypes.CHECKOUT
});
