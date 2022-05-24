export const drawBackground = (ctx, width, height, color) => {
  ctx.fillStyle = color;
  ctx.fillRect(0, 0, width, height);
};

export const drawSnail = (ctx, snail) => {
  ctx.fillStyle = snail.color;
  ctx.fillRect(snail.x, snail.y, snail.width, snail.height);
};

export const resizeCanvas = (canvas) => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
};

export const drawLine = (ctx, line) => {
  ctx.beginPath();
  ctx.moveTo(line.startX, line.startY);
  ctx.lineTo(line.endX, line.endY);
  ctx.strokeStyle = line.color;
  ctx.lineWidth = line.width;
  ctx.stroke();
};
