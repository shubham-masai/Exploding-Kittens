import { combineReducers, applyMiddleware, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";
import { cardReducer } from "./Card/reducer";
import { leaderboardReducer } from "./LeaderBoard/reducer";
import { userReducer } from "./User/reducer";
const rootReducer = combineReducers({
  cardReducer,
  leaderboardReducer,
  userReducer
});

const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export default store;
