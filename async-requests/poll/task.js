let xhr = new XMLHttpRequest();


xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll', true);

xhr.addEventListener('readystatechange', () => {
  if (xhr.readyState === xhr.DONE) {
    
  }
})

xhr.responseType = 'json'

xhr.onload = () => {
console.log(xhr.response.data.title)
}


xhr.send();