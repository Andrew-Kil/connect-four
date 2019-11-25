import { END_TURN } from "../actions/constants";

let initialState;

const flipCoin = Math.floor(Math.random() * 2);

flipCoin === 0 ? (initialState = "playerOne") : (initialState = "playerTwo");

const playerReducer = (prevState = initialState, action) => {
  if (action.type === END_TURN) {
    return prevState === "playerOne" ? "playerTwo" : "playerOne";
  }
  return prevState;
};

export default playerReducer;
