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
	// const tooltip = document.querySelectorAll('.has-tooltip');
	const title = e.target.getAttribute('title');
	
	// e.target.classList.add('tooltip_active');
	console.log(title)
	if (e.target.classList.contains('has-tooltip')) {
		
		// tooltip.innerHTML = `
		// <div class="tooltip" 
		// style="
		// left: 0; 
		// top: 0; 
		// display: block
		// ">
		// 	${title}
	  	// </div>`;
	}
	

}