import { combineReducers } from "redux";
import user from "./user";
import getUser from "./getUser";

const rootReducer = combineReducers({
  user,
  getUser
});

export default rootReducer;
