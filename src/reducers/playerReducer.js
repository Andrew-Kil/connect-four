import { END_TURN } from "../actions/constants";

let initialState;

// const flipCoin = Math.floor(Math.random() * 2);

// flipCoin === 0 ? (initialState = 1) : (initialState = 2);

// initialState = flipCoin === 0 ? 1 : 2;

initialState = 1;

const playerReducer = (prevState = initialState, action) => {
  if (action.type === END_TURN) {
    return prevState === 1 ? 2 : 1;
  }
  return prevState;
};

export default playerReducer;
