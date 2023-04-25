const interestCheck = document.querySelectorAll('.interest__check')

const interest = document.querySelectorAll('.interest');

const childrenInterest = document.querySelectorAll('.interests>.interest');

const childs = document.querySelectorAll('.interests_active .interest')


interestCheck.forEach(item => item.addEventListener('change', event => {
	
	if (event.currentTarget.checked == true && event.currentTarget.closest('.interest')) {
		
		childrenInterest.forEach(child => {
			child.checked = true
		})
	}
}))


