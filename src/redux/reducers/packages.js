import {
  GET_TRAVELPACKAGES,
  GET_TRAVELPACKAGEDETAIL
} from "../actions/actionTypes";

const initialState = {
  packages: [],
  packageItem: [],
  loadingPackage: true,
  loadingList: true
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_TRAVELPACKAGES:
      return { ...state, packages: payload, loadingList: false };
    case GET_TRAVELPACKAGEDETAIL:
      return { ...state, packageItem: payload, loadingPackage: false };
    default:
      return state;
  }
};
