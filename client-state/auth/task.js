const url = 'https://students.netoservices.ru/nestjs-backend/auth';
const xhr = new XMLHttpRequest();

xhr.open('POST', url, true);

xhr.responseType = 'json'

xhr.onload = xhr.onerror = function (event) {
	if (this.status == 200) {
		console.log('success');
	} else {
		console.log('error ' + this.status);
	}
}

xhr.send();