export const checkVerticals = (board, player) => {
  const mapCallback = row => row[currentColumnIdx];
  const everyCallback = value => value === player;
  let currentColumnIdx = 0;
  while (currentColumnIdx <= 6) {
    let selectedColumn = board.map(mapCallback);
    if (
      selectedColumn.slice(0, 4).every(everyCallback) ||
      selectedColumn.slice(1, 5).every(everyCallback) ||
      selectedColumn.slice(2, 6).every(everyCallback)
    ) {
      return true;
    } else {
      currentColumnIdx++;
    }
  }
  return false;
};

export const checkHorizontals = (board, player) => {
  const everyCallback = value => value === player;
  let currentRowIdx = 0;
  while (currentRowIdx <= 5) {
    let selectedRow = board[currentRowIdx];
    if (
      selectedRow.slice(0, 4).every(everyCallback) ||
      selectedRow.slice(1, 5).every(everyCallback) ||
      selectedRow.slice(2, 6).every(everyCallback) ||
      selectedRow.slice(3, 7).every(everyCallback)
    ) {
      return true;
    } else {
      currentRowIdx++;
    }
  }
  return false;
};

// will refactor to replace hardcoded win conditions with DRY code
// there are more diagonal win conditions, this is only 50% of them
export const checkDiagonals = (board, player) => {
  if (
    (board[2][0] === player &&
      board[3][1] === player &&
      board[4][2] === player &&
      board[5][3] === player) ||
    (board[1][0] === player &&
      board[2][1] === player &&
      board[3][2] === player &&
      board[4][3] === player) ||
    (board[2][1] === player &&
      board[3][2] === player &&
      board[4][3] === player &&
      board[5][4] === player) ||
    (board[0][0] === player &&
      board[1][1] === player &&
      board[2][2] === player &&
      board[3][3] === player) ||
    (board[1][1] === player &&
      board[2][2] === player &&
      board[3][3] === player &&
      board[4][4] === player) ||
    (board[2][2] === player &&
      board[3][3] === player &&
      board[4][4] === player &&
      board[5][5] === player) ||
    (board[0][1] === player &&
      board[1][2] === player &&
      board[2][3] === player &&
      board[3][4] === player) ||
    (board[1][2] === player &&
      board[2][3] === player &&
      board[3][4] === player &&
      board[4][5] === player) ||
    (board[2][3] === player &&
      board[3][4] === player &&
      board[4][5] === player &&
      board[5][6]) ||
    (board[0][2] === player &&
      board[1][3] === player &&
      board[2][4] === player &&
      board[3][5] === player) ||
    (board[1][3] === player &&
      board[2][4] === player &&
      board[3][5] === player &&
      board[4][6] === player) ||
    (board[0][3] === player &&
      board[1][4] === player &&
      board[2][5] === player &&
      board[3][6] === player)
  ) {
    return true;
  } else {
    return false;
  }
};
