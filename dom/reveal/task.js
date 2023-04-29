const revealActive = document.querySelector('.reveal');

const itemCoordsTop = revealActive.getBoundingClientRect().top;
const itemCoordsBot = revealActive.getBoundingClientRect().bottom;

function isVisible() {

  if (itemCoordsTop < window.innerHeight) {
    revealActive.classList.add('reveal_active')
  }

  if (itemCoordsTop > window.innerHeight || itemCoordsBot <= 0) {
    revealActive.classList.remove('reveal_active')
  }
}
window.addEventListener('scroll', isVisible)