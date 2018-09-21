import axios from "axios";
import { GET_FEATURED } from "./types";

export const getFeatured = () => dispatch => {
  axios.get("/api/items/featured").then(res =>
    dispatch({
      type: GET_FEATURED,
      payload: res.data
    })
  );
};
