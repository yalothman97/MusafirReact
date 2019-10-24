import * as actionTypes from "../actions/types";

const initialState = {
  packageReviews: [],
  packagesLoading: true
};

const reviews = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TRIGGER_UPDATING_LIST:
      return {
        ...state,
        updateListFlag: true
      };
    case actionTypes.FINISH_UPDATING_LIST:
      return {
        ...state,
        updateListFlag: false
      };
    case actionTypes.GET_TRAVELPACKAGE_REVIEWS:
      return {
        ...state,
        packageReviews: action.payload,
        packagesLoading: false
      };
    case actionTypes.SET_REVIEWS_LOADING:
      return {
        ...state,
        packagesLoading: true
      };
    default:
      return state;
  }
};

export default reviews;
