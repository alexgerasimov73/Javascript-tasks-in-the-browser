const mediaplayer = document.getElementsByClassName('mediaplayer')[0];
const player = document.getElementsByTagName('audio')[0];
const backBtn = document.getElementsByClassName('back')[0];
const playStateBtn = document.getElementsByClassName('playstate')[0];
const stopBtn = document.getElementsByClassName('stop')[0];
const forwardBtn = document.getElementsByClassName('next')[0];
const title = document.getElementsByClassName('title')[0];
const titleArray = [
	'LA Chill Tour', 'This is it band', 'LA Fusion Jam'
];
const musicArray = [
	'./mp3/LA%20Chill%20Tour.mp3',
	'./mp3/This%20is%20it%20band.mp3',
	'./mp3/LA%20Fusion%20Jam.mp3'
];
let step = 0;
let count = 0;

backBtn.onclick = () => {
	--step;
	if (step < 0) {
		step = musicArray.length - 1;
	}
	player.src = musicArray[step];
	title.title = titleArray[step];
	if (count % 2 === 1) {
		player.play();
	}
}

playStateBtn.onclick = () => {
	if (count % 2 === 0) {
		player.play();
		mediaplayer.classList.toggle('play');
	} else {
		player.pause();
		mediaplayer.classList.toggle('play');
	}
	count++;
}

stopBtn.onclick = () => {
	player.pause();
	player.currentTime = 0;
	mediaplayer.classList.remove('play');
	count = 0;
}

forwardBtn.onclick = () => {
	++step;
	if (step === musicArray.length) {
		step = 0;
	}
	player.src = musicArray[step];
	title.title = titleArray[step];
	if (count % 2 === 1) {
		player.play();
	}
}