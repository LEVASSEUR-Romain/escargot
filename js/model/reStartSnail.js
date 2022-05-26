const reStartSnail = (snails) => {
  for (let i = 0; i < snails.length; i++) {
    snails[i].x = 0;
    snails[i].ranking = 0;
  }
};
export default reStartSnail;
