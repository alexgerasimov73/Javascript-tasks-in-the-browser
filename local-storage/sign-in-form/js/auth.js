'use strict';

const entrance = document.querySelector('.sign-in-htm');
const registration = document.querySelector('.sign-up-htm');
const entranceBtn = entrance.querySelector('.button');
const registrationBtn = registration.querySelector('.button');

function request(link, form) {
  event.preventDefault();
  const output = form.querySelector('.error-message');
  const data = {};
  const formData = new FormData(form);
  for (const [k, v] of formData) {
    data[k] = v;
  }
  
  function onLoad() {
    const response = JSON.parse(xhr.responseText);
    if (response.error) {
      output.value = response.message;
    } else {
      if (form === entrance) {
        output.value = `«Пользователь ${response.name} успешно авторизован»`
      } else if (form === registration) {
        output.value = `«Пользователь ${response.name} успешно зарегистрирован»`
      }
    }
  }
  
  const xhr = new XMLHttpRequest();
  xhr.addEventListener('load', onLoad);
  xhr.open('POST', link);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(JSON.stringify(data));
}

entranceBtn.addEventListener('click', event => request('https://neto-api.herokuapp.com/signin', entrance));
registrationBtn.addEventListener('click', event => request('https://neto-api.herokuapp.com/signup', registration));