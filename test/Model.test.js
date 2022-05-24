//import { arrayLine } from "@escargot/js";
//import { arrayLine } from "./js/Model";
//import { arrayLine } from './../js/Model';
//const { arrayLine } = require("../js/Model");
test("test with 1 lines", () => {
  const Objet = {
    widthCanvas: 500,
    heightCanvas: 500,
    backgroundColor: "red",
    numberSnail: 2,
    startPositionX: 0,
    endPositionX: 500,
    colorLine: "black",
    widthLine: 1,
  };
  const result = [
    {
      startX: 0,
      startY: 250,
      endX: 500,
      endY: 250,
      color: "black",
      width: 1,
    },
  ];
  expect(arrayLine(Objet)).toEqual(result);
});
