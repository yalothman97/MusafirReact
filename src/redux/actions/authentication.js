import jwt_decode from "jwt-decode";
import instance from "./instance";

import * as actionTypes from "./actionTypes";

const setAuthToken = token => {
  if (token) {
    localStorage.setItem("token", token);
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;
  } else {
    localStorage.removeItem("token");
    delete instance.defaults.headers.common.Authorization;
  }
};

export const checkForExpiredToken = () => {
  return async dispatch => {
    const token = await localStorage.getItem("token");

    if (token) {
      const currentTime = Date.now() / 1000;

      const user = jwt_decode(token);

      if (user.exp >= currentTime) {
        setAuthToken(token);
        dispatch(setCurrentUser(user));
      } else {
        dispatch(logout());
      }
    }
  };
};

export const login = userData => {
  return async dispatch => {
    try {
      console.log("Calling login function");
      const response = await instance.post("login/", userData);
      let user = response.data;

      let decodedUser = jwt_decode(user.access);
      setAuthToken(user.access);

      await dispatch(setCurrentUser(decodedUser));
    } catch (error) {
      dispatch({
        type: actionTypes.SET_ERRORS,
        payload: error.response.data
      });
    }
  };
};

export const signup = userData => {
  return async dispatch => {
    try {
      console.log("Calling signup function");
      let response = await instance.post("/register/", userData);
      let user = response.data;
      dispatch(login(userData));
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
  console.log("CALLED LOGOUT");
  return setCurrentUser();
};

const setCurrentUser = user => ({
  type: actionTypes.SET_CURRENT_USER,
  payload: user
});
