/**
 *
 * @param {ObjectConstant} Constants Object of constants
 * @returns {ArrayLine} Array of lines for draw
 */
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

export default arrayLine;
