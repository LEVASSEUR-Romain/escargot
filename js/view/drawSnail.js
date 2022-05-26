import ConstanteCut from "../ConstanteCut.js";

const drawSnail = (ctx, snail, img) => {
  const snailPosition = ConstanteCut[snail.animation];
  ctx.drawImage(
    img,
    snailPosition.x,
    snailPosition.y,
    snailPosition.width,
    snailPosition.height,
    snail.x,
    snail.y,
    snailPosition.width,
    snailPosition.height
  );
};

export default drawSnail;
