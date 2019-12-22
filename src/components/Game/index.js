import React, { Component } from "react";
import { connect } from "react-redux";
import { playTurn, endTurn, newGame } from "../../actions";
import { isWinner, isColumnAvailable } from "../../utils";
import s from "./game.module.css";

class Game extends Component {
  handleCircleClick = idx => async e => {
    e.preventDefault();
    const { player, board, playTurn, endTurn } = this.props,
      currentPlayer = player;
    if (!isColumnAvailable(board, idx)) return;
    await playTurn(currentPlayer, idx);
    this.checkBoardForWinner(this.props.board, this.props.player);
    endTurn(currentPlayer);
  };

  handleNewGameClick = () => e => {
    const { newGame } = this.props;
    newGame();
  };

  checkBoardForWinner = (board, player) => {
    if (isWinner(board, player)) {
      alert(`Player ${this.props.player} wins!!!`);
      this.props.newGame(board, player);
    }
  };

  render() {
    const { board } = this.props;
    return (
      <>
        <div className={`${s.board}`}>
          <div className={`${s.boardGrid}`}>
            {board.map((row, rowIdx) => (
              <div key={rowIdx} className={`${s.boardRow}`}>
                {row.map((spot, spotIdx) => (
                  <span
                    key={spotIdx}
                    className={
                      spot === 0
                        ? `${s.free} ${s.circle}`
                        : spot === 1
                        ? `${s.red} ${s.circle}`
                        : spot === 2
                        ? `${s.yellow} ${s.circle}`
                        : ""
                    }
                    onClick={this.handleCircleClick(spotIdx)}></span>
                ))}
              </div>
            ))}
          </div>
        </div>
        <button
          type="button"
          onClick={this.handleNewGameClick()}
          className={`${s.newGameButton} btn btn-primary`}>
          New Game
        </button>
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
