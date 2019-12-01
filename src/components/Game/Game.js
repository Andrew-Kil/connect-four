import React, { Component } from "react";
import { connect } from "react-redux";
import { playTurn } from "../../actions";
import s from "./game.module.css";

class Game extends Component {
  handleButtonClick = idx => e => {
    e.preventDefault();
    const currentPlayer = this.props.player;
    const selectedColumn = idx;
    this.props.playTurn(currentPlayer, selectedColumn);
  };
  render() {
    const { board } = this.props;
    return (
      <>
        <div>
          <div>
            {board.map((_row, idx) => {
              return (
                <button
                  key={idx}
                  className={`${s.boardColumn}`}
                  onClick={this.handleButtonClick(idx)}>
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

const mapDispatchToProps = dispatch => ({
  playTurn: function(player, column) {
    dispatch(playTurn(player, column));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Game);
