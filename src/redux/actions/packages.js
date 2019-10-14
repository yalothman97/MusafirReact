import instance from "./instance";

import { FETCH_PACKAGES } from "./actionTypes";

export const fetchPackages = () => {
  return async dispatch => {
    try {
      const res = await instance.get("/packages/");
      const packages = res.data;
      dispatch({
        type: FETCH_PACKAGES,
        payload: packages
      });
    } catch (error) {
      console.error(error);
    }
  };
};
