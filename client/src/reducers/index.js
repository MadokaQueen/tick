import { combineReducers } from "redux";
import itemReducer from "./itemReducer";
import featuredReducer from "./featuredReducer";
import cityReducer from "./cityReducer";
import cartReducer from "./cartReducer";
import userReducer from "./userReducer";

export default combineReducers({
  item: itemReducer,
  featuredItem: featuredReducer,
  city: cityReducer,
  cart: cartReducer,
  user: userReducer
});
