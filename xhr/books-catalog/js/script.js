const content = document.querySelector('#content');
content.innerHTML = '';

const request = new XMLHttpRequest();
request.addEventListener('load', onLoad);
request.open('GET', 'https://neto-api.herokuapp.com/book/', true);
request.send();

function onLoad() {
  const bookCatalog = JSON.parse(request.responseText);
  for (const book of bookCatalog) {
    content.innerHTML += `
    <li data-title='${book.title}' data-author='${book.author.name}' data-info='${book.info}' data-price='${book.price}'>
      <img src="${book.cover.small}">
    </li>
    `;
  }
}
