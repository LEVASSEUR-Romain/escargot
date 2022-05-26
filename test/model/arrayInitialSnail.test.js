import arrayInitialSnail from "../../js/model/arrayInitialSnail";

test("arrayInitialSnail 5 snail", () => {
  const constant = {
    heightCanvas: 300,
    numberSnail: 5,
    startPositionX: 0,
    borderSnail: 10,
    widthSnail: 34,
  };

  const finish = [
    {
      animation: 1,
      height: 40,
      id: 1,
      ranking: 0,
      width: 34,
      x: 0,
      y: 10,
    },
    {
      animation: 1,
      height: 40,
      id: 2,
      ranking: 0,
      width: 34,
      x: 0,
      y: 70,
    },
    {
      animation: 1,
      height: 40,
      id: 3,
      ranking: 0,
      width: 34,
      x: 0,
      y: 130,
    },
    {
      animation: 1,
      height: 40,
      id: 4,
      ranking: 0,
      width: 34,
      x: 0,
      y: 190,
    },
    {
      animation: 1,
      height: 40,
      id: 5,
      ranking: 0,
      width: 34,
      x: 0,
      y: 250,
    },
  ];

  expect(arrayInitialSnail(constant)).toEqual(finish);
});

test("arrayInitialSnail 2 snail", () => {
  const constant = {
    heightCanvas: 200,
    numberSnail: 2,
    startPositionX: 0,
    borderSnail: 10,
    widthSnail: 20,
  };

  const finish = [
    {
      animation: 1,
      height: 80,
      id: 1,
      ranking: 0,
      width: 20,
      x: 0,
      y: 10,
    },
    {
      animation: 1,
      height: 80,
      id: 2,
      ranking: 0,
      width: 20,
      x: 0,
      y: 110,
    },
  ];

  expect(arrayInitialSnail(constant)).toEqual(finish);
});
