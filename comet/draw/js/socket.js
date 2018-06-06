'use strict';

const connection = new WebSocket('wss://neto-api.herokuapp.com/draw');

window.editor.addEventListener('update', func);

function func() {
  canvas.toBlob(img => connection.send(img));
}