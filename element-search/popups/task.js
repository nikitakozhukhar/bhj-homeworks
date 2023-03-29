const modalMain = document.getElementById('modal_main');
modalMain.classList.add('modal_active');

const showSuccess = document.querySelector('.show-success');

const modalSuccess = document.getElementById('modal_success');

showSuccess.addEventListener('click', function() {
	modalMain.classList.remove('modal_active');
	modalSuccess.classList.add('modal_active');
})

const modalClose = document.querySelectorAll('.modal__close');

modalClose.forEach(elem => {
	elem.addEventListener('click', function() {
		if (elem.classList.contains('modal__close' && 'modal__close_times')) {
			modalMain.classList.remove('modal_active')
			modalSuccess.classList.remove('modal_active');
		}
	})
})

