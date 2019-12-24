import { INCREMENT_TURNS } from "../actions/constants";

const initalState = 0;

const turnsReducer = (prevState = initalState, action) => {
  if (action.type === INCREMENT_TURNS) {
    return prevState + 1;
  }
  return prevState;
};

export default turnsReducer;
