const navigation = document.getElementsByTagName('nav')[0];
const secret = document.getElementsByClassName('secret')[0];

function showNavigation(event) {
  if (!event.ctrlKey) {
    return;
  } else if (!event.altKey) {
    return;
  } else if (event.code === 'KeyT') {
    navigation.classList.toggle('visible');
  }
}

document.addEventListener('keydown', showNavigation);

function secretCode(event) {
  switch (event.code) {
    case 'KeyY' :
    break;
    case 'KeyT' :
    break;
    case 'KeyN' :
    break;
    case 'KeyJ' :
    break;
    case 'KeyK' :
    break;
    case 'KeyJ' :
    break;
    case 'KeyU' :
    break;
    case 'KeyB' :
    break;
    case 'KeyZ' :
      secret.classList.add('visible');
    break;
  }
}

document.addEventListener('keydown', secretCode);