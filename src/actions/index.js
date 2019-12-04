import { PLAY_TURN, NEW_GAME, END_TURN } from "./constants";

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

export const newGame = (board, player) => {
  return {
    type: NEW_GAME,
    payload: {
      board,
      player
    }
  };
};
