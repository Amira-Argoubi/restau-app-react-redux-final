import menuReducer from "./adminReducer";
import commandReducer from "./commandReducer";
import formReducer from "./UsersReducer";
import { combineReducers } from "redux";
const allReducers = combineReducers({
  menu: menuReducer,
  command: commandReducer,
  user: formReducer,
});

export default allReducers;
