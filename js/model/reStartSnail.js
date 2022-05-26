/**
 *
 * @param {ArraySnail} snails  Array of snails
 * @returns update snails positon x =0 and ranking = 0
 */
const reStartSnail = (snails) => {
  for (let i = 0; i < snails.length; i++) {
    snails[i].x = 0;
    snails[i].ranking = 0;
  }
};
export default reStartSnail;
