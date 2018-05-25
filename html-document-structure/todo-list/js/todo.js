const done = document.querySelector('.done');
const undone = document.querySelector('.undone');
const labels = document.querySelectorAll('label');

function checked() {
  if (this.firstElementChild.checked) {
    done.appendChild(this);
  } else if (this.firstElementChild.checked === false) {
    undone.appendChild(this);
  }
}

for (const label of labels) {
  label.addEventListener('click', checked);
}