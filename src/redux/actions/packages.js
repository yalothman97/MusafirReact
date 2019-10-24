import instance from "./instance";
import * as actionTypes from "../actions/actionTypes";

export const getTravelPackages = () => {
  return async dispatch => {
    dispatch(setTravelPackagesLoading());
    try {
      const res = await instance.get("packages/");
      const travelPackages = res.data;
      dispatch({
        type: actionTypes.GET_TRAVELPACKAGES,
        payload: travelPackages
      });
    } catch (err) {
      console.error("Error while fetching travel packages", err);
    }
  };
};

export const getTravelPackageDetail = travelPackageID => {
  return async dispatch => {
    dispatch(setTravelPackagesLoading());
    try {
      const res = await instance.get(`packages/${travelPackageID}/`);
      const travelPackage = res.data;
      dispatch({
        type: actionTypes.GET_TRAVELPACKAGEDETAIL,
        payload: travelPackage
      });
    } catch (err) {
      console.error("Error while fetching travel package", err);
    }
  };
};

export const setTravelPackagesLoading = () => ({
  type: actionTypes.TRAVELPACKAGES_LOADING
});
