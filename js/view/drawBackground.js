/**
 *
 * @param {CanvasRenderingContext2D} ctx  context of canvas
 * @param {HTMLImageElement} img image to draw
 * @param {ObjectConstant} Constants
 */
const drawBackground = (ctx, img, Constants) => {
  ctx.drawImage(img, 0, 0, Constants.widthCanvas, Constants.heightCanvas);
};

export default drawBackground;
