 function switchToTheLastSlide(index) {
  sliderItems[sliderItems.length - 1].classList.add('slider__item_active');
  sliderItems[index].classList.remove('slider__item_active');
 }

 function switchToThePrevSlide(index) {
  sliderItems[index].classList.remove('slider__item_active');
  sliderItems[index - 1].classList.add('slider__item_active');
 }

 function switchToTheFirstSlide(index) {
  sliderItems[0].classList.add('slider__item_active');
  sliderItems[index].classList.remove('slider__item_active');
 }

 function switchToTheNextSlide(index) {
  sliderItems[index].classList.remove('slider__item_active');
  sliderItems[index + 1].classList.add('slider__item_active');
 }

function isTheFirstSlide(index) {
  return index == 0
}

function isTheLastSlide(index) {
  return index == sliderItems.length - 1
}

const sliderArrow = document.querySelectorAll('.slider__arrow');
const sliderItems = document.querySelectorAll('.slider__item');

sliderArrow.forEach(elem => elem.addEventListener('click', event => {

  const prev = document.querySelector('.slider__arrow_prev');
  const sliderItems = [...document.querySelectorAll('.slider__item')];

  const activeSliderIndex = sliderItems.indexOf(document.querySelector('.slider__item_active'));
    if (event.target == prev) {
     isTheFirstSlide(activeSliderIndex)
        ? switchToTheLastSlide(activeSliderIndex)
        : switchToThePrevSlide(activeSliderIndex)
    } else {
     isTheLastSlide(activeSliderIndex)
        ? switchToTheFirstSlide(activeSliderIndex)
       : switchToTheNextSlide(activeSliderIndex)
   }
}));


/*Задание со звездочкой в процессе выполнения*/

function switchToTheLastSlideDot(index) {
  slidersDot[slidersDot.length - 1].classList.add('slider__dot_active');
  slidersDot[index].classList.remove('slider__dot_active');
 }

 function switchToThePrevSlideDot(index) {
  slidersDot[index].classList.remove('slider__dot_active');
  slidersDot[index - 1].classList.add('slider__dot_active');
 }

 function switchToTheFirstSlideDot(index) {
  slidersDot[0].classList.add('slider__dot_active');
  slidersDot[index].classList.remove('slider__dot_active');
 }

 function switchToTheNextSlideDot(index) {
  slidersDot[index].classList.remove('slider__dot_active');
  slidersDot[index + 1].classList.add('slider__dot_active');
 }

function isTheFirstSlideDot(index) {
  return index == 0
}

function isTheLastSlideDot(index) {
  return index == slidersDot.length - 1
}

const slidersDot = document.querySelectorAll('.slider__dot');
slidersDot.forEach(sliderDot => {
  sliderDot.addEventListener('click', event => {
    
    const slidersDot = [...document.querySelectorAll('.slider__dot')];
    const activeSliderDot = slidersDot.indexOf(document.querySelector('.slider__dot_active'));

  })
})





