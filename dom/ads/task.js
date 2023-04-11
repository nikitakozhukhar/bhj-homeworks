const rotator = [...document.querySelectorAll('.rotator__case')];
const active = document.querySelector('.rotator__case_active')
// const rotatorActiveIndex = rotator.findIndex(item => item.classList.contains('rotator__case_active'));
const parenRotator = document.querySelector('.rotator')
let i = 0;

function switchRotator() {
	// console.log(active)
	active.classList.remove('rotator__case_active');
	active.nextElementSibling.classList.add('rotator__case_active');

	if (!active.nextElementSibling) {
		parenRotator.firstElementChild.classList.add('rotator__case_active')
	}


	// Рабочий код
	/*if (i === rotator.length) {
		i = 0;
	}
	
	rotator[i].classList.remove('rotator__case_active');
	i = (i + 1) % rotator.length;
	rotator[i].classList.add('rotator__case_active');*/
}

let rotatorInterval = setInterval(switchRotator, 1000)
