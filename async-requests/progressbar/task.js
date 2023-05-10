const progress = document.getElementById('progress');
const sendBtn = document.getElementById('send');

const form = document.getElementById('form');
progress.value = 0.0;



const url = 'https://students.netoservices.ru/nestjs-backend/upload';

form.addEventListener('submit', e => {
	e.preventDefault();

	const xhr = new XMLHttpRequest();
	xhr.responseType = 'blob'

	const file = document.getElementById('file');
	let sendFile = file.files[0];

	// xhr.addEventListener('progress', e => {

	// 	alert('Загружено на сервер ' + e.loaded + ' байт из ' + e.total);
	// 	console.log(file.files[0].size)
		
	// 	console.log(e)
	// })
	
	xhr.addEventListener('readystatechange', e => {
		console.log(e)
		// while (true) {
			if (xhr.readyState == 4) {
				// break
			// }
			xhr.onprogress = event => {
				console.log(event)
			}
		}
		
		
		console.log(xhr)

	})
	xhr.open('POST', url, true);

	xhr.send(sendFile);
})






// xhr.upload = function (event) {
// 	sendBtn.addEventListener('click', e => {
// 		e.preventDefault();
// 	})
	
// 	progress.value++;
// 	console.log(file)
// 	alert('Загружено на сервер ' + event.loaded + ' байт из ' + event.total);
// }

// xhr.onload = xhr.onerror = function (event) {
// 	if (this.status < 400) {
// 		console.log('success');
// 	} else {
// 		console.log('error ' + this.status);
// 	}
// };

