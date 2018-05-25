const next = document.querySelector('a[data-action="next"]');
const prev = document.querySelector('a[data-action="prev"]');
const first = document.querySelector('a[data-action="first"]');
const last = document.querySelector('a[data-action="last"]');
const slides = document.querySelector('.slides');
const buttons = document.querySelectorAll('.slider-nav a');

document.querySelector('.slides').firstElementChild.classList.add('slide-current');
prev.classList.add('disabled');
first.classList.add('disabled');

function slider() {
  if (!this.classList.contains('disabled')) {
    switch(event.target) {
      case next :
        moveSlides(true);
        break;
      case prev :
        moveSlides(false);
        break;
      case first :
        document.querySelector('.slide-current').classList.remove('slide-current');
        slides.firstElementChild.classList.add('slide-current');
        disablePrev();
        enableNext();
        break;
      case last :
        document.querySelector('.slide-current').classList.remove('slide-current');
        slides.lastElementChild.classList.add('slide-current');
        disableNext();
        enablePrev();
        break;
    }
  }
}

function enableNext() {
  next.classList.remove('disabled');
  last.classList.remove('disabled');
}

function disableNext() {
  next.classList.add('disabled');
  last.classList.add('disabled');
}

function enablePrev() {
  prev.classList.remove('disabled');
  first.classList.remove('disabled');
}

function disablePrev() {
  prev.classList.add('disabled');
  first.classList.add('disabled');
}

function moveSlides(isForward) {
  const currentSlide = document.querySelector('.slide-current');
  const activatedSlide = isForward ? currentSlide.nextElementSibling : currentSlide.previousElementSibling;
  currentSlide.classList.remove('slide-current');
  activatedSlide.classList.add('slide-current');
  if (activatedSlide.nextElementSibling) {
    enableNext();
  } else {
    disableNext();
  }
  if (activatedSlide.previousElementSibling) {
    enablePrev();
  } else {
    disablePrev();
  }
}

for (const button of buttons) {
  button.addEventListener('click', slider);
}