/**
 *
 * @param {CanvasRenderingContext2D} ctx  context of canvas
 * @param {HTMLImageElement} img image to draw
 * @param {ObjectConstant} Constants
 */
const drawBackground = (ctx, img, Constants) => {
  console.log("ctx", ctx);
  console.log("img", img);
  ctx.drawImage(img, 0, 0, Constants.widthCanvas, Constants.heightCanvas);
};

export default drawBackground;
