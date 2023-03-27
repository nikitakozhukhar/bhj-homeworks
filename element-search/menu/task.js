const links = document.querySelectorAll('.menu_main > .menu__item > .menu__link');
const menu = document.getElementsByClassName('menu');
const item = document.getElementsByClassName('menu__item');
const sub = document.querySelector('.menu')

for (let topLevelLink of links) {
	let subMenu = topLevelLink.nextElementSibling;
	console.log(subMenu)
	if (subMenu) {
		topLevelLink.addEventListener('click', event => {
		event.preventDefault();
		console.log(event.target)
		let activeMenu = document.querySelector('.menu_active')
			if(activeMenu) {
				activeMenu.classList.remove('menu_active')
			}
		subMenu.classList.toggle('menu_active');
		})
	}
}

