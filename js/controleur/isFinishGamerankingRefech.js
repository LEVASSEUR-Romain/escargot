/**
 *
 * @param {ArraySnail} snails Array of snails
 * @param {ObjectConstant} Constants Object of constants
 * @returns {boolean} true if all snails are finish
 */
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
