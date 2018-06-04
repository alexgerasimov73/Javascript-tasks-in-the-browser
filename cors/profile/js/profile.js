'use strict';

function showProfile(profile) {
  document.querySelector('[data-name]').textContent = profile.name;
  document.querySelector('[data-description]').textContent = profile.description;
  document.querySelector('[data-position]').textContent = profile.position;
  document.querySelector('[data-pic]').src = profile.pic;
  loadData(`https://neto-api.herokuapp.com/profile/${profile.id}/technologies`)
    .then(showTechnologies);
}

function showTechnologies(technologies) {
  for (const technologie of technologies) {
    const element = document.createElement("span");
    element.classList.add("devicons");
    element.classList.add(`devicons-${technologie}`);
    document.querySelector('[data-technologies]').appendChild(element);
  }
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

loadData('https://neto-api.herokuapp.com/profile/me')
  .then(showProfile);

document.querySelector('.content').style.display = "initial";