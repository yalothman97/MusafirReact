import { GET_PROFILE } from "./actionTypes";
import instance from "./instance";

export const getProfile = () => {
  return async dispatch => {
    try {
      const res = await instance.get(`/profile/`);
      //   const packageItem = res.data;
      dispatch({
        type: GET_PROFILE,
        payload: res.data
      });
    } catch (error) {
      console.error(error);
    }
  };
};
