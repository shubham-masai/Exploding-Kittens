// reducer.js for Leaderboard
import { GET_USERS, SET_LOADING } from "./actionType"

const initialState = {
  loading: false,
  users: [],
};

export const leaderboardReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_LOADING:
      return { ...state, loading: true };
    case GET_USERS:
      return { ...state, users: payload, loading: false };
    default:
      return state;
  }
};
