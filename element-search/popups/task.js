const modalMain = document.getElementById('modal_main');
modalMain.style.display = 'block';


const showSuccess = document.querySelector('.show-success');
const modalSuccess = document.getElementById('modal_success');

const modalClose = document.querySelectorAll('.modal__close');

for (let close of modalClose) {
	modalClose.forEach(elem => {
		elem.addEventListener('click', function() {
			modalMain.style.display = 'none';
			modalSuccess.style.display = 'none'
		})
	})
	console.log(close)
}

showSuccess.addEventListener('click', function() {
	modalSuccess.style.display = 'block';
})