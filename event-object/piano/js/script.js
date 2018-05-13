const keys = document.getElementsByTagName('li');
const audio = document.getElementsByTagName('audio');
const piano = document.getElementsByTagName('ul')[0];
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
    piano.classList.remove('middle');
    piano.classList.add('lower');
  } else if (event.altKey) {
    sounds = higherSounds;
    piano.classList.remove('middle');
    piano.classList.add('higher');
  } else {
    sounds = middleSounds;
  }
  audio[keysArray.indexOf(this)].src = sounds[keysArray.indexOf(this)];
  audio[keysArray.indexOf(this)].play();
}

function classReset() {
  if (piano.classList.contains('lower')) {
      piano.classList.remove('lower');
  } else if (piano.classList.contains('higher')) {
    piano.classList.remove('higher');
  }
piano.classList.add('middle');
}

for (let key of keysArray) {
  key.addEventListener('click', playPiano);
}

document.addEventListener('keyup', classReset);
