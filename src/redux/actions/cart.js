import * as actionTypes from "./actionTypes";

import instance from "./instance";

export const addItemToCart = (packageItem, quantity) => ({
  type: actionTypes.ADD_ITEM,
  payload: { quantity: quantity, id: packageItem.id }
});

export const removeItemFromCart = item => ({
  type: actionTypes.REMOVE_ITEM,
  payload: item
});

export const checkoutCart = Items => {
  return async dispatch => {
    try {
      const res = await instance.post("packages/book/", Items);
      const reservation = res.data;
      dispatch({
        type: actionTypes.CHECKOUT,
        payload: reservation
      });
    } catch (err) {
      console.error("Error while trying to checkout", err);
    }
  };
};
