import { FETCH_PACKAGES, GET_PACKAGE } from "../actions/actionTypes";

const initialState = {
  packages: [],
  packageItem: [],
  loading: true
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_PACKAGES:
      return { ...state, packages: payload };
    case GET_PACKAGE:
      return { ...state, packageItem: payload, loading: false };
    default:
      return state;
  }
};
