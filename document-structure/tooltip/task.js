document.onclick = e => {
	e.preventDefault();

	const title = e.target.getAttribute('title');


	// if (e.target.previousElementSibling.classList.contains('tooltip')) {
	// 	return
	// }

	if (e.target.classList.contains('has-tooltip')) {
		const tooltip = [...document.querySelectorAll('.tooltip')];
		tooltip.forEach(item => item.classList.remove('tooltip_active'));
	}

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