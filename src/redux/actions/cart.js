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

export const checkoutCart = Item => {
  return async dispatch => {
    try {
      console.log(Item);
      const res = await instance.post("packages/book/", {
        quantity: Item.quantity,
        id: Item.id
      });

      console.log(res.data);

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
