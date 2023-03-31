const links = document.querySelectorAll('.menu_main > .menu__item > .menu__link');
let activeNow = document.getElementsByTagName('ul');



for (let topLevelLink of links) {
	
let subMenu = topLevelLink.nextElementSibling;
	if (subMenu) {
		topLevelLink.addEventListener('click', event => {
		event.preventDefault();
		
		let activeMenu = document.querySelector('.menu_active');
		console.log(event.target.nextElementSibling)
		
		if(activeMenu) {
			// console.log(activeMenu)
			activeMenu.classList.toggle('menu_active')
		}
		
		if (subMenu.classList.contains('menu_active')) {
			
			subMenu.classList.remove('menu_active');
		}
		// if (event.target.nextElementSibling.classList.contains('menu_active')) {
		// 	event.target.nextElementSibling.classList.remove('menu_active')
		// }


		subMenu.classList.toggle('menu_active');
	
		// if (event.target.closest('.menu')) {
			// console.log(event.target.closest('.menu'))
			// subMenu.classList.remove('menu_active')
		// }
			
		})
	}
}
