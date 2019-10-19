import { SET_CURRENT_USER } from "./actionTypes";
import jwt_decode from "jwt-decode";
import instance from "./instance";

const setCurrentUser = token => {
  console.log(token);
  let user = null;
  if (token) {
    localStorage.setItem("token", token);
    instance.defaults.headers.common.Authorization = `jwt ${token}`;
    user = jwt_decode(token);
  } else {
    localStorage.removeItem("token");
    delete instance.defaults.headers.common.Authorization;
    user = null;
  }

  return {
    type: SET_CURRENT_USER,
    payload: user
  };
};

export const login = userData => {
  return async dispatch => {
    try {
      const res = await instance.post("login/", userData);
      const user = res.data;
      dispatch(setCurrentUser(user.access));
    } catch (err) {
      console.error(err);
    }
  };
};

export const signup = userData => {
  return async dispatch => {
    try {
      const res = await instance.post("register/", userData);
      const user = res.data;
      dispatch(setCurrentUser(user.access));
    } catch (err) {
      console.error(err);
    }
  };
};

export const logout = () => setCurrentUser();

export const checkForExpiredToken = () => {
  // Check for token expiration
  const token = localStorage.getItem("token");
  let user = null;
  if (token) {
    const currentTimeInSeconds = Date.now() / 1000;

    // Decode token and get user info
    user = jwt_decode(token);

    // Check token expiration
    if (user.exp >= currentTimeInSeconds) {
      // Set user
      return setCurrentUser(token);
    }
  }
  return logout();
};
