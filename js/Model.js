export const arrayLine = (Constants) => {
  const array = [];
  const distanceLine = Math.floor(
    Constants.heightCanvas / Constants.numberSnail
  );
  for (let i = 1; i < Constants.numberSnail; i++) {
    array.push({
      startX: Constants.startPositionX,
      startY: Constants.startPositionX + i * distanceLine,
      endX: Constants.widthCanvas,
      endY: Constants.startPositionX + i * distanceLine,
      color: Constants.colorLine,
      width: Constants.widthLine,
    });
  }
  return array;
};

export const arrayInitialSnail = (Constants) => {
  const array = [];
  const distanceLine = Math.floor(
    Constants.heightCanvas / Constants.numberSnail
  );
  for (let i = 0; i < Constants.numberSnail; i++) {
    array.push({
      x: Constants.startPositionX,
      y: Constants.startPositionX + i * distanceLine + Constants.borderSnail,
      width: Constants.widthSnail,
      height: distanceLine - 2 * Constants.borderSnail,
      color: Constants.colorSnail,
      classement: 0,
    });
  }
  return array;
};

export const reStartSnail = (snails) => {
  for (let i = 0; i < snails.length; i++) {
    snails[i].x = 0;
    snails[i].classement = 0;
  }
};
