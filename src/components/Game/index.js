import React, { Component } from "react";
import { connect } from "react-redux";
import { playTurn, endTurn, newGame } from "../../actions";
import { isWinner } from "../../utils";
import s from "./game.module.css";

class Game extends Component {
  handleButtonClick = idx => async e => {
    e.preventDefault();
    const { player, board, playTurn, endTurn } = this.props,
      currentPlayer = player,
      currentColumn = idx,
      selectedColumn = board.map(row => row[currentColumn]);
    if (selectedColumn.some(value => value === 0)) {
      await playTurn(currentPlayer, currentColumn);
    } else {
      alert("column is full. please choose a different column");
    }
    this.checkBoardForWinner(this.props.board, this.props.player);
    endTurn(currentPlayer);
  };

  checkBoardForWinner = (board, player) => {
    if (isWinner(board, player)) {
      alert("winner winner chicken dinner");
      this.props.newGame(board, player);
    }
  };

  render() {
    const { board } = this.props;
    const buttonColumns = [...Array(7).keys()].map(num => num + 1);
    return (
      <>
        <div>
          <div>
            {buttonColumns.map((column, idx) => (
              <button
                key={idx}
                className={`${s.boardColumn}`}
                onClick={this.handleButtonClick(idx)}>
                Column {column}
              </button>
            ))}
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

const mapDispatchToProps = dispatch => ({
  playTurn: function(player, column) {
    dispatch(playTurn(player, column));
  },
  endTurn: function(player) {
    dispatch(endTurn(player));
  },
  newGame: function(board, player) {
    dispatch(newGame(board, player));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Game);
