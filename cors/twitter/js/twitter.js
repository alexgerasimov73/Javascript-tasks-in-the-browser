'use strict';

function showProfile(profile) {
  document.querySelector('[data-username]').textContent = profile.username;
  document.querySelector('[data-description]').textContent = profile.description;
  document.querySelector('[data-tweets]').textContent = profile.tweets;
  document.querySelector('[data-followers]').textContent = profile.followers;
  document.querySelector('[data-following]').textContent = profile.following;
  document.querySelector('[data-wallpaper]').src = profile.wallpaper;
  document.querySelector('[data-pic]').src = profile.pic;
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

loadData('https://neto-api.herokuapp.com/twitter/jsonp')
  .then(showProfile);