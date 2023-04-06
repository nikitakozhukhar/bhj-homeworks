const rotator = [...document.querySelectorAll('.rotator__case')];
const rotatorActiveIndex = rotator.findIndex(item => item.classList.contains('rotator__case_active'));

let i = 0;

function switchRotator() {
	if (i === rotator.length) {
		i = 0;
	}
	
	rotator[i].classList.remove('rotator__case_active');
	i = (i + 1) % rotator.length;
	rotator[i].classList.add('rotator__case_active');
}

let rotatorInterval = setInterval(switchRotator, 1000)
