import { combineReducers } from "redux";
import user from "./user";
import getUser from "./getUser";

const rootReducer = combineReducers({
  user
});

export default rootReducer;
