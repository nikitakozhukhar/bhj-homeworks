function switchRotator() {
	const active = document.querySelector('.rotator__case_active');
	const parentRotator = document.querySelector('.rotator');

	if (!active.nextElementSibling) {
		parentRotator.firstElementChild.classList.add('rotator__case_active');
		parentRotator.lastElementChild.classList.remove('rotator__case_active');
	} else {
		active.classList.remove('rotator__case_active');
		active.nextElementSibling.classList.add('rotator__case_active');
	}
}

let rotatorInterval = setInterval(switchRotator, 1000)
