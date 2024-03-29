import { GET_REQUEST, GET_FAILURE, GET_LOGIN_SUCCESS, GET_SIGNUP_SUCCESS, INCREASE_SCORE, GET_LEADERBOARD } from "./actionType"

const initialState = {
    username: null,
    score: null,
    isLoading: false,
    isError: false,
    ErrorMsg: "",
    leaderboardData: [],
}

export const userReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_REQUEST:
            return { ...state, isLoading: true }

        case GET_FAILURE:
            return { ...state, isLoading: false, isError: true, ErrorMsg: payload }

        case GET_LOGIN_SUCCESS:
            return { ...state, isLoading: false, isError: false, username: payload.username, score: payload.score }

        case GET_SIGNUP_SUCCESS:
            return { ...state, isLoading: false, isError: false, username: payload.username, score: payload.score }

        case INCREASE_SCORE:
            return { ...state, score: payload }

        case GET_LEADERBOARD: return { ...state, leaderboardData: payload }

        default: return state
    }
}