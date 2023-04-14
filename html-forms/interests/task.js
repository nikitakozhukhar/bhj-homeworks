const interestCheck = document.querySelector('.interest');

const childrenInterest = document.querySelectorAll('.interests>.interest');

console.log(childrenInterest)


childrenInterest.forEach(item => item.addEventListener('change', event => {
	// console.log(event.currentTarget);
	if (event.target.classList.contains('interest__check')) {
		console.log(item.closest('interest'))
		// item.closest('interest').checked = true
		// childrenInterest.checked = true;
			
	}	
}))

// checkbox.forEach(element => {
// 	element.addEventListener('change', event => {
// 		console.log(event.target.checked);
// 		if (element.checked) {
// 			element.closest('label').checked;
// 		}
		
// 	})
// });

