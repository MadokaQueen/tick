import { ADD_TO_CART, REMOVE_FROM_CART, READ_CART_FROM_STORAGE } from "./types";

export const addToCart = cartItem => dispatch => {
  let u = JSON.parse(window.sessionStorage.getItem("cart"));
  if (u === undefined || u === null) u = [];
  u.push(cartItem);
  window.sessionStorage.setItem("cart", JSON.stringify(u));
  dispatch({
    type: ADD_TO_CART,
    payload: cartItem
  });
};

export const removeFromCart = cartId => dispatch => {
  let u = JSON.parse(window.sessionStorage.getItem("cart"));
  window.sessionStorage.setItem(
    "cart",
    JSON.stringify(u.filter(i => i.id !== cartId))
  );
  dispatch({
    type: REMOVE_FROM_CART,
    payload: cartId
  });
};

export const readCartFromStorage = cartId => dispatch => {
  let u = JSON.parse(window.sessionStorage.getItem("cart"));
  dispatch({
    type: READ_CART_FROM_STORAGE,
    payload: u
  });
};
