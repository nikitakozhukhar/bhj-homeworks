const revealActive = document.querySelector('.reveal');

function isVisible(reveal) {
const {top, bottom} = reveal.getBoundingClientRect();

if (bottom < 0) {
  reveal.classList.remove('reveal_active')
  return 
}

if (top > window.innerHeight) {
  reveal.classList.remove('reveal_active')
  return 
}
reveal.classList.add('reveal_active')
return
}


// console.log(isVisible(revealActive))
window.addEventListener('scroll', console.log('scroll on attack'))
// setInterval(() => {
// isVisible(revealActive), 1000
// })