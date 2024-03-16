// reducer.js for User
import { UPDATE_DECK_CARD, OPEN_CARD, ADD_DEFUSE_CARD, USE_DEFUSE_CARD, REMOVE_DEFUSE_CARD } from "./actionType";

const initialState = {
  defuseCards: [],
  openedCard: '',
  deck: [],
};

export const cardReducer = (state = initialState, { type, payload }) => {
  switch (type) {

    case UPDATE_DECK_CARD:
      return { ...state, deck: payload };

    case OPEN_CARD:
      return { ...state, openedCard: payload };

    case ADD_DEFUSE_CARD:
      return { ...state, defuseCards: [...state.defuseCards, "DEFUSE"] };

    case USE_DEFUSE_CARD:
      return { ...state, defuseCards: state.defuseCards.slice(1) };

    case REMOVE_DEFUSE_CARD:
      return { ...state, defuseCards: [] }
    default:
      return state;
  }
};
