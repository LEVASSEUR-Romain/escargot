// import
import { drawBackground, drawSnail, resizeCanvas, drawLine } from "/js/Draw.js";
import Constants from "./js/Constants.js";
import { arrayLine, arrayInitialSnail, reStartSnail } from "./js/Model.js";
import {
  controleSnail,
  isFinishGameClassementRefech,
} from "./js/Controleur.js";
// cible document
const canvas = document.getElementById("canvas");
const buttonStart = document.getElementById("start");
// canvas
canvas.width = Constants.widthCanvas;
canvas.height = Constants.heightCanvas;
const ctx = canvas.getContext("2d");
// initialisation
const line = arrayLine(Constants);
let Snails = arrayInitialSnail(Constants);
// constants loop
let myTimeout = undefined;
let stopGameLoop = false;

const allDraw = () => {
  drawBackground(ctx, canvas.width, canvas.height, Constants.backgroundColor);
  line.forEach((line) => {
    drawLine(ctx, line);
  });
  Snails.forEach((snail) => {
    drawSnail(ctx, snail);
  });
};

const gameLoop = () => {
  if (!stopGameLoop) {
    Snails = controleSnail(Snails, Constants);
    allDraw();
    myTimeout = setTimeout(gameLoop, Constants.gameLoopSpeed);
    if (isFinishGameClassementRefech(Snails, Constants)) {
      clearTimeout(myTimeout);
      buttonStart.innerHTML = "Start";
      //afficher les resultats
    }
  }
};
const goStart = () => {
  // position initiale snail
  if (buttonStart.innerHTML === "Start") {
    stopGameLoop = false;
    Constants.classement = 0;
    reStartSnail(Snails);
    buttonStart.innerHTML = "Stop";
    gameLoop();
  } else {
    stopGameLoop = true;
    buttonStart.innerHTML = "Start";
  }
};

// ecouteur d'evenemnt
buttonStart.addEventListener("click", goStart);
allDraw();

/* window.addEventListener(
  "resize",
  () => {
    resizeCanvas(canvas);
    drawBackground(ctx, canvas.width, canvas.height);
  },
  false
); */
