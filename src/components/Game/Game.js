import React, { Component } from "react";

import s from "./game.module.css";

class Game extends Component {
  state = {
    currentPlayer: 1,
    board: [
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0]
    ]
  };
  dropChecker = column => {
    const { board } = this.state;
    console.log(board[board.length - 1][column - 1]);
    // check current column
    // if last row of column is not occupied, occupy it with 1 or 2 (player 1 or 2)
    // else, check the row above current row
  };
  render() {
    const { board } = this.state;
    const buttonColumns = [1, 2, 3, 4, 5, 6, 7];
    return (
      <>
        <div>
          <div>
            {buttonColumns.map((column, idx) => {
              return (
                <button
                  key={idx}
                  className={`${s.boardColumn}`}
                  onClick={() => this.dropChecker(column)}>
                  Column {column}
                </button>
              );
            })}
          </div>
          {board.map((row, idx) => (
            <div key={idx} className={`${s.boardRow}`}>
              {row.map((spot, idx) => (
                <span key={idx} className={`${s.boardSpot}`}>
                  {spot}
                </span>
              ))}
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default Game;