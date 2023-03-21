let currentTimer = document.getElementById('timer').textContent;
console.log(currentTimer);

function countDown () {
	setTimeout(currentTimer, 1000);
	currentTimer--;
}

let timerId = setTimeout(countDown => currentTimer--, 1000, currentTimer);