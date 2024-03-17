import { combineReducers, applyMiddleware, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";
import { cardReducer } from "./Card/reducer";
import { userReducer } from "./User/reducer";
const rootReducer = combineReducers({
  cardReducer,
  userReducer
});

const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export default store;
