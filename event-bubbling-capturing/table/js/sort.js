'use strict';

function handleTableClick(event) {
  if (event.target.dataset.propName && event.target.classList.contains('prop__name')) {
    table.dataset.sortBy = event.target.dataset.propName;
    if (step % 2 === 0) {
      event.target.dataset.dir = 1;
    } else {
      event.target.dataset.dir = -1;
    }
    sortTable(event.target.dataset.propName, event.target.dataset.dir);
    step++;
  }
}

let step = 0;