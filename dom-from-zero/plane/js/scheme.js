'use strict'

const btnSetFull = document.getElementById('btnSetFull');
const btnSetEmpty = document.getElementById('btnSetEmpty');
const acSelect = document.getElementById('acSelect');
const seatMapTitle = document.getElementById('seatMapTitle');
const btnSeatMap = document.getElementById('btnSeatMap');
const seatMapDiv = document.getElementById('seatMapDiv');
const totalPax = document.getElementById('totalPax');
const totalAdult = document.getElementById('totalAdult');
const totalHalf = document.getElementById('totalHalf');
let response;

btnSeatMap.disabled = true;
btnSetFull.disabled = true;
btnSetEmpty.disabled = true;

acSelect.addEventListener('change', changePlane);
btnSeatMap.addEventListener('click', showScheme);

function changePlane() {
  const request = new XMLHttpRequest();
  request.addEventListener('load', () => {
    response = JSON.parse(request.responseText);
    seatMapTitle.textContent = `${response.title} (${response.passengers} пассажиров)`;
    btnSeatMap.disabled = false;
  });
  const url = 'https://neto-api.herokuapp.com/plane/' + acSelect.value;
  request.open('GET', url, true);
  request.send();
  console.log(response);
}

function showScheme(event) {
  event.preventDefault();
  btnSetFull.disabled = false;
  btnSetEmpty.disabled = false;
  seatMapDiv.textContent = response.scheme;
}

function Plane() {
  return {
    tag: 'div', cls: ['row', 'seating-row', 'text-center'], content: [ 
      { tag: 'div', cls: ['col-xs-1', 'row-number'], content: { tag: 'h2', content: index + 1 } },
      { tag: 'div', cls: 'col-xs-5', content: [
        { tag: 'div', cls: ['col-xs-5', 'seat'], content: 
         { tag: 'span', cls: 'seat-label', content: 'A' } },
        { tag: 'div', cls: ['col-xs-5', 'seat'], content: 
         { tag: 'span', cls: 'seat-label', content: 'B' } },
        { tag: 'div', cls: ['col-xs-5', 'seat'], content: 
         { tag: 'span', cls: 'seat-label', content: 'C' } }
      ]
     },
     { tag: 'div', cls: 'col-xs-5', content: [
        { tag: 'div', cls: ['col-xs-5', 'seat'], content: 
         { tag: 'span', cls: 'seat-label', content: 'D' } },
        { tag: 'div', cls: ['col-xs-5', 'seat'], content: 
         { tag: 'span', cls: 'seat-label', content: 'E' } },
        { tag: 'div', cls: ['col-xs-5', 'seat'], content: 
         { tag: 'span', cls: 'seat-label', content: 'F' } }
      ]
     }
   ]
  }
/* <div class="row seating-row text-center">
  <div class="col-xs-1 row-number">
    <h2 class="">1</h2>
  </div>
  <div class="col-xs-5">
    <div class="col-xs-4 seat">
      <span class="seat-label">A</span>
    </div>
    <div class="col-xs-4 seat">
      <span class="seat-label">B</span>
    </div>
    <div class="col-xs-4 seat">
      <span class="seat-label">C</span>
    </div>
  </div>
  <div class="col-xs-5">
    <div class="col-xs-4 seat">
      <span class="seat-label">D</span>
    </div>
    <div class="col-xs-4 seat">
      <span class="seat-label">E</span>
    </div>
    <div class="col-xs-4 seat">
      <span class="seat-label">F</span>
    </div>
  </div>
</div> */
}


