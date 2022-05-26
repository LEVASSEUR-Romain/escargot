const drawBackground = (ctx, img, Constants) => {
  ctx.drawImage(img, 0, 0, Constants.widthCanvas, Constants.heightCanvas);
};

export default drawBackground;
