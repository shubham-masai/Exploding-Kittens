import { UPDATE_DECK_CARD, OPEN_CARD, USE_DEFUSE_CARD, ADD_DEFUSE_CARD,REMOVE_DEFUSE_CARD } from "./actionType";


export const addDefuceCard = () => (dispatch) => {
  dispatch({ type: ADD_DEFUSE_CARD });
};

export const useDefuseCard = () => (dispatch) => {
  dispatch({ type: USE_DEFUSE_CARD });
};

export const removeDefuseCard = ()=>(dispatch)=>{
dispatch({type:REMOVE_DEFUSE_CARD});
}

export const setOpenCard = (card) => (dispatch) => {
  dispatch({ type: OPEN_CARD, payload: card });
};


export const userDeckUpdate = (cards) => (dispatch) => {
  dispatch({ type: UPDATE_DECK_CARD, payload: cards });
};

