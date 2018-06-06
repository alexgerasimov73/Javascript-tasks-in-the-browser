'use strict';

const connection = new WebSocket('wss://neto-api.herokuapp.com/comet/websocket');

connection.addEventListener('message', event => {
  const response = Number(event.data);
  const numbers = document.querySelectorAll('.websocket div');
  for (const number of numbers) {
    number.classList.remove('flip-it');
  }
  numbers[response - 1].classList.add('flip-it');
});