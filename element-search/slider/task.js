const sliderArrow = document.querySelectorAll('.slider__arrow');
const sliderItems = document.querySelectorAll('.slider__item');
console.log(sliderItems.length)
sliderArrow.forEach(elem => elem.addEventListener('click', () => {
  // const next = document.querySelector('.slider__arrow_next');
  const prev = document.querySelector('.slider__arrow_prev');
  // console.log(sliderItems)
  if (event.target == prev) {
    // elem.classList.remove('slider__item_active');
    // sliderItems[]
    console.log(sliderItems.indexOf(event.target))
  } else {
    console.log('click next')
  }
    
    
}));



