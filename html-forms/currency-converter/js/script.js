const quantity = document.getElementById('source');
const fromCurrency = document.getElementById('from');
const toCurrency = document.getElementById('to');
const result = document.getElementById('result');

const request = new XMLHttpRequest();
request.addEventListener('load', onLoad);
request.addEventListener('loadstart', showLoader);
request.addEventListener('loadend', showLoader);
request.open('GET', 'https://neto-api.herokuapp.com/currency', true);
request.send();

function showLoader() {
  document.getElementById('loader').classList.toggle('hidden');
}

function onLoad() {
  document.getElementById('content').classList.remove('hidden');
  const currencies = JSON.parse(request.responseText);
  for (const currency of currencies) {
    fromCurrency.innerHTML += 
      `<option label="${currency.code}" value="${currency.value}"></option>`;
    toCurrency.innerHTML += 
      `<option label="${currency.code}" value="${currency.value}"></option>`;
  }
  showResult();
}

function showResult() {
  result.value = (quantity.value * fromCurrency.value / toCurrency.value).toFixed(2);
}

quantity.addEventListener('input', showResult);
fromCurrency.addEventListener('change', showResult);
toCurrency.addEventListener('change', showResult);