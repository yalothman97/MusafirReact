import instance from "./instance";

import { FETCH_PACKAGES } from "./actionTypes";
import { GET_PACKAGE } from "./actionTypes";

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

export const getPackage = packageID => {
  return async dispatch => {
    try {
      const res = await instance.get(`/packages/${packageID}/`);
      const packageItem = res.data;
      dispatch({
        type: GET_PACKAGE,
        payload: packageItem
      });
    } catch (error) {
      console.error(error);
    }
  };
};
