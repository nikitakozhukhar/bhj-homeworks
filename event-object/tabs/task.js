/*//Массив элементов менюшек навигации
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
// console.log(indexOfActiveTab)*/
const tabNavigation = [...document.querySelectorAll('.tab__navigation')];
const tabContent = [...document.querySelectorAll('.tab__content')];

const onClick = e => {
	const tab = e.target;

	const link = tab.closest('.tab__navigation');
	tab.classList.toggle('tab_active');
	const restTab = [...link.querySelectorAll('.tab')]
    .filter(t => t !== tab)
    .forEach(t => t.classList.remove('tab_active'));
	
	


for (let i = 0; i < tabNavigation.length; i++) {
	for (let j = 0; j < tabContent.length; j++) {
		if (tabNavigation[i].classList.contains('tab_active')) {
			tabContent[j].classList.toggle('tab__content_active')
		}
	}
}
	console.log(restTab)
}


tabNavigation.forEach(tab => tab.addEventListener('click', onClick));















// for (let tab of tabNav) {
// 	console.log()
// 	tab.addEventListener('click', function() {
		
// 	})
// }