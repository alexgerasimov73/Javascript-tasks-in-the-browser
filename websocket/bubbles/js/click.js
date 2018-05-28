'use strict';

const connection = new WebSocket('wss://neto-api.herokuapp.com/mouse');

connection.addEventListener('open', () => showBubbles(connection));

connection.addEventListener('error', error => {
  console.log(`Произошла ошибка: ${error.data}`);
  });

document.addEventListener('click', event => { 
  const field = { x : event.clientX, y : event.clientY } 
  connection.send(JSON.stringify(field));
  });