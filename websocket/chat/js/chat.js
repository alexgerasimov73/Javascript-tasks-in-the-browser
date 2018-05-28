'use strict';

const chatStatus = document.querySelector('.chat-status');
const messageInput = document.querySelector('.message-input');
const messageSubmit = document.querySelector('.message-submit');
const loading = document.querySelector('.loading');
const messagePersonal = document.querySelector('.message-personal');
const messageStatus = document.querySelector('.message-status');
const messagesContent = document.querySelector('.messages-content');
const messages = document.getElementsByClassName('message');

document.querySelector('.messages-templates').style.display = 'initial';

for (const message of messages) {
  message.style.display = 'none';
}

const connection = new WebSocket('wss://neto-api.herokuapp.com/chat');

connection.addEventListener('open', event => {
  chatStatus.textContent = chatStatus.dataset.online;
  messageSubmit.disabled = false;
  messageStatus.style.display = 'initial';
  messageStatus.querySelector('.message-text').textContent = '«Пользователь появился в сети»';
});

connection.addEventListener('error', error => {
  console.log(`Произошла ошибка: ${error.data}`);
  });

function getMessage(event) {
  messageStatus.style.display = 'none';
  if (event.data === '...') {
    loading.style.display = 'initial';
  } else {
    loading.style.display = 'none';
    for (const message of messages) {
      if (message.classList.length === 1) {
        message.querySelector('.message-text').textContent = event.data;
        const time = new Date();
        message.querySelector('.timestamp').textContent = `${("0" + time.getHours()).slice(-2)}:${("0" + time.getMinutes()).slice(-2)}`;
        messagesContent.appendChild(message);
        message.style.display = 'initial';
      }
    }
  }
}

function sendMessage(event) {
  event.preventDefault();
  if (messageInput.value !== '') {
    messagePersonal.querySelector('.message-text').textContent = messageInput.value;
    const time = new Date();
    messagePersonal.querySelector('.timestamp').textContent = `${("0" + time.getHours()).slice(-2)}:${("0" + time.getMinutes()).slice(-2)}`;
    messagesContent.appendChild(messagePersonal);
    messagePersonal.style.display = 'initial';
    connection.send(messageInput.value);
    messageInput.value = '';
  }
}

connection.addEventListener('message', getMessage);
messageSubmit.addEventListener('click', sendMessage);

connection.addEventListener('close', event => {
  chatStatus.textContent = chatStatus.dataset.offline;
  messageSubmit.disabled;
  messageStatus.style.display = 'initial';
  messageStatus.querySelector('.message-text').textContent = '«Пользователь не в сети»';
});