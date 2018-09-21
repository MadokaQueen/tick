import axios from "axios";
import { SET_CITY } from "./types";

export const setCity = city => dispatch => {
  dispatch({
    type: SET_CITY,
    payload: city
  });
};
