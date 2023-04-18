// const tooltip = document.querySelectorAll('.has-tooltip');


// tooltip.forEach(item => item.addEventListener(('click'), e => {
	
// 	e.preventDefault();
// 	console.log(item)
// 	e.target.classList.add('tooltip_active');
// 	const title = e.target.getAttribute('title');
// 	e.target.innerHTML = `<div class="tooltip" style="left: 0; top: 0; position: relative; display: block">
// 	${title}
//   </div>`
// }))

document.onclick = e => {
	e.preventDefault();
	const tooltip = document.querySelectorAll('.has-tooltip');
	const title = e.target.getAttribute('title');
	
	// e.target.classList.add('tooltip_active');
	if (e.target.classList.contains('has-tooltip')) {

		let { top, left } = e.target.getBoundingClientRect();
		
		e.target.innerHTML = `
		<div class="tooltip tooltip_active" 
		style="
		z-index: 3;
		left: ${left}px; 
		top: ${top + 20}px;
		">
			${title}
	  	</div>`;
	}
	

}