/*const menuLink = document.querySelectorAll('.menu__link');
function clickMenu() {
	const menuSub = document.querySelector('.menu_sub');
};
for (let menu of menuLink) {
	menu.addEventListener('click', clickMenu)
}
// console.log(menuLink)


const link = document.querySelector('.menu__item');
const parentA = link.closest('.menu');
console.log(parentA)*/

const menuLink = document.getElementsByClassName('menu__link');
for (let menu_link of menuLink) {
	let menu = menu_link.closest('.menu');
	if (menu.classList.contains('menu_sub')) {
		menu.classList.add('menu_active')
	}

	menu_link.addEventListener('click', function() {
		
	})
}

const menu = document.getElementsByClassName('menu');
// console.log(menu);
// const item = document.querySelector('.menu__item');
const item = document.getElementsByClassName('menu__item');
for (let menu__item of item) {
	let menu_sub = menu__item.closest('.menu_sub');
	function addMenuActive() {
		menu_sub.classList.add('menu_active')
	}

	// console.log(menu__item)
	// console.log(menu__item.closest('.menu'))
}
// const itemClosest = item.closest('.menu_sub')
// console.log(item);



// const parent = item.closest('.menu')
// if (parent) {
	
// }