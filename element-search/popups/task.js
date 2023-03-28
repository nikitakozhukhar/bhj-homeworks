const modalMain = document.getElementById('modal_main');
modalMain.style.display = 'block';

const showSuccess = document.querySelector('.show-success');

showSuccess.addEventListener('click', function() {
	modalSuccess.style.display = 'block';
})
const modalSuccess = document.getElementById('modal_success');

const modalClose = document.querySelectorAll('.modal__close');

modalClose.forEach(elem => {
	elem.addEventListener('click', function() {
		modalMain.style.display = 'none';
		modalSuccess.style.display = 'none'
	})
})

