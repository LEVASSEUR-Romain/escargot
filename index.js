// pour les test
//npm run test

// import
import Constants from "./js/Constants.js";
// view
import drawBackground from "./js/view/drawBackground.js";
import drawLine from "./js/view/drawLine.js";
import drawSnail from "./js/view/drawSnail.js";
import {
  changeViewForm,
  resetViewForm,
  changeConstants,
} from "./js/view/formulaireView.js";
import resizeCanvas from "./js/view/resizeCanvas.js";
// model
import arrayline from "./js/model/arrayLine.js";
import reStartSnail from "./js/model/reStartSnail.js";
import arrayInitialSnail from "./js/model/arrayInitialSnail.js";
// controleur
import isFinishGamerankingRefech from "./js/controleur/isFinishGamerankingRefech.js";
import loaderStratSnail from "./js/controleur/loaderStratSnail.js";
import controleSnail from "./js/controleur/controleSnail.js";
import loaderStratBackground from "./js/controleur/loaderStratBackground.js";
// constante global
let constantInGame = { ...Constants };
// cible document
const canvas = document.getElementById("canvas");
const buttonStart = document.getElementById("start");
const result = document.getElementById("result");
const changeId = document.getElementById("submit");
const resetId = document.getElementById("reset");

const ctx = canvas.getContext("2d");
// initialisation
let line = [];
let Snails = [];
const init = () => {
  line = arrayline(constantInGame);
  Snails = arrayInitialSnail(constantInGame);
  // canvas
  canvas.width = constantInGame.widthCanvas;
  canvas.height = constantInGame.heightCanvas;
};

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
init();
loaderStratSnail(initImage);
loaderStratBackground(initImage);
//start formulaire
changeViewForm(constantInGame);

// event
const allDraw = () => {
  drawBackground(ctx, backgroundImage, constantInGame);
  line.forEach((line) => {
    drawLine(ctx, line);
  });
  Snails.forEach((snail) => {
    drawSnail(ctx, snail, imageSnail);
  });
};

const gameLoop = () => {
  if (!stopGameLoop) {
    controleSnail(Snails, constantInGame);
    allDraw();
    myTimeout = setTimeout(gameLoop, constantInGame.gameLoopSpeed);
    if (isFinishGamerankingRefech(Snails, constantInGame)) {
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
    constantInGame.ranking = 0;
    reStartSnail(Snails);
    buttonStart.innerHTML = "Stop";
    gameLoop();
  } else {
    stopGameLoop = true;
    buttonStart.innerHTML = "Start";
  }
};

// ecouteur d'evenement
buttonStart.addEventListener("click", goStart);
changeId.addEventListener("click", (event) => {
  event.preventDefault();
  changeConstants(constantInGame);
  // reset
  init();
  allDraw();
});
resetId.addEventListener("click", (event) => {
  event.preventDefault();
  resetViewForm(constantInGame, Constants);
  // reset
  init();
  allDraw();
});
// lancer en appuyant sur enter
window.addEventListener("keydown", (e) => {
  if (e.keyCode === 13) {
    goStart();
  }
});

/* window.addEventListener(
  "resize",
  () => {
    resizeCanvas(canvas);
    allDraw();
  },
  false
); */
