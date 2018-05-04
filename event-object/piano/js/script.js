const keys = document.getElementsByTagName('li');
const audio = document.getElementsByTagName('audio');
const lowerSounds = [
  './sounds/lower/first.mp3',
  './sounds/lower/second.mp3',
  './sounds/lower/third.mp3',
  './sounds/lower/fourth.mp3',
  './sounds/lower/fifth.mp3'
];
const middleSounds = [
  './sounds/middle/first.mp3',
  './sounds/middle/second.mp3',
  './sounds/middle/third.mp3',
  './sounds/middle/fourth.mp3',
  './sounds/middle/fifth.mp3'
];
const higherSounds = [
  './sounds/higher/first.mp3',
  './sounds/higher/second.mp3',
  './sounds/higher/third.mp3',
  './sounds/higher/fourth.mp3',
  './sounds/higher/fifth.mp3'
];

const keysArray = Array.from(keys);

function playPiano(event) {
  if (event.shiftKey) {
    sounds = lowerSounds;
  } else if (event.ctrlKey) {
    sounds = higherSounds;
  } else {
    sounds = middleSounds;
  }
  audio[keysArray.indexOf(this)].src = sounds[keysArray.indexOf(this)];
  audio[keysArray.indexOf(this)].play();
}

for (let key of keysArray) {
  key.addEventListener('click', playPiano);
}
