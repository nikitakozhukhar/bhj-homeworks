const tabNavigation = [...document.querySelectorAll('.tab')];
let indexOfActiveTab = 
tabNavigation.indexOf(document.querySelector('.tab_active'));


tabNavigation.forEach(tab => {
	tab.addEventListener('click', event => {
		
		if (event.target.closest('.tab__navigation')) {
			tab.classList.toggle('tab_active');
		}
		if (event.target.classList.contains('.tab_active'))
			tab.classList.remove('tab_active');
	})
})
console.log(indexOfActiveTab)
















// for (let tab of tabNav) {
// 	console.log()
// 	tab.addEventListener('click', function() {
		
// 	})
// }