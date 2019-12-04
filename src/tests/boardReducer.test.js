import boardReducer from "../reducers/boardReducer";
import { PLAY_TURN } from "../actions/constants";

describe("boardReducer tests", () => {
  it("should play first move appropriately", () => {
    const sampleAction = {
      type: PLAY_TURN,
      payload: {
        player: 1,
        column: 0
      }
    };
    const sampleInputBoard = [
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0]
    ];
    const expectedOutputBoard = [
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [1, 0, 0, 0, 0, 0, 0]
    ];
    const sampleOutput = boardReducer(sampleInputBoard, sampleAction);
    expect(sampleOutput).toEqual(expectedOutputBoard);
  });

  it("should play second move appropriately", () => {
    const sampleAction = {
      type: PLAY_TURN,
      payload: {
        player: 2,
        column: 0
      }
    };
    const sampleInputBoard = [
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [1, 0, 0, 0, 0, 0, 0]
    ];
    const expectedOutputBoard = [
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [2, 0, 0, 0, 0, 0, 0],
      [1, 0, 0, 0, 0, 0, 0]
    ];
    const sampleOutput = boardReducer(sampleInputBoard, sampleAction);
    expect(sampleOutput).toEqual(expectedOutputBoard);
  });

  it("should return prevState when column is full", () => {
    const sampleAction = {
      type: PLAY_TURN,
      payload: {
        player: 1,
        column: 0
      }
    };
    const sampleInputBoard = [
      [2, 0, 0, 0, 0, 0, 0],
      [1, 0, 0, 0, 0, 0, 0],
      [2, 0, 0, 0, 0, 0, 0],
      [1, 0, 0, 0, 0, 0, 0],
      [2, 0, 0, 0, 0, 0, 0],
      [1, 0, 0, 0, 0, 0, 0]
    ];
    const expectedOutputBoard = [
      [2, 0, 0, 0, 0, 0, 0],
      [1, 0, 0, 0, 0, 0, 0],
      [2, 0, 0, 0, 0, 0, 0],
      [1, 0, 0, 0, 0, 0, 0],
      [2, 0, 0, 0, 0, 0, 0],
      [1, 0, 0, 0, 0, 0, 0]
    ];
    const sampleOutput = boardReducer(sampleInputBoard, sampleAction);
    expect(sampleOutput).toEqual(expectedOutputBoard);
  });
});
