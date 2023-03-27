const link = document.querySelectorAll('.menu__link');
const menu = document.getElementsByClassName('menu');
const item = document.getElementsByClassName('menu__item');
const sub = document.querySelector('.menu')



// console.log(link)

for (let item of link) {
	// console.log(item.nextElementSibling)
	
	if (item.nextElementSibling != null) {
		let arr = [];
		arr.push(item.nextElementSibling);
		console.log(arr)
	}
	item.addEventListener('click', () => {
		for (let elem of link) {
			if (elem.nextElementSibling.contains('menu')) {
				console.log(elem)
				// elem.classList.add('menu_sub')
				// elem.nextElementSibling.classList.add('menu_active')
				// console.log(elem.nextElementSibling)
			}
			
		}
		// sub.classList.add('.menu_active')
	})
		// if (item.querySelector('.menu')) {
		// 	for (let itemMenu of menu) {
		// 		itemMenu.classList.add('.menu_active')
		// 	}
		// }
		// return false
	
}

