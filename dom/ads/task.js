const rotator = [...document.querySelectorAll('.rotator__case')];
const active = document.querySelector('.rotator__case_active')
const rotatorActiveIndex = rotator.findIndex(item => item.classList.contains('rotator__case_active'));

let i = 0;
console.log(active.previousElementSibling)

function switchRotator() {
	
	// active.nextElementSibling.classList.add('rotator__case_active');
	console.log(active);
	// active.previousElementSibling.classList.remove('rotator__case_active');
	// if ()


	/*if (i === rotator.length) {
		i = 0;
	}
	
	rotator[i].classList.remove('rotator__case_active');
	i = (i + 1) % rotator.length;
	rotator[i].classList.add('rotator__case_active');*/
}

let rotatorInterval = setInterval(switchRotator, 1000)
