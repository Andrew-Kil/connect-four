import React, { Component } from "react";
import s from "./info.module.css";

class Info extends Component {
  state = {
    showInfoText: false
  };
  toggleClass = () => e => {
    const currState = this.state.showInfoText;
    this.setState({ showInfoText: !currState });
  };
  render() {
    const { showInfoText } = this.state;
    return (
      <>
        <button
          type="submit"
          className={`${s.infoButton}`}
          onClick={this.toggleClass()}>
          Info
        </button>
        <div
          className={showInfoText ? `${s.showInfoText}` : `${s.hideInfoText}`}>
          Connect 4 is a two-player game where the objective is to connect four
          tokens of the same color vertically, horizontally, or diagonally
          before your opponent. Player 1 uses red tokens while Player 2 uses
          yellow tokens. After determining who goes first, the players take
          turns dropping their tokens into a seven-column, six-row grid. The
          pieces fall from top to bottom, occupying the next available space
          within the column.
        </div>
      </>
    );
  }
}

export default Info;
