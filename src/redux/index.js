import { combineReducers } from "redux";
import courses from "./reducers/courses";

const rootReducer = combineReducers({
  courses,
});

export default rootReducer;
