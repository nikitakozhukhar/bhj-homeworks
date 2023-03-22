let currentTimer = Number(document.getElementById('timer').textContent);

/*
// Задача 1
function countDown() {

	document.getElementById('timer').textContent = currentTimer;
	currentTimer--;
	if (currentTimer == 0){
		clearInterval(timer);
		alert(`Вы победили в конкурсе!`)
	}
}

countDown();
const timer = setInterval(countDown, 1000);

// Задача 1 уроверь сложности #1
function countDown2() {
	let hours = addLeadingZero(00);
	let minutes = addLeadingZero(00);
	let seconds = addLeadingZero(+currentTimer);
	
	function addLeadingZero (t) {
      return (t < 10) ? '0' + t : t;
    }
	let time = `${hours}:${minutes}:${seconds}`;
	document.getElementById('timer').textContent = time;
	currentTimer--;
	if (currentTimer == 0){
		clearInterval(timer);
		alert(`Вы победили в конкурсе!`)
	}
	return time
}
countDown2();
const timer2 = setInterval(countDown2, 1000);
*/

// Задача 1 уроверь сложности #2
function countDown3() {
	let hours = addLeadingZero(00);
	let minutes = addLeadingZero(00);
	let seconds = addLeadingZero(+currentTimer);
	
	function addLeadingZero (t) {
      return (t < 10) ? '0' + t : t;
    }
	let time = `${hours}:${minutes}:${seconds}`;
	document.getElementById('timer').textContent = time;
	currentTimer--;
	if (currentTimer == 0){
		clearInterval(timer);
		window.location.replace('http://hello.kitty')
	}
	return time
}
countDown3();
const timer3 = setInterval(countDown3, 1000);