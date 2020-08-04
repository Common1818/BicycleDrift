import { combineReducers } from "redux";
import auth from "./auth";
import alert from "./alert";
import category from "./category";
import brand from "./brand";
import product from "./product";
import user from "./user";

export default combineReducers({
  auth,
  alert,
  category,
  brand,
  product,
  user,
});
