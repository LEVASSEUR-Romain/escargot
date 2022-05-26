import ConstanteCut from "../ConstanteCut.js";
/**
 *
 * @param {CanvasRenderingContext2D} ctx context of canvas
 * @param {ObjectSnail} snail draw snail
 * @param {HTMLImageElement} img image of snail
 * @return draw snail in canvas whith img
 */
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
