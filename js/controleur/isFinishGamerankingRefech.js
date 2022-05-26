const isFinishGamerankingRefech = (snails, Constants) => {
  let finish = 0;
  snails.forEach((element) => {
    if (element.x >= Constants.widthCanvas - Constants.widthSnail) {
      finish++;
      if (element.ranking === 0) {
        Constants.ranking = Constants.ranking + 1;
        element.ranking = Constants.ranking;
      }
    }
  });
  if (finish === snails.length) {
    return true;
  }
  return false;
};
export default isFinishGamerankingRefech;
