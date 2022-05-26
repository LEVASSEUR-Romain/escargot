const controleSnail = (snails, Constants) => {
  snails.forEach((element) => {
    if (element.x < Constants.widthCanvas - Constants.widthSnail) {
      const random =
        Math.floor(
          Math.random() * (Constants.speedMaxAlea - Constants.speedMinAlea + 1)
        ) + Constants.speedMinAlea;

      element.x = element.x + random;
      element.animation =
        element.animation + 1 > Constants.animationTotal
          ? 1
          : element.animation + 1;
    }
  });
  return snails;
};

export default controleSnail;
