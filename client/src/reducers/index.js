import { combineReducers } from "redux";
import itemReducer from "./itemReducer";
import featuredReducer from "./featuredReducer";
import cityReducer from "./cityReducer";

export default combineReducers({
  item: itemReducer,
  featuredItem: featuredReducer,
  city: cityReducer
});
