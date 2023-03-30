let dropdownList = document.querySelector('.dropdown__list');
let dropdownItems = document.querySelectorAll('.dropdown__item');
let dropdownValue = document.querySelector('.dropdown__value')

document.addEventListener('click', menu);

function menu(event) {
	event.preventDefault();
	if (event.target.closest('.dropdown__value')) {
		dropdownList.classList.toggle('dropdown__list_active');
	}
	if (!event.target.closest('.dropdown')) {
		dropdownList.classList.remove('dropdown__list_active');
	}
}

dropdownItems.forEach(dropItem => {
	dropItem.addEventListener('click', event => {
		dropdownValue.textContent = event.target.textContent;
		dropdownList.classList.remove('dropdown__list_active');
	})
})



