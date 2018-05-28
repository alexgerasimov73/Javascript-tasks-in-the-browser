'use strict';

const counter = document.getElementById('counter');
const plusBtn = document.getElementById('increment');
const minusBtn = document.getElementById('decrement');
const resetBtn = document.getElementById('reset');

!localStorage.counter ? counter.textContent = 0 : counter.textContent = localStorage.counter;

plusBtn.addEventListener('click', () => { 
	++counter.textContent; 
	localStorage.counter = counter.textContent;
});

minusBtn.addEventListener('click', () => {
	counter.textContent < 1 ? counter.textContent = 0 : --counter.textContent;
	localStorage.counter = counter.textContent;
});

resetBtn.addEventListener('click', () => {
	counter.textContent = 0;
	localStorage.counter = counter.textContent;
});