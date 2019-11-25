import PLAY_TURN from "./constants";
import DROP_CHECKER from "./constants";

export const playTurn = (player, column) => {
  return {
    type: PLAY_TURN,
    payload: {
      player,
      column
    }
  };
};

export const dropChecker = (player, column) => {
  return {
    type: DROP_CHECKER,
    column,
    player
  };
};
