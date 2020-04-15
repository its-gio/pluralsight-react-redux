import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import courses from "./reducers/courses";

const rootReducer = combineReducers({
  courses,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENTION_COMPOSE__ || compose;

export default createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(reduxImmutableStateInvariant()))
);
