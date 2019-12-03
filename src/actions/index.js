import { PLAY_TURN } from "./constants";
import { END_TURN } from "./constants";

export const playTurn = (player, column) => {
  return {
    type: PLAY_TURN,
    payload: {
      player,
      column
    }
  };
};

export const endTurn = player => {
  return {
    type: END_TURN,
    payload: {
      player
    }
  };
};
