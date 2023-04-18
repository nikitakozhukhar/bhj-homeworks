const taskInput = document.getElementById('task__input');
const taskList = document.querySelector('.tasks__list');

taskInput.addEventListener('keydown', e => {

const text = document.getElementById('task__input').value;

if (e.key == 'Enter' && text) {

	taskList.innerHTML = `
	<div class="task">
		<div class="task__title">
			${text}
		</div>
		<a href="#" class="task__remove">&times;</a>
	</div>
	`
	e.preventDefault();
}
})

document.onclick = e => {
	if (e.target.classList.contains('task__remove')) {
		taskList.remove();
	}
}