const navigation = document.getElementsByTagName('nav')[0];
const secret = document.getElementsByClassName('secret')[0];
const codes = ['KeyY', 'KeyT', 'KeyN', 'KeyJ', 'KeyK', 'KeyJ', 'KeyU', 'KeyB', 'KeyZ'];
let codeKey = [];
let step = 0;

function showNavigation(event) {
  if (!event.ctrlKey && !event.altKey) {
    return;
  } else if (event.code === 'KeyT') {
    navigation.classList.toggle('visible');
  }
}

document.addEventListener('keydown', showNavigation);

function secretCode(event) {
  if (event.code === codes[step]) {
      codeKey.push(event.code);
      step++;
  } else if (event.code !== codes[step]) {
      codeKey = [];
      step = 0;
  }
  if (codes.length === codeKey.length) {
    secret.classList.toggle('visible');
  }
}

document.addEventListener('keydown', secretCode);
