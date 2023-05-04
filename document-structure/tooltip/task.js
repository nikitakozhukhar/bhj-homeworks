const hasTooltip = document.querySelectorAll('.has-tooltip');

hasTooltip.forEach(item => {

	let { top, left } = item.getBoundingClientRect();

	const createBlock = document.createElement('div');
	createBlock.className = 'tooltip';

	createBlock.innerText = item.getAttribute('title');
	createBlock.style.cssText = `
			z-index: 3;
			left: ${left}px; 
			top: ${top + 20}px;
		`

	item.append(createBlock);

	item.onclick = e => {
		e.preventDefault();

		const tooltip = e.target.children[0].classList;

		const isActive = tooltip.contains('tooltip_active');

		if (isActive) {
			return tooltip.remove('tooltip_active');
		}
		
		document.querySelector('.tooltip_active')?.classList.remove('tooltip_active');

		tooltip.add('tooltip_active');

	}
})
