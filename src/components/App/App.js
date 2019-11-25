import React from "react";
import { connect } from "react-redux";
import Game from "../Game";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Game />
    </div>
  );
}

const mapStateToProps = state => ({
  board: state.board,
  player: state.player
});

export default connect(mapStateToProps)(App);
