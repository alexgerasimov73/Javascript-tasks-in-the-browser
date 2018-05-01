const drumKit = document.getElementsByClassName('drum-kit__drum');
const audio = document.getElementsByTagName('audio');

function playSound() {
 if (this.classList.contains('key-clap')) {
  audio[0].currentTime = 0;
  audio[0].play();
 }
 else if (this.classList.contains('key-hihat')) {
  audio[1].currentTime = 0;
  audio[1].play();
 }
 else if (this.classList.contains('key-kick')) {
  audio[2].currentTime = 0;
  audio[2].play();
 }
 else if (this.classList.contains('key-openhat')) {
  audio[3].currentTime = 0;
  audio[3].play();
 }
 else if (this.classList.contains('key-boom')) {
  audio[4].currentTime = 0;
  audio[4].play();
 }
 else if (this.classList.contains('key-ride')) {
  audio[5].currentTime = 0;
  audio[5].play();
 }
}

for (let kit of drumKit) {
 kit.onclick = playSound;
}