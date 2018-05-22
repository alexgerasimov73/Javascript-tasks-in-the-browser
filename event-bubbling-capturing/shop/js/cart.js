'use strict';

let addButtons = document.getElementsByClassName('add-to-cart');

function add(event) {
  event.preventDefault();
  addToCart({title: this.dataset.title, price: this.dataset.price});
}

function addMore() {
  for (const button of addButtons) {
    button.addEventListener('click', add);
  }
}

for (const button of addButtons) {
  button.addEventListener('click', add);
}

showMore.addEventListener('click', addMore);
