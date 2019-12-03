import { PLAY_TURN } from "../actions/constants";

const initBoard = Array(6).fill(Array(7).fill(0));

const deepDup = input => JSON.parse(JSON.stringify(input));

const boardReducer = (prevState = initBoard, action) => {
  if (action.type !== PLAY_TURN) {
    return prevState;
  }
  if (action.type === PLAY_TURN) {
    const newState = deepDup(prevState);
    const { column, player } = action.payload;
    const selectedColumn = newState.map(row => row[column]);
    for (let i = selectedColumn.length - 1; i >= 0; i--) {
      if (selectedColumn[i] === 0) {
        newState[i][column] = player;
        break;
      }
    }
    return newState;
  }
};

export default boardReducer;
