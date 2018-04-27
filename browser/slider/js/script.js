const slider = document.getElementById('slider');

let array = [
  "./i/airmax-jump.png",
  "./i/airmax-on-foot.png",
  "./i/airmax-playground.png",
  "./i/airmax-top-view.png",
  "./i/airmax.png"
];

let step = 0;

setInterval(() => {
  slider.src = array[step++ % array.length];
}, 5000);