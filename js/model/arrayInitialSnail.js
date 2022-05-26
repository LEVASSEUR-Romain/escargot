const arrayInitialSnail = (Constants) => {
  const array = [];
  const distanceLine = Math.floor(
    Constants.heightCanvas / Constants.numberSnail
  );
  for (let i = 0; i < Constants.numberSnail; i++) {
    array.push({
      id: i + 1,
      x: Constants.startPositionX,
      y: Constants.startPositionX + i * distanceLine + Constants.borderSnail,
      width: Constants.widthSnail,
      height: distanceLine - 2 * Constants.borderSnail,
      animation: 1,
      ranking: 0,
    });
  }
  return array;
};

export default arrayInitialSnail;
