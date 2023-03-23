const modalMain = document.getElementById('modal_main');
modalMain.style.display = 'block';

// const modalClose = document.querySelector('.modal__close');
// console.log(modalClose)


const showSuccess = document.querySelector('.show-success');
const modalSuccess = document.getElementById('modal_success')


// modalClose.addEventListener('click', function() {
// 	modalMain.style.display = 'none';
	
// })

showSuccess.addEventListener('click', function() {
	modalSuccess.style.display = 'block';
})



// const modals = document.querySelectorAll('.modal');
// for (let i = 0; i < modals.length; i++) {
// 	modals[0].style.display = 'block';
// }


const modalsClose = document.querySelectorAll('.modal__close');

for (let i = 0; i < modalsClose.length; i++) {
	modalsClose[i].addEventListener('click', function(){
			for (let i = 0; i < modals.length; i++) {
			modalsClose[i].style.display = 'none';
		}
	})
}
