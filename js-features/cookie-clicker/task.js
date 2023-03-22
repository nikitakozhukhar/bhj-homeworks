let counter = Number(document.getElementById('clicker__counter').textContent)

let cookie = document.getElementById('cookie');
let date = new Date;


cookie.addEventListener('click', function() {
	counter++;
	document.getElementById('clicker__counter').textContent = counter;
	if (counter % 2 == 0 || counter == 0) {
		cookie.width = "200";
	} else {
		cookie.width = "300"
	}
})
