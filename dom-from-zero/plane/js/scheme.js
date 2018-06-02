'use strict'

const btnSetFull = document.getElementById("btnSetFull");
const btnSetEmpty = document.getElementById("btnSetEmpty");
const acSelect = document.getElementById("acSelect");
const seatMapTitle = document.getElementById("seatMapTitle");
const btnSeatMap = document.getElementById("btnSeatMap");
const seatMapDiv = document.getElementById("seatMapDiv");
const totalPax = document.getElementById("totalPax");
const totalAdult = document.getElementById("totalAdult");
const totalHalf = document.getElementById("totalHalf");

btnSetFull.disabled = true;
btnSetEmpty.disabled = true;

btnSeatMap.addEventListener("click", showSchema);

function showSchema(event) {
  event.preventDefault();
  btnSetFull.disabled = false;
  btnSetEmpty.disabled = false;
  seatMapDiv.textContent = "";
  const request = new XMLHttpRequest();

  request.addEventListener("load", () => {
    const response = JSON.parse(request.responseText);
    seatMapTitle.textContent = `${response.title} (${response.passengers} пассажиров)`;

    response.scheme.forEach((el, index) => {
      const schema = createElement(plane(index));
      if (el === 4) {
        schema.querySelectorAll(".col-xs-5")[0].firstElementChild.textContent = "";
        schema.querySelectorAll(".col-xs-5")[0].firstElementChild.classList.remove("seat");
        schema.querySelectorAll(".col-xs-5")[0].firstElementChild.classList.add("no-seat");
        schema.querySelectorAll(".col-xs-5")[1].lastElementChild.textContent = "";
        schema.querySelectorAll(".col-xs-5")[1].lastElementChild.classList.remove("seat");
        schema.querySelectorAll(".col-xs-5")[1].lastElementChild.classList.add("no-seat");
      }
      if (el === 0) {
        const seats = schema.querySelectorAll(".col-xs-4");
        for (const seat of seats) {
          seat.classList.remove("seat");
          seat.classList.add("no-seat");
          seat.textContent = "";
        }
      }

      seatMapDiv.appendChild(schema);

      const seatBtns = seatMapDiv.getElementsByClassName("seat");
      for (const seat of seatBtns) {
        seat.addEventListener("click", takePlace);
      }

      btnSetFull.addEventListener("click", setFull);
      btnSetEmpty.addEventListener("click", setEmpty);
      countPlaces();
    });
  });

  request.open("GET", "https://neto-api.herokuapp.com/plane/" + acSelect.value, true);
  request.send();
}

function plane(index) {
  return { tag: "div", cls: ["row", "seating-row", "text-center"], content: 
  	[
      { tag: "div", cls: ["col-xs-1", "row-number"], content:
      	{ tag: "h2", content: `${++index}` } },
      { tag: "div", cls: "col-xs-5", content: 
      	[
          { tag: "div", cls: ["col-xs-4", "seat"], content: 
          	{ tag: "span", cls: "seat-label", content: "A" }
          },
          { tag: "div", cls: ["col-xs-4", "seat"], content:
          	{ tag: "span", cls: "seat-label", content: "B" }
          },
          { tag: "div", cls: ["col-xs-4", "seat"], content:
          	{ tag: "span", cls: "seat-label", content: "C" }
          }
        ]
      },
      { tag: "div", cls: "col-xs-5", content:
      	[
          { tag: "div", cls: ["col-xs-4", "seat"], content: 
          	{ tag: "span", cls: "seat-label", content: "D" }
          },
          { tag: "div", cls: ["col-xs-4", "seat"], content:
          	{ tag: "span", cls: "seat-label", content: "E" }
          },
          { tag: "div", cls: ["col-xs-4", "seat"], content:
          	{ tag: "span", cls: "seat-label", content: "F" }
          }
        ]
      }
    ]
  };
}

function createElement(node) {
  if (node === undefined || node === null || node === false) {
    return document.createTextNode("");
  }
  if (typeof node === "string" || typeof node === "number" || node === true) {
    return document.createTextNode(node);
  }
  if (Array.isArray(node)) {
    return node.reduce((f, el) => {
      f.appendChild(createElement(el));
      return f;
    }, document.createDocumentFragment());
  }

  const element = document.createElement(node.tag || "div");
  [].concat(node.cls || []).forEach(className => element.classList.add(className));
  element.appendChild(createElement(node.content));
  return element;
}

function takePlace(event) {
  if (event.altKey) {
    if (event.currentTarget.classList.contains("half")) {
      event.currentTarget.classList.remove("half");
    } else {
      event.currentTarget.classList.add("half");
      event.currentTarget.classList.remove("adult");
    }
  } else {
    event.currentTarget.classList.contains("half")
      ? event.currentTarget.classList.remove("half") : event.currentTarget.classList.toggle("adult");
  }
  countPlaces();
}

function countPlaces() {
  totalAdult.textContent = document.getElementsByClassName("adult").length;
  totalHalf.textContent = document.getElementsByClassName("half").length;
  totalPax.textContent = 
    document.getElementsByClassName("adult").length + document.getElementsByClassName("half").length;
}

function setFull(event) {
  event.preventDefault();
  const seatBtns = seatMapDiv.getElementsByClassName("seat");
  for (const seat of seatBtns) {
    if (event.altKey) {
    if (!seat.classList.contains("adult")) {
    		seat.classList.add("half");
    	}
    } else {
    	if (!seat.classList.contains("half")) {
    		seat.classList.add("adult");
    	}
    }
  }
  countPlaces();
}

function setEmpty(event) {
  event.preventDefault();
  const seatBtns = seatMapDiv.getElementsByClassName("seat");
  for (const seat of seatBtns) {
    seat.classList.remove("half");
    seat.classList.remove("adult");
  }
  countPlaces();
}