'use strict';

setInterval(() => {
  const xhr = new XMLHttpRequest();
  xhr.addEventListener('load', onLoad);
  xhr.open('GET', 'https://neto-api.herokuapp.com/comet/pooling', true);
  xhr.send();
  function onLoad() {
    const response = Number(xhr.responseText);
    const numbers = document.querySelectorAll('.pooling div');
    for (const number of numbers) {
      number.classList.remove('flip-it');
    }
    numbers[response - 1].classList.add('flip-it');
   }
}, 5000);