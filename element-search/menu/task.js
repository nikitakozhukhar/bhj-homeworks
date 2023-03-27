const link = document.querySelectorAll('.menu__link');
const menu = document.getElementsByClassName('menu');
const item = document.getElementsByClassName('menu__item');
const sub = document.querySelector('.menu')

for (let elem of link) {
	if (elem.nextElementSibling) {
		elem.classList.add('menu_active')
		// console.log(elem.nextElementSibling)
	}
	
}

// console.log(link)

for (let item of link) {
	// console.log(item)
	item.addEventListener('click', () => {
		
		// sub.classList.add('.menu_active')
	})
		// if (item.querySelector('.menu')) {
		// 	for (let itemMenu of menu) {
		// 		itemMenu.classList.add('.menu_active')
		// 	}
		// }
		// return false
	
}

/*menuLink.forEach(elem => {
	elem.addEventListener('click', function() {
		// if (elem.contains('.menu')) {
			console.log('Menu was found')
		// 	elem.classList.add('menu_active');
		// }
	})
})*/


for (let menu__item of item) {
	let menu_sub = menu__item.closest('.menu_sub');
	function addMenuActive() {
		menu_sub.classList.add('menu_active')
	}
}


/*const link = document.getElementsByClassName(‘menu__link’);
const menu = document.getElementsByClassName(‘menu’);
const item = document.getElementsByClassName(‘menu__item’);

for (let index = 0; index <= link.length - 1; index++) {
link[index].onclick = () => {
if (item[index].querySelector(’.menu’)) {
menu[index].classList.add(‘menu_active’);
return false;
}
}
}*/