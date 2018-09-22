import { SET_CITY } from "./types";

export const setCity = city => dispatch => {
  setCookieCity(city);
  dispatch({
    type: SET_CITY,
    payload: city
  });
};

export const setCookieCity = newCity => {
  function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  setCookie("city", newCity, 365);
};
