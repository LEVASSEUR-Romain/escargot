// pour les test
//npm run test

// import
import Constants from "./js/Constants.js";
// view
import drawBackground from "./js/view/drawBackground.js";
import drawLine from "./js/view/drawLine.js";
import drawSnail from "./js/view/drawSnail.js";
// model
import arrayline from "./js/model/arrayLine.js";
import reStartSnail from "./js/model/reStartSnail.js";
import arrayInitialSnail from "./js/model/arrayInitialSnail.js";
// controleur
import isFinishGamerankingRefech from "./js/controleur/isFinishGamerankingRefech.js";
import loaderStratSnail from "./js/controleur/loaderStratSnail.js";
import controleSnail from "./js/controleur/controleSnail.js";
import loaderStratBackground from "./js/controleur/loaderStratBackground.js";
// cible document
const canvas = document.getElementById("canvas");
const buttonStart = document.getElementById("start");
const result = document.getElementById("result");
// canvas
canvas.width = Constants.widthCanvas;
canvas.height = Constants.heightCanvas;
const ctx = canvas.getContext("2d");
// initialisation
const line = arrayline(Constants);
let Snails = arrayInitialSnail(Constants);
// constants loop
let myTimeout = undefined;
let stopGameLoop = false;
// dessin loader
let backgroundImage = "";
let imageSnail = "";
const initImage = (img) => {
  if (img.src.match(/.*[herbe].png/)) backgroundImage = img;
  if (img.src.match(/.*[snail].png/)) imageSnail = img;
  if (imageSnail !== "" && backgroundImage != "") allDraw();
};
// loader
loaderStratSnail(initImage);
loaderStratBackground(initImage);

const allDraw = () => {
  drawBackground(ctx, backgroundImage, Constants);
  line.forEach((line) => {
    drawLine(ctx, line);
  });
  Snails.forEach((snail) => {
    drawSnail(ctx, snail, imageSnail);
  });
};

const gameLoop = () => {
  if (!stopGameLoop) {
    controleSnail(Snails, Constants);
    allDraw();
    myTimeout = setTimeout(gameLoop, Constants.gameLoopSpeed);
    if (isFinishGamerankingRefech(Snails, Constants)) {
      clearTimeout(myTimeout);
      buttonStart.innerHTML = "Start";
      //afficher les resultats
      let affiche = "";
      Snails.sort((a, b) => a.ranking - b.ranking);
      Snails.forEach(
        (s) =>
          (affiche +=
            "<p>ranking : " + s.ranking + ",Escargot :" + s.id + "</p>")
      );
      result.innerHTML = affiche;
    }
  }
};
const goStart = () => {
  // position initiale snail
  if (buttonStart.innerHTML === "Start") {
    result.innerHTML = "";
    stopGameLoop = false;
    Constants.ranking = 0;
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
//allDraw();

/* window.addEventListener(
  "resize",
  () => {
    resizeCanvas(canvas);
    drawBackground(ctx, canvas.width, canvas.height);
  },
  false
); */
