import { PLAY_TURN } from "./constants";

export const playTurn = (player, column) => {
  return {
    type: PLAY_TURN,
    payload: {
      player,
      column
    }
  };
};
