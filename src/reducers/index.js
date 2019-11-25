import { combineReducers } from "redux";
import boardReducer from "./boardReducer";
import playerReducer from "./playerReducer";

export default combineReducers({
  boardReducer,
  playerReducer
});