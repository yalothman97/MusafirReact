import {
  GET_TRAVELPACKAGES,
  GET_TRAVELPACKAGEDETAIL
} from "../actions/actionTypes";

const initialState = {
  packages: [],
  packageItem: [],
  loading: true
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_TRAVELPACKAGES:
      return { ...state, packages: payload };
    case GET_TRAVELPACKAGEDETAIL:
      return { ...state, packageItem: payload, loading: false };
    default:
      return state;
  }
};
