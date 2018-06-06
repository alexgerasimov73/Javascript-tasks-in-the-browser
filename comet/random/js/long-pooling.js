'use strict';

function longPolling() {
  const xhr = new XMLHttpRequest();

  xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState != 4) return;
    if (xhr.status >= 200 && xhr.status < 300) {
      if (xhr.responseText === '') return;
      const response = Number(xhr.responseText);
      const numbers = document.querySelectorAll('.long-pooling div');
      for (const number of numbers) {
        number.classList.remove('flip-it');
      }
      numbers[response - 1].classList.add('flip-it');
    }
    longPolling();
  });
  xhr.open('GET', 'https://neto-api.herokuapp.com/comet/long-pooling', true);
  xhr.send();
}

longPolling();