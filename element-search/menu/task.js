const links = document.querySelectorAll('.menu_main > .menu__item > .menu__link');
let activeNow = document.querySelectorAll('.menu_sub');
// console.log(activeNow)
/*function isActiveNow() {
	let activeNow = document.querySelector('.menu_main > .menu__item > menu_active')
	if (activeNow) {
		subMenu.classList.remove('menu_active');
	}
	return
} */
// const menu = document.getElementsByClassName('menu');
// console.log(menu)
// const item = document.getElementsByClassName('menu__item');
// const sub = document.querySelector('.menu')

for (let topLevelLink of links) {
	
let subMenu = topLevelLink.nextElementSibling;
	// console.log(subMenu)
	if (subMenu) {
		topLevelLink.addEventListener('click', event => {
		event.preventDefault();
		let activeMenu = document.querySelector('.menu_active');
		// console.log(activeMenu);
			if(activeMenu) {
				activeMenu.classList.remove('menu_active')
			}
			
			
			// console.log(subMenu.classList.contains('.menu_active'))
			// if (subMenu.classList.contains('menu_active')) {
			// 	console.log('click on active menu')
			// }
			
			/*
			for (let nowActive of activeNow) {
				if (nowActive.classList.contains('menu_active')) {
					console.log('click on active')
					nowActive.classList.remove('menu_active')
				}
				console.log(nowActive.classList.value)
			}*/
		subMenu.classList.toggle('menu_active');
		/*for (let nowActive of activeNow) {
			if (nowActive.classList.contains('menu_active')) {
				nowActive.classList.remove('menu_active')
			
			// console.log(nowActive.classList.contains('menu_active'))
		}*/
		})
	}
}


