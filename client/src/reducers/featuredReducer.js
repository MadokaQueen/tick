import { GET_FEATURED } from "../actions/types";

const initialState = {
  featuredItem: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_FEATURED:
      return {
        ...state,
        featuredItem: action.payload
      };

    default:
      return state;
  }
}
