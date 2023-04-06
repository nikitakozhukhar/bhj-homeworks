const fontSize = document.querySelectorAll('.font-size');
const book = document.getElementById('book')

function onClick(event) {
	
	fontSize.forEach(item => item.classList.remove('font-size_active'));
	event.target.classList.add('font-size_active')

	let smallFontSize = event.target.classList.contains('font-size_small')
	let bigFontSize = event.target.classList.contains('font-size_big');

	if (smallFontSize) {
		book.classList.remove('book_fs-big')
		book.classList.add('book_fs-small')
	}

	if (bigFontSize) {
		book.classList.remove('book_fs-small')
		book.classList.toggle('book_fs-big')
	} 
	 if (!bigFontSize && !smallFontSize) {
		 book.classList.remove('book_fs-small');
		 book.classList.remove('book_fs-big')
	 }
	
	event.preventDefault()
}

fontSize.forEach(item => item.addEventListener('click', onClick))
