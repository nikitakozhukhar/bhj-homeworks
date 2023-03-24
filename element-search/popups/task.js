const modalMain = document.getElementById('modal_main');
modalMain.style.display = 'block';

const showSuccess = document.querySelector('.show-success');
const modalSuccess = document.getElementById('modal_success')


showSuccess.addEventListener('click', function() {
	modalSuccess.style.display = 'block';
})


const modalClose = document.querySelector('.modal__close');
console.log(modalClose)

function closeModals() {
	const modalsClose = document.querySelectorAll('.modal');
	for (let i = 0; i < modalsClose.length; i++) {
		modalsClose[i].style.display = 'none';
	}
}

modalClose.addEventListener('click', closeModals)

