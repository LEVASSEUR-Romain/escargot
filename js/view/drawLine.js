const drawLine = (ctx, line) => {
  ctx.beginPath();
  ctx.moveTo(line.startX, line.startY);
  ctx.lineTo(line.endX, line.endY);
  ctx.strokeStyle = line.color;
  ctx.lineWidth = line.width;
  ctx.stroke();
};

export default drawLine;
