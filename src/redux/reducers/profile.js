import { GET_PROFILE } from "../actions/actionTypes";

const initialState = {
  profile: null,
  loading: true
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_PROFILE:
      return { ...state, profile: payload, loading: false };

    default:
      return state;
  }
};
