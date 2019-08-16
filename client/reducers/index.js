import { combineReducers } from "redux";
import user from "./user";
import taskReducer from './taskReducer'
import getUser from "./getUser";

const rootReducer = combineReducers({
  user,taskReducer
});

export default rootReducer;
