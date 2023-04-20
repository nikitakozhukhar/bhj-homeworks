let xhr = new XMLHttpRequest();
const title = document.querySelector('.poll__title');
const answers = document.querySelector('.poll__answers');

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll', true);

// xhr.addEventListener('readystatechange', () => {
//   if (xhr.readyState === xhr.DONE) {

//   }
// })

xhr.responseType = 'json'

xhr.onload = () => {
  let resposeTitle = xhr.response.data.title;
  title.innerText = resposeTitle;
  

  let responseAnswers = xhr.response.data.answers;

  for (let i = 0; i < responseAnswers.length; i++ ) {
    let btnAnswer = document.createElement('button');
    btnAnswer.className = 'poll__answer';
    btnAnswer.innerText += responseAnswers[i];
    
    answers.append(btnAnswer)
    }
}
document.addEventListener('click', e => {
  if (e.target.classList.contains('poll__answer')) {
    alert('Спасибо, ваш голос засчитан!')
  }
})
xhr.send();