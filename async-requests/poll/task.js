const xhr = new XMLHttpRequest();
const title = document.querySelector('.poll__title');
const answers = document.querySelector('.poll__answers');

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll', true);

xhr.responseType = 'json'

xhr.onload = () => {
  const resposeTitle = xhr.response.data.title;
  title.innerText = resposeTitle;
  
  const responseAnswers = xhr.response.data.answers;

  for (let i = 0; i < responseAnswers.length; i++ ) {
    const btnAnswer = document.createElement('button');
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