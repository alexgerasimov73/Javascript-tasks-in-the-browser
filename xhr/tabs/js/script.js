const tabs = document.querySelectorAll('.tabs a');
const content = document.getElementById('content');
const preloader = document.getElementById('preloader');
const active = document.querySelector('.active');

function getRequest(active) {
  const link = active.getAttribute('href');
  const request = new XMLHttpRequest();
  request.addEventListener('load', onLoad);
  request.addEventListener('loadstart', loading);
  request.addEventListener('loadend', loading);
  request.open('GET', link);
  request.send();
}

function onLoad() {
  content.innerHTML = this.responseText;
}

function loading() {
  preloader.classList.toggle('hidden');
}

document.addEventListener('load', getRequest(active));

function tabChange(event) {
  event.preventDefault();
  for (const tab of tabs) {
    tab.classList.remove('active');
  }
  this.classList.add('active');
  getRequest(this);
}

for (const tab of tabs) {
  tab.addEventListener('click', tabChange);
}