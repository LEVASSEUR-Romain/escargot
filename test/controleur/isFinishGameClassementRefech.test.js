import isFinishGamerankingRefech from "../../js/controleur/isFinishGamerankingRefech";

test("false isFinishGamerankingRefech", () => {
  const snails = [
    { id: 1, x: 75, ranking: 0 },
    { id: 2, x: 70, ranking: 0 },
    { id: 3, x: 56, ranking: 0 },
    { id: 4, x: 68, ranking: 0 },
    { id: 5, x: 81, ranking: 0 },
  ];
  const constant = {
    widthCanvas: 500,
    widthSnail: 34,
    ranking: 0,
  };
  expect(isFinishGamerankingRefech(snails, constant)).toBe(false);
});

test("true isFinishGamerankingRefech", () => {
  const Constants = {
    widthCanvas: 500,
    widthSnail: 34,
    ranking: 0,
  };
  const snail = [
    { id: 1, x: 508 - Constants.widthSnail, ranking: 0 },
    { id: 2, x: 500 - Constants.widthSnail, ranking: 0 },
    { id: 3, x: 500 - Constants.widthSnail, ranking: 0 },
    { id: 4, x: 500 - Constants.widthSnail, ranking: 0 },
    { id: 5, x: 504 - Constants.widthSnail, ranking: 0 },
  ];

  expect(isFinishGamerankingRefech(snail, Constants)).toBe(true);
});

test("false because one", () => {
  const Constants = {
    widthCanvas: 500,
    widthSnail: 34,
    ranking: 0,
  };
  const snail = [
    { id: 1, x: 508 - Constants.widthSnail, ranking: 0 },
    { id: 2, x: 400 - Constants.widthSnail, ranking: 0 },
    { id: 3, x: 500 - Constants.widthSnail, ranking: 0 },
    { id: 4, x: 500 - Constants.widthSnail, ranking: 0 },
    { id: 5, x: 504 - Constants.widthSnail, ranking: 0 },
  ];

  expect(isFinishGamerankingRefech(snail, Constants)).toBe(false);
});
