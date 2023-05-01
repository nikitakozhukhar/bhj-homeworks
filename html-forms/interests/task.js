const interestCheck = document.querySelectorAll('.interest__check')

// const interest = document.querySelectorAll('.interest');

// const childrenInterest = document.querySelectorAll('.interests>.interest');

// const childs = document.querySelectorAll('.interests_active .interest')


interestCheck.forEach(item => item.addEventListener('click', e => {
	let isChecked;
	if (e.target.checked === true) {
		isChecked = true
	} else {
		isChecked = false
	}

	if (isChecked) {
		interestCheck.forEach(item => item.checked = isChecked)
		
	} else {
		interestCheck.forEach(item => console.log(item.checked = isChecked))
	}
}))