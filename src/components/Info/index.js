import React, { Component } from "react";
import s from "./info.module.css";

class Info extends Component {
  state = {
    showInfoButton: false
  };
  toggleClass = e => () => {
    const currState = this.state.showInfoButton;
    this.setState({ showInfoButton: !currState });
  };
  render() {
    const { showInfoButton } = this.state;
    return (
      <div>
        <button
          type="submit"
          className={`${s.infoButton}`}
          onClick={this.toggleClass()}>
          Info
        </button>
        <div
          className={
            showInfoButton ? `${s.showInfoText}` : `${s.hideInfoText}`
          }>
          Connect 4 is a two-player game. After determining who goes first, the
          players take turns dropping red or yellow tokens into a seven-column,
          six-row grid. The pieces fall from top to bottom, occupying the next
          available space within the column. The objective of the game is to
          connect four tokens of the same color vertically, horizontally, or
          diagonally before your opponent.
        </div>
      </div>
    );
  }
}

export default Info;
