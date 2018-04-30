'use strict';

let array = [
  "./i/breuer-building.jpg",
  "./i/guggenheim-museum.jpg",
  "./i/headquarters.jpg",
  "./i/IAC.jpg",
  "./i/new-museum.jpg"
];

let currentPhoto = document.getElementById('currentPhoto');
let prevPhoto = document.getElementById('prevPhoto');
let nextPhoto = document.getElementById('nextPhoto');
let step = 0;
  
currentPhoto.src = array[step];

prevPhoto.onclick = () => {
  --step;
  if (step < 0) {
    step = array.length - 1;
  }
  currentPhoto.src = array[step];
}

nextPhoto.onclick = () => {
  ++step;
  if (step === array.length) {
    step = 0;    
  }
  currentPhoto.src = array[step];
}


