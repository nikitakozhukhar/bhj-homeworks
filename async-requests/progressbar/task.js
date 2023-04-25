// const progress = document.getElementById('progress');
progress.value = 0.0;

const xhr = new XMLHttpRequest();
const url = 'https://students.netoservices.ru/nestjs-backend/upload';

xhr.open('GET', url, true);

xhr.responseType = 'json'

xhr.upload.onprogress = function (event) {
	progress.value = 1;
	alert('Загружено на сервер ' + event.loaded + ' байт из ' + event.total);
}

xhr.onload = xhr.onerror = function () {
	if (this.status == 200) {
		console.log("success");
	} else {
		console.log("error " + this.status);
	}
};

xhr.send();