'use strict';

const counter = document.querySelector('.counter');
const numberOfErrors = document.querySelector('output.errors');
const connection = new WebSocket('wss://neto-api.herokuapp.com/counter');

connection.addEventListener('message', event => {
  const message = JSON.parse(event.data);
  counter.textContent = message.connections;
  numberOfErrors.textContent = message.errors;
});

connection.addEventListener('error', error => {
  console.log(`Произошла ошибка: ${error.data}`);
  });

window.addEventListener('beforeunload', () => {
  connection.close(1000, 'Работа закончена')
  });