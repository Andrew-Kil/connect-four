import { DROP_CHECKER } from "./constants";

export const dropChecker = (player, column) => {
  return {
    type: DROP_CHECKER,
    payload: {
      player,
      column
    }
  };
};
