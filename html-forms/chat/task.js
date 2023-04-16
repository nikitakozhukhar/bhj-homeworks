const chatWidget = document.querySelector('.chat-widget');

chatWidget.addEventListener('click', () => {
  chatWidget.classList.add('chat-widget_active')
})

const input = document.getElementById('chat-widget__input');

const messagesContainer = document.querySelector('.chat-widget__messages');




input.addEventListener('keydown', e => {
  const botAnswerContainer = [
    'Ну привет',
    'Тебе продавать ничего не хотим',
    'Да просто некайф',
    'Без объяснения причины',
    'Шефа? Сейчас позову, а нет, никакого тебе шефа',
    'Все давай короче, мне надо отдохнуть'
  ];
  let botAnswerContainerSize = botAnswerContainer.length;
  let botText = botAnswerContainer[Math.floor(Math.random() * botAnswerContainerSize)];

  if (e.key == 'Enter') {
    let inputText = document.getElementById('chat-widget__input').value
    messagesContainer.innerHTML += `
      <div class="message message_client">
        <div class="message__time">${currentDate}</div>
        <div class="message__text">
          ${inputText}
        </div>
      </div>
      `;

      messagesContainer.innerHTML += `
      <div class="message message_bot">
        <div class="message__time">${currentDate}</div>
        <div class="message__text">
          ${botText}
        </div>
      </div>
      `;
  }

})

  let currentDate = new Date().toLocaleTimeString().slice(0,-3);

	