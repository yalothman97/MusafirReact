import * as actionTypes from "../actions/types";
const initialState = {
  bookings: [],
  booking: "",
  loadingBookingDetailPage: true
};

const booking = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_BOOKINGS:
      return {
        bookings: action.payload
      };
    case actionTypes.GET_BOOKING_DETAIL:
      return {
        booking: action.payload,
        loadingBookingDetailPage: false
      };
    case actionTypes.BOOKINGDETAIL_LOADING:
      return {
        ...state,
        loadingBookingDetailPage: true
      };

    default:
      return state;
  }
};

export default booking;
