// form cible
const widthCanvasId = document.getElementById("width");
const heightCanvasId = document.getElementById("height");
const numberSnailId = document.getElementById("number");
const speedMinAleaId = document.getElementById("speedMinAlea");
const speedMaxAleaId = document.getElementById("speedMaxAlea");
const borderSnailId = document.getElementById("borderSnail");
const colorLineId = document.getElementById("colorLine");
const gameLoopSpeedId = document.getElementById("gameLoopSpeed");

export const changeViewForm = (constantInGame) => {
  widthCanvasId.value = constantInGame.widthCanvas;
  heightCanvasId.value = constantInGame.heightCanvas;
  numberSnailId.value = constantInGame.numberSnail;
  speedMinAleaId.value = constantInGame.speedMinAlea;
  speedMaxAleaId.value = constantInGame.speedMaxAlea;
  borderSnailId.value = constantInGame.borderSnail;
  colorLineId.value = constantInGame.colorLine;
  gameLoopSpeedId.value = constantInGame.gameLoopSpeed;
};
export const resetViewForm = (constantInGame, Constants) => {
  constantInGame.widthCanvas = Constants.widthCanvas;
  constantInGame.heightCanvas = Constants.heightCanvas;
  constantInGame.numberSnail = Constants.numberSnail;
  constantInGame.speedMinAlea = Constants.speedMinAlea;
  constantInGame.speedMaxAlea = Constants.speedMaxAlea;
  constantInGame.borderSnail = Constants.borderSnail;
  constantInGame.colorLine = Constants.colorLine;
  constantInGame.gameLoopSpeed = Constants.gameLoopSpeed;
  changeViewForm(constantInGame);
};
export const changeConstants = (constantInGame) => {
  constantInGame.widthCanvas = +widthCanvasId.value;
  constantInGame.heightCanvas = +heightCanvasId.value;
  constantInGame.numberSnail = +numberSnailId.value;
  constantInGame.speedMinAlea = +speedMinAleaId.value;
  constantInGame.speedMaxAlea = +speedMaxAleaId.value;
  constantInGame.borderSnail = +borderSnailId.value;
  constantInGame.colorLine = colorLineId.value;
  constantInGame.gameLoopSpeed = +gameLoopSpeedId.value;
};
