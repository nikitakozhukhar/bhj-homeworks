let currentTimer = Number(document.getElementById('timer').textContent);

let date = new Date;

function countDown () {
	for (let currentTimer; currentTimer <= 0; currentTimer--) {
		
			alert('Вы победили в лотерее')
		
	}
	return currentTimer
}
let timerId = setInterval(countDown, 1000);
console.log(timerId)

let hours = date.getHours;
let minutes = date.getMinutes;
let seconds = date.getSeconds;
