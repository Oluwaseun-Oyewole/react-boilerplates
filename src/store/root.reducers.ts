import { combineReducers } from "redux";
import todos from "../redux/store/slice";

const rootReducer = combineReducers({
  todos,
});

export default rootReducer;
