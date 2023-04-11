const revealActive = document.querySelector('.reveal');

// const itemCoords = revealActive.getBoundingClientRect();
const itemCoordsTop = revealActive.getBoundingClientRect().top;
// console.log(itemCoordsTop);
// console.log(window.innerHeight)
function isVisible() {

if (itemCoordsTop < window.innerHeight) {
  revealActive.classList.add('reveal_active')
}

if (itemCoordsTop > window.innerHeight) {
  revealActive.classList.remove('reveal_active')
}
}

/*if (bottom < 0) {
  reveal.classList.remove('reveal_active')
  return 
}

if (top > window.innerHeight) {
  reveal.classList.remove('reveal_active')
  return 
}
reveal.classList.add('reveal_active')
return
}*/
window.addEventListener('scroll', isVisible())