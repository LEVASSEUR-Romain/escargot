import arrayLine from "../../js/model/arrayLine";

test("arrayLine 5 snail", () => {
  const constant = {
    widthCanvas: 500,
    heightCanvas: 300,
    colorLine: "black",
    numberSnail: 5,
    startPositionX: 0,
    widthLine: 1,
  };
  const result = [
    {
      color: "black",
      endX: 500,
      endY: 60,
      startX: 0,
      startY: 60,
      width: 1,
    },
    {
      color: "black",
      endX: 500,
      endY: 120,
      startX: 0,
      startY: 120,
      width: 1,
    },
    {
      color: "black",
      endX: 500,
      endY: 180,
      startX: 0,
      startY: 180,
      width: 1,
    },
    {
      color: "black",
      endX: 500,
      endY: 240,
      startX: 0,
      startY: 240,
      width: 1,
    },
  ];
  expect(arrayLine(constant)).toEqual(result);
});

test("arrayLine 1 lines", () => {
  const Objet = {
    widthCanvas: 500,
    heightCanvas: 500,
    numberSnail: 2,
    startPositionX: 0,
    colorLine: "red",
    widthLine: 1,
  };

  const result = [
    {
      startX: 0,
      startY: 250,
      endX: 500,
      endY: 250,
      color: "red",
      width: 1,
    },
  ];
  expect(arrayLine(Objet)).toEqual(result);
});
