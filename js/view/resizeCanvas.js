/**
 *
 * @param {HTMLElementCanvas} canvas
 * @return resize canvas
 */

const resizeCanvas = (canvas) => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
};
export default resizeCanvas;
