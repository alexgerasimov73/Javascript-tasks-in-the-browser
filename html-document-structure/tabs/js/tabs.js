const tabList = document.querySelector('.tabs-nav');
const articles = document.querySelectorAll('article');
const shopping = tabList.firstElementChild.cloneNode(true);
const food = tabList.firstElementChild.cloneNode(true);
const clubs = tabList.firstElementChild.cloneNode(true);

tabList.appendChild(shopping);
tabList.appendChild(food);
tabList.appendChild(clubs);
tabList.removeChild(tabList.firstElementChild);
tabList.firstElementChild.classList.add('ui-tabs-active');

const tabListArray = Array.from(tabList.querySelectorAll('li'));

for (let i = 0; i < tabListArray.length; i++) {
  tabListArray[i].firstElementChild.textContent = articles[i].getAttribute('data-tab-title');
  tabListArray[i].firstElementChild.classList.add(articles[i].getAttribute('data-tab-icon'));
  articles[i].classList.add('hidden');
  if (tabListArray[i].classList.contains('ui-tabs-active')) {
    articles[i].classList.remove('hidden');
  }
}

function changeTab() {
  for (let i = 0; i < tabListArray.length; i++) {
    articles[i].classList.add('hidden');
    tabListArray[i].classList.remove('ui-tabs-active');
  }
  this.classList.add('ui-tabs-active');
  articles[tabListArray.indexOf(this)].classList.remove('hidden');
}

for (const tab of tabListArray) {
  tab.addEventListener('click', changeTab);
}