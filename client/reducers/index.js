import { combineReducers } from "redux";
import currentUser from "./currentUser";
import user from "./user";

const rootReducer = combineReducers({
  currentUser,
  user
});

export default rootReducer;
