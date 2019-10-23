import jwt_decode from "jwt-decode";
import instance from "./instance";

import * as actionTypes from "./actionTypes";
import { getProfile } from "./profile";
const setAuthToken = token => {
  return dispatch => {
    if (token) {
      localStorage.setItem("token", token);
      instance.defaults.headers.common.Authorization = `Bearer ${token}`;
      dispatch(getProfile());
    } else {
      localStorage.removeItem("token");
      delete instance.defaults.headers.common.Authorization;
    }
  };
};

export const checkForExpiredToken = () => {
  return async dispatch => {
    const token = localStorage.getItem("token");

    if (token) {
      const currentTime = Date.now() / 1000;

      const user = jwt_decode(token);

      if (user.exp >= currentTime) {
        dispatch(setAuthToken(token));
        dispatch(setCurrentUser(user));
      } else {
        dispatch(logout());
      }
    }
  };
};

export const login = (userData, history) => {
  return async dispatch => {
    try {
      const response = await instance.post("login/", userData);
      let user = response.data;

      let decodedUser = jwt_decode(user.access);
      dispatch(setAuthToken(user.access));

      await dispatch(setCurrentUser(decodedUser));
      history.push("/");
    } catch (error) {
      dispatch({
        type: actionTypes.SET_ERRORS,
        payload: error.response.data
      });
    }
  };
};

export const signup = (userData, history) => {
  return async dispatch => {
    try {
      let response = await instance.post("/register/", userData);
      let user = response.data;
      dispatch(login(userData, history));
    } catch (error) {
      dispatch({
        type: actionTypes.SET_ERRORS,
        payload: error.response.data
      });
    }
  };
};

export const logout = () => {
  setAuthToken();
  return setCurrentUser();
};

const setCurrentUser = user => ({
  type: actionTypes.SET_CURRENT_USER,
  payload: user
});
