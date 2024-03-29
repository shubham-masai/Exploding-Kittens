import { GET_REQUEST, GET_FAILURE, GET_LOGIN_SUCCESS, GET_SIGNUP_SUCCESS, INCREASE_SCORE, GET_LEADERBOARD } from "./actionType";
import axios from "axios";

const URL = "https://exploding-kittens-backend-fawn.vercel.app/user";

export const handleLogin = (obj, navigate) => async (dispatch) => {
    try {
        dispatch({ type: GET_REQUEST });
        let res = await axios.post(`${URL}/login`, obj);
        localStorage.setItem("ExplodingToken", res.data.token);
        localStorage.setItem("ExplodingUsername", res.data.username);
        localStorage.setItem("ExplodingScore", res.data.score);
        dispatch({ type: GET_LOGIN_SUCCESS, payload: res.data });
        navigate('/');

    } catch (error) {
        console.log("error", error);
        dispatch({ type: GET_FAILURE, payload: error.response.data.message });
    }
};

export const handleSignup = (obj, navigate) => async (dispatch) => {
    try {
        dispatch({ type: GET_REQUEST });
        let res = await axios.post(`${URL}/signup`, obj);
        localStorage.setItem("ExplodingToken", res.data.token);
        localStorage.setItem("ExplodingUsername", res.data.username);
        localStorage.setItem("ExplodingScore", res.data.score);
        dispatch({ type: GET_SIGNUP_SUCCESS, payload: res.data });
        navigate('/');
    } catch (error) {
        dispatch({ type: GET_FAILURE, payload: error.response.data.message });
    }
};


export const handleScore = () => async (dispatch) => {
    const token = localStorage.getItem("ExplodingToken");
    try {
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };
        const res = await axios.post(`${URL}/score`, null, config);
        localStorage.setItem("ExplodingScore", res.data.score);
        dispatch({ type: INCREASE_SCORE, payload: res.data.score });
    } catch (error) {
        console.log(error);
    }
};

export const getLeaderBoard = () => async (dispatch) => {
    const token = localStorage.getItem("ExplodingToken");
    try {
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };

        const res = await axios.get(`${URL}/leaderboard`, config);
        dispatch({ type: GET_LEADERBOARD, payload: res.data});
    } catch (error) {
        console.log(error);
    }
};