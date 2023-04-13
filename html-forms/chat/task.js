const chatWidget = document.querySelector('.chat-widget');

chatWidget.addEventListener('click', () => {
  chatWidget.classList.add('chat-widget_active')
})

const input = document.getElementById('chat-widget__input');
const inputText = document.getElementById('chat-widget__input').value
console.log(inputText)

const messagesContainer = document.querySelector('.chat-widget__messages');


input.addEventListener('keydown', e => {
  if (e.key == 'Enter') {
    messagesContainer.innerHTML += `
  <div class="message message_client">
    <div class="message__time">${currentDate}</div>
    <div class="message__text">
      ${inputText}
    </div>
  </div>
`;
  }
})

  let currentDate = new Date().toLocaleTimeString().slice(0,-3);

	