import { combineReducers, applyMiddleware, createStore } from "redux";
import { auth_reducer } from "./reducers";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  auth: auth_reducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
