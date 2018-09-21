import {
  GET_ITEMS,
  GET_ITEM_BY_ADRESS,
  GET_SOME_ITEMS,
  GET_ITEMS_BY_CITY,
  ADD_ITEM,
  DELETE_ITEM,
  ITEMS_LOADING,
  CLEAR_ITEMS,
  GET_SEARCH_RESULTS
} from "../actions/types";

const initialState = {
  items: [],
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case CLEAR_ITEMS:
      return {
        ...state,
        items: [],
        loading: false
      };
    case GET_ITEMS:
      return {
        ...state,
        items: action.payload,
        loading: false
      };
    case GET_ITEM_BY_ADRESS:
      return {
        ...state,
        items: action.payload,
        loading: false
      };

    case GET_SOME_ITEMS:
      return {
        ...state,
        items: action.payload,
        loading: false
      };
    case GET_ITEMS_BY_CITY:
      return {
        ...state,
        items: action.payload,
        loading: false
      };
    case DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter(item => item._id !== action.payload)
      };
    case ADD_ITEM:
      return {
        ...state,
        items: [action.payload, ...state.items]
      };
    case ITEMS_LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_SEARCH_RESULTS:
      return {
        ...state,
        items: action.payload,
        loading: true
      };
    default:
      return state;
  }
}
