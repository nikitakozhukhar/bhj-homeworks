const progress = document.getElementById('progress');
progress.value = 0.7;

const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/upload', true);

xhr.responseType = 'json'

xhr.upload.onprogress = function (event) {

	console.log(this.loaded);
	console.log(this.total);
	// alert('Загружено на сервер ' + event.loaded + ' байт из ' + event.total);
}

xhr.onload = xhr.onerror = function () {
	if (this.status == 200) {
		console.log("success");
	} else {
		console.log("error " + this.status);
	}
};

xhr.send();

// xhr.onload = event => {
// 	console.log(xhr.response)
// }

// xhr.send();