const inputFields = document.querySelectorAll('input');
const textarea = document.querySelector('textarea');
const outputFields = document.querySelectorAll('output');
const sendButton = document.querySelector('.contentform .button-contact');
const changeButton = document.querySelector('main .button-contact');

document.querySelector('input[name="zip"]').type = 'number';

document.addEventListener('change', sendMessage);
sendButton.addEventListener('click', show);
changeButton.addEventListener('click', show);

function sendMessage() {
  for (const input of inputFields) {
    if (input.value === '' || textarea.value === '') {
      sendButton.disabled = true;
      return;
    }
      for (const output of outputFields) {
        if (output.id === input.name) {
          output.value = input.value;
        }
        if (output.id === textarea.name) {
            output.value = textarea.value;
        }
      }
  }
  sendButton.disabled = false;
}

function show(event) {
  event.preventDefault();
  document.querySelector('.contentform').classList.toggle('hidden');
  document.querySelector('main').classList.toggle('hidden');
}