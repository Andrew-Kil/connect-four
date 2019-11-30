import React, { Component } from "react";
import { connect } from "react-redux";
import s from "./game.module.css";

class Game extends Component {
  dropChecker = column => {
    const { board } = this.props;
    console.log(board[board.length - 1][column - 1]);
  };
  render() {
    const { board } = this.props;
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
                  onClick={() => this.dropChecker(idx)}>
                  Column {idx}
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

const mapStateToProps = state => ({
  board: state.board,
  player: state.player
});

export default connect(mapStateToProps)(Game);
