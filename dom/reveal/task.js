const reveal = document.querySelector('.reveal');

function isVisible() {

  const { innerHeight } = window;
  const { top } = reveal.getBoundingClientRect();
  
  if (top < innerHeight && top > 0) {
  reveal.classList.add("reveal_active");
  } else {
  reveal.classList.remove("reveal_active");
  }
}
window.addEventListener('scroll', isVisible)

