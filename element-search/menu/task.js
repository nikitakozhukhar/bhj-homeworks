const menuLinks = [...document.querySelectorAll('.menu__link')]

const onClick = event => {
	
	
	const link = event.target;
	const item = link.closest('.menu__item');
	
	const subMenu = item.querySelector('.menu_sub');
	if (!subMenu) {
		return
	}
	subMenu.classList.toggle('menu_active');
	const mainMenu = item.closest('.menu_main');
  const restMenus = [...mainMenu.querySelectorAll('.menu')]
    .filter(m => m !== subMenu)
    .forEach(m => m.classList.remove('menu_active'));
	
		event.preventDefault();
}

menuLinks.forEach(link => link.addEventListener('click', onClick));
	



