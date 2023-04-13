const interestCheck = document.querySelector('.interest__check');

const checkbox = [...document.getElementsByTagName('input')];


for (check of checkbox) {
	check.addEventListener('change', event => {
		console.log(event.target.checked);
		if (check.checked) {
			check.closest('label').checked;
		}
		
	})
}
// checkbox.forEach(element => {
// 	element.addEventListener('change', event => {
// 		console.log(event.target.checked);
// 		if (element.checked) {
// 			element.closest('label').checked;
// 		}
		
// 	})
// });

