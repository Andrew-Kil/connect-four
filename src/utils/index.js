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

export const checkDownDiagonals = (board, player) => {
  for (let row = 0; row <= 2; row++) {
    for (let col = 0; col <= 3; col++) {
      if (
        board[row][col] === player &&
        board[row + 1][col + 1] === player &&
        board[row + 2][col + 2] === player &&
        board[row + 3][col + 3] === player
      ) {
        return true;
      }
    }
  }
  return false;
};

export const checkUpDiagonals = (board, player) => {
  for (let row = 0; row <= 2; row++) {
    for (let col = 6; col >= 3; col--) {
      if (
        board[row][col] === player &&
        board[row + 1][col - 1] === player &&
        board[row + 2][col - 2] === player &&
        board[row + 3][col - 3] === player
      ) {
        return true;
      }
    }
  }
  return false;
};
