import { SET_CITY } from "../actions/types";

const initialState = {
  city: (() => {
    var name = "city=";
    var ca = window.document.cookie.split(";");
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "all";
  })()
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_CITY:
      return {
        ...state,
        city: action.payload
      };

    default:
      return state;
  }
}
