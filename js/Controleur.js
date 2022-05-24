export const controleSnail = (snails, Constants) => {
  snails.forEach((element) => {
    if (element.x < Constants.widthCanvas - Constants.widthSnail) {
      const random =
        Math.floor(
          Math.random() * (Constants.speedMaxAlea - Constants.speedMinAlea + 1)
        ) + Constants.speedMinAlea;

      element.x = element.x + random;
    }
  });
  return snails;
};

export const isFinishGameClassementRefech = (snails, Constants) => {
  let finish = 0;
  snails.forEach((element) => {
    if (element.x >= Constants.widthCanvas - Constants.widthSnail) {
      finish++;
      if (element.classement === 0) {
        Constants.classement = Constants.classement + 1;
        element.classement = Constants.classement;
      }
    }
  });
  if (finish === snails.length) {
    return true;
  }
  return false;
};
