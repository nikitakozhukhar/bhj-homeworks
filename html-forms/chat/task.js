const chatWidget = document.querySelector('.chat-widget');

chatWidget.addEventListener('click', e => {
  chatWidget.classList.add('chat-widget_active')
})

const input = document.querySelector('.chat-widget__input');
const messagesContainer = document.querySelector('.chat-widget__messages');


input.addEventListener('keydown', e => {
  if (e.key == 'Enter') {
    messagesContainer.innerHTML += `
  <div class="message">
    <div class="message__time">09:21</div>
    <div class="message__text">
      ${input}
    </div>
  </div>
`;
  }
})