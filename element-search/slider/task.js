function switchToTheLastSlide(index) {
 sliderItems[sliderItems.length - 1].classList.add('slider__item_active');
 sliderItems[index].classList.remove('slider__item_active');
}

function switchToThePrevSlide(index) {
 sliderItems[index].classList.remove('slider__item_active');
 sliderItems[index - 1].classList.add('slider__item_active');
 index = index - 1;
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

/*---------------------------------------------------------------*/
/*В третьем задании, если хотите реализовать дополнительное задание, то управление слайдером стоит вынести в отдельную функцию. То есть, реализуйте отдельную функцию, которая будет управлять слайдером. Принимает число (позицию слайда, который необходимо активировать), а далее попробуйте следующий алгоритм:
1. Из массива слайдов, с помощью findIndex находите позицию активного слайда.
2. Деактивируйте слайд по полученной позиции. И точку по этой же позиции (у вас ведь у слайдов и у точек позиции должны совпадать).
3. Валидируйте полученное значение (для выставления нового слайда), чтобы позиция не уходила за пределы слайдера. Если позиция отрицательная, то высавляйте для последнего слайда (длина минус один). Если значение больше позиции последнего слайда (длина минус один....либо, больше, либо равно длине), то изменяйте значение (чтобы позиция не уходила за пределы слайдов)......Только не желательно переприваивать значение аргумента. Так что аргумент стоит пересохранить в отедльную переменную и манипулировать этой переменной.
4. Добавляйте класс активности для этой новой позиции.
Всё, функция готова. Попробуйте в консоли использовать её. Передавайте в неё определённые значения и смотрите, чтобы активировался слайд по переданной позиции.....Останется только использовать эту функцию в обработчиках событий....По кликам на точки просто вызывайте функцию и передавайте в неё эту позицию....По кликам на стрелки необходимо найти позицию активного слайда (с помощью того же findIndex) и в функицю передавайте соседнее значение (на 1 больше или меньше в зависимости от стрелки). Обработчик события получится реализованным всего в пару строк (нахождение позиции и вызов функции с нужным значением).*/


/*function switchToTheLastSlide(index) {
  sliderItems[sliderItems.length - 1].classList.add('slider__item_active');
  sliderItems[index].classList.remove('slider__item_active');

  sliderDots[sliderDots.length - 1].classList.add('slider__dot_active');
  sliderDots[index].classList.remove('slider__dot_active');
}

function switchToThePrevSlide(index) {
  sliderItems[index].classList.remove('slider__item_active');
  sliderItems[index - 1].classList.add('slider__item_active');

  sliderDots[index].classList.remove('slider__dot_active');
  sliderDots[index - 1].classList.add('slider__dot_active');
}

function switchToTheFirstSlide(index) {
  sliderItems[0].classList.add('slider__item_active');
  sliderItems[index].classList.remove('slider__item_active');

  sliderDots[0].classList.add('slider__dot_active');
  sliderDots[index].classList.remove('slider__dot_active');
}

function switchToTheNextSlide(index) {
  sliderItems[index].classList.remove('slider__item_active');
  sliderItems[index + 1].classList.add('slider__item_active');

  sliderDots[index].classList.remove('slider__dot_active');
  sliderDots[index + 1].classList.add('slider__dot_active');
}

function isTheFirstSlide(index) {
  return index == 0
}

function isTheLastSlide(index) {
  return ((index == sliderItems.length - 1) || (index == sliderDots.length - 1))
}*/

// Доработка
// const sliderArrows = document.querySelectorAll('.slider__arrow');
// const prev = document.querySelector('.slider__arrow_prev');
// const next = document.querySelector('.slider__arrow_next');
// const dot = document.querySelector('.slider__dot');
// const sliderItems = [...document.querySelectorAll('.slider__item')];
// const sliderDots = [...document.querySelectorAll('.slider__dot')];
// let activeIndex = sliderItems.findIndex(item => item.classList.contains('slider__item_active'));
// sliderDots[activeIndex].classList.add('slider__dot_active');
// let activeSlide = activeIndex;

/*----- */
// function changeSlide(event) {
  // 1
//   let activeIndex = sliderItems.findIndex(item => item.classList.contains('slider__item_active'));
  
//   if (activeIndex == 0 && event.target !== next) {
//     sliderItems[activeIndex].classList.remove('slider__item_active');
//     sliderDots[activeIndex].classList.remove('slider__dot_active');

//     sliderItems[sliderItems.length - 1].classList.add('slider__item_active');
//     sliderDots[sliderDots.length - 1].classList.add('slider__dot_active');
//     return
//   }

//   if (event.target == prev) {
//     sliderItems[activeIndex].classList.remove('slider__item_active');
//     sliderItems[activeIndex - 1 ].classList.add('slider__item_active');

//     sliderDots[activeIndex].classList.remove('slider__dot_active');
//     sliderDots[activeIndex - 1 ].classList.add('slider__dot_active');
//   }

//   if (event.target == next) {
//     sliderItems[activeIndex].classList.remove('slider__item_active');
//     sliderItems[activeIndex + 1].classList.add('slider__item_active');

//     sliderDots[activeIndex].classList.remove('slider__dot_active');
//     sliderDots[activeIndex + 1 ].classList.add('slider__dot_active');
//     activeIndex = activeIndex + 1;
//   }

//   if (event.target == next && activeIndex == sliderItems.length - 1) {
//     sliderItems[0].classList.add('slider__item_active');
//     sliderDots[0].classList.add('slider__dot_active');
//   }
   
//     console.log(`index in the func ${activeIndex}`)
   
//   return
// }
// console.log(`index out of func ${activeIndex}`)


// sliderArrows.forEach(arrow => arrow.addEventListener('click', changeSlide(activeIndex)))
// Добатобка сверху


// sliderArrows.forEach(arrow => arrow.addEventListener('click', event => {
//   changeSlide(event);
//   console.log()
// }))

// sliderDots.forEach(dot => dot.addEventListener('click', event => {
//   const dot = [...document.querySelectorAll('.slider__dot')];
//   let index = dot.findIndex(item => item.classList.contains('slider__dot_active'))
//   console.log(event.target[index])
// }))

// changeSlide(activeIndex);

/*--------- */
/*sliderArrow.forEach(elem => elem.addEventListener('click', event => {

  let activeIndex = sliderItems.findIndex(item => item.classList.contains('slider__item_active'))
  console.log(activeIndex)
  // const activeSliderIndex = sliderItems.indexOf(document.querySelector('.slider__item_active'));
  if (event.target == prev) {
    isTheFirstSlide(activeIndex)
      ? switchToTheLastSlide(activeIndex)
      : switchToThePrevSlide(activeIndex)
  } else {
    isTheLastSlide(activeIndex)
      ? switchToTheFirstSlide(activeIndex)
      : switchToTheNextSlide(activeIndex)
  }
}));*/


/*const sliderItems = [...document.querySelectorAll('.slider__item')];

const sliderDots = [...document.querySelectorAll('.slider__dot')]

let activeIndex = sliderItems.findIndex(item => item.classList.contains('slider__item_active'))

function changeSlide(index) {

  function removeSlide(index) {
    sliderItems.forEach(item => item.classList.remove('slider__item_active'));
    sliderDots.forEach(item => item.classList.remove('slider__dot_active'));

    if (index > sliderItems.length - 1) {
      sliderItems[0].classList.toggle('slider__item_active');
      sliderDots[0].classList.toggle('slider__dot_active');
    }
  }
  removeSlide(activeIndex);

}*/

// changeSlide(activeIndex)
/*---------------------------------------------------------------*/