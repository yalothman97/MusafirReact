import { GET_PROFILE } from "./actionTypes";
import instance from "./instance";

export const getProfile = user => {
  return async dispatch => {
    try {
      const res = await instance.get(`/profile/`, user);
      dispatch({
        type: GET_PROFILE,
        payload: res.data
      });
    } catch (error) {
      console.error(error);
    }
  };
};
