const modal = document.getElementById('subscribe-modal');
modal.classList.add('modal_active');


const modalClose = document.querySelector('.modal__close');


modalClose.addEventListener('click', function () {
  modal.classList.remove('modal_active');
  document.cookie = 'модалка закрыта';
  
})

if (document.cookie) {
  modal.classList.remove('modal_active');
} else {
  console.log('empty')
}
// console.log(document.cookie)