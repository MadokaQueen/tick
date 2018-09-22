import axios from "axios";
import { GET_FEATURED } from "./types";

export const getFeatured = city => dispatch => {
  axios.get("/api/items/featured/" + city).then(res =>
    dispatch({
      type: GET_FEATURED,
      payload: res.data
    })
  );
};
