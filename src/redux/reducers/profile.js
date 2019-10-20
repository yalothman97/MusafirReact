import { GET_PROFILE } from "../actions/actionTypes";

const initialState = {
  profile: null
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_PROFILE:
      return { ...state, packages: payload };

    default:
      return state;
  }
};
