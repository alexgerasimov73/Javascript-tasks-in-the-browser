'use strict';

function showRecipe(data) {
  document.querySelector('[data-pic]').style.backgroundImage = `url(${data.pic}`;
  document.querySelector('[data-title]').textContent = data.title;
  document.querySelector('[data-ingredients]').textContent = data.ingredients.join(', ');
}

function showRating(data) {
  document.querySelector('[data-rating]').textContent = data.rating.toFixed(2);
  document.querySelector('[data-star]').style.width = `${data.rating * 100 / 10}%`;
  document.querySelector('[data-votes]').textContent = 
   (data.votes > 4 || data.votes === 0) ? `(${data.votes} оценок)` 
  : ((data.votes === 1) ? `(${data.votes} оценка)` : `(${data.votes} оценки)`);
}

function showConsumer(consumers) {
  for (const consumer of consumers.consumers) {
    const element = document.createElement("img");
    element.src = consumer.pic;
    element.title = consumer.name;
    document.querySelector('[data-consumers]').appendChild(element);
  }
  const users = document.createElement("span");
  users.textContent = `(+${consumers.total - document.querySelectorAll('[data-consumers] img').length})`;
  document.querySelector('[data-consumers]').appendChild(users);
}

function loadData(url) {
  const functionName = "callback" + Math.floor(Math.random() * 1001);
  return new Promise((done, fail) => {
    window[functionName] = done;
    const script = document.createElement('script');
    script.src = `${url}?jsonp=${functionName}`;
    document.body.appendChild(script);
  });
} 

loadData('https://neto-api.herokuapp.com/food/42')
  .then(showRecipe);
loadData(`https://neto-api.herokuapp.com/food/42/rating`)
    .then(showRating);
loadData(`https://neto-api.herokuapp.com/food/42/consumers`)
    .then(showConsumer);