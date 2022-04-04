canvasEl = document.getElementById('area_dibujo');
canvas = canvasEl.getContext('2d');

canvasEl.addEventListener('touchstart', (e) => {
  draw(e.changedTouches[0].pageX, e.changedTouches[0].pageY);
  draw(e.changedTouches[1].pageX, e.changedTouches[1].pageY);
});

canvasEl.addEventListener('touchmove', (e) => {
  e.preventDefault();
  draw(e.changedTouches[0].pageX, e.changedTouches[0].pageY);
  draw(e.changedTouches[1].pageX, e.changedTouches[1].pageY);
});

draw = (x, y,) => {
  canvas.beginPath();
  canvas.fillStyle = colorDeLinea.value;
  canvas.arc(x, y, grosor.value, 0, 2 * Math.PI);
  canvas.fill();
  canvas.closePath();
};