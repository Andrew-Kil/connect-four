import { checkVerticals, checkHorizontals, checkDiagonals } from "../utils";

describe("checkVerticals tests", () => {
  it("should return true for vertical four in a row", () => {
    const sampleBoard = [
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 1],
      [0, 0, 0, 0, 0, 0, 1],
      [0, 0, 0, 0, 0, 0, 1],
      [0, 2, 2, 0, 0, 2, 1]
    ];
    const samplePlayer = 1;
    const sampleOutput = checkVerticals(sampleBoard, samplePlayer);
    expect(sampleOutput).toEqual(true);
  });

  it("should return false for vertical three in a row", () => {
    const sampleBoard = [
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 1, 0, 0, 0],
      [0, 0, 0, 1, 0, 0, 0],
      [0, 0, 2, 1, 2, 0, 0]
    ];
    const samplePlayer = 1;
    const sampleOutput = checkVerticals(sampleBoard, samplePlayer);
    expect(sampleOutput).toEqual(false);
  });

  it("should return false for horizontal four in a row", () => {
    const sampleBoard = [
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 2, 2, 0, 0, 0],
      [0, 0, 2, 1, 1, 1, 1]
    ];
    const samplePlayer = 1;
    const sampleOutput = checkVerticals(sampleBoard, samplePlayer);
    expect(sampleOutput).toEqual(false);
  });
});

describe("checkHorizontals tests", () => {
  it("should return true for horizontal four in a row", () => {
    const sampleBoard = [
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 2, 0, 0, 0],
      [0, 0, 0, 2, 0, 0, 0],
      [1, 1, 1, 1, 2, 2, 0]
    ];
    const samplePlayer = 1;
    const sampleOutput = checkHorizontals(sampleBoard, samplePlayer);
    expect(sampleOutput).toEqual(true);
  });

  it("should return false for horizontal three in a row", () => {
    const sampleBoard = [
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 2, 2, 1, 1, 1]
    ];
    const samplePlayer = 1;
    const sampleOutput = checkHorizontals(sampleBoard, samplePlayer);
    expect(sampleOutput).toEqual(false);
  });

  it("should return false for vertical four in a row", () => {
    const sampleBoard = [
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 1],
      [0, 0, 0, 0, 0, 0, 1],
      [0, 0, 0, 0, 2, 0, 1],
      [0, 0, 0, 0, 2, 2, 1]
    ];
    const samplePlayer = 1;
    const sampleOutput = checkHorizontals(sampleBoard, samplePlayer);
    expect(sampleOutput).toEqual(false);
  });
});

describe("checkDiagonals tests", () => {
  it("should return true for diagonal (down from left to right) four in a row", () => {
    const sampleBoard = [
      [1, 0, 0, 0, 0, 0, 0],
      [1, 1, 0, 0, 0, 0, 0],
      [2, 1, 1, 0, 0, 0, 0],
      [1, 2, 2, 1, 0, 0, 0],
      [2, 1, 1, 2, 2, 0, 0],
      [1, 2, 2, 1, 1, 0, 0]
    ];
    const samplePlayer = 1;
    const sampleOutput = checkDiagonals(sampleBoard, samplePlayer);
    expect(sampleOutput).toEqual(true);
  });

  it("should return true for diagonal (up from left to right) four in a row", () => {
    const sampleBoard = [
      [1, 0, 0, 0, 0, 0, 0],
      [1, 1, 0, 0, 0, 0, 0],
      [2, 1, 1, 0, 0, 0, 1],
      [1, 2, 2, 0, 0, 1, 1],
      [2, 1, 1, 2, 1, 2, 2],
      [1, 2, 2, 1, 1, 2, 1]
    ];
    const samplePlayer = 1;
    const sampleOutput = checkDiagonals(sampleBoard, samplePlayer);
    expect(sampleOutput).toEqual(true);
  });
});
