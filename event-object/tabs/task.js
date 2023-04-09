const tabNavigation = [...document.querySelectorAll('.tab__navigation')];

const onClick = e => {
	const tab = e.target;
	if (tab.classList.contains('tab__navigation')) {
		return
	}
	if (tab.classList.contains('tab_active')) {
		return
	}
	const link = tab.closest('.tab__navigation');
	tab.classList.toggle('tab_active');
	[...link.querySelectorAll('.tab')]
    .filter(t => t !== tab)
    .forEach(t => t.classList.remove('tab_active'));

	const tabIndex = [...document.querySelectorAll('.tab')];

	const tabActiveIndex = tabIndex.indexOf(document.querySelector('.tab_active'));

	[...document.querySelectorAll('.tab__content')]
	.forEach((tab) => {
		tab.classList.remove('tab__content_active');
		const active = [...document.querySelectorAll('.tab__content')];
		active[tabActiveIndex].classList.add('tab__content_active')
	})
}

tabNavigation.forEach(tab => tab.addEventListener('click', onClick));