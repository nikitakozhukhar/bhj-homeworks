let dead = document.getElementById('dead').textContent;
let lost = document.getElementById('lost').textContent;

let holeArr = document.querySelectorAll('.hole');

for (let hole of holeArr) {
	hole.addEventListener('click', function() {
		if (hole.classList.contains('hole_has-mole')) {
			document.getElementById('dead').textContent = 1 + dead++;
		} else {
			document.getElementById('lost').textContent = 1 + lost++;
		}

		if (document.getElementById('dead').textContent == 10) {

			alert('Поздравляю Вы победили крота');

			document.getElementById('dead').textContent = 0;
			lost = document.getElementById('lost').textContent = 0;
			
		} else if (document.getElementById('lost').textContent == 5) {

			alert('К сожалению крот Вас уделал((');

			document.getElementById('dead').textContent = 0;
			lost = document.getElementById('lost').textContent = 0;
		}
	})
}