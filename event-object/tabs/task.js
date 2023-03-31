//Массив элементов менюшек навигации
const tabNavigation = [...document.querySelectorAll('.tab')];
//Получаем индекс активной менюшки навигации
let indexOfActiveTab = 
tabNavigation.indexOf(document.querySelector('.tab_active'));

//Массив элементов контента
const tabContent = [...document.querySelectorAll('.tab__content')];

function switchToTheNextTab(index) {
	tabNavigation[index].classList.remove('tab_active');
	tabNavigation[index + 1].classList.add('tab_active');
}

tabNavigation.forEach(tab => {
	tab.addEventListener('click', event => {
		console.log(tabNavigation.indexOf(event.currentTarget))
		console.log(indexOfActiveTab)
		event.currentTarget.classList.add('tab_active');

		if(tabNavigation.indexOf(event.currentTarget) == 1) {
			tabContent[0].classList.remove('tab__content_active')
			tabContent[1].classList.add('tab__content_active');
		}
		// if (event.target.closest('.tab__navigation')) {
		// 	console.log(indexOfActiveTab)
		// 	switchToTheNextTab(indexOfActiveTab)
		// }
		
		// if (event.target.classList.contains('.tab_active'))
			// tab.classList.remove('tab_active');
	})
})
// console.log(indexOfActiveTab)
















// for (let tab of tabNav) {
// 	console.log()
// 	tab.addEventListener('click', function() {
		
// 	})
// }