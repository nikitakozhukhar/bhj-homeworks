document.onclick = e => {
	e.preventDefault();

	const tooltip = document.querySelectorAll('.tooltip');

	const title = e.target.getAttribute('title');

	tooltip.forEach(item => {
		if(item.classList.contains('.tooltip_active')){
			item.classList.remoove('.tooltip_active')
		}
	})

	if (e.target.classList.contains('has-tooltip')) {

		let { top, left } = e.target.getBoundingClientRect();

		const createBlock = document.createElement('div');
		createBlock.className = 'tooltip tooltip_active';
		createBlock.innerText = title;
		createBlock.style.cssText = `
			z-index: 3;
			left: ${left}px; 
			top: ${top + 20}px;
		`
		e.target.insertAdjacentElement('beforebegin', createBlock);
	}	
}