const interestCheck = document.querySelector('.interest__check');

interestCheck.addEventListener('change', () => {
	if (interestCheck.checked) {
		interestCheck.closest('input').checked = true
	}
	
})