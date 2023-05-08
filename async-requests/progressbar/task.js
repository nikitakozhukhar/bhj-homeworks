const progress = document.getElementById('progress');
const sendBtn = document.getElementById('send');
progress.value = 0.0;

const xhr = new XMLHttpRequest();
const url = 'https://students.netoservices.ru/nestjs-backend/upload';

xhr.open('GET', url, true);

xhr.responseType = 'json'

xhr.upload = function (event) {
	sendBtn.addEventListener('submit', e => {
		e.preventDefault();
	})
	
	progress.value++;
	console.log(file)
	alert('Загружено на сервер ' + event.loaded + ' байт из ' + event.total);
}

xhr.onload = xhr.onerror = function (event) {
	if (this.status == 200) {
		console.log('success');
	} else {
		console.log('error ' + this.status);
	}
};

xhr.send();