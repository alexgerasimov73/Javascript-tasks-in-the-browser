const drumKit = document.getElementsByClassName('drum-kit__drum');
const audio = document.getElementsByTagName('audio');
const drumKitArray = Array.from(drumKit);

function playSound() {
 audio[drumKitArray.indexOf(this)].currentTime = 0;
 audio[drumKitArray.indexOf(this)].play();
}
 
for (let kit of drumKit) {
 kit.onclick = playSound;
}