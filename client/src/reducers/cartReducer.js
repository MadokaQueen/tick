import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  READ_CART_FROM_STORAGE
} from "../actions/types";

const initialState = {
  cart: JSON.parse(window.sessionStorage.getItem("cart"))
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: [action.payload, ...state.cart]
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter(cartItem => cartItem.id !== action.payload)
      };
    case READ_CART_FROM_STORAGE:
      return {
        ...state,
        cart: [...action.payload]
      };

    default:
      return state;
  }
}
