const previewPictures = document.getElementsByTagName('a');
const pictures = document.getElementsByTagName('img');
const bigPicture = document.getElementsByClassName('gallery-view')[0];

function selectPicture(event) {
  event.preventDefault();
  if (this.classList.contains('gallery-current')) {
    return;
  }
  const currentPicture = document.getElementsByClassName('gallery-current');
  for (const pic of currentPicture) {
    pic.classList.remove('gallery-current');
  }
  this.classList.add('gallery-current');
  bigPicture.src = this.href;
}

for (const picture of previewPictures) {
  picture.addEventListener('click', selectPicture);
}
