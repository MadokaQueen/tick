import { SET_USER } from "./types";

export const setUser = user => dispatch => {
  setCookieUser(user);
  dispatch({
    type: SET_USER,
    payload: user
  });
};

export const setCookieUser = newUser => {
  function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  setCookie("user", newUser, 365);
};
