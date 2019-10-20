import instance from "./instance";
import * as actionTypes from "../actions/actionTypes";

export const getTravelPackages = () => {
  console.log("GETTING LIST");
  return async dispatch => {
    dispatch(setTravelPackagesLoading());
    try {
      const res = await instance.get("packages/");
      const travelPackages = res.data;
      console.log("TRAVEL PACKAGES LIST!!!!!!!!!:", travelPackages);
      dispatch({
        type: actionTypes.GET_TRAVELPACKAGES,
        payload: travelPackages
      });
    } catch (err) {
      console.error("Error while fetching travel packages", err);
    }
  };
};

export const getTravelPackageDetail = travelPackage => {
  const travelPackageID = travelPackage.id;
  console.log("HEREEEEEEE", travelPackage.id);
  return async dispatch => {
    dispatch(setTravelPackagesLoading());
    try {
      const res = await instance.get(`packages/${travelPackageID}/`);
      const travelPackage = res.data;
      console.log("TRAVEL PACKAGE!!!!!!!!!!!!!!!!", travelPackage);
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
