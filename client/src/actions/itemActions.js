import axios from "axios";
import {
  GET_ITEMS,
  GET_ITEM_BY_ADRESS,
  GET_SOME_ITEMS,
  ADD_ITEM,
  DELETE_ITEM,
  ITEMS_LOADING,
  GET_ITEMS_BY_CITY,
  CLEAR_ITEMS,
  GET_SEARCH_RESULTS
} from "./types";

export const clearItems = () => dispatch => {
  dispatch({
    type: CLEAR_ITEMS
  });
};

export const getItems = () => dispatch => {
  dispatch(setItemsLoading());
  axios.get("/api/items").then(res =>
    dispatch({
      type: GET_ITEMS,
      payload: res.data
    })
  );
};

export const getItemByAdress = id => dispatch => {
  dispatch(setItemsLoading());
  axios.get(`/api/items/byAdress/${id}`).then(res =>
    dispatch({
      type: GET_ITEM_BY_ADRESS,
      payload: res.data
    })
  );
};

export const getSomeItems = (skip, limit) => dispatch => {
  dispatch(setItemsLoading());
  axios.get("/api/items/some/" + skip + "/" + limit).then(res =>
    dispatch({
      type: GET_SOME_ITEMS,
      payload: res.data
    })
  );
};

export const getItemsByCity = (city, skip, limit) => dispatch => {
  dispatch(setItemsLoading());
  axios.get("/api/items/city/" + city + "/" + skip + "/" + limit).then(res =>
    dispatch({
      type: GET_ITEMS_BY_CITY,
      payload: res.data
    })
  );
};
export const addItem = item => dispatch => {
  axios.post("/api/items", item).then(res =>
    dispatch({
      type: ADD_ITEM,
      payload: res.data
    })
  );
};

export const deleteItem = id => dispatch => {
  axios.delete(`/api/items/${id}`).then(res =>
    dispatch({
      type: DELETE_ITEM,
      payload: id
    })
  );
};

export const setItemsLoading = () => {
  return {
    type: ITEMS_LOADING
  };
};
export const getSearchResults = str => dispatch => {
  dispatch(setItemsLoading());
  axios.get("/api/items/search/?str=" + str).then(res =>
    dispatch({
      type: GET_SEARCH_RESULTS,
      payload: res.data
    })
  );
};
