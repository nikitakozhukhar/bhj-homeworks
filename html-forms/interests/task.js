const interestCheck = document.querySelectorAll('.interest__check');

interestCheck.forEach(item => item.addEventListener('click', e => {
	let isChecked;
	let currentElement = e.target.closest('.interest');
	let children = currentElement.querySelectorAll('.interest__check');

	if (e.target.checked) {
		isChecked = true
	} else {
		isChecked = false
	}

	children.forEach(item => item.checked = isChecked)
}))
